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
        <section className="py-20 bg-white">
            <div className="container max-w-[1200px]">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-12 text-center">Bloglar</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {latestBlogs.map((blog) => (
                        <Link key={blog.id} href={blog.href} className="block h-full">
                            <BlogCard blog={blog} />
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-8 pt-5">
                    <Link 
                        href="/blog"
                        className="inline-flex items-center gap-2 bg-[#ED1D24] text-white px-8 py-3 rounded-full hover:bg-[#d01a20] transition-colors duration-200 font-semibold text-lg hover:shadow-lg"
                    >
                        Tümünü Gör
                        <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                            className="transform transition-transform duration-200 group-hover:translate-x-1"
                        >
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export { BlogGrid }; 