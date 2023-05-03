'use client'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll';
import React from 'react'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'
type ToProps = {
        whereto: string;
      }
function Footer({ whereto }: ToProps) {
    return (
        <footer className="mt-10 rounded-b-10xl justify-center flex items-center h-16 bg-gray-100 border-t-2 border-y-gray-300 text-gray-400">
            <p className='font-heading text-md items-center flex justify-center'>Copyright © 2023 Muhammad Bin Salman</p>
            <div className=' items-center fixed top-[80vh] sm:top-[90vh] right-5 sm:right-36'>
                <ScrollLink activeClass="active" to={whereto} spy={true} smooth={true} offset={-250} duration={500} className="text-md cursor-pointer text-blue-700"><BsFillArrowUpSquareFill className='text-md text-blue-600' size={35} /></ScrollLink>
                {/* <Link href={"#section1"}><BsFillArrowUpSquareFill className='text-md text-blue-600' size={35} /></Link> */}
            </div>

        </footer>

    )
}
export default Footer
