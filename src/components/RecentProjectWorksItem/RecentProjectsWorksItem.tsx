import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronRight,
  FaChevronDown,
  FaCode,
  FaTools,
} from "react-icons/fa";

interface RecentProjectsWorksItemProps {
  data: {
    id: number;
    name: string;
    workImage: string;
    shortDescription: string;
    features: string[];
    tools: {
      programming_language: string[];
      used_tools: string[];
    };
    githubLink: string;
    liveLink: string;
  };
}

const RecentProjectsWorksItem: React.FC<RecentProjectsWorksItemProps> = ({
  data,
}) => {
  const {
    name,
    workImage,
    shortDescription,
    features,
    tools,
    githubLink,
    liveLink,
  } = data;

  const [isHovered, setIsHovered] = useState(false);
  const [expandedFeatures, setExpandedFeatures] = useState(false);
  const [expandedTech, setExpandedTech] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Handle image load to start animation
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/20 relative shimmer-effect day-theme:bg-white/20 day-theme:border-gray-200/30 day-theme:hover:bg-white/30 day-theme:hover:border-gray-300/50 h-[600px] flex flex-col">
      {/* Image Section - Fixed Height */}
      <div className="relative overflow-hidden h-40 flex-shrink-0">
        <div className="relative w-full h-full">
          <img
            src={workImage}
            alt={name}
            onLoad={handleImageLoad}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            } ${isImageLoaded ? "animate-website-scroll" : "opacity-0"}`}
            style={{
              objectPosition: isHovered ? "center 20%" : "center 0%",
            }}
          />
          {/* Overlay gradient to smooth the scrolling effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20 pointer-events-none"></div>
        </div>
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="p-4 w-full">
            <div className="flex gap-2 justify-center">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm font-medium hover:bg-white/30 transition-all duration-200 flex items-center gap-1.5"
              >
                <FaGithub className="text-sm" /> Code
              </a>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center gap-1.5"
              >
                <FaExternalLinkAlt className="text-sm" /> Live
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - Flexible Height with Scroll */}
      <div className="p-4 flex-1 flex flex-col overflow-hidden">
        {/* Project Title & Description - Fixed Height */}
        <div className="mb-3 flex-shrink-0">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-200 day-theme:text-gray-800 day-theme:group-hover:text-purple-600">
            {name}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 day-theme:text-gray-600">
            {shortDescription}
          </p>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-transparent">
          {/* Features Accordion */}
          <div className="mb-3">
            <button
              onClick={() => setExpandedFeatures(!expandedFeatures)}
              className="w-full flex items-center justify-between p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200 group/accordion day-theme:bg-gray-100/50 day-theme:hover:bg-gray-200/50"
            >
              <div className="flex items-center gap-2">
                <FaCode className="text-purple-400 text-sm" />
                <span className="text-sm font-medium text-white day-theme:text-gray-800">
                  Features
                </span>
                <span className="text-xs text-gray-400 day-theme:text-gray-500">
                  ({features.length})
                </span>
              </div>
              <FaChevronDown
                className={`text-purple-400 text-xs transition-transform duration-200 ${
                  expandedFeatures ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedFeatures ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pt-2 space-y-1.5">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-gray-300 text-xs leading-relaxed day-theme:text-slate-700"
                  >
                    <FaChevronRight className="text-purple-400 mt-0.5 flex-shrink-0 text-xs" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies Accordion */}
          <div>
            <button
              onClick={() => setExpandedTech(!expandedTech)}
              className="w-full flex items-center justify-between p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200 group/accordion day-theme:bg-gray-100/50 day-theme:hover:bg-gray-200/50"
            >
              <div className="flex items-center gap-2">
                <FaTools className="text-purple-400 text-sm" />
                <span className="text-sm font-medium text-white day-theme:text-gray-800">
                  Technologies
                </span>
                <span className="text-xs text-gray-400 day-theme:text-gray-500">
                  ({tools.programming_language.length + tools.used_tools.length}
                  )
                </span>
              </div>
              <FaChevronDown
                className={`text-purple-400 text-xs transition-transform duration-200 ${
                  expandedTech ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedTech ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pt-2 space-y-3">
                {/* Programming Languages */}
                <div>
                  <h6 className="text-purple-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Languages
                  </h6>
                  <div className="flex flex-wrap gap-1.5">
                    {tools.programming_language.map((lang, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-md text-xs font-medium backdrop-blur-sm day-theme:from-purple-500/30 day-theme:to-pink-500/30 day-theme:border-purple-500/50 day-theme:text-purple-700"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools & Technologies */}
                <div>
                  <h6 className="text-purple-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Tools
                  </h6>
                  <div className="flex flex-wrap gap-1.5">
                    {tools.used_tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700/50 border border-gray-600/30 text-gray-300 rounded-md text-xs font-medium backdrop-blur-sm day-theme:bg-slate-200 day-theme:border-slate-300 day-theme:text-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjectsWorksItem;
