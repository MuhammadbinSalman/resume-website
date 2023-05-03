'use client'
import Image from 'next/image'
import  Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx'
function AboutNav() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
    <nav className="bg-white sm:rounded-full sm:mt-6 pt-2 sm:pt-0 shadow-custom-shadow sm:shadow-none">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href={"#"}><Image className="h-12 w-auto" src="/mbs.png" alt="Logo" width={500} height={500} /></Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-9 flex items-center">
              <Link href={"#"} className="px-1 mx-4 py-2 cursor-pointer font-sans rounded-md text-md font-medium text-gray-800 hover:text-blue-400">Home</Link>
              <Link href="/About" className="px-1 mx-4 py-2 font-sans rounded-md text-md font-medium text-gray-700 hover:text-blue-400">About</Link>
              <ScrollLink activeClass="active" to="Education" spy={true} smooth={true} offset={-70} duration={500}  className="px-1 mx-4 py-2 cursor-pointer font-sans rounded-md text-md font-medium text-gray-700 hover:text-blue-400">Education</ScrollLink>
              <ScrollLink activeClass="active" to="Certificates" spy={true} smooth={true} offset={-70} duration={500} className="px-1 mx-4 py-2 cursor-pointer font-sans rounded-md text-md font-medium text-gray-700 hover:text-blue-400">Certificates</ScrollLink>
              <ScrollLink activeClass="active" to="" spy={true} smooth={true} offset={-70} duration={500} className="px-1 mx-4 py-2 cursor-pointer font-sans rounded-md text-md font-medium text-gray-700 hover:text-blue-400">Hobbies</ScrollLink>
            </div>
          </div>
          <div className="pr-5 md:hidden " onClick={() => { setToggle(!toggle); console.log(toggle); }}>
            {toggle ? <GiHamburgerMenu size={30} /> : <RxCross2 size={30} />}
          </div>
          {/* _________on click event_______ */}
          {!toggle && (
            <div className="fixed top-0 left-0 bg-gray-200 h-1/3 text-gray-700 w-full flex items-center justify-center">
              <ul className=" m-7 text-white ">
                <li className="mx-5 my-2 text-xl "><ScrollLink to="#" className="px-1 mx-4 py-2 font-sans rounded-md text-md font-medium text-gray-800 hover:text-blue-400">Home</ScrollLink></li>
                <li className="mx-5 my-2 text-xl "><ScrollLink to="#" className="px-1 mx-4 py-2 font-sans rounded-md text-md font-medium text-gray-700 hover:text-blue-400">About</ScrollLink></li>
                <li className="mx-5 my-2 text-xl "><ScrollLink to="#" className="px-1 mx-4 py-2 font-sans rounded-md text-md font-medium text-gray-700 hover:text-blue-400">Skills</ScrollLink></li>
                <li className="mx-5 my-2 text-xl "><ScrollLink to="#" className="px-1 mx-4 py-2 font-sans rounded-md text-md font-medium text-gray-700 hover:text-blue-400">Portfolio</ScrollLink></li>
                <li className="mx-5 my-2 text-xl "><ScrollLink to="#" className="px-1 mx-4 py-2 font-sans rounded-md text-md font-medium text-gray-700 hover:text-blue-400">Contact</ScrollLink></li>
              </ul>
              <div className="pr-5 absolute right-0 top-3 z-10" onClick={() => { setToggle(!toggle); console.log(toggle); }}>
                <RxCross2 size={30} />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
    </>

  )
}
export default AboutNav;
