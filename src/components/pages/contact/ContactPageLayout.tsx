import { Banner, BlogGrid } from '@/components/common'
import React from 'react'
import ContactForm from './section/ContactForm'

function ContactPageLayout() {
  return (
    <main>
        <Banner text="İletişim" />
        <ContactForm />
        <BlogGrid/> 
    </main>
  )
}

export { ContactPageLayout }