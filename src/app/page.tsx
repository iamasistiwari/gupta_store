import Footer from '@/components/main/Footer'
import HeroSection from '@/components/main/HeroSection'
import Navbar from '@/components/main/Navbar'
import React from 'react'

export default function Home() {
  return (
    <>
      <header className='bg-[#0c6c44]'>
        <Navbar />
      </header>
      <main className='w-screen'>
        <HeroSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
