"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useMemo } from 'react'
import { blogs } from '@/data/blogs'
import { BlogCard } from '@/components/common/blog/BlogCard'

function AllBlog() {
    const [searchTerm, setSearchTerm] = useState('')
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const sortedAndFilteredBlogs = useMemo(() => {
        const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        return sortedBlogs.filter(blog =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }, [searchTerm])

    return (
        <section>
            <div className='container max-w-[1040px]! '>
                <div className='flex justify-end mb-4 relative'>
                    <div className={
                        `flex items-center transition-all duration-300 ease-in-out mt-15 mb-10
                        ${isSearchOpen ? 'w-full' : 'w-auto'}
                        ${isSearchOpen ? 'border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-[#1361F5]' : ''}`
                    } style={{ boxShadow: '0 4px 7px -3px rgba(0,0,0,0.10)',borderRadius:"20px" }}>
                        {isSearchOpen && (
                            <div className="relative flex-1">
                                <input
                                    type='text'
                                    placeholder='Bloglarda Ara...'
                                    className='w-full p-2 focus:outline-none bg-transparent pr-8'
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                {searchTerm && (
                                    <FontAwesomeIcon
                                        icon={faXmark}
                                        className='absolute right-3 top-1/2 -translate-y-1/2 text-[#9FA4B8] cursor-pointer'
                                        onClick={() => setSearchTerm('')}
                                    />
                                )}
                            </div>
                        )}
                        <div className="w-[90px] h-[60px] flex items-center justify-center flex-shrink-0">
                            <FontAwesomeIcon
                                icon={isSearchOpen ? faXmark : faMagnifyingGlass}
                                className='text-2xl cursor-pointer text-[#9FA4B8]'
                                onClick={() => {
                                    if (isSearchOpen) {
                                        setSearchTerm('')
                                    }
                                    setIsSearchOpen(!isSearchOpen)
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {sortedAndFilteredBlogs.map(blog => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AllBlog