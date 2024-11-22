import React from 'react'
import { MdKeyboardCommandKey } from "react-icons/md";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className='flex justify-between px-4 lg:px-20 h-16 lg:h-20 border-b-[0.5px] border-neutral-200 dark:border-neutral-800 items-center'>
      <div className='flex justify-center items-center'>
        <h1 className='text-white text-2xl lg:text-3xl font-extrabold'>Gupta Store</h1>
        <div className='hidden font-medium gap-4 text-white ml-12 pt-1 opacity-90 lg:flex'>
          <span>Home</span>
          <span>Pricing</span>
          <span>Services</span>
          <span>About us</span>
        </div>
      </div>

      <div className='flex justify-center items-center gap-1'>
        <span className='ml-3 block lg:hidden text-white focus:outline-none'><MdMenu size={22}/></span>
        <SearchInput />
      </div>
    </nav>
  )
}



function SearchInput() {
  return (
    <div className="hidden lg:block relative">
      <input
        className="p-2 rounded-xl pl-4 focus:outline-none w-96 hover:bg-neutral-200  text-black border border-neutral-300 dark:border-none"
        placeholder="Search Products... "
      />
      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-40 flex justify-center items-center text-sm font-semibold">
        {'('}<MdKeyboardCommandKey size={12}/>{'+k)'}
      </span>
    </div>
  )
}
