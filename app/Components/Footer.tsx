import Link from 'next/link'
import React from 'react'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'
export default function Footer() {
    return (
        <footer className="mt-10 rounded-b-10xl justify-center flex items-center h-16 bg-gray-100 border-t-2 border-y-gray-300 text-gray-400">
                <p className='font-heading text-md items-center flex justify-center '>Copyright © 2023 Muhammad Bin Salman</p>
                <div className=' items-center absolute lg:right-36'>
                    <Link href={"#section1"}><BsFillArrowUpSquareFill className='text-md text-blue-600' size={35} /></Link>
                </div>

        </footer>

    )
}

