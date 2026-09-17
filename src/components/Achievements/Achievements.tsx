import React, { useState, useRef, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCalendarAlt,
  FaBuilding,
} from "react-icons/fa";
import { renderIcon } from "../../utils/iconUtils";
import websiteData from "../../data/websiteData.json";

const Achievements: React.FC = () => {
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const achievements = websiteData.achievements.achievements;

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentImage((prev) => {
          const currentAchievementData = achievements[currentAchievement];
          return (prev + 1) % currentAchievementData.images.length;
        });
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentAchievement, achievements]);

  const nextImage = () => {
    const currentAchievementData = achievements[currentAchievement];
    setCurrentImage(
      (prev) => (prev + 1) % currentAchievementData.images.length
    );
    // Reset auto-play timer on manual navigation
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentImage((prev) => {
          const currentAchievementData = achievements[currentAchievement];
          return (prev + 1) % currentAchievementData.images.length;
        });
      }, 4000);
    }
  };

  const prevImage = () => {
    const currentAchievementData = achievements[currentAchievement];
    setCurrentImage((prev) =>
      prev === 0 ? currentAchievementData.images.length - 1 : prev - 1
    );
    // Reset auto-play timer on manual navigation
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentImage((prev) => {
          const currentAchievementData = achievements[currentAchievement];
          return (prev + 1) % currentAchievementData.images.length;
        });
      }, 4000);
    }
  };

  const nextAchievement = () => {
    setCurrentAchievement((prev) => (prev + 1) % achievements.length);
    setCurrentImage(0);
    // Reset auto-play timer on achievement navigation
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentImage((prev) => {
          const currentAchievementData = achievements[currentAchievement];
          return (prev + 1) % currentAchievementData.images.length;
        });
      }, 4000);
    }
  };

  const prevAchievement = () => {
    setCurrentAchievement((prev) =>
      prev === 0 ? achievements.length - 1 : prev - 1
    );
    setCurrentImage(0);
    // Reset auto-play timer on achievement navigation
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentImage((prev) => {
          const currentAchievementData = achievements[currentAchievement];
          return (prev + 1) % currentAchievementData.images.length;
        });
      }, 4000);
    }
  };

  const currentAchievementData = achievements[currentAchievement];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent day-theme:from-purple-600 day-theme:via-pink-600 day-theme:to-red-600">
            {websiteData.achievements.title}
          </h2>
          <p className="text-lg text-white/85 max-w-2xl mx-auto day-theme:text-slate-700">
            {websiteData.achievements.subtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Achievement Navigation */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2">
            {achievements.map((achievement, index) => (
              <button
                key={achievement.id}
                onClick={() => {
                  setCurrentAchievement(index);
                  setCurrentImage(0);
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                  index === currentAchievement
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 day-theme:bg-slate-100 day-theme:text-slate-700 day-theme:hover:bg-slate-200"
                }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                <span className="font-medium">{achievement.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Achievement Display - Left Text, Right Stacked Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-4">
            {/* Achievement Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  {renderIcon(currentAchievementData.icon, {
                    className: "text-white text-base",
                  })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white day-theme:text-slate-900">
                    {currentAchievementData.title}
                  </h3>
                  <p className="text-purple-300 font-medium text-sm day-theme:text-purple-700">
                    {currentAchievementData.category}
                  </p>
                </div>
              </div>

              {/* Meta Information */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-300 day-theme:text-slate-700">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-purple-400 day-theme:text-purple-600" />
                  <span>{currentAchievementData.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBuilding className="text-purple-400 day-theme:text-purple-600" />
                  <span>{currentAchievementData.organization}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-base font-semibold text-white mb-1 day-theme:text-slate-900">
                Overview
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm day-theme:text-slate-700">
                {currentAchievementData.description}
              </p>
            </div>

            {/* Story */}
            <div>
              <h4 className="text-base font-semibold text-white mb-1 day-theme:text-slate-900">
                The Story
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm day-theme:text-slate-700">
                {currentAchievementData.story}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-base font-semibold text-white mb-2 day-theme:text-slate-900">
                Technologies & Skills
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {currentAchievementData.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-full text-xs font-medium backdrop-blur-sm day-theme:from-purple-500/40 day-theme:to-pink-500/40 day-theme:border-purple-500/60 day-theme:text-slate-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div>
              <h4 className="text-base font-semibold text-white mb-1 day-theme:text-slate-900">
                Impact
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm day-theme:text-slate-700">
                {currentAchievementData.impact}
              </p>
            </div>
          </div>

          {/* Right Side - Stacked Images */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              {/* Stacked Images with Stack Effect */}
              {currentAchievementData.images.map((image, index) => {
                const isActive = index === currentImage;
                const isNext =
                  index ===
                  (currentImage + 1) % currentAchievementData.images.length;
                const isPrev =
                  index ===
                  (currentImage - 1 + currentAchievementData.images.length) %
                    currentAchievementData.images.length;

                let transformClass = "";
                let opacityClass = "";
                let zIndex = "";
                let shadowClass = "";

                if (isActive) {
                  transformClass =
                    "translate-x-0 translate-y-0 rotate-0 scale-100";
                  opacityClass = "opacity-100";
                  zIndex = "z-30";
                  shadowClass = "shadow-2xl";
                } else if (isNext) {
                  transformClass =
                    "translate-x-8 translate-y-4 rotate-6 scale-95";
                  opacityClass = "opacity-80";
                  zIndex = "z-20";
                  shadowClass = "shadow-xl";
                } else if (isPrev) {
                  transformClass =
                    "-translate-x-8 translate-y-4 -rotate-6 scale-95";
                  opacityClass = "opacity-80";
                  zIndex = "z-20";
                  shadowClass = "shadow-xl";
                } else {
                  transformClass =
                    "translate-x-16 translate-y-8 rotate-12 scale-90";
                  opacityClass = "opacity-60";
                  zIndex = "z-10";
                  shadowClass = "shadow-lg";
                }

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${transformClass} ${opacityClass} ${zIndex} ${shadowClass}`}
                  >
                    <img
                      src={image}
                      alt={`${currentAchievementData.title} - ${index + 1}`}
                      className="w-full h-full object-cover rounded-xl"
                      onLoad={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "inline-block";
                        const fallback = target.parentElement?.querySelector(
                          ".fallback"
                        ) as HTMLElement;
                        if (fallback) fallback.style.display = "none";
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const fallback = target.parentElement?.querySelector(
                          ".fallback"
                        ) as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                    <div className="fallback text-center bg-black hidden w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 items-center justify-center text-6xl text-white font-bold absolute top-0 left-0 rounded-xl">
                      {currentAchievementData.title} {index + 1}
                    </div>
                  </div>
                );
              })}

              {/* Image Navigation Controls */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 z-40">
                {/* Auto-play Toggle */}
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    isAutoPlaying
                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                      : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
                  }`}
                >
                  {isAutoPlaying ? "Auto" : "Manual"}
                </button>

                {/* Image Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevImage}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <FaChevronLeft className="text-xs" />
                  </button>

                  {/* Image Indicators */}
                  <div className="flex space-x-1">
                    {currentAchievementData.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentImage(index);
                          // Reset auto-play timer on manual navigation
                          if (autoPlayRef.current) {
                            clearInterval(autoPlayRef.current);
                          }
                          if (isAutoPlaying) {
                            autoPlayRef.current = setInterval(() => {
                              setCurrentImage((prev) => {
                                const currentAchievementData =
                                  achievements[currentAchievement];
                                return (
                                  (prev + 1) %
                                  currentAchievementData.images.length
                                );
                              });
                            }, 4000);
                          }
                        }}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          index === currentImage
                            ? "bg-white scale-125"
                            : "bg-white/40 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextImage}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <FaChevronRight className="text-xs" />
                  </button>
                </div>
              </div>
            </div>

            {/* Achievement Navigation Arrows */}
            <button
              onClick={prevAchievement}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300 z-50"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextAchievement}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300 z-50"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
