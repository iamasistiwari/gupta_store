import React from 'react'
import Button from '../ui/button'

import Image from 'next/image';


export default function HeroSection() {
  return (
    <main className='lg:px-20 mt-10 overflow-hidden w-full h-full'>
        <div className='px-2 lg:justify-center lg:text-center lg:items-center w-full flex'>
            <Image
            src={'/m1.png'}
            width={1000}
            height={1000}
            alt='image' 
            />
        </div>
        <div className='flex flex-col justify-between items-center'>
            <h3 className='text-sm w-[330px] lg:text-lg text-neutral-500 lg:w-[650px] mt-3 pr-2'>Join over 100 daily customers who trust us for fresh, quality vegetables and fruits—because trust matters when it comes to what you eat!</h3>
            <div className='flex gap-4 mt-10'>
                <Button isLoading={false} size={'lg'} className='shadow-sm font-semibold bg-green-600 text-white'>{'CALL US'}</Button>
                <Button isLoading={false} size={'lg'} variant={'ghost'} className='shadow-sm' >{'EXPLORE'}</Button>
            </div>
        </div>
        <div className='px-10 mb-2 mt-10 lg:hidden lg:justify-center lg:text-center lg:items-center w-full flex'>
            <Image
            src={'/s3.png'}
            width={1000}
            height={1000}
            alt='image' 
            />
        </div>
        <div className='px-10 lg:hidden lg:justify-center lg:text-center lg:items-center w-full flex my-4'>
            <Image
            src={'/s4.png'}
            width={1000}
            height={1000}
            alt='image' 
            />
        </div>
        <div className='px-2 hidden lg:flex lg:justify-center lg:text-center lg:items-center w-full m-4'>
            <Image
            src={'/s1.png'}
            width={900}
            height={900}
            alt='image'
            className='' 
            />
        </div>
        <div className='hidden px-2 lg:justify-center lg:text-center lg:items-center w-full lg:flex'>
            <Image
            src={'/s2.png'}
            width={1000}
            height={1000}
            alt='image' 
            />
        </div>
        <div className='hidden px-2 lg:justify-center lg:text-center lg:items-center w-full lg:flex'>
            <Image
            src={'/m4.png'}
            width={1000}
            height={1000}
            alt='image' 
            />
        </div>
        <div className='lg:hidden px-2 lg:justify-center lg:text-center lg:items-center w-full flex'>
            <Image
            src={'/s5.png'}
            width={1000}
            height={1000}
            alt='image' 
            />
        </div>
        <div className='lg:hidden px-2 lg:justify-center lg:text-center lg:items-center w-full flex'>
            <Image
            src={'/s6.png'}
            width={1000}
            height={1000}
            alt='image' 
            />
        </div>
        <div className='lg:hidden px-2 lg:justify-center lg:text-center lg:items-center w-full flex'>
            <Image
            src={'/m8.png'}
            width={1000}
            height={1000}
            alt='image' 
            />
        </div>
        <div className='lg:hidden px-2 lg:justify-center lg:text-center lg:items-center w-full flex'>
            <Image
            src={'/s7.png'}
            width={1000}
            height={1000}
            alt='image' 
            />
        </div>
        
        
    </main>
  )
}



