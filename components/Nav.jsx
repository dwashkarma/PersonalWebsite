"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const links = [
  { name: "About", path: "about" },
  { name: "Projects", path: "projects" },
  { name: "Blogs", path: "blogs" },
  { name: "Contact", path: "contact" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  const controlNavbar = useCallback(() => {
    if (typeof window === "undefined") return;

    const currentScrollY = window.scrollY;
    const scrollingUp = currentScrollY < lastScrollY;
    const atTop = currentScrollY < 50;
    const scrollDelta = Math.abs(currentScrollY - lastScrollY);

    // Only trigger hide/show for significant scroll amounts
    if (scrollDelta > 10) {
      if (scrollingUp || atTop) {
        setVisible(true);
      } else {
        setVisible(false);
        // Close mobile menu when scrolling down
        setOpen(false);
      }
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId;
    const handleScroll = () => {
      // Debounce the scroll event
      clearTimeout(timeoutId);
      timeoutId = setTimeout(controlNavbar, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controlNavbar]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleMenuOpen = () => {
    setOpen(!open);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      // Close mobile menu after clicking a link
      setOpen(false);
    }
  };

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setOpen(false);
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <div
        className={`bg-textSecondary z-50 text-slate-200 fixed w-full top-0 flex justify-between p-5 md:p-4 md:px-16 items-center transition-all duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className="cursor-pointer flex items-center gap-4"
          onClick={() => handleClick("home")}
        >
          <Image
            src={"/dwas.jpg"}
            height={30}
            width={30}
            loading="lazy"
            alt="dwashKarma"
            className="rounded-full"
          />
          <span className="hidden md:block font-semibold">
            Diwash Karmacharya
          </span>
        </div>
        <p className="text-xl md:hidden">Diwash.K</p>
        <button
          className="flex items-center justify-center md:hidden text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={handleMenuOpen}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
        <nav className="hidden md:flex gap-10">
          {links.map((item) => (
            <button
              key={item.name}
              className="cursor-pointer hover:text-amber-400 transition-colors"
              onClick={() => handleScroll(item.path)}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`fixed right-0 top-0 h-screen w-64 bg-textSecondary z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 p-6 ">
          <div className="flex justify-end">
            <IoMdClose
              className="size-7 cursor-pointer text-white"
              onClick={() => setOpen(false)}
            />
          </div>
          {links.map((item) => (
            <button
              key={item.name}
              className="text-slate-200 text-lg font-medium hover:text-amber-400 transition-colors text-left"
              onClick={() => {
                handleScroll(item.path);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default NavBar;
