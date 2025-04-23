import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
// var ReactRotatingText = require("react-rotating-text");

const Introduction: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[615px] text-white">
      <div className="text-center">
        <Image
          src="/images/main.png"
          alt="Profile"
          width={280}
          height={280}
          className="mx-auto"
        />
        <h5 className="pt-2">Hi, I'm</h5>
        <h2 className="text-4xl font-bold">
          IMAMUL <strong>HASSAN</strong>
        </h2>
        <div className="text-xl my-2">
          {/* <ReactRotatingText
            items={["Full Stack Web Engineer", "MERN Stack", "Microsoft Stack"]}
          /> */}
        </div>
        <p className="w-3/4 mx-auto my-4">
          I am a web development engineer, I use react and Node.js to develop
          pages and also Blazor webassembly for large scale application
          development. I can Integrate ML.NET/TensorFlow.js for machine
          learning.
        </p>
        <div className="flex justify-center space-x-6 text-3xl my-4">
          <a
            href="https://www.linkedin.com/in/m-imamul-hassan-khan-91a92540/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/mimamulhassankhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://join.skype.com/invite/xIyMlpUzT2Mn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FontAwesomeIcon icon={faSkype} />
          </a>
        </div>
        <a
          href="#contact"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default Introduction;
