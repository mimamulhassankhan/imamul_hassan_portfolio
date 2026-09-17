import React, { useState } from "react";

interface Project {
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
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <button
      className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 day-theme:bg-white/90 day-theme:border-gray-200/30 day-theme:hover:bg-white day-theme:hover:border-gray-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-black/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`View details for ${project.name}`}
      aria-describedby={`project-${project.id}-description`}
    >
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={project.workImage}
          alt={`Screenshot of ${project.name}`}
          onLoad={handleImageLoad}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          } ${isHovered ? "animate-website-scroll" : ""}`}
        />

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center text-white p-8">
            <div className="w-12 h-12 bg-purple-500/80 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p
                id={`project-${project.id}-description`}
                className="text-sm opacity-90 leading-relaxed"
              >
                {project.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;
