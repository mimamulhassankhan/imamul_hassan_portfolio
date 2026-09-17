import React from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import websiteData from "../../data/websiteData.json";

// interface Experience {
//   id: number;
//   title: string;
//   company: string;
//   location: string;
//   duration: string;
//   description: string;
//   technologies: string[];
//   achievements: string[];
//   companyUrl?: string;
//   logo?: string;
// }

const ProfessionalExperience: React.FC = () => {
    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent day-theme:from-[#DA4453] day-theme:via-[#89216B] day-theme:to-[#C13A47]">
                        {websiteData.experience.title}
                    </h2>
                    <p className="text-lg text-white/85 max-w-2xl mx-auto day-theme:text-slate-700">
                        {websiteData.experience.subtitle}
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6 rounded-full day-theme:from-[#DA4453] day-theme:to-[#89216B]"></div>
                </div>

                {/* Experience Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-transparent day-theme:from-[#DA4453] day-theme:via-[#89216B] day-theme:to-transparent"></div>

                    <div className="space-y-8">
                        {websiteData.experience.experiences.map((experience) => (
                            <div key={experience.id} className="relative group">
                                {/* Timeline Dot */}
                                <div className="absolute left-4 top-6 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg transform -translate-x-1/2 z-10 day-theme:from-[#DA4453] day-theme:to-[#89216B]"></div>

                                {/* Experience Card */}
                                <div className="ml-12">
                                    <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-102 group-hover:border-purple-500/30 day-theme:bg-white/20 day-theme:border-slate-300/50 day-theme:hover:shadow-[#DA4453]/30">
                                        {/* Header */}
                                        <div className="mb-4">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <FaBriefcase className="text-purple-300 text-lg day-theme:text-[#DA4453]" />
                                                <h3 className="text-xl font-bold text-white day-theme:text-slate-900">
                                                    {experience.title}
                                                </h3>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-white/80 text-sm day-theme:text-slate-700">
                                                <div className="flex items-center space-x-2">
                                                    <FaMapMarkerAlt className="text-pink-300 text-xs day-theme:text-[#89216B]" />
                                                    <span className="animate-typewriter">{experience.company}</span>
                                                    {experience.companyUrl && (
                                                        <a
                                                            href={experience.companyUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-purple-300 hover:text-pink-300 transition-colors duration-300 day-theme:text-[#DA4453] day-theme:hover:text-[#89216B]"
                                                        >
                                                            <FaExternalLinkAlt className="text-xs" />
                                                        </a>
                                                    )}
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <FaCalendarAlt className="text-pink-300 text-xs day-theme:text-[#89216B]" />
                                                    <span>{experience.duration}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <FaMapMarkerAlt className="text-pink-300 text-xs day-theme:text-[#89216B]" />
                                                    <span>{experience.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-white/85 text-sm leading-relaxed mb-4 day-theme:text-slate-700">
                                            {experience.description}
                                        </p>

                                        {/* Technologies & Achievements Grid */}
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                            {/* Technologies */}
                                            <div>
                                                <h4 className="text-base font-semibold text-purple-300 mb-2 day-theme:text-[#DA4453]">
                                                    Technologies Used
                                                </h4>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {experience.technologies.map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-2 py-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white rounded-full text-xs font-medium border border-purple-500/40 day-theme:from-[#DA4453]/40 day-theme:to-[#89216B]/40 day-theme:border-[#DA4453]/60 day-theme:text-slate-900"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Achievements */}
                                            <div>
                                                <h4 className="text-base font-semibold text-purple-300 mb-2 day-theme:text-[#DA4453]">
                                                    Key Achievements
                                                </h4>
                                                <ul className="space-y-1.5">
                                                    {experience.achievements.map((achievement, achievementIndex) => (
                                                        <li
                                                            key={achievementIndex}
                                                            className="flex items-start space-x-2"
                                                        >
                                                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-1.5 flex-shrink-0 day-theme:from-[#DA4453] day-theme:to-[#89216B]"></div>
                                                            <span className="text-white/85 text-sm day-theme:text-slate-700">
                                                                {achievement}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl p-6 max-w-xl mx-auto day-theme:bg-white/20 day-theme:border-slate-300/50">
                        <h3 className="text-xl font-bold text-white mb-3 day-theme:text-slate-900">
                            {websiteData.experience.callToAction.title}
                        </h3>
                        <p className="text-white/85 mb-4 text-sm day-theme:text-slate-700">
                            {websiteData.experience.callToAction.description}
                        </p>
                        <button
                            onClick={() => {
                                const contactSection = document.getElementById("contactme");
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 cursor-pointer day-theme:from-[#DA4453] day-theme:to-[#89216B] day-theme:hover:from-[#C13A47] day-theme:hover:to-[#7A1D5F] day-theme:hover:shadow-[#DA4453]/25"
                        >
                            {websiteData.experience.callToAction.buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalExperience;
