import React from 'react'
import Link from 'next/link';



export default function Footer() {
  return (
    <div className='border-t border-neutral-100 pt-10 w-full min-h-72 flex justify-between px-32'>
        <div className='pl-2 flex flex-col justify-start'>
            <div className='flex  items-center'>
                <Link href={'/dashboard'} className={`lg:text-xl pl-2 font-semibold pb-2`}>GUPTA STORE</Link>                
            </div>
            <span className='pl-2 font-sans text-xs lg:text-sm text-green-800 font-semibold'>Ph.No-+91 XXXXXXXXXX</span>
        </div>
        <div className='flex flex-col'>
            <span className='font-semibold pb-2'>Location</span>
            <span>PV26+928, near pahalwan&apos;s shop jammu, Gole Market, New Delhi</span>
        </div>
        
    </div>
  )
}