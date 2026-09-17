import React from "react";
import { Link } from "@tanstack/react-router";
import websiteData from "../../data/websiteData.json";
import BlogCard from "./BlogCard";

interface BlogsProps {
    limit?: number; // Optional limit for number of posts to show
    showViewAll?: boolean; // Whether to show the "View All Posts" button
}

const Blogs: React.FC<BlogsProps> = ({ limit, showViewAll = true }) => {
    const { blogs } = websiteData;

    // Limit the number of posts if limit is provided
    const displayedPosts = limit ? blogs.posts.slice(0, limit) : blogs.posts;

    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent day-theme:from-purple-600 day-theme:via-pink-600 day-theme:to-red-600">
                        {blogs.title}
                    </h2>
                    <p className="text-lg text-white/85 max-w-2xl mx-auto leading-relaxed day-theme:text-slate-700">
                        {blogs.subtitle}
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>

                {/* View All Posts Button - Only show if showViewAll is true and there are more posts than the limit */}
                {showViewAll && limit && blogs.posts.length > limit && (
                    <div className="text-center mt-12">
                        <Link
                            to="/blog"
                            className="group relative inline-flex px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-base hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 cursor-pointer day-theme:from-[#DA4453] day-theme:to-[#89216B] day-theme:hover:from-[#C13A47] day-theme:hover:to-[#7A1D5F] day-theme:hover:shadow-[#DA4453]/25"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                    />
                                </svg>
                                View All Posts
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 day-theme:from-[#C13A47] day-theme:to-[#7A1D5F]"></div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blogs;
