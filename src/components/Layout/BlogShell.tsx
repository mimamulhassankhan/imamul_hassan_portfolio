import React from "react"
import { Link } from "@tanstack/react-router"
import { Code2, Contact, Mail } from "lucide-react"

import ThemeToggle from "@/components/ThemeToggle/ThemeToggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import websiteData from "@/data/websiteData.json"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
]

export const BlogHeader: React.FC = () => (
  <header className="sticky top-0 z-40 h-20 border-b bg-background/90 backdrop-blur-xl">
    <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
      <Link to="/" className="flex items-center gap-3 text-left">
        <Avatar size="lg">
          <AvatarImage src={websiteData.profile.avatar.image} alt={websiteData.profile.name} />
          <AvatarFallback>IH</AvatarFallback>
        </Avatar>
        <span className="hidden flex-col sm:flex">
          <span className="font-heading text-base font-semibold leading-none">{websiteData.profile.name}</span>
          <span className="mt-1 text-sm text-muted-foreground">{websiteData.profile.title}</span>
        </span>
      </Link>

      <nav className="hidden items-center gap-1 rounded-xl border bg-card p-1 md:flex">
        {navItems.map((item) => (
          <Button key={item.href} variant="ghost" size="sm" render={<a href={item.href} />}>
            {item.label}
          </Button>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <ThemeToggle onHeader />
      </div>
    </div>
  </header>
)

export const BlogFooter: React.FC = () => (
  <>
    <Separator />
    <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
      <span>Design and developed by Imamul Hassan Khan.</span>
      <span className="flex items-center gap-3">
        <a href="https://github.com/mimamulhassankhan" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-foreground">
          <Code2 data-icon="inline-start" />
          Code
        </a>
        <a href="https://linkedin.com/in/imamul-hassan-khan" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-foreground">
          <Contact data-icon="inline-start" />
          LinkedIn
        </a>
        <a href="mailto:pappuhassan440@gmail.com" className="inline-flex items-center gap-1 hover:text-foreground">
          <Mail data-icon="inline-start" />
          Email
        </a>
      </span>
    </footer>
  </>
)

interface BlogShellProps {
  children: React.ReactNode
}

export const BlogShell: React.FC<BlogShellProps> = ({ children }) => (
  <main className="min-h-screen bg-background text-foreground">
    <BlogHeader />
    {children}
    <BlogFooter />
  </main>
)
