import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faMicrosoft,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

const SocialTray: React.FC = () => {
  const socialLinks = [
    {
      icon: faTwitter,
      href: "https://twitter.com/Imamul_hk",
      label: "Twitter",
    },
    {
      icon: faFacebook,
      href: "https://www.facebook.com/m.imamulhassan/",
      label: "Facebook",
    },
    {
      icon: faMicrosoft,
      href: "https://answers.microsoft.com/en-us/profile/f4fed35f-1f30-480d-ba62-a12e672b40cb",
      label: "Microsoft",
    },
    {
      icon: faBehance,
      href: "https://www.behance.net/mimamulhassan",
      label: "Behance",
    },
  ];

  return (
    <nav className="fixed top-1/2 -right-[300px] z-50 transform -translate-y-1/2">
      <ul className="space-y-2">
        {socialLinks.map((link) => (
          <li key={link.label} className="group">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-[300px] p-3 text-yellow-500 font-bold bg-black/40 backdrop-blur-xl rounded-l-full transition-all duration-500 transform -translate-x-[270px] group-hover:translate-x-0"
            >
              <FontAwesomeIcon
                icon={link.icon}
                className="w-8 h-8 p-2 bg-white rounded-full text-gray-500 group-hover:text-red-500 group-hover:rotate-360 transition-all duration-500"
              />
              <span className="ml-4">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialTray;
