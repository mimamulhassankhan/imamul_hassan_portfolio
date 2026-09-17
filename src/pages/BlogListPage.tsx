import React, { useEffect } from "react";
import BlogList from "../components/Blogs/BlogList";
import { BlogShell } from "@/components/Layout/BlogShell";

const BlogListPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    return (
        <BlogShell>
            <BlogList />
        </BlogShell>
    );
};

export default BlogListPage;
