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
    <footer className="bg-textSecondary text-slate-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Diwash Karmacharya</h3>
            <p className="text-slate-400">Full Stack Developer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
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
            <p className="text-sm text-slate-400">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
