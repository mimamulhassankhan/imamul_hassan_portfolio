import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Theme = "day" | "night" | "profile";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (
      savedTheme === "day" ||
      savedTheme === "night" ||
      savedTheme === "profile"
    ) {
      return savedTheme;
    }
    // Default to profile theme
    return "profile";
  });

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    // Update document class for global styling
    document.documentElement.classList.remove(
      "day-theme",
      "night-theme",
      "profile-theme"
    );
    document.documentElement.classList.add(`${newTheme}-theme`);
    
    // Also update body class for immediate background changes
    document.body.classList.remove(
      "day-theme",
      "night-theme",
      "profile-theme"
    );
    document.body.classList.add(`${newTheme}-theme`);
  };

  const toggleTheme = () => {
    const themes: Theme[] = ["profile", "night", "day"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  useEffect(() => {
    // Apply theme on mount
    document.documentElement.classList.remove(
      "day-theme",
      "night-theme",
      "profile-theme"
    );
    document.documentElement.classList.add(`${theme}-theme`);
    
    // Also apply to body for immediate background changes
    document.body.classList.remove(
      "day-theme",
      "night-theme",
      "profile-theme"
    );
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
