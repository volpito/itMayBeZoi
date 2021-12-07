import React from 'react'
import Avantages from '../Components/Avantages/Avantages'
import Cards from '../Components/Cards/Cards'
import CTA1 from '../Components/CTA/CTA1'
import HeroBanner from '../Components/HeroBanner/HeroBanner'
import ImgSection from '../Components/ImgSection/ImgSection'

function Home() {
  return (
    <div>
      <HeroBanner />
      <ImgSection />
      <CTA1 />
      <Avantages />
      <Cards />
    </div>
  )
}

export default Home
