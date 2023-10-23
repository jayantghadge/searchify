import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bottom-0 py-4 w-full text-white bg-gray-800">
      <div className="flex justify-center items-center text-center">
        <div className="flex mb-2">
          <a
            href="https://in.linkedin.com/in/jayant-ghadge-700739181"
            target="_blank"
            className="mx-2 text-blue-400 hover:underline"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="https://github.com/jayantghadge"
            target="_blank"
            className="mx-2 text-blue-400 hover:underline"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="mailto:jayantghadge6@gmail.com"
            className="mx-2 text-blue-400 hover:underline"
          >
            <FaEnvelope size={16} />
          </a>
        </div>
      </div>
      <p className="text-sm text-center">Developed by Jayant Ghadge</p>
    </footer>
  );
};

export default Footer;
