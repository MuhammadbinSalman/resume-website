import React from 'react'
import Social from './Social'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

export default function Common(props: any) {
  return (
    <div className='font-poppins'>
      <div className="flex justify-center max-w-full  items-start h-[4200px] sm:h-[4400px] bg-blue-500 bg-gradient-to-br from-blue-500 to-teal-400 sm:px-24">
        <div className="bg-blue-400 opacity-50 rounded-3xl w-36 h-36 -left-8 top-1 fixed rotate-first border-blue-50 border-4" />
        <div className="bg-blue-400 opacity-50 rounded-3xl w-36 h-36 right-7 bottom-8 overflow-hidden fixed rotate-first border-blue-50 border-4" />
        <div className="bg-blue-400 opacity-50 rounded-3xl w-36 h-36 -top-20 right-40 absolute rotate-second border-blue-50 border-4" />
        <div className="bg-blue-400 opacity-50 rounded-3xl w-36 h-36 -bottom-24 left-36 fixed rotate-second border-blue-50 border-4" />
        <div className='absolute z-20 left-0'>
          <Social />
        </div>
        <div className="bg-white w-[1350px] z-10 h-[4200px] shadow-lg sm:rounded-10xl p-0 sm:mt-14 mx-auto pb-0">
          <Navbar />
          {props.content}
            <Footer />
        </div>
      </div>
    </div>
  )
}
