"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  // { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Skills", path: "skills" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleMenuOpen = () => {
    setOpen(!open);
  };
  const handleScroll = (e) => {
    const element = document.getElementById(e);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      router.push("/");
    }
  };
  return (
    <>
      <div className=" bg-secondary relative  text-slate-200 sticky top-0  flex justify-between p-5 md:p-4 md:px-16 items-center">
        <div onClick={() => handleClick("home")}>
          <Image
            src={"/dwas.jpg"}
            height={30}
            width={30}
            loading="lazy"
            alt="dwashKarma"
            className="rounded-full "
          />
        </div>
        <h1 className="text-xl md:hidden">Dwash</h1>
        <div
          className="flex gap-2 items-center md:hidden text-xl "
          onClick={handleMenuOpen}
        >
          <GiHamburgerMenu />
        </div>
        <div className="hidden md:flex gap-10">
          {links.map((item) => {
            return (
              <span
                key={item.name}
                className="cursor-pointer"
                onClick={() => handleScroll(item.path)}
              >
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
      {open && (
        <div className="sticky  flex flex-col  gap-4 top-0  h-screen w-screen bg-slate-300 px-5 pt-6  ">
          <div className="flex flex-col gap-5 text-xl font-semibold  ">
            {links.map((item) => {
              return (
                <span
                  key={item.name}
                  onClick={() => {
                    setOpen(!open);
                    handleScroll(item.path);
                  }}
                >
                  {item.name}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
