import React from 'react'
import { Banner } from './section/Banner'
import DamageSection from './section/DamageSection'
import AccidentReportModule from './section/AccidentReportModule'
import { AccordionSection, CTASection } from '@/components/common'

function DamageAndSupportLayout() {
  return (<>
    <Banner text="Hasar ve Destek" image={"/images/hasar-yardim-banner.png"} />
    <DamageSection />
    <AccidentReportModule image={"/images/hasar-ve-yardim.png"} text="Herhangi bir kaza sonucu sigortalının malında oluşabilecek her türlü hasarı sigorta şirketine bildirmesi gerekir.
Bu bildirinin gerçekleşmesi için bazı kurallar bulunmaktadır.
Bu sayfada hasar bildirimine dair tüm bilgilere detaylarıyla birlikte ulaşabilirsiniz." buttonText="Kaza Tespit Tutanağı" buttonLink="#" />
    <AccordionSection />
    <CTASection />
  </>
  )
}

export default DamageAndSupportLayout 