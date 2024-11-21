import HeroSection from '@/components/main/HeroSection'
import Navbar from '@/components/main/Navbar'
import React from 'react'

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='w-screen h-screen'>
        <HeroSection />
      </main>
    </>
  )
}
