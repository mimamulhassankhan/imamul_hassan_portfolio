"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Intro", href: "/#intro" },
    { name: "About Me", href: "/#about" },
    { name: "Recent Works", href: "/#projects" },
    { name: "My Blogs", href: "/#blogs" },
    { name: "Contact Me", href: "/#contact" },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gray-900/10 backdrop-blur-sm">
      <div className="flex flex-col h-full p-4">
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <nav className="flex-1 mt-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block w-full p-3 text-center text-white rounded-lg transition-colors duration-200
                    ${
                      pathname === item.href
                        ? "bg-white/20 backdrop-blur-sm"
                        : "hover:bg-white/10 backdrop-blur-sm"
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
