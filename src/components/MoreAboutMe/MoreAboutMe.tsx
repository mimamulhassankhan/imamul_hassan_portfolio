import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMailBulk,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

const MoreAboutMe: React.FC = () => {
  const expertise = [
    "React JS",
    "React Router",
    "React Bootstrap",
    "Material UI",
    "HTML5",
    "CSS3",
    "Bootstrap4",
    "JavaScript (ES6)",
    "React Spring",
    "PHP",
  ];
  const comfortable = ["Redux", "Node", "MongoDB"];
  const familiar = ["GraphQL", "C#", "C++", "Java", "Python"];
  const extra = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Android Studio",
    "Unity Engine",
  ];
  const operatingSystems = ["Windows (7, 8 and 10)", "Linux (Ubuntu, Mint)"];
  const tools = [
    "Git",
    "VS Code",
    "Visual Studio",
    "Chrome Dev Tools",
    "Heroku",
    "Netlify",
    "Firebase",
    "Autocad",
    "Latex",
    "MS Office",
    "Filmora",
    "Bangla Typing",
  ];

  return (
    <div className="px-5 my-5 py-5">
      <h3 className="py-3 text-center text-2xl font-bold">
        Okay, Let&apos;s know more about me
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 mb-5">
        <div className="flex flex-col justify-center border-r border-gray-300 pr-8">
          <div>
            <h1 className="text-2xl font-bold pb-3">
              <span className="border-b-4 border-teal-400">
                Personal <span className="text-teal-400">Info</span>
              </span>
            </h1>
            <ul className="space-y-4">
              <li>
                <h5 className="flex items-center">
                  <FontAwesomeIcon icon={faHome} className="mr-2" />
                  <span>Uttara, Dhaka - 1230</span>
                </h5>
              </li>
              <li>
                <h5 className="flex items-center">
                  <FontAwesomeIcon icon={faMailBulk} className="mr-2" />
                  <span>pappuhassan440@gmail.com</span>
                </h5>
              </li>
              <li className="flex justify-between items-center">
                <h5 className="flex items-center">
                  <FontAwesomeIcon icon={faPhoneSquareAlt} className="mr-2" />
                  <span>+8801 682992668</span>
                </h5>
                <a
                  href="https://1drv.ms/b/s!AnnGIh2S0fKbmKM5W4od6e2dQoX_-g"
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-bold pb-3">
              <span className="border-b-4 border-teal-400">
                My <span className="text-teal-400">Education</span>
              </span>
            </h1>
            <ul>
              <li className="mt-4">
                <h4 className="text-teal-400">Under Graduation</h4>
                <h5>B.Sc Eng. in Computer Science & Engineering,</h5>
                <h5>Daffodil International University</h5>
                <h6>
                  2017 - <i>PRESENT</i>
                </h6>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold pb-3">
            <span className="border-b-4 border-teal-400">
              My Skills<span className="text-teal-400"> & Expertise</span>
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-teal-400 mt-4 mb-3">Expertise:</h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <h4 className="text-teal-400 mt-4 mb-3">Comfortable:</h4>
              <div className="space-y-2">
                {comfortable.map((skill, index) => (
                  <div key={index}>
                    <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div
                        className="bg-teal-400 h-2.5 rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <h4 className="text-teal-400 mt-4 mb-3">Familiar:</h4>
              <div className="flex flex-wrap gap-2">
                {familiar.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-teal-400 mt-4 mb-3">Extra Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {extra.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <h4 className="text-teal-400 mt-4 mb-3">Operating Systems:</h4>
              <div className="flex flex-wrap gap-2">
                {operatingSystems.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <h4 className="text-teal-400 mt-4 mb-3">Tools & Softwares:</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutMe;
