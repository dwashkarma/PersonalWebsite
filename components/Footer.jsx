"use client";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <FaGithub className="text-2xl hover:text-gray-400 transition-colors" />
      ),
      url: "https://github.com/dwashkarma", // Replace with your GitHub URL
    },
    {
      name: "LinkedIn",
      icon: (
        <FaLinkedin className="text-2xl hover:text-blue-400 transition-colors" />
      ),
      url: "https://linkedin.com/in/dwashkarma", // Replace with your LinkedIn URL
    },
    {
      name: "Instagram",
      icon: (
        <FaInstagram className="text-2xl hover:text-blue-500 transition-colors" />
      ),
      url: "https://www.instagram.com/dwashkarma/", // Replace with your Twitter URL
    },
    {
      name: "Facebook",
      icon: (
        <FaFacebook className="text-2xl hover:text-blue-500 transition-colors" />
      ),
      url: "https://www.facebook.com/profile.php?id=61553923613595", // Replace with your Twitter URL
    },
  ];

  return (
    <footer className="bg-textSecondary text-slate-200 p-8 py-4 ">
      <div className="flex flex-col  md:flex-row gap-2  justify-between items-center mx-10 md:mx-20">
        <p className="text-sm text-slate-400">
          © {currentYear} All rights reserved.
        </p>
        <div className="flex space-x-4 ">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:transform hover:scale-110 transition-transform"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
