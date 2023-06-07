'use client'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Social() {
    return (
        <>
            <div className="top-[70vh] fixed hidden sm:block mt-0">
                <Link href={"https://www.linkedin.com/in/muhammadbinsalman-yammani/"} target={"_blank"}>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                        <div className="ml-[-86px] my-14  w-[150px] hover:ml-0 duration-200 flex justify-between text-lg items-center gap-2 fixed text-white bg-blue-400 py-3 px-5 rounded-r-lg">
                            Linkedin
                            <FaLinkedin size={30} />
                        </div>
                    </motion.button>
                </Link>
                <Link href={"https://github.com/MuhammadbinSalman"} target={"_blank"}>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                        <div className=" ml-[-86px] my-28  w-[150px] flex justify-between hover:ml-0 duration-200  text-lg items-center gap-2 fixed text-white bg-blue-400 py-3 px-5 rounded-r-lg">
                            Github
                            <FaGithub size={30} />
                        </div>
                    </motion.button>
                </Link>
                <Link href={"https://www.facebook.com/muhammadBinYammani/"} target={"_blank"}>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                        <div className=" ml-[-86px] hover:ml-0 duration-200 flex justify-between text-lg items-center gap-2 fixed text-white bg-blue-400 w-[150px] py-3 px-5 rounded-r-lg">
                            <p className='-ml-3'>Facebook</p>
                            <FaFacebook size={30} />
                        </div>
                    </motion.button>
                </Link>
            </div>
            <div className='sm:hidden inset-x-0 end-0 fixed bottom-0 justify-center gap-1 mx-auto right-auto flex items-center'>
                <Link href={"https://www.linkedin.com/in/muhammadbinsalman-yammani/"} target={"_blank"}>
                    <div className="flex-col-reverse justify-between text-lg items-center gap-2 text-white bg-blue-400 py-2 px-5 rounded-t-lg">
                        <FaLinkedin size={30} />
                    </div>
                </Link>
                <Link href={"https://github.com/MuhammadbinSalman"} target={"_blank"}>
                    <div className=" flex-col-reverse justify-between text-lg items-center gap-2 text-white bg-blue-400 py-2 px-5 rounded-t-lg">
                        <FaGithub size={30} />
                    </div>
                </Link>

                <Link href={"https://www.facebook.com/muhammadBinYammani/"} target={"_blank"}>
                    <div className="flex-col-reverse justify-between text-lg items-center gap-2  text-white bg-blue-400 py-2 px-5 rounded-t-lg">
                        <FaFacebook size={30} />
                    </div>
                </Link>
            </div>
        </>
    )
}
