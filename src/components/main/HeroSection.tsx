import React from 'react'
import Button from '../ui/button'

import Technologies from '../sub/Technologies';
import { CiSearch } from "react-icons/ci";
import SearchBar from '../ui/SearchBar';
import { MdOutlineLocationOn } from "react-icons/md";
import { TbWorld } from "react-icons/tb";


export default function HeroSection() {
  return (
    <main className='pl-4 lg:px-20 mt-10 lg:mt-20'>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div>
                <h1 className='text-4xl lg:text-5xl font-extrabold'>BUSINESS TO BRAND</h1>
                <h3 className='text-sm w-[330px] lg:text-lg text-neutral-500 lg:w-[550px] mt-3 pr-2'>More than 20+ businesses have trusted Webdenn to grow using our design and technology expertise.</h3>
                <div className='flex gap-4 mt-10'>
                    <Button isLoading={false} size={'lg'} className='shadow-sm'>{'CALL US'}</Button>
                    <Button isLoading={false} size={'lg'} variant={'ghost'} className='shadow-sm' >{'EXPLORE'}</Button>
                </div>

                <div className='flex flex-col mt-8'>
                    <h1 className='text-sm w-[300px] lg:text-lg text-neutral-500 lg:w-[550px] mt-3 pr-2 mb-2'>World Class Developers, just for you on contract, full-time or part-time, whatever you need.<span className='text-blue-400'><TbWorld size={20}/></span></h1>
                    <SearchBar Icon={CiSearch} placeText='Type (e.g junior, senior)'/>
                    <SearchBar Icon={MdOutlineLocationOn} placeText='Mountain View, California'/>
                    <Button isLoading={false} size={'lg'} variant={'default'} className='shadow-sm mr-52 mt-4'>{'Find Devs'}</Button>
                </div> 
            </div>
            <div className='hidden lg:block'>
                <Technologies />
            </div>
            
        </div>
        
    </main>
  )
}



