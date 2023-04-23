import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'

export default function Social() {
    return (
        <div className="top-[70vh] fixed mt-0">
            <Link href={"https://www.linkedin.com/in/muhammadbinsalman-yammani/"} target={"_blank"}>
                <div className="ml-[-86px] my-14  w-[150px] hover:ml-0 duration-200 flex justify-between text-lg items-center gap-2 fixed text-white bg-blue-400 py-3 px-5 rounded-r-lg">
                    Linkedin
                    <FaLinkedin size={30} />
                </div>
            </Link>
            <Link href={"https://github.com/MuhammadbinSalman"} target={"_blank"}>
                <div className=" ml-[-86px] my-28  w-[150px] flex justify-between hover:ml-0 duration-200  text-lg items-center gap-2 fixed text-white bg-blue-400 py-3 px-5 rounded-r-lg">
                    Github
                    <FaGithub size={30} />
                </div>
            </Link>

            <Link href={"https://www.facebook.com/muhammadBinYammani/"} target={"_blank"}>
                <div className=" ml-[-86px] hover:ml-0 duration-200 flex justify-between text-lg items-center gap-2 fixed text-white bg-blue-400 w-[150px] py-3 px-5 rounded-r-lg">
                    <p className='-ml-2'>Facebook</p>
                    <FaFacebook size={30} />
                </div>
            </Link>
        </div>
    )
}
