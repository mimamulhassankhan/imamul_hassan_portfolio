import React from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?:
    | "fade-in-up"
    | "fade-in-left"
    | "fade-in-right"
    | "slide-in-top"
    | "scale-in"
    | "rotate-in"
    | "float"
    | "pulse"
    | "bounce"
    | "shake";
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  scrollTrigger?: boolean;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = "fade-in-up",
  delay = 0,
  duration,
  className = "",
  style = {},
  scrollTrigger = false,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const getAnimationClass = () => {
    if (scrollTrigger && !isVisible) {
      return "opacity-0";
    }
    return animation;
  };

  const getAnimationStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      ...style,
      animationDelay: `${delay}s`,
    };

    if (duration) {
      baseStyle.animationDuration = `${duration}s`;
    }

    if (scrollTrigger && !isVisible) {
      baseStyle.opacity = "0";
      baseStyle.transform = "translateY(40px)";
    }

    return baseStyle;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={getAnimationStyle()}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
