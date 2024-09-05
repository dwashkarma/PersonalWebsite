import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

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
        <h1 className="text-xl md:text-6xl font-bold text-amber-600">
          Hi, I am Diwash Karmacharya.
        </h1>
        <p className="text-md md:text-lg font-semibold">
          I am a Frontend Developer.
        </p>
        {/* //icons */}
        <div className="flex gap-4 text-2xl  ">
          <Link
            href={"https://www.facebook.com/profile.php?id=61553923613595"}
            aria-label="facebook-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-slate-400" />
          </Link>

          <Link
            href={"https://www.instagram.com/dwashkarma/"}
            aria-label="instagram-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-slate-400" />
          </Link>

          <Link
            href={"https://www.linkedin.com/in/dwash-karma/"}
            aria-label="linkedin-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-slate-400" />
          </Link>

          <Link
            href={"https://github.com/dwashkarma"}
            aria-label="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-slate-400" />
          </Link>
        </div>
        <div>
          <button className="bg-textPrimary p-3 rounded-xl hover:bg-opacity-70">
            <a
              className="text-base"
              aria-label="cv/resume"
              download={"CV"}
              href="/Resume.pdf"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
