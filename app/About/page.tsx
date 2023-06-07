'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Drawer from './Drawer'
import Education from './Education'
import Certificates from './Certificates'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AboutNav from './AboutNav'
import Common from '../Common'
import Social from '../Social'

function page() {
  const componentsAb = [<AboutNav />, <Drawer />, <Education />, <Certificates />, <Footer whereto='drawer' />]
  return (
    <>
      <div className='font-poppins'>
        <div className="flex justify-center max-w-full  items-start h-[2330px] sm:h-[2150px] md:h-[2050px] lg:h-[2000px] xl:h-[1650px] bg-blue-500 bg-gradient-to-br from-blue-500 to-teal-400 sm:px-7 md:px-10 lg:px-24">
          <motion.div animate={{ scale: [1, 4, 1], rotate: [0, 380, 0] }} transition={{ duration: 2 }}>
            <div className="bg-blue-400 opacity-50 rounded-3xl w-36 h-36 -left-8 top-1 fixed rotate-first border-blue-50 border-4" />
          </motion.div>
          <div className="bg-blue-400 opacity-50 rounded-3xl w-36 h-36 right-7 bottom-8 overflow-hidden fixed rotate-first border-blue-50 border-4" />
          <div className="bg-blue-400 opacity-50 rounded-3xl w-36 h-36 -top-20 right-40 absolute rotate-second border-blue-50 border-4" />
          <div className="bg-blue-400 opacity-50 rounded-3xl w-36 h-36 -bottom-24 left-36 fixed rotate-second border-blue-50 border-4" />
          <div className='absolute z-20 left-0'>
            <Social />
          </div>
          <motion.div initial={{ opacity: 0.1, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} style={{ transform: "translateZ(0)", zIndex: 10 }}>
            <div className="bg-white w-[1350px] md:pt-1 z-10 h-[2330px] md:h-[1900px] xl:h-[1450px] lg:h-[1900px] sm:h-[1960px] shadow-lg sm:rounded-10xl p-0 sm:mt-10 lg:mt-14 mx-auto pb-0">
              {componentsAb}
            </div>
          </motion.div>
          {/* <AboutNav />
        <Drawer />
        <Education />
        <Certificates />
        <Footer whereto='drawer'/> */}
        </div>
      </div >

    </>
  )
}
export default page