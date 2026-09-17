import React from "react"
import { Moon, Sun, UserRound } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/contexts/ThemeContext"

interface ThemeToggleProps {
  onHeader?: boolean
}

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  const { theme, toggleTheme } = useTheme()
  const nextTheme = theme === "profile" ? "night" : theme === "night" ? "day" : "profile"

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      {theme === "profile" && <UserRound />}
      {theme === "night" && <Moon />}
      {theme === "day" && <Sun />}
    </Button>
  )
}

export default ThemeToggle
