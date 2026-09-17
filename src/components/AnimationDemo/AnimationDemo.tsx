import React from "react";
import AnimatedElement from "../AnimatedElement/AnimatedElement";

const AnimationDemo: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <AnimatedElement animation="fade-in-up" scrollTrigger={true}>
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Animation Showcase
          </h2>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Fade In Animations */}
          <AnimatedElement
            animation="fade-in-up"
            delay={0.1}
            scrollTrigger={true}
          >
            <div className="card acrylic-bg p-6 text-center rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Fade In Up
              </h3>
              <p className="text-gray-300 mb-4">
                Elements slide up and fade in smoothly
              </p>
              <button className="w-full magnetic px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Hover Me
              </button>
            </div>
          </AnimatedElement>

          <AnimatedElement
            animation="fade-in-left"
            delay={0.2}
            scrollTrigger={true}
          >
            <div className="card acrylic-bg p-6 text-center rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Fade In Left
              </h3>
              <p className="text-gray-300 mb-4">
                Elements slide in from the left
              </p>
              <button className="w-full magnetic px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Hover Me
              </button>
            </div>
          </AnimatedElement>

          <AnimatedElement
            animation="fade-in-right"
            delay={0.3}
            scrollTrigger={true}
          >
            <div className="card acrylic-bg p-6 text-center rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Fade In Right
              </h3>
              <p className="text-gray-300 mb-4">
                Elements slide in from the right
              </p>
              <button className="w-full magnetic px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300">
                Hover Me
              </button>
            </div>
          </AnimatedElement>

          {/* Scale and Rotate Animations */}
          <AnimatedElement
            animation="scale-in"
            delay={0.4}
            scrollTrigger={true}
            className="lg:col-span-2"
          >
            <div className="card acrylic-bg p-6 text-center rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Scale In
              </h3>
              <p className="text-gray-300 mb-4">
                Elements scale up from small to full size
              </p>
              <div className="float">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium">
                  Floating Badge
                </span>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement
            animation="rotate-in"
            delay={0.5}
            scrollTrigger={true}
            className="lg:col-span-2"
          >
            <div className="card acrylic-bg p-6 text-center rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Rotate In
              </h3>
              <p className="text-gray-300 mb-4">
                Elements rotate in with scale effect
              </p>
              <div className="pulse">
                <span className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-sm font-medium">
                  Pulsing Badge
                </span>
              </div>
            </div>
          </AnimatedElement>

          {/* Continuous Animations */}
          <AnimatedElement animation="float">
            <div className="card acrylic-bg p-6 text-center rounded-2xl glow">
              <h3 className="text-xl font-semibold mb-4 text-white">Float</h3>
              <p className="text-gray-300 mb-4">
                Continuous floating animation
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                Interactive
              </button>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="pulse">
            <div className="card acrylic-bg p-6 text-center rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-white">Pulse</h3>
              <p className="text-gray-300 mb-4">Continuous pulsing effect</p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-medium hover:from-pink-600 hover:to-red-600 transition-all duration-300">
                Interactive
              </button>
            </div>
          </AnimatedElement>

          <AnimatedElement>
            <div className="card acrylic-bg p-6 text-center rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-white">Bounce</h3>
              <p className="text-gray-300 mb-4">Click to trigger bounce</p>
              <button className="w-full bounce px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-lg font-medium hover:from-teal-600 hover:to-green-600 transition-all duration-300">
                Bounce Me
              </button>
            </div>
          </AnimatedElement>

          {/* Text Reveal */}
          <AnimatedElement className="col-span-full">
            <div className="card acrylic-bg p-6 text-center rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-white text-reveal">
                Text Reveal Effect
              </h3>
              <p className="text-gray-300 mb-4 text-reveal">
                This text has a reveal animation
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Trigger Reveal
              </button>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default AnimationDemo;
