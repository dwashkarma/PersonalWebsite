"use client";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  const [open, setOpen] = useState(false);
  const handleMenuOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className=" bg-secondary relative  text-slate-200 sticky top-0  flex justify-between p-5 md:p-4 md:px-16 items-center">
        <div>
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
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Education</h2>
          <h2>Projects</h2>
        </div>
      </div>
      {open && (
        <div className="sticky  flex flex-col  gap-4 top-0  h-screen w-screen bg-slate-300 px-5 pt-6  ">
          <div className="flex flex-col gap-5 text-xl font-semibold  ">
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Education</h2>
            <h2>Projects</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
