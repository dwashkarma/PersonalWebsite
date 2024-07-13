import Image from "next/image";

function NavBar() {
  return (
    <div className=" bg-secondary  text-slate-200 sticky top-0  flex justify-between p-4 px-16 items-center">
      <div>
        <Image
          src={"/dwas.jpg"}
          height={50}
          width={50}
          loading="lazy"
          alt="dwashKarma"
          className="rounded-full"
        />
      </div>
      <div className="flex gap-10">
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Education</h2>
        <h2>Projects</h2>
      </div>
    </div>
  );
}

export default NavBar;
