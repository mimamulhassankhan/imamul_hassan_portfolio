import React from "react";
import { renderIcon } from "../../utils/iconUtils";
import websiteData from "../../data/websiteData.json";

interface MoreAboutMeProps {
    // Define any props if needed, but not explicitly in the component's interface
}

const MoreAboutMe: React.FC<MoreAboutMeProps> = () => {
    return (
        <div className="py-12 scroll-timeline">
            <div className="max-w-5xl mx-auto px-6">
                {/* Compact Header */}
                <div className="text-center mb-8 animate-slide-in-top">
                    <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent day-theme:from-[#DA4453] day-theme:via-[#89216B] day-theme:to-[#C13A47]">
                        {websiteData.aboutMe.title}
                    </h2>
                    <p className="text-base text-gray-300 max-w-2xl mx-auto day-theme:text-slate-700">
                        {websiteData.aboutMe.subtitle}
                    </p>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full day-theme:from-[#DA4453] day-theme:to-[#89216B]"></div>
                </div>

                {/* Compact Layout */}
                <div className="space-y-6">
                    {/* Personal Info & Education Combined */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 day-theme:bg-white/20 day-theme:border-slate-300/50 day-theme:hover:shadow-[#DA4453]/30">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Personal Info */}
                            <div className="lg:col-span-2">
                                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent day-theme:from-[#DA4453] day-theme:to-[#89216B]">
                                    {websiteData.aboutMe.personalInfo.title}
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    {/* Contact Info */}
                                    {[
                                        {
                                            icon: websiteData.aboutMe.personalInfo.location.icon,
                                            label: websiteData.aboutMe.personalInfo.location.label,
                                            value: websiteData.aboutMe.personalInfo.location.value,
                                        },
                                        {
                                            icon: websiteData.aboutMe.personalInfo.email.icon,
                                            label: websiteData.aboutMe.personalInfo.email.label,
                                            value: websiteData.aboutMe.personalInfo.email.value,
                                        },
                                        {
                                            icon: websiteData.aboutMe.personalInfo.phone.icon,
                                            label: websiteData.aboutMe.personalInfo.phone.label,
                                            value: websiteData.aboutMe.personalInfo.phone.value,
                                        },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 day-theme:from-[#DA4453] day-theme:to-[#89216B]">
                                                {renderIcon(item.icon, { className: "text-white text-xs" })}
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-xs day-theme:text-slate-600">
                                                    {item.label}
                                                </p>
                                                <p className="text-white text-sm font-medium day-theme:text-slate-900">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Resume Button */}
                                    <div className="flex items-center">
                                        <a
                                            href={websiteData.aboutMe.personalInfo.resume.url}
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm day-theme:from-[#DA4453] day-theme:to-[#89216B] day-theme:hover:from-[#C13A47] day-theme:hover:to-[#7A1D5F]"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {renderIcon(websiteData.aboutMe.personalInfo.resume.icon, {
                                                className: "text-xs",
                                            })}
                                            {websiteData.aboutMe.personalInfo.resume.text}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Education */}
                            <div>
                                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent day-theme:from-[#DA4453] day-theme:to-[#89216B]">
                                    {websiteData.aboutMe.education.title}
                                </h3>

                                <div className="bg-white/5 rounded-lg p-4 border border-white/10 day-theme:bg-white/20 day-theme:border-slate-300/50">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 day-theme:from-[#DA4453] day-theme:to-[#89216B]">
                                            {renderIcon(websiteData.aboutMe.education.icon, {
                                                className: "text-white text-sm",
                                            })}
                                        </div>
                                        <div>
                                            <p className="text-purple-400 font-bold text-sm mb-1 day-theme:text-[#DA4453]">
                                                {websiteData.aboutMe.education.degree}
                                            </p>
                                            <p className="text-gray-300 text-xs mb-1 day-theme:text-slate-700">
                                                {websiteData.aboutMe.education.institution}
                                            </p>
                                            <p className="text-gray-400 text-xs day-theme:text-slate-600">
                                                {websiteData.aboutMe.education.period}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills Section - Compact */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 day-theme:bg-white/20 day-theme:border-slate-300/50 day-theme:hover:shadow-[#DA4453]/30 animate-slide-in-bottom">
                        <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center day-theme:from-[#DA4453] day-theme:to-[#89216B]">
                            {websiteData.aboutMe.skills.title}
                        </h3>

                        <div className="space-y-6">
                            {/* Expertise & Comfortable Combined */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Expertise */}
                                <div>
                                    <h4 className="text-base font-semibold mb-3 text-purple-400 day-theme:text-[#DA4453]">
                                        Expertise
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {websiteData.aboutMe.skills.expertise.map((skill: string, idx: number) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium hover:scale-105 transition-transform duration-300 day-theme:from-[#DA4453] day-theme:to-[#89216B]"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Comfortable Skills */}
                                <div>
                                    <h4 className="text-base font-semibold mb-3 text-purple-400 day-theme:text-[#DA4453]">
                                        Comfortable
                                    </h4>
                                    <div className="space-y-2">
                                        {websiteData.aboutMe.skills.comfortable.map((skill: any, idx: number) => (
                                            <div key={idx} className="group/item">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-gray-300 text-xs font-medium day-theme:text-slate-700">
                                                        {skill.name}
                                                    </span>
                                                    <span className="text-purple-400 text-xs font-semibold day-theme:text-[#DA4453]">
                                                        {skill.percentage}%
                                                    </span>
                                                </div>
                                                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden day-theme:bg-slate-200">
                                                    <div
                                                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full transition-all duration-1000 ease-out day-theme:from-[#DA4453] day-theme:to-[#89216B]"
                                                        style={{ width: `${skill.percentage}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Familiar Skills */}
                            <div>
                                <h4 className="text-base font-semibold mb-3 text-purple-400 text-center day-theme:text-[#DA4453]">
                                    Familiar
                                </h4>
                                <div className="flex flex-wrap justify-center gap-1.5">
                                    {websiteData.aboutMe.skills.familiar.map((skill: string, idx: number) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-white/10 text-gray-300 rounded-full text-xs font-medium border border-white/20 hover:bg-white/20 transition-colors duration-300 day-theme:bg-slate-100 day-theme:text-slate-700 day-theme:border-slate-300 day-theme:hover:bg-slate-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Extra Skills, OS, and Tools in Compact Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Extra Skills */}
                                <div>
                                    <h4 className="text-sm font-semibold mb-2 text-purple-400 text-center day-theme:text-[#DA4453]">
                                        Extra Skills
                                    </h4>
                                    <div className="flex flex-wrap justify-center gap-1">
                                        {websiteData.aboutMe.skills.extra.map((skill: string, idx: number) => (
                                            <span
                                                key={idx}
                                                className="px-1.5 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium day-theme:from-[#DA4453] day-theme:to-[#89216B]"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Operating Systems */}
                                <div>
                                    <h4 className="text-sm font-semibold mb-2 text-purple-400 text-center day-theme:text-[#DA4453]">
                                        Operating Systems
                                    </h4>
                                    <div className="flex flex-wrap justify-center gap-1">
                                        {websiteData.aboutMe.skills.operatingSystems.map(
                                            (skill: string, idx: number) => (
                                                <span
                                                    key={idx}
                                                    className="px-1.5 py-0.5 bg-white/10 text-gray-300 rounded-full text-xs font-medium border border-white/20 day-theme:bg-slate-100 day-theme:text-slate-700 day-theme:border-slate-300"
                                                >
                                                    {skill}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Tools & Software */}
                                <div>
                                    <h4 className="text-sm font-semibold mb-2 text-purple-400 text-center day-theme:text-[#DA4453]">
                                        Tools & Software
                                    </h4>
                                    <div className="flex flex-wrap justify-center gap-1">
                                        {websiteData.aboutMe.skills.tools.map((skill: string, idx: number) => (
                                            <span
                                                key={idx}
                                                className="px-1.5 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium day-theme:from-[#DA4453] day-theme:to-[#89216B]"
                                            >
                                                {skill}
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

export default MoreAboutMe;
