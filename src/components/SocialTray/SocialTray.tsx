import {
  FaTwitter,
  FaFacebook,
  FaMicrosoft,
  FaBehance,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import React from "react";

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  url: string;
  color: string;
  hoverColor: string;
}

const SocialTray: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/m-imamul-hassan-khan-91a92540/",
      color: "#0077b5",
      hoverColor: "#005885",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/mimamulhassankhan",
      color: "#333",
      hoverColor: "#000",
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      url: "https://twitter.com/Imamul_hk",
      color: "#1DA1F2",
      hoverColor: "#0d8bd9",
    },
    {
      icon: <FaFacebook />,
      label: "Facebook",
      url: "https://www.facebook.com/m.imamulhassan/",
      color: "#4267B2",
      hoverColor: "#365899",
    },
    {
      icon: <FaMicrosoft />,
      label: "Microsoft",
      url: "https://answers.microsoft.com/en-us/profile/f4fed35f-1f30-480d-ba62-a12e672b40cb?sort=LastReplyDate&dir=Desc&tab=Threads&forum=allcategories&meta=&status=&mod=&advFil=&postedAfter=undefined&postedBefore=undefined&threadType=All&page=1",
      color: "#00A4EF",
      hoverColor: "#0088cc",
    },
    {
      icon: <FaBehance />,
      label: "Behance",
      url: "https://www.behance.net/mimamulhassan",
      color: "#1769ff",
      hoverColor: "#0056cc",
    },
  ];

  return (
    <div className="z-30 lg:block md:block sm:hidden">
      <div className="glass rounded-3xl p-4 shadow-2xl">
        <div className="flex flex-col space-y-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-black/30 backdrop-blur-sm border border-white/30 rounded-2xl flex items-center justify-center text-white/90 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/25 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                <div className="text-xl group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
              </div>

              {/* Tooltip */}
              <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl border border-white/30 rounded-xl px-3 py-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                {link.label}
                <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-white/30 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialTray;
