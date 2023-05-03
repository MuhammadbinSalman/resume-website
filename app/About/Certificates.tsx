'use client'
import exp from 'constants';
import React from 'react'
import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';
function Certificates() {
    const [box, setBox] = useState(true);
    const [mta, setMta] = useState(true)
    const [udemy, setUdemy] = useState(true)
    const [hacker, setHacker] = useState(true)
    const [digi, setDigi] = useState(true)
    console.log('box ', box, 'mta ', mta, 'udemy ', udemy, 'hacker ',hacker, 'digiskills ', digi)
    return (
        <section className="lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl md:max-w-2xl sm:max-w-xl max-w-md mx-4 sm:mx-auto mt-32" id='Certificates'>
            <h1 className='ml-0 lg:ml-2 2xl:ml-0 border-b-4 inline-block border-blue-500 font-bold text-2xl pb-1 text-gray-800 '>My</h1><span className='pb-1 border-b-4 inline-block border-gray-200 font-bold text-2xl text-gray-800 pl-1.5'>Education</span>
            <div className='relative'>
                <div className='ml-0 lg:ml-2 2xl:ml-0 container gap-7  flex-wrap mt-10 grid grid-cols-1 xl:grid-cols-2'>
                    <div
                        onClick={() => { setBox(!box); setMta(!mta) }}
                        className='transform hover:-translate-y-2 hover:shadow-left-about transition duration-500 flex h-36 sm:h-32 w-[480px] sm:w-[500px] md:w-[600px] lg:w-[650px] xl:w-[500px] 2xl:w-[530px] gap-2 border-2 border-gray-300 rounded-lg '>
                        <div className='w-72 bg-gray-200 flex items-center'>
                            <img src='/MTA-badge.png' className='w-full' />
                        </div>
                        <div className='flex-col justify-center flex items-center pl-0 sm:pl-8 md:pl-10 lg:pl-10 xl:pl-1 px-3 pr-0 sm:pr-8 md:pr-10 lg:pr-28 xl:pr-0 '>
                            <div className='flex-col gap-2'>
                                <h2 className='font-semibold 2xl:px-3'>Microsoft Technology Accosiate</h2>
                                <p className='text-gray-700 2xl:px-3'>I have passed the MTA 98-381 exam, demonstrating my proficiency in programming using Python <span className='text-gray-600 text-sm'> in 2020</span></p>
                            </div>
                        </div>
                    </div>

                    <div onClick={() => { setBox(!box); setUdemy(!udemy) }} className='transform hover:-translate-y-2 hover:shadow-right-about transition duration-500 flex h-36 sm:h-32 w-[480px] sm:w-[500px] md:w-[600px] lg:w-[650px] xl:w-[500px] 2xl:w-[530px] gap-2 border-2 border-gray-300 rounded-lg'>
                        <div className='w-64 bg-gray-200 flex items-center'>
                            <img src='/Udemy-Logo.png' className='w-full' />
                        </div>
                        <div className='flex-col justify-center flex items-center pl-0 sm:pl-8 md:pl-10 lg:pl-10 xl:pl-0 px-3 pr-0 sm:pr-8 md:pr-10 lg:pr-28 xl:pr-0 '>
                            <div className='flex-col gap-2'>
                                <h2 className='font-semibold 2xl:px-3'>Udemy Completion Certificate</h2>
                                <p className='text-gray-700 2xl:px-3'>I have successfully completed Python Demonstrations For Practice Course on Udemy <span className='text-gray-600 text-sm'> in 2020</span></p>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => { setBox(!box); setHacker(!hacker) }} className='transform hover:-translate-y-2 hover:shadow-left-about transition duration-500 flex h-36 sm:h-32 w-[480px] sm:w-[500px] md:w-[600px] lg:w-[650px] xl:w-[500px] 2xl:w-[530px] gap-2 border-2 border-gray-300 rounded-lg '>
                        <div className='w-72 p-3 bg-gray-200 flex items-center'>
                            <img src='/HR-logo.png' className='w-full' />
                        </div>
                        <div className='flex-col justify-center flex items-center pl-0 sm:pl-8 md:pl-10 lg:pl-10 xl:pl-0 px-3 pr-0 sm:pr-8 md:pr-10 lg:pr-28 xl:pr-0 '>
                            <div className='flex-col gap-2'>
                                <h2 className='font-semibold 2xl:px-3'>Hackerrank Python Certificate</h2>
                                <p className='text-gray-700 2xl:px-3'>I have passed the Python(basic) exam, demonstrating my proficiency in programming using Python <span className='text-gray-600 text-sm'> in 2022</span></p>
                            </div>
                        </div>
                    </div>

                    <div onClick={() => { setBox(!box); setDigi(!digi) }} className='transform hover:-translate-y-2 hover:shadow-right-about transition duration-500 flex h-36 sm:h-32 w-[480px] sm:w-[500px] md:w-[600px] lg:w-[650px] xl:w-[500px] 2xl:w-[530px] gap-2 border-2 border-gray-300 rounded-lg'>
                        <div className='w-72 bg-gray-200 flex items-center p-3'>
                            <img src='/DS-logo.png' className='w-full' />
                        </div>
                        <div className='flex-col justify-center flex items-center pl-0 sm:pl-8 md:pl-10 lg:pl-10 xl:pl-0 px-3 pr-0 sm:pr-8 md:pr-10 lg:pr-28 xl:pr-0 '>
                            <div className='flex-col gap-2'>
                                <h2 className='font-semibold 2xl:px-3'>Digiskills Completion Certificate</h2>
                                <p className='text-gray-700 2xl:px-3'>I have successfully completed Wordpress course under Digiskills training program by ignite<span className='text-gray-600 text-sm'> in 2020</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                {!box && (
                    <div className='fixed top-6 left-10 bg-gray-200 h-4/5 z-50 text-gray-700 w-full flex items-center justify-center'>
                        <div className="pr-10 absolute right-5 top-4 z-10"
                            onClick={() => { setBox(!box);
                                if(mta == false){
                                    setMta(true); 
                                }else if(udemy==false){
                                    setUdemy(true); 
                                }else if(hacker==false){
                                    setHacker(true); 
                                }else if(digi ==false){
                                    setDigi(true) 
                                }
                                }}
                        >
                            <RxCross2 size={30} className='cursor-pointer' />
                        </div>
                        {!mta && (
                            <div className='top-3 bottom-2 left-2 '>
                                <img src="/Certificate-Microsoft-1.jpg"
                                    className="w-96 transform scale-110  rounded-md shadow-gray-400 shadow-img-shadow"></img>
                            </div>
                        )
                        }
                        {!udemy && (
                            <div className='top-3 bottom-2 left-2 '>
                                <img src="/Udemy.jpg"
                                    className="w-96 transform scale-110  rounded-md shadow-gray-400 shadow-img-shadow"></img>
                            </div>
                        )
                        }
                        {!hacker && (
                            <div className='top-3 bottom-2 left-2 '>
                                <img src="/Hacker.jpg"
                                    className="w-96 transform scale-110  rounded-md shadow-gray-400 shadow-img-shadow"></img>
                            </div>
                        )
                        }
                        {!digi && (
                            <div className='top-3 bottom-2 left-2 '>
                                <img src="/Digi.png"
                                    className="w-96 transform scale-110  rounded-md shadow-gray-400 shadow-img-shadow"></img>
                            </div>
                        )
                        }
                    </div>
                )}
            </div>
        </section>
    )
}
export default Certificates