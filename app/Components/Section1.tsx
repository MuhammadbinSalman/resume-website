import Image from 'next/image'
import React from 'react'
import Link from "next/link"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Navbar from './Navbar'
import Section2 from './Container2';
import Container2 from './Container2';
import Container3 from './Container3';
import Container4 from './Container4';
import Container5 from './Container5';
import Social from '../Social';
import Footer from './Footer';
export default function Section1() {
    return (
        <section className=" md:gap-5 max-w-4xl mx-auto flex md:flex-row flex-col sm:mt-20 mt-4" id='section1'>
            <div className='flex justify-center'>
                <img
                    src="/me.jpg"
                    className="sm:w-full w-64 sm:-ml-11 mt-7 sm:transform sm:scale-110 rounded-full border-[17px] border-white shadow-gray-400 shadow-img-shadow" />
            </div>
            <div className="p-5 max-w-xl sm:mt-14 mt-4 lg:-mr-10">
                <p className='text-sm text-gray-400 font-heading text-center sm:text-left'>Hi my name is</p>
                <h1 className='font-bold text-3xl text-gray-800 pt-2 pb-4 font-heading text-center sm:text-left'>Muhammad Bin Salman</h1>
                <p className='font-md text-gray-600 leading-6 text-left mt-1 px-1 sm:mt-0'>
                    I am a technology enthusiast who strives to remain up-to-date with the latest advancements in tech. I'm certified programmer from Microsoft, Hackerrank, Udemy etc. Currently focused on expanding my knowledge of Web 3.0 and Metaverse. I have also competed in various robotics and coding competitions. I am a 14-year-old Pakistani
                </p>
                <Link href={"#whatIdo"} className='flex justify-center'>
                    <button className="hover:text-white hover:bg-blue-500 transition text-gray-700 border-blue-500 duration-500 group flex font-heading items-center bg-white border-2 shadow-xl my-5 py-2 px-6 rounded-full">
                        Profile
                        <MdOutlineKeyboardArrowRight size={20} className="group-hover:rotate-90 duration-500" />
                    </button>
                </Link>
            </div>
        </section>

    )
}
