import React from "react";
import { Link } from "@tanstack/react-router";
import { FaCalendarAlt, FaClock, FaTag, FaArrowRight } from "react-icons/fa";

interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    publishDate: string;
    tags: string[];
    image: string;
    featured: boolean;
}

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <Link
            to={`/blog/$slug`}
            params={{
                slug: post.slug,
            }}
            className="group block bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl day-theme:bg-white/20 day-theme:border-slate-300/50 day-theme:hover:bg-white/30 day-theme:hover:border-slate-400/50"
            viewTransition
        >
            {/* Featured Badge */}
            {post.featured && (
                <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        Featured
                    </span>
                </div>
            )}

            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                    }}
                />
                {/* placeholder div */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-500">
                    <p className="text-center text-2xl font-bold">{post.title}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30 day-theme:bg-purple-100 day-theme:text-purple-700 day-theme:border-purple-200">
                        {post.category}
                    </span>
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors duration-300 day-theme:text-slate-900 day-theme:group-hover:text-purple-600">
                    {post.title}
                </h3>
                {/* Excerpt */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 day-theme:text-slate-700">
                    {post.excerpt}
                </p>
                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4 day-theme:text-slate-600">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                            <FaCalendarAlt className="w-3 h-3" />
                            <span>{formatDate(post.publishDate)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FaClock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>
                {/* Tags */}
                {post.tags.length > 0 && (
                    <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 3).map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-gray-300 border border-white/20 day-theme:bg-slate-100 day-theme:text-slate-700 day-theme:border-slate-200"
                                >
                                    <FaTag className="w-2 h-2 mr-1" />
                                    {tag}
                                </span>
                            ))}
                            {post.tags.length > 3 && (
                                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-gray-300 border border-white/20 day-theme:bg-slate-100 day-theme:text-slate-700 day-theme:border-slate-200">
                                    +{post.tags.length - 3} more
                                </span>
                            )}
                        </div>
                    </div>
                )}
                {/* Read More Button */}
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors duration-300 day-theme:text-purple-600 day-theme:group-hover:text-purple-700">
                        Read Article
                    </span>
                    <FaArrowRight className="w-4 h-4 text-purple-400 group-hover:text-purple-300 group-hover:translate-x-1 transition-all duration-300 day-theme:text-purple-600 day-theme:group-hover:text-purple-700" />
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
