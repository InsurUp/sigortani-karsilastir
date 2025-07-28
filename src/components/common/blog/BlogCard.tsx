import React from "react";
import { Blog } from "@/data/blogs";
import Image from "next/image";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div
      className="bg-white overflow-hidden flex flex-col h-full cursor-pointer transition hover:shadow-md"
      style={{ borderRadius: 10, boxShadow: "1px 2px 15px rgba(0,0,0,0.15)" }}
    >
      <Image
        src={blog.image}
        alt={blog.title}
        width={400}
        height={192}
        className="w-full h-48 object-cover"
        style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
      />
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-[#004CE6] bg-[#1361F5]/10 px-2 py-0.5 rounded"
            style={{ fontSize: 13, fontWeight: 500, borderRadius: 5, padding: '3px 8px' }}
          >
            {blog.category}
          </span>
          <span className="text-xs text-[#223140] font-medium">{blog.date}</span>
        </div>
        <h3 className="text-[18px] font-medium text-[#223140] mb-2 line-clamp-2">
          {blog.title}
        </h3>
        <span
          className="mt-auto text-[#094BCA] text-sm font-medium hover:underline"
        >
          Devamını Oku
        </span>
      </div>
    </div>
  );
};

export { BlogCard }; 