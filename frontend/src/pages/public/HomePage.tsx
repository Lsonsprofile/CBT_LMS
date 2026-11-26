import Header from '../../components/Header'
import HeroCarousel from '../../components/HeroCarousel'
import WhatWeDo from '../../components/WhatWeDo'

const HomePage = () => {
  return (
    <>
      <Header />

      <main>
        <HeroCarousel />
        <WhatWeDo />
      </main>
    </>
  )
}

export default HomePage
