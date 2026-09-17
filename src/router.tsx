import { createRouter, createRoute, createRootRoute, Outlet, HeadContent, Link } from "@tanstack/react-router";
import Home from "@/components/Home/Home";
import BlogDetails from "@/components/BlogDetails";
import BlogListPage from "@/pages/BlogListPage";

// Root route with document head management
const rootRoute = createRootRoute({
    component: () => (
        <>
            <HeadContent />
            <Outlet />
        </>
    ),
    notFoundComponent: () => (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 day-theme:from-blue-50 day-theme:via-purple-100 day-theme:to-pink-50 profile-theme:from-slate-900 profile-theme:via-slate-800 profile-theme:to-teal-600">
            <div className="text-center px-6">
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent day-theme:from-purple-600 day-theme:via-pink-600 day-theme:to-red-600 animate-pulse">
                        404
                    </h1>
                </div>

                {/* Error Message */}
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 day-theme:text-slate-900">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-white/80 max-w-md mx-auto leading-relaxed day-theme:text-slate-700">
                        Oops! The page you're looking for seems to have wandered off into the digital void.
                    </p>
                </div>

                {/* Decorative Elements */}
                <div className="mb-8 flex justify-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        to="/"
                        className="group relative inline-flex px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-base hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 cursor-pointer day-theme:from-[#DA4453] day-theme:to-[#89216B] day-theme:hover:from-[#C13A47] day-theme:hover:to-[#7A1D5F] day-theme:hover:shadow-[#DA4453]/25"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            Back to Home
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 day-theme:from-[#C13A47] day-theme:to-[#7A1D5F]"></div>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="group relative inline-flex px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-xl font-semibold text-base hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 day-theme:bg-white/20 day-theme:border-slate-300 day-theme:text-slate-900 day-theme:hover:bg-white/30 day-theme:hover:border-slate-400"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Go Back
                        </span>
                    </button>
                </div>

                {/* Floating Elements */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse day-theme:bg-sky-400/20 profile-theme:bg-teal-500/15"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000 day-theme:bg-blue-400/15 profile-theme:bg-cyan-500/12"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500 day-theme:bg-indigo-400/12 profile-theme:bg-turquoise-500/10"></div>
                </div>
            </div>
        </div>
    ),
});

// Home route
const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Home,
    head: () => ({
        meta: [
            {
                title: "Imamul Hassan - Full Stack Developer",
            },
            {
                name: "description",
                content: "Full Stack Developer passionate about creating innovative web solutions",
            },
            { property: "og:title", content: "Imamul Hassan - Full Stack Developer" },
            {
                property: "og:description",
                content: "Full Stack Developer passionate about creating innovative web solutions",
            },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary_large_image" },
            {
                name: "twitter:title",
                content: "Imamul Hassan - Full Stack Developer",
            },
            {
                name: "twitter:description",
                content: "Full Stack Developer passionate about creating innovative web solutions",
            },
        ],
    }),
});

// Blog list route
const blogRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/blog",
    component: BlogListPage,
    head: () => ({
        meta: [
            { title: "Blog - Imamul Hassan" },
            {
                name: "description",
                content: "Read my latest articles about web development, technology, and software engineering",
            },
            { property: "og:title", content: "Blog - Imamul Hassan" },
            {
                property: "og:description",
                content: "Read my latest articles about web development, technology, and software engineering",
            },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: "Blog - Imamul Hassan" },
            {
                name: "twitter:description",
                content: "Read my latest articles about web development, technology, and software engineering",
            },
        ],
    }),
});

// Blog details route
const blogSlugRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/blog/$slug",
    component: BlogDetails,
    head: () => ({
        meta: [
            { title: "Blog Post - Imamul Hassan" },
            { name: "description", content: "Read this blog post by Imamul Hassan" },
        ],
    }),
});

// Catch-all route
const catchAllRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "*",
    component: Home, //To-do: Add a 404 page
    head: () => ({
        meta: [
            { title: "Imamul Hassan - Full Stack Developer" },
            {
                name: "description",
                content: "Full Stack Developer passionate about creating innovative web solutions",
            },
        ],
    }),
});

// Create the route tree
const routeTree = rootRoute.addChildren([indexRoute, blogRoute, blogSlugRoute, catchAllRoute]);

// Create the router
export const router = createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: false,
    defaultViewTransition: true,
    // scrollToTopSelectors: ["body"],
    context: {
        head: {
            title: "Imamul Hassan - Full Stack Developer",
            meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }, { charset: "utf-8" }],
        },
    },
});

// Register the router for type safety
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}
