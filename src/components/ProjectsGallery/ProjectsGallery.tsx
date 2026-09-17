import React from "react";
import ProjectGrid from "./ProjectGrid";
import websiteData from "../../data/websiteData.json";

// interface Project {
//   id: number;
//   name: string;
//   workImage: string;
//   shortDescription: string;
//   features: string[];
//   tools: {
//     programming_language: string[];
//     used_tools: string[];
//   };
//   githubLink: string;
//   liveLink: string;
// }

const ProjectsGallery: React.FC = () => {
  const projects = websiteData.projects.projects;

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent day-theme:from-purple-600 day-theme:via-pink-600 day-theme:to-red-600">
            {websiteData.projects.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed day-theme:text-slate-700">
            {websiteData.projects.subtitle}
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <ProjectGrid projects={projects} />

      </div>
    </div>
  );
};

export default ProjectsGallery;
