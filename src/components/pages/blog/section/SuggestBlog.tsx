'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { blogs, blogTags } from '@/data/blogs';
import Link from 'next/link';
import Image from 'next/image';


function SuggestBlog() {
    return (
        <div className="container max-w-[1040px]!">
            <h2 className='text-4xl text-center font-bold text-[#0D0D0D] my-10'>En Çok Okunanlar</h2>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                autoHeight={true}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                }}
                loop={true}
                breakpoints={{

                    576: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 1,
                    },
                }}
                className="blog-swiper"
            >
                {blogs.filter((blog) => blog.suggest_blogs).slice(0, 3).map((blog) => (
                    <SwiperSlide key={blog.id} >
                        <Link href={`${blog.href}`} className="group bg-white rounded-xl cursor-pointer shadow-[1px_2px_15px_rgba(0,0,0,0.15)] overflow-hidden">
                            <div className="flex flex-col lg:flex-row h-full">
                                {/* Image Section */}
                                <div className="lg:w-1/2 relative">
                                    <div className="relative w-full h-48 sm:h-70 md:h-60 lg:h-full bg-gradient-to-br from-gray-50 to-gray-100 ">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            className="object-cover rounded-tl-[20px] rounded-bl-[20px]"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                        {/* Overlay for better text readability */}
                                        <div className="absolute inset-0  rounded-tl-[20px] rounded-bl-[20px] bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="lg:w-1/2 p-4 pb-2! pr-2! sm:p-6 lg:p-8 flex flex-col justify-between h-full">
                                    <div className="space-y-4">
                                        <div className="flex gap-2 flex-wrap">
                                            {blog.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[#004CE6] bg-[#1361F5]/10 text-base px-2 py-0.5 rounded font-medium"
                                                    style={{ fontSize: 18, borderRadius: 5, padding: '6px 12px' }}
                                                >
                                                    {blogTags[tag as keyof typeof blogTags]?.name || tag}
                                                </span>
                                            ))}
                                        </div>
                                        {/* Title */}
                                        <h3 className="text-lg sm:text-xl lg:text-2xl mt-4 font-bold text-[#223140] leading-tight line-clamp-2">
                                            {blog.title}
                                        </h3>
                                        <p className='text-[20px] text-[#223140]'>
                                            {blog.desc}
                                        </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="sm:mt-6 sm:pt-4 mt-5 flex justify-between items-center">
                                        <span className='text-[#223140] text-[13px] font-medium'>{blog.date}</span>
                                        <span className='text-[#094BCA] text-base font-medium'>Devamını Oku</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}

                {/* Pagination dots */}
                <div className="swiper-pagination"></div>
            </Swiper>

            <style jsx global>{`
    .blog-swiper .swiper-pagination {
      position: relative; 
      margin-top: 30px;
      text-align: center;
    }
    
    .blog-swiper .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background-color: #D9D9D9;
      opacity: 1;
      margin: 0 6px;
      transition: all 0.3s ease;
    }
    
    .blog-swiper .swiper-pagination-bullet-active {
      background-color: #1361F5; 
      transform: scale(1.2);
    }
  `}</style>
        </div>
    )
}

export { SuggestBlog }  