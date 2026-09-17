import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, EffectCoverflow, Pagination } from "swiper/modules";
import { renderIcon } from "@/utils/iconUtils";
import websiteData from "@/data/websiteData.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/mousewheel";
import "swiper/css/controller";

const AchievementSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesSwiper, setImagesSwiper] = useState<any>(null);
  const [numbersSwiper, setNumbersSwiper] = useState<any>(null);
  const [titlesSwiper, setTitlesSwiper] = useState<any>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedAchievement, setDisplayedAchievement] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [autoPlayDelay] = useState(5000); // 5 seconds

  const achievements = websiteData.achievements.achievements;

  // Handle slide change for all swipers
  const handleSlideChange = (swiper: any) => {
    const newIndex = swiper?.realIndex ?? 0;
    if (newIndex !== activeIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(newIndex);
        setDisplayedAchievement(newIndex);
        setTimeout(() => {
          setIsAnimating(false);
        }, 150);
      }, 150);
    }
  };

  // Toggle auto-play
  const toggleAutoPlay = () => {
    if (isAutoPlaying) {
      imagesSwiper?.autoplay?.stop();
      setIsAutoPlaying(false);
    } else {
      imagesSwiper?.autoplay?.start();
      setIsAutoPlaying(true);
    }
  };

  // Manual navigation functions
  const goToNext = () => {
    if (imagesSwiper) {
      setIsAnimating(true);
      setTimeout(() => {
        imagesSwiper.slideNext();
        setTimeout(() => {
          setIsAnimating(false);
        }, 150);
      }, 150);
    }
  };

  const goToPrev = () => {
    if (imagesSwiper) {
      setIsAnimating(true);
      setTimeout(() => {
        imagesSwiper.slidePrev();
        setTimeout(() => {
          setIsAnimating(false);
        }, 150);
      }, 150);
    }
  };

  const goToSlide = (index: number) => {
    if (imagesSwiper && index !== activeIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        imagesSwiper.slideTo(index);
        setActiveIndex(index);
        setDisplayedAchievement(index);
        setTimeout(() => {
          setIsAnimating(false);
        }, 150);
      }, 150);
    }
  };

  // Auto-play effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying && imagesSwiper) {
      interval = setInterval(() => {
        if (imagesSwiper && !imagesSwiper.destroyed) {
          imagesSwiper.slideNext();
        }
      }, autoPlayDelay);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, imagesSwiper, autoPlayDelay]);

  return (
    <div className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent day-theme:from-purple-600 day-theme:via-pink-600 day-theme:to-red-600">
            {websiteData.achievements.title}
          </h2>
          <p className="text-lg text-white/85 max-w-2xl mx-auto day-theme:text-slate-700">
            {websiteData.achievements.subtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Control Panel */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 day-theme:bg-white/20 flex items-center gap-4">
            {/* Auto/Manual Toggle */}
            <button
              onClick={toggleAutoPlay}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isAutoPlaying
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-white/20 text-white/80 hover:bg-white/30 day-theme:bg-slate-200/50 day-theme:text-slate-700"
              }`}
            >
              {isAutoPlaying ? (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                  Auto
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Manual
                </>
              )}
            </button>

            {/* Manual Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={goToPrev}
                disabled={!isAutoPlaying}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  !isAutoPlaying
                    ? "bg-white/20 text-white hover:bg-white/30 day-theme:bg-slate-200/50 day-theme:text-slate-700"
                    : "bg-white/10 text-white/50 cursor-not-allowed"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={goToNext}
                disabled={!isAutoPlaying}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  !isAutoPlaying
                    ? "bg-white/20 text-white hover:bg-white/30 day-theme:bg-slate-200/50 day-theme:text-slate-700"
                    : "bg-white/10 text-white/50 cursor-not-allowed"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-1">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={!isAutoPlaying}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-gradient-to-r from-purple-400 to-pink-400"
                      : !isAutoPlaying
                      ? "bg-white/40 hover:bg-white/60"
                      : "bg-white/20 cursor-not-allowed"
                  }`}
                />
              ))}
            </div>

            {/* Current Slide Info */}
            <div className="text-xs text-white/60 day-theme:text-slate-600 ml-2">
              {activeIndex + 1} / {achievements.length}
            </div>
          </div>
        </div>

        {/* Sliders Container */}
        <div className="relative inline-flex w-full items-center justify-center">
          {/* Numbers Slider (Background) */}
          <div className="absolute left-0 top-0 z-20 pointer-events-none [@supports(anchor-name:--test)]:left-[anchor(--achievement-image_left)] [@supports(anchor-name:--test)]:top-[anchor(--achievement-image_top)] [@supports(anchor-name:--test)]:-translate-x-1/4 [@supports(anchor-name:--test)]:-translate-y-1/4">
            <Swiper
              onSwiper={setNumbersSwiper}
              slidesPerView={1}
              direction="vertical"
              spaceBetween={0}
              loop={true}
              className="w-60 h-60"
              modules={[Controller]}
            >
              {achievements.map((_, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center peer-hover:scale-110 transition-transform duration-500"
                >
                  <div className="text-9xl font-black text-white/20 select-none transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Images Slider (Main) */}
          <div className="relative z-10 group [anchor-name:--achievement-image]">
            <Swiper
              onSwiper={setImagesSwiper}
              onSlideChange={handleSlideChange}
              controller={{
                control:
                  !numbersSwiper || !titlesSwiper
                    ? []
                    : [numbersSwiper, titlesSwiper],
              }}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{
                el: ".pagination-custom",
                horizontalClass: "h-1",
                bulletActiveClass: "bg-red-500",
                bulletClass:
                  "w-9 h-1 mr-2 last:mr-0 cursor-pointer inline-block bg-gray-600 rounded",
                enabled: true,
                clickable: true,
              }}
              className="w-[700px] h-[400px]"
              modules={[EffectCoverflow, Controller, Pagination]}
            >
              {achievements.map((achievement, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center group"
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center animate-ken-burns peer"
                      style={{
                        backgroundImage: `url(${achievement.images[0]})`,
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Titles Slider (Lower left corner) */}
          <div className="absolute left-8 bottom-8 z-20 pointer-events-none [@supports(anchor-name:--test)]:left-[anchor(--achievement-image_left)] [@supports(anchor-name:--test)]:bottom-[anchor(--achievement-image_bottom)] [@supports(anchor-name:--test)]:translate-x-8 [@supports(anchor-name:--test)]:-translate-y-2">
            <Swiper
              onSwiper={setTitlesSwiper}
              direction="vertical"
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              className="w-full h-32"
              modules={[Controller]}
            >
              {achievements.map((achievement, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-end justify-start peer-hover:translate-x-2 transition-transform duration-500"
                >
                  <div className="space-y-1">
                    <h3 className="text-3xl font-bold text-white text-shadow-lg leading-tight peer-hover:text-purple-300 transition-colors duration-500">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-white/80 text-shadow-md">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-3 h-3 text-purple-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-medium">{achievement.date}</span>
                      </div>
                      <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-3 h-3 text-purple-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-medium">
                          {achievement.organization}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                        {renderIcon(achievement.icon, {
                          className: "text-white text-xs",
                        })}
                      </div>
                      <p className="text-sm text-white/70 text-shadow-md font-medium peer-hover:text-purple-200 transition-colors duration-500">
                        {achievement.category}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Pagination */}
          <div className="pagination-custom absolute z-20  [left:unset] [bottom:unset] [@supports(anchor-name:--test)]:right-[anchor(--achievement-image_right)] [@supports(anchor-name:--test)]:top-[anchor(--achievement-image_bottom)] [@supports(anchor-name:--test)]:translate-y-2"></div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            disabled={isAutoPlaying}
            className={`absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-30 ${
              isAutoPlaying
                ? "bg-black/20 text-white/50 cursor-not-allowed"
                : "bg-black/30 text-white hover:bg-black/50 hover:scale-110"
            }`}
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={isAutoPlaying}
            className={`absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-30 ${
              isAutoPlaying
                ? "bg-black/20 text-white/50 cursor-not-allowed"
                : "bg-black/30 text-white hover:bg-black/50 hover:scale-110"
            }`}
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Achievement Details Card */}
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 day-theme:bg-white/20">
            {/* Compact Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                {renderIcon(achievements[displayedAchievement].icon, {
                  className: `text-white text-lg transition-all duration-300 ease-in-out ${
                    isAnimating
                      ? "scale-110 opacity-50"
                      : "scale-100 opacity-100"
                  }`,
                })}
              </div>
              <div className="flex-1">
                <h3
                  className={`text-xl font-bold text-white day-theme:text-slate-900 transition-all duration-300 ease-in-out ${
                    isAnimating
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  {achievements[displayedAchievement].title}
                </h3>
                <p
                  className={`text-purple-300 font-medium day-theme:text-purple-700 text-sm transition-all duration-300 ease-in-out delay-75 ${
                    isAnimating
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  {achievements[displayedAchievement].category}
                </p>
              </div>
            </div>

            {/* Story Section */}
            <div className="mb-4">
              <h4
                className={`text-base font-semibold text-white day-theme:text-slate-900 mb-2 transition-all duration-300 ease-in-out delay-100 ${
                  isAnimating
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                }`}
              >
                The Story Behind
              </h4>
              <p
                className={`text-gray-200 leading-relaxed day-theme:text-slate-700 text-sm transition-all duration-300 ease-in-out delay-150 ${
                  isAnimating
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {achievements[displayedAchievement].story}
              </p>
            </div>

            {/* Impact Section */}
            <div className="mb-4">
              <h4
                className={`text-base font-semibold text-white day-theme:text-slate-900 mb-2 transition-all duration-300 ease-in-out delay-200 ${
                  isAnimating
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                }`}
              >
                Impact & Results
              </h4>
              <div
                className={`bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-3 day-theme:from-purple-500/20 day-theme:to-pink-500/20 day-theme:border-purple-500/40 transition-all duration-300 ease-in-out delay-250 ${
                  isAnimating
                    ? "opacity-0 translate-y-2 scale-95"
                    : "opacity-100 translate-y-0 scale-100"
                }`}
              >
                <p
                  className={`text-purple-200 font-medium day-theme:text-purple-800 text-sm transition-all duration-300 ease-in-out delay-300 ${
                    isAnimating
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  {achievements[displayedAchievement].impact}
                </p>
              </div>
            </div>

            {/* Technologies Section */}
            <div>
              <h4
                className={`text-base font-semibold text-white day-theme:text-slate-900 mb-2 transition-all duration-300 ease-in-out delay-350 ${
                  isAnimating
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                }`}
              >
                Technologies Used
              </h4>
              <div
                className={`flex flex-wrap gap-2 transition-all duration-300 ease-in-out delay-400 ${
                  isAnimating
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {achievements[displayedAchievement].technologies.map(
                  (tech, index) => (
                    <span
                      key={`${displayedAchievement}-${index}`}
                      className={`px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-200 rounded-full text-xs font-medium backdrop-blur-sm day-theme:from-purple-500/40 day-theme:to-pink-500/40 day-theme:border-purple-500/60 day-theme:text-slate-900 transition-all duration-300 ease-in-out ${
                        isAnimating
                          ? "opacity-0 scale-75 translate-y-2"
                          : "opacity-100 scale-100 translate-y-0"
                      }`}
                      style={{ transitionDelay: `${450 + index * 50}ms` }}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementSlider;
