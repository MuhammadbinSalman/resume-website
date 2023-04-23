import Link from 'next/link'
import React from 'react'

export default function Container4() {
    return (
        <section className="max-w-md mx-4 sm:max-w-6xl sm:mx-auto mt-32" id="portfolio">
            <h1 className='border-b-4 inline-block border-blue-500 font-bold text-3xl pb-1 text-gray-700 '>My</h1><span className='pb-1 border-b-4 inline-block border-gray-200 font-bold text-3xl text-gray-700 pl-1.5'>Portfolio</span>
            <div className="container mt-10 md:flex items-center justify-evenly">
                <div className='transform hover:-translate-y-2 hover:shadow-xl transition duration-500'>
                    <div className='flex-col overflow-hidden px-0 border-2 h-48 border-gray-200 rounded-lg items-center'>
                        <img className='item w-auto h-36' alt="Pricing UI Image" src='pricingUI.jpg' width={500} height={500}></img>
                        <div className='w-full h-full transition duration-500 hover:opacity-80 opacity-0 items-end flex justify-center absolute top-0 left-0 bottom-0 bg-gray-300'>

                        <div className='flex justify-center gap-2'>
                            <Link target="_blank" href="https://pricingui-mbsy.vercel.app/">
                                <button className='hover:text-white hover:bg-blue-500 transition duration-500 items-center bg-white border-2 border-blue-500 text-lg text-gray-700 shadow-xl my-5 py-1 px-8 rounded-full'>Live</button>
                            </Link>
                            <Link target="_blank" href="https://github.com/MuhammadbinSalman">
                                <button className='hover:bg-gray-300 transition duration-500 items-center bg-white border-2 border-gray-300 text-lg text-gray-600 shadow-xl my-5 py-1 px-8 rounded-full'>Code</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='transform hover:-translate-y-2 hover:shadow-xl transition duration-500'>
                    <div className='flex-col overflow-hidden px-0 border-2 border-gray-200 rounded-lg items-center'>
                        <img className='item w-auto h-36' alt="Pricing UI Image" src='panaverseWeb.jpg' width={500} height={500}></img>
                        <div className='w-full h-full transition duration-500 hover:opacity-80 opacity-0 items-center flex justify-center absolute top-0 left-0 bg-gray-300'>

                        <div className='flex justify-center gap-2 pointer-events-auto'>
                            <Link target="_blank" href="https://panaverse-remake-mbs.vercel.app/">
                                <button className='hover:text-white hover:bg-blue-500 transition duration-500 items-center bg-white border-2 border-blue-500 text-lg text-gray-700 shadow-xl my-5 py-1 px-8 rounded-full'>Live</button>
                            </Link>
                            <Link target="_blank" href="https://github.com/MuhammadbinSalman/Panaverse-Website-Remake">
                                <button className='hover:bg-gray-300 transition duration-500 items-center bg-white border-2 border-gray-300 text-lg text-gray-600 shadow-xl my-5 py-1 px-8 rounded-full'>Code</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='transform hover:-translate-y-2 hover:shadow-xl transition duration-500 '>
                    <div className='flex-col overflow-hidden px-0 border-2 border-gray-200 rounded-lg items-center'>
                        <img className='item w-auto h-36 relative' alt="Pricing UI Image" src='profitGame.jpg' width={500} height={500}></img>
                        <div className='w-full h-full transition duration-500 hover:opacity-80 opacity-0 items-center flex justify-center absolute top-0 left-0 bg-gray-300'>
                            <div className='flex justify-center items-center gap-2'>
                                <Link target="_blank" href="https://profit-gamev1.vercel.app/">
                                    <button className='hover:text-white hover:bg-blue-500 transition duration-500 items-center bg-white border-2 border-blue-500 text-lg text-gray-700 shadow-xl my-5 py-1 px-8 rounded-full'>Live</button>
                                </Link>
                                <Link target="_blank" href="https://github.com/MuhammadbinSalman">
                                    <button className='hover:bg-gray-300 opacity-100 transition duration-500 items-center bg-white border-2 border-gray-300 text-lg text-gray-600 shadow-xl my-5 py-1 px-8 rounded-full'>Code</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='transform hover:-translate-y-2 hover:shadow-xl transition duration-500'>
                    <div className='flex-col overflow-hidden px-0 border-2 border-gray-200 rounded-lg items-center'>
                        <img className='item w-auto h-36' alt="Pricing UI Image" src='todoApp.jpg' width={500} height={500}></img>
                        <div className='w-full h-full transition duration-500 hover:opacity-80 opacity-0 items-center flex justify-center absolute top-0 left-0 bg-gray-300'>
                            <div className='flex justify-center gap-2'>
                                <Link target="_blank" href="https://todoapp-mbs.vercel.app/">
                                    <button className='hover:text-white hover:bg-blue-500 transition duration-500 items-center bg-white border-2 border-blue-500 text-lg text-gray-700 shadow-xl my-5 py-1 px-8 rounded-full'>Live</button>
                                </Link>
                                <Link target="_blank" href="https://github.com/MuhammadbinSalman">
                                    <button className='hover:bg-gray-300 transition duration-500 items-center bg-white border-2 border-gray-300 text-lg text-gray-600 shadow-xl my-5 py-1 px-8 rounded-full'>Code</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
