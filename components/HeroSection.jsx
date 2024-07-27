import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

function HeroSection() {
  return (
    <div id="particle-js">
      <div
        id="home"
        className=" text-slate-200 h-screen bg-textSecondary  flex flex-col gap-4 md:gap-8 place-items-center justify-center"
      >
        <Image
          className="rounded-full"
          src={"/dwas.jpg"}
          alt="dwashkarma"
          height={200}
          width={200}
        />
        <h1 className="text-2xl md:text-6xl font-bold text-amber-600">
          Hi, I am Dwash Karma.
        </h1>
        <p className="text-md md:text-lg font-semibold">
          I am a Frontend Developer.
        </p>
        {/* //icons */}
        <div className="flex gap-4 text-2xl  ">
          <FaFacebook className="hover:text-slate-400" />
          <FaInstagram className="hover:text-slate-400" />
          <FaLinkedin className="hover:text-slate-400" />
          <FaGithub className="hover:text-slate-400" />
        </div>
        <div>
          <button className="bg-textPrimary p-3 rounded-xl hover:bg-opacity-70">
            <a className="text-base" download={"CV"} href="/Resume.pdf">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
