import { Banner } from '@/components/common'
import { SuggestBlog } from './section/SuggestBlog'
import React from 'react'
import AllBlog from './section/AllBlog'

function BlogPageLayout() {
    return (
        <main>
            <Banner text='Blog' />
            <SuggestBlog />
            <AllBlog />
        </main>
    )
}

export { BlogPageLayout } 