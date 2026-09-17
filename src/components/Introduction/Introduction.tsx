import React from "react";
import Avatar from "./Avatar";
// import AvatarViewer from "./AvatarViewer";
import { renderIcon } from "../../utils/iconUtils";
import websiteData from "../../data/websiteData.json";

const Introduction: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-4xl mx-auto px-6">
        {/* Top-Down Layout */}
        <div className="space-y-10">
          {/* Avatar Section - Centered and Compact */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 day-theme:bg-white/20 day-theme:border-slate-300/50 day-theme:hover:shadow-purple-500/30">
                <Avatar />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 animate-pulse day-theme:from-[#DA4453] day-theme:to-[#89216B]"></div>
              <div className="absolute -bottom-4 -left-4 w-5 h-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-60 animate-pulse delay-1000 day-theme:from-[#89216B] day-theme:to-[#DA4453]"></div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-60 animate-pulse delay-500 day-theme:from-[#DA4453] day-theme:to-[#C13A47]"></div>
            </div>
          </div>

          {/* Welcome Content Section - Full Width */}
          <div className="relative group">
            <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-pink-500/20 transition-all duration-500 hover:scale-105 day-theme:bg-white/20 day-theme:border-slate-300/50 day-theme:hover:shadow-pink-500/30">
              <div className="text-center space-y-8">
                {/* Welcome Header */}
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent day-theme:from-slate-900 day-theme:to-slate-700">
                    {websiteData.introduction.welcome.title}
                  </h3>
                  <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto day-theme:text-slate-700">
                    {websiteData.introduction.welcome.subtitle}
                  </p>
                </div>

                {/* Action Buttons - Centered */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => {
                      const projectsSection =
                        document.getElementById("recentProjects");
                      if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-base hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 cursor-pointer day-theme:from-[#DA4453] day-theme:to-[#89216B] day-theme:hover:from-[#C13A47] day-theme:hover:to-[#7A1D5F] day-theme:hover:shadow-[#DA4453]/25"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {renderIcon(
                        websiteData.introduction.buttons.viewProjects.icon,
                        { className: "text-lg" }
                      )}
                      {websiteData.introduction.buttons.viewProjects.text}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 day-theme:from-[#C13A47] day-theme:to-[#7A1D5F]"></div>
                  </button>

                  <button
                    onClick={() => {
                      const contactSection =
                        document.getElementById("contactme");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="group relative px-8 py-4 border-2 border-white/40 text-white rounded-xl font-semibold text-base hover:bg-white/15 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm cursor-pointer day-theme:border-slate-400 day-theme:text-slate-900 day-theme:hover:bg-slate-100"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {renderIcon(
                        websiteData.introduction.buttons.contactMe.icon,
                        { className: "text-lg" }
                      )}
                      {websiteData.introduction.buttons.contactMe.text}
                    </span>
                    <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>

                {/* Stats Section - Horizontal Layout */}
                <div className="flex justify-center space-x-12 pt-6">
                  {websiteData.introduction.stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="flex justify-center mb-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 day-theme:from-[#DA4453] day-theme:to-[#89216B]">
                          {renderIcon(stat.icon, {
                            className: "text-white text-lg",
                          })}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-white mb-1 day-theme:text-slate-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/75 day-theme:text-slate-700">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-5 h-5 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-60 animate-pulse delay-500 day-theme:from-[#89216B] day-theme:to-[#DA4453]"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60 animate-pulse delay-1500 day-theme:from-[#DA4453] day-theme:to-[#89216B]"></div>
            <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-60 animate-pulse delay-750 day-theme:from-[#C13A47] day-theme:to-[#7A1D5F]"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 group">
          <div
            className="animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300 relative"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center hover:border-white/60 transition-colors duration-300 day-theme:border-slate-400 day-theme:hover:border-slate-600">
              <div className="w-1 h-2 bg-white/80 rounded-full mt-2 animate-pulse day-theme:bg-slate-600"></div>
            </div>

            {/* Popover Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg px-2 py-1 text-white text-xs font-medium whitespace-nowrap shadow-lg day-theme:bg-white/20 day-theme:border-slate-300 day-theme:text-slate-900">
                Scroll to top
                {/* Arrow pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-black/90 day-theme:border-t-white/95"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
