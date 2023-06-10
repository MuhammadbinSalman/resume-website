'use client'
import Head from 'next/head'
import Navbar from './Components/Navbar'
//import { Inter } from 'next/font/google'
import { RevealWrapper } from 'next-reveal'
import Section1 from './Components/Section1'
import Container2 from './Components/Container2'
import Container3 from './Components/Container3'
import Container4 from './Components/Container4'
import Container5 from './Components/Container5'
import Footer from './Components/Footer'
import Common from './Common'
import Social from './Social'
import { motion } from 'framer-motion'

function Home() {
  const components = [<Navbar />, <Section1 />, <Container2 />, <Container3 />, <Container4 />, <Container5 />, <Footer whereto='section1' />];
  return (
    <>
      <div className='font-poppins'>
        <div className="flex justify-center max-w-full  items-start h-[4650px] sm:h-[4380px] md:h-[3400px] lg:h-[2900px] xl:h-[2860px] bg-blue-500 bg-gradient-to-br from-blue-500 to-teal-400 sm:px-7 md:px-10 lg:px-24">
          {/* <motion.div animate={{ scale: [1, 4, 1], rotate: [0, 380, 0] }} transition={{ duration: 2 }}> */}
            <div className="bg-blue-400 opacity-50 rounded-3xl w-36 h-36 -left-8 top-1 fixed rotate-first border-blue-50 border-4" />
          {/* </motion.div> */}
            <div className="bg-blue-400 opacity-50 rounded-3xl w-36 h-36 right-7 bottom-8 overflow-hidden fixed rotate-first border-blue-50 border-4" />
          <div className="bg-blue-400 opacity-50 rounded-3xl w-36 h-36 -top-20 right-40 absolute rotate-second border-blue-50 border-4" />
          <div className="bg-blue-400 opacity-50 rounded-3xl w-36 h-36 -bottom-24 left-36 fixed rotate-second border-blue-50 border-4" />
          <div className='absolute z-20 left-0'>
            <Social />
          </div>
          {/* <motion.div initial={{ opacity: 0.1, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            style={{ transform: "translateZ(0)", zIndex: 10 }}
          > */}
            <div className={`bg-white md:pt-1 w-[1350px] z-10 h-[4650px] sm:h-[4250px] md:h-[3280px] lg:h-[2730px] xl:h-[2680px] shadow-lg sm:rounded-10xl p-0 sm:mt-10 lg:mt-14 mx-auto pb-0`}>
              {components}
            </div>
          {/* </motion.div> */}
        </div>
      </div>

    </>
  )
} export default Home
