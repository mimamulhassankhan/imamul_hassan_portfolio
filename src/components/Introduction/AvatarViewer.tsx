import React from "react";
import { renderIcon } from "../../utils/iconUtils";
import websiteData from "../../data/websiteData.json";

const AvatarViewer: React.FC = () => {
  return (
    <div className="text-center space-y-8">
      {/* Welcome Text */}
      <div className="space-y-4">
        <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent day-theme:from-slate-900 day-theme:to-slate-700">
          {websiteData.introduction.welcome.title}
        </h3>
        <p className="text-lg text-white/85 leading-relaxed max-w-md mx-auto day-theme:text-slate-700">
          {websiteData.introduction.welcome.subtitle}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
          <span className="relative z-10 flex items-center gap-2">
            {renderIcon(websiteData.introduction.buttons.viewProjects.icon, {
              className: "text-lg",
            })}
            {websiteData.introduction.buttons.viewProjects.text}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        <button className="group relative px-8 py-4 border-2 border-white/40 text-white rounded-2xl font-semibold hover:bg-white/15 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm day-theme:border-slate-400 day-theme:text-slate-900 day-theme:hover:bg-slate-100">
          <span className="relative z-10 flex items-center gap-2">
            {renderIcon(websiteData.introduction.buttons.contactMe.icon, {
              className: "text-lg",
            })}
            {websiteData.introduction.buttons.contactMe.text}
          </span>
          <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Floating Stats */}
      <div className="flex justify-center space-x-8 pt-8">
        {websiteData.introduction.stats.map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="flex justify-center mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {renderIcon(stat.icon, { className: "text-white text-sm" })}
              </div>
            </div>
            <div className="text-2xl font-bold text-white day-theme:text-slate-900">
              {stat.value}
            </div>
            <div className="text-sm text-white/75 day-theme:text-slate-700">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarViewer;
