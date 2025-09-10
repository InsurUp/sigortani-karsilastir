import { Banner, BlogCard } from '@/components/common'
import React from 'react'
import Link from 'next/link'
import { Blog, blogs, blogTags } from '@/data/blogs'
import Image from 'next/image'

interface BlogDetailLayoutProps {
    blog: Blog;
}

function BlogDetailLayout({ blog }: BlogDetailLayoutProps) {
    const otherBlogs = blogs
        .filter(b => b.id !== blog.id)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    // Paylaşım URL'lerini oluştur
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = `${blog.title} - Sigortanı Karşılaştır`;
    
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
        instagram: `https://www.instagram.com/` // Instagram direkt paylaşım linki yok, profil sayfasına yönlendirme
    };

    const getRelatedProducts = (category: string) => {
        switch(category) {
            case 'aracim':
                return [
                    { key: 'kasko', name: 'Kasko Sigortası', icon: '/images/product/icon/kasko.svg', href: '/kasko-teklif' },
                    { key: 'trafik', name: 'Trafik Sigortası', icon: '/images/product/icon/traffic.svg', href: '/trafik-teklif' },
                    { key: 'imm', name: 'İMM Sigortası', icon: '/images/product/icon/imm.svg', href: '/imm-teklif' }
                ];
            case 'evim':
                return [
                    { key: 'konut', name: 'Konut Sigortası', icon: '/images/product/icon/konut.svg', href: '/konut-teklif' },
                    { key: 'dask', name: 'DASK Sigortası', icon: '/images/product/icon/dask.svg', href: '/dask-teklif' }
                ];
            case 'sagligim':
                return [
                    { key: 'tss', name: 'Tamamlayıcı Sağlık', icon: '/images/product/icon/tss.svg', href: '/tss-teklif' },
                    { key: 'ozel-saglik', name: 'Özel Sağlık', icon: '/images/product/icon/ozs.svg', href: '/ozel-saglik-teklif' },
                    { key: 'seyahat-saglik', name: 'Seyahat Sağlık', icon: '/images/product/icon/seyahat-saglik.svg', href: '/seyahat-teklif' }
                ];
            case 'diger':
                return [
                    { key: 'cep-telefonu', name: 'Cep Telefonu', icon: '/images/product/icon/telefon.svg', href: '/cep-telefonu-teklif' }
                ];
            default:
                return [];
        }
    };

    return (
        <main>
            <Banner text='Blog' />
            <section style={{ backgroundColor: 'rgba(217, 237, 250, 0.41)' }}>
                <div className='container max-w-[1200px] py-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
                        <div className='lg:col-span-3 bg-white p-[25px] md:p-[45px] rounded-[20px] flex flex-col gap-4'>
                        <Image src={blog.detail_image} alt={blog.title} width={1040} height={500} className="w-full h-auto object-cover rounded-lg" />
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex gap-2 flex-wrap">
                                {blog.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[#004CE6] bg-[#1361F5]/10 px-2 py-0.5 rounded font-medium"
                                        style={{ fontSize: 13, borderRadius: 5, padding: '3px 8px' }}
                                    >
                                        {blogTags[tag as keyof typeof blogTags]?.name || tag}
                                    </span>
                                ))}
                            </div>
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
                            <Link 
                                href={shareUrls.facebook} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </Link>
                            <Link 
                                href={shareUrls.twitter} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-400 transition-colors p-2 hover:bg-blue-50 rounded-full"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z"/>
                                </svg>
                            </Link>
                            <Link 
                                href={shareUrls.linkedin} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-700 transition-colors p-2 hover:bg-blue-50 rounded-full"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </Link>
                            <Link 
                                href={shareUrls.instagram} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-pink-600 transition-colors p-2 hover:bg-pink-50 rounded-full"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </Link>
                        </div>
                        </div>
                        
                        {/* Teklif Al Kutusu */}
                        <div className='lg:col-span-1'>
                            <div className='bg-white p-6 rounded-[20px] sticky top-6'>
                                <h3 className='text-xl font-bold text-center mb-4'>Hemen Teklif Al</h3>
                                <p className='text-sm text-gray-600 text-center mb-6'>
                                    <span className='font-bold'>Saniyeler içerisinde</span> 30'a yakın sigorta şirketinin tekliflerini karşılaştır, <span className='font-bold'>anında satın al.</span>
                                </p>
                                <div className='space-y-3'>
                                    {getRelatedProducts(blog.category).map((product) => (
                                        <Link 
                                            key={product.key}
                                            href={product.href} 
                                            className='flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group'
                                        >
                                            <Image 
                                                src={product.icon} 
                                                alt={product.name} 
                                                width={40} 
                                                height={40} 
                                                className='w-10 h-10'
                                            />
                                            <div className='flex-1'>
                                                <div className='font-semibold text-gray-800 text-sm mb-1'>{product.name}</div>
                                                <div className='text-blue-600 font-medium text-xs group-hover:text-blue-700'>Teklif Al</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container max-w-[1200px] py-10'>
                    <h2 className='md:text-4xl font-bold mb-10 text-center text-3xl'>Diğer Bloglar</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {otherBlogs.map(ob => (
                            <BlogCard key={ob.id} blog={ob} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export { BlogDetailLayout }