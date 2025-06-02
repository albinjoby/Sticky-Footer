import Lenis from 'lenis'
import React, { useEffect } from 'react'
import Intro from './components/Intro'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {

  useEffect(()=>{
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  },[])

  return (
    <>
      <Header />
      <Intro /> 
      <Footer />
    </>
  )
}

export default App