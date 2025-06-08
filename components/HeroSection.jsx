import { FaMediumM, FaNpm } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { TypingAnimation } from "./magicui/typing-animation";

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
        <h1 className="text-xl md:text-6xl font-bold text-center flex md:flex-col lg:flex-row gap-2">
          <span>Hi, I am </span> <span> Diwash Karmacharya.</span>
        </h1>
        <div className="text-md md:text-4xl font-semibold flex gap-2 items-center h-6">
          <span className=" font-bold">I am a</span>
          <TypingAnimation className={" text-xl md:text-4xl text-amber-600"}>
            Frontend Developer.
          </TypingAnimation>
        </div>
        {/* //icons */}
        <div className="flex gap-4 text-2xl  ">
          <Link
            href={"https://github.com/dwashkarma"}
            aria-label="github-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <FaGithub className=" hover:scale-125 transition-all transform hover:-translate-y-1 delay-150 " />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/diwashkarmacharya/"}
            aria-label="linkedin-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
          >
            <FaLinkedin className=" hover:scale-125 transition-all transform hover:-translate-y-1 delay-150 " />
          </Link>
          <Link
            href={"https://www.npmjs.com/~dwash-karma-org"}
            aria-label="linkedin-link"
            target="_blank"
            rel="noopener noreferrer"
            title="NPM"
          >
            <FaNpm className=" hover:scale-125 transition-all transform hover:-translate-y-1 delay-150 " />
          </Link>
          <Link
            href={"https://medium.com/@dwashkarma"}
            aria-label="linkedin-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Medium"
          >
            <FaMediumM
              className=" hover:scale-125 transition-all transform
            hover:-translate-y-1 delay-150 "
            />
          </Link>
        </div>
        <div>
          <a
            className="group flex items-center gap-2 bg-amber-600 text-white py-3 px-6 rounded-full transition-all duration-300 hover:bg-amber-700  hover:shadow-amber-600/25"
            aria-label="cv/resume"
            download={"Resume"}
            href="/Resume.pdf"
          >
            <span className="text-base font-semibold">Download CV</span>
            <FaDownload className="text-sm transition-transform group-hover:translate-y-0.5 " />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
