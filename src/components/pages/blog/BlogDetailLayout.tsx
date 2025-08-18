import { Banner, BlogCard } from '@/components/common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faFacebookF, faStaylinked } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Link from 'next/link'
import { Blog, blogs } from '@/data/blogs'
import Image from 'next/image'

interface BlogDetailLayoutProps {
    blog: Blog;
}

function BlogDetailLayout({ blog }: BlogDetailLayoutProps) {
    const otherBlogs = blogs
        .filter(b => b.id !== blog.id)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    return (
        <main>
            <Banner text='Blog' />
            <section style={{ backgroundColor: 'rgba(217, 237, 250, 0.41)' }}>
                <div className='container max-w-[1040px]! py-10'>
                    <div className='bg-white p-[25px] md:p-[45px] rounded-[20px] flex flex-col gap-4'>
                        <Image src={blog.detail_image} alt={blog.title} width={1040} height={500} className="w-full h-auto object-cover rounded-lg" />
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span
                                className="text-[#004CE6] bg-[#1361F5]/10 px-2 py-0.5 rounded"
                                style={{ fontSize: 13, fontWeight: 500, borderRadius: 5, padding: '3px 8px' }}
                            >
                                {blog.category}
                            </span>
                            <span>{blog.date}</span>
                        </div>
                        <h1 className="text-4xl mb-0 font-bold leading-tight">{blog.title}</h1>

                        <article className='blog-detail-content'>
                            <p>
                                {blog.content}
                            </p>
                        </article>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-5">
                            <span>Paylaş:</span>
                            <Link href="#" className="text-gray-600 hover:text-gray-900"><FontAwesomeIcon icon={faFacebookF} /></Link>
                            <Link href="#" className="text-gray-600 hover:text-gray-900"><FontAwesomeIcon icon={faTwitter} /></Link>
                            <Link href="#" className="text-gray-600 hover:text-gray-900"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                            <Link href="#" className="text-gray-600 hover:text-gray-900"><FontAwesomeIcon icon={faStaylinked} /></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container max-w-[1040px]! py-10'>
                    <h2 className='md:text-4xl font-bold mb-10 text-center text-3xl'>Diğer Bloglar</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {otherBlogs.map(ob => (
                            <Link href={`${ob.href}`} key={ob.id}>
                                <BlogCard blog={ob} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export { BlogDetailLayout }