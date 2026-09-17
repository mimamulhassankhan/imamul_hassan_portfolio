import React from "react";
import RecentProjectsWorksItem from "../RecentProjectWorksItem/RecentProjectsWorksItem";
import websiteData from "../../data/websiteData.json";

interface RecentProjectsProps {
  // Define any props if needed, but not explicitly in the component's interface
  // as it's a simple component without external dependencies.
}

const RecentProjects: React.FC<RecentProjectsProps> = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            {websiteData.projects.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed day-theme:text-slate-700">
            {websiteData.projects.subtitle}
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {websiteData.projects.projects.map((project, index) => (
            <div key={project.id}>
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <RecentProjectsWorksItem data={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
