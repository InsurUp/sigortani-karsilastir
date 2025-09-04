import { BlogDetailLayout } from '@/components/pages/blog/BlogDetailLayout'
import React from 'react'
import { blogs } from '@/data/blogs'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Next 15 uyumlu generateMetadata
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params
  const blog = blogs.find(b => b.href === `/blog/${slug}`)

  if (!blog) {
    return {
      title: 'Blog Bulunamadı',
      description: 'Aradığınız blog yazısı bulunamadı.',
    }
  }

  return {
    title: blog.meta_title,
    description: blog.meta_description,
  }
}

// Next 15 uyumlu Page component
export default async function BlogDetailPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const blog = blogs.find(b => b.href === `/blog/${slug}`)

  if (!blog) {
    notFound()
  }

  return <BlogDetailLayout blog={blog!} />
}
