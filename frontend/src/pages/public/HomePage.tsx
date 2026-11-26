import Header from '../../components/Header'
import HeroCarousel from '../../components/HeroCarousel'
import WhatWeDo from '../../components/WhatWeDo'
import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <>
      <Header />

      <main id="home">
        <HeroCarousel />
        <WhatWeDo />
      </main>

      <Footer />
    </>
  )
}

export default HomePage
