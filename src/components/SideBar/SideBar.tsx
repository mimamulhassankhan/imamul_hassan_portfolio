import React from "react";
import { Link as NavLink } from "react-scroll";
import AchievementSlider from "@/components/Achievements/AchievementSlider";
import Blogs from "@/components/Blogs/Blogs";
import ContactMe from "@/components/ContactMe/ContactMe";
import Introduction from "@/components/Introduction/Introduction";
import MoreAboutMe from "@/components/MoreAboutMe/MoreAboutMe";
import ProfessionalExperience from "@/components/ProfessionalExperience/ProfessionalExperience";
import { ProjectsGallery } from "@/components/ProjectsGallery";
//  import Achievements from "../Achievements/Achievements";

const SideBar: React.FC = () => {
  const navItems = [
    { to: "intro", label: "Introduction", icon: "🏠" },
    { to: "bitMoreAboutMe", label: "About Me", icon: "👨‍💻" },
    { to: "professionalExperience", label: "Experience", icon: "💼" },
    { to: "achievements", label: "Achievements", icon: "🏆" },
    { to: "recentProjects", label: "Recent Works", icon: "🚀" },
    { to: "blogs", label: "My Blogs", icon: "📝" },
    { to: "contactme", label: "Contact Me", icon: "📧" },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Floating Navigation Sidebar */}
      <div className="fixed left-4 top-4 bottom-4 z-50 w-56 lg:block md:block sm:hidden">
        <div className="glass rounded-2xl p-4 h-full flex flex-col justify-between shadow-2xl">
          {/* Navigation Header */}
          <div className="text-center mb-6">
            <h4 className="text-lg font-bold gradient-text mb-2 day-theme:text-slate-900">
              Navigation
            </h4>
            <div className="w-10 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full day-theme:from-[#DA4453] day-theme:to-[#89216B]"></div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={item.to}>
                  <NavLink
                    activeClass="nav-active"
                    className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-theme-secondary hover:text-theme-primary transition-all duration-300 hover:bg-theme-glassHover group cursor-pointer animate-fade-in-up`}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-base group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                      {item.label}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Status Footer */}
          <div className="text-center pt-4 border-t border-theme-primary">
            <div className="glass rounded-xl p-3 border border-theme-primary day-theme:bg-white/20 day-theme:border-indigo-400/50">
              <p className="text-xs text-theme-secondary mb-1 day-theme:text-slate-600">
                Available for new opportunities
              </p>
              <div className="flex items-center justify-center space-x-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-300 font-medium day-theme:text-green-600">
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - Dynamically positioned between sidebar and social icons */}
      <div className="flex-1 ml-72 mr-32 px-6 py-6 lg:ml-72 lg:mr-32 md:ml-64 md:mr-24 sm:ml-4 sm:mr-4">
        <div className="max-w-6xl mx-auto">
          <div id="intro" className="mb-20">
            <Introduction />
          </div>

          <div id="bitMoreAboutMe" className="mb-20">
            <MoreAboutMe />
          </div>

          <div id="professionalExperience" className="mb-20">
            <ProfessionalExperience />
          </div>

          <div id="achievements" className="mb-20">
            {/* <Achievements /> */}
            <AchievementSlider />
          </div>

          <div id="recentProjects" className="mb-20">
            {/* <RecentProjects /> */}
            <ProjectsGallery />
          </div>

          <div id="blogs" className="mb-20">
            <Blogs limit={6} showViewAll={true} />
          </div>

          <div id="contactme" className="mb-20">
            <ContactMe />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <button className="glass rounded-xl p-2 text-theme-primary hover:bg-theme-glassHover transition-all duration-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
