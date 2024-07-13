import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="max-h-[90vh] text-slate-200 h-screen bg-secondary  flex flex-col gap-8 place-items-center justify-center">
      <Image
        className="rounded-full"
        src={"/dwas.jpg"}
        alt="dwashkarma"
        height={200}
        width={200}
      />
      <h1 className="text-6xl font-bold text-amber-600">
        Hi, I am Dwash Karma.
      </h1>
      <p className="text-lg font-semibold">I am a Frontend Developer.</p>
      {/* //icons */}
      <div className="flex gap-4 text-2xl  ">
        <FaFacebook className="hover:text-slate-400" />
        <FaInstagram className="hover:text-slate-400" />
        <FaLinkedin className="hover:text-slate-400" />
        <FaGithub className="hover:text-slate-400" />
      </div>
    </div>
  );
}

export default HeroSection;
