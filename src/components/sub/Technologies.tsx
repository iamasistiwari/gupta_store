 "use client"
import { RiHtml5Line } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiJavaFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { motion } from 'framer-motion';
import { SiBlockchaindotcom } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import React from 'react'
import { SiNumpy } from "react-icons/si";


export default function Technologies() {
  return (
    <motion.div
    className='w-full'>        
        <div className='flex flex-wrap items-center justify-center gap-1 lg:gap-4'>
            <motion.div 
            initial={{ y: -10 }}
            animate={{ y: [10, -10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className='border-4 border-neutral-200 dark:border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-red-600'>
                <RiHtml5Line />
            </motion.div>



            <motion.div 
            initial={{ y: 10 }}
            animate={{ y: [-10, 10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className='border-4 border-neutral-200 dark:border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-cyan-500'>
                <FaCss3Alt />
            </motion.div>


            <motion.div
            initial={{ y: -10 }}
            animate={{ y: [10, -10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }} 
            className='border-4 border-neutral-200 dark:border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-blue-500'>
                <FaPython />
            </motion.div>

            <motion.div 
            initial={{ y: 10 }}
            animate={{ y: [-10, 10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className='border-4 border-neutral-200 dark:border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-cyan-500'>
                <GrMysql />
            </motion.div>

        </div>

        <div className='flex flex-wrap items-center justify-center gap-1 lg:gap-4 mt-7'>

            <motion.div 
            initial={{ y: 10 }}
            animate={{ y: [-10, 10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className='border-4 border-neutral-200 dark:border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-cyan-500'>
                <SiPandas />
            </motion.div>

            <motion.div 
            initial={{ y: -10 }}
            animate={{ y: [10, -10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className='border-4 border-neutral-200 dark:border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-red-600'>
                <SiBlockchaindotcom />
            </motion.div>

            <motion.div 
            initial={{ y: 10 }}
            animate={{ y: [-10, 10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className='border-4 border-neutral-200 dark:border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-cyan-500'>
                <RiJavaFill />
            </motion.div>

            <motion.div
            initial={{ y: -10 }}
            animate={{ y: [10, -10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }} 
            className='border-4 border-neutral-200 dark:border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-blue-500'>
                <SiNumpy />
            </motion.div>

        </div>

        <div className='flex flex-wrap items-center justify-center gap-1 lg:gap-4 mt-7'>
            <motion.div 
            initial={{ y: -10 }}
            animate={{ y: [10, -10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className='border-4 border-neutral-200 dark:border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-red-600'>
                <SiTensorflow />
            </motion.div>



            <motion.div 
            initial={{ y: 10 }}
            animate={{ y: [-10, 10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className='border-4 border-neutral-200 dark:border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-cyan-500'>
                <FaCss3Alt />
            </motion.div>


            <motion.div
            initial={{ y: -10 }}
            animate={{ y: [10, -10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }} 
            className='border-4 border-neutral-200 dark:border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-blue-500'>
                <FaPython />
            </motion.div>

            <motion.div 
            initial={{ y: 10 }}
            animate={{ y: [-10, 10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className='border-4 border-neutral-200 dark:border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-cyan-500'>
                <GrMysql />
            </motion.div>

        </div>
    </motion.div>
  )
}