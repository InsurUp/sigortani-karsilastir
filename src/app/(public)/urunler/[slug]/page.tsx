import React from 'react'
import ProductDetail from '@/components/pages/product/ProductDetail'

interface PageProps {
  params: Promise<{ slug: string }>
}

async function page({ params }: PageProps) {
  return (
    <ProductDetail params={params} />
  )
}

export default page