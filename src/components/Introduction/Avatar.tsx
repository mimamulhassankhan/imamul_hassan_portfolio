import React from "react";

const Avatar: React.FC = () => {
  return (
    <div className="text-center">
      <div className="relative">
        {/* Professional Photo */}
        <div className="w-60 h-60 rounded-full mx-auto overflow-hidden border-6 border-white/20 shadow-2xl relative">
          <img
            src="/images/profile-photo.jpg"
            alt="Imamul Hassan - Full Stack Developer"
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              // Fallback to initials if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const fallback = target.parentElement?.querySelector(
                ".fallback"
              ) as HTMLElement;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          {/* Fallback to initials if image doesn't load */}
          <div className="fallback hidden w-full h-full bg-gradient-to-br from-profile-suit-blue-500 to-profile-suit-blue-600 items-center justify-center text-6xl text-white font-bold absolute top-0 left-0">
            IH
          </div>
        </div>

        {/* Enhanced glow effect */}
        <div className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-full bg-gradient-to-br from-profile-suit-blue-500 to-profile-suit-blue-600 opacity-40 -z-10 blur-xl"></div>
      </div>

      <h2 className="mt-6 text-3xl font-bold text-white day-theme:text-slate-900">
        Imamul Hassan
      </h2>
      <p className="text-white/80 text-xl mt-2 day-theme:text-slate-700">
        Full Stack Developer
      </p>
    </div>
  );
};

export default Avatar;
