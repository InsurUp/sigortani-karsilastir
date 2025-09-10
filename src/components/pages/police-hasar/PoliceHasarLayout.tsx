import React from 'react'
import { Banner } from './section/Banner'
import { InsuranceCompanies } from './section/InsuranceCompanies'
import { CTASection } from '@/components/common'

function PoliceHasarLayout() {
  return (<>
    <Banner text="Poliçe ve Hasar" />
    <InsuranceCompanies />
    <CTASection />
  </>
  )
}

export default PoliceHasarLayout 