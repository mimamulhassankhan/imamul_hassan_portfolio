import React from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { useTheme } from "../../contexts/ThemeContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

import "./PageLayout.css";

type PageLayoutProps =
    | {
          type: "default";
          children: React.ReactNode;
          showBreadcrumb?: boolean;
      }
    | {
          type: "with-title";
          children: React.ReactNode;
          title: string;
          subtitle?: string;
          showBreadcrumb?: boolean;
      }
    | {
          type: "with-transition";
          children: React.ReactNode;
          title: string;
          subtitle?: string;
          viewTransitionName: string;
          viewTransition: true;
          showBreadcrumb?: boolean;
      };

const PageLayout: React.FC<PageLayoutProps> = (props) => {
    const { children, showBreadcrumb = true } = props;
    const title =
        "type" in props && (props.type === "with-title" || props.type === "with-transition") ? props.title : undefined;
    const subtitle =
        "type" in props && (props.type === "with-title" || props.type === "with-transition")
            ? props.subtitle
            : undefined;
    const viewTransitionName =
        "type" in props && props.type === "with-transition" ? props.viewTransitionName : undefined;
    const { theme } = useTheme();
    const router = useRouter();
    const location = router.state.location;

    const generateBreadcrumbs = () => {
        const pathSegments = location.pathname.split("/").filter(Boolean);
        const breadcrumbs = [{ name: "Home", path: "/", active: pathSegments.length === 0 }];

        let currentPath = "";
        pathSegments.forEach((segment, index) => {
            currentPath += `/${segment}`;
            const isLast = index === pathSegments.length - 1;

            // Convert slug to readable name
            let name = segment;
            if (segment === "blog") {
                name = "Blog";
            } else if (segment.includes("-")) {
                name = segment
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");
            } else {
                name = segment.charAt(0).toUpperCase() + segment.slice(1);
            }

            breadcrumbs.push({
                name,
                path: currentPath,
                active: isLast,
            });
        });

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    return (
        <div className={`page-layout ${theme}`}>
            {/* Header */}
            <header className="page-header">
                <div className="header-container">
                    {/* Logo/Brand */}
                    <Link to="/" className="brand">
                        <div className="brand-logo">
                            <img src="/images/profile-photo.jpg" alt="Imamul Hassan" />
                        </div>
                        <div className="brand-text">
                            <h1>Imamul Hassan</h1>
                            <span>Full Stack Developer</span>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="page-navigation">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                        <Link to="/" className="nav-link" id="about">
                            About
                        </Link>
                        <Link to="/" className="nav-link" id="projects">
                            Projects
                        </Link>
                        <Link to="/" className="nav-link" id="experience">
                            Experience
                        </Link>
                        <Link to="/blog" className="nav-link">
                            Blog
                        </Link>
                        <Link to="/" className="nav-link" id="contact">
                            Contact
                        </Link>
                    </nav>

                    {/* Theme Toggle */}
                    <div className="header-actions">
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            {/* Breadcrumbs */}
            {showBreadcrumb && breadcrumbs.length > 1 && (
                <nav className="breadcrumb-nav">
                    <div className="breadcrumb-container">
                        {breadcrumbs.map((breadcrumb, index) => (
                            <React.Fragment key={breadcrumb.path}>
                                {index > 0 && (
                                    <span className="breadcrumb-separator">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </span>
                                )}
                                {breadcrumb.active ? (
                                    <span className="breadcrumb-item active">{breadcrumb.name}</span>
                                ) : (
                                    <Link to={breadcrumb.path} className="breadcrumb-item">
                                        {breadcrumb.name}
                                    </Link>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </nav>
            )}

            {/* Page Header */}
            {title && (
                <div className="page-title-section" style={{ viewTransitionName }}>
                    <div className="page-title-container">
                        <h1 className="page-title">{title}</h1>
                        {subtitle && <p className="page-subtitle">{subtitle}</p>}
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="page-main">{children}</main>

            {/* Footer */}
            <footer className="page-footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3>Imamul Hassan</h3>
                            <p>Full Stack Developer passionate about creating innovative web solutions.</p>
                        </div>
                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/" id="about">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" id="projects">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Connect</h4>
                            <ul>
                                <li>
                                    <a href="https://github.com/imamulhassan" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://linkedin.com/in/imamulhassan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:pappuhassan440@gmail.com">Email</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 Imamul Hassan. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PageLayout;
