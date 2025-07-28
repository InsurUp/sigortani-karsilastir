import React from "react";
import { blogs } from "@/data/blogs";
import { BlogCard } from "@/components/common";
import Link from "next/link";

const BlogGrid: React.FC = () => {
    // Tarihe göre azalan sırala, son 3 blogu al
    const latestBlogs = [...blogs]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    return (
        <section className="py-15">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold mb-6 text-center">Bloglar</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {latestBlogs.map((blog) => (
                        <Link key={blog.id} href={`/blog/${blog.id}`} className="block h-full">
                            <BlogCard blog={blog} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { BlogGrid }; 