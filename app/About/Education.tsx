
import React from 'react'

export default function Education() {
    return (
        <section className="lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl md:max-w-2xl sm:max-w-xl max-w-md mx-4 sm:mx-auto mt-32" id='Education'>
            <h1 className='ml-0 lg:ml-2 2xl:ml-0 border-b-4 inline-block border-blue-500 font-bold text-2xl pb-1 text-gray-700 '>My</h1><span className='pb-1 border-b-4 inline-block border-gray-200 font-bold text-2xl text-gray-700 pl-1.5'>Education</span>
            <div className='ml-0 lg:ml-2 2xl:ml-0 container sm:gap-0 gap-3 mt-10 grid grid-cols-1 sm:grid-cols-2'>
                <div className='item flex flex-col'>
                    <div className='flex items-center gap-3 pb-4'>
                        <div className='h-7 w-14 items-center rounded-full border-2 border-blue-500 text-center justify-center flex text-sm text-gray-600'><span className=''>2021</span></div>
                        <h1 className='text-lg text-gray-400'>PIAIC</h1>
                    </div>
                    <h1 className='text-xl  font-semibold text-gray-800 pl-14'>Cloud Native Computing</h1>
                    <div className=' pt-1 pb-3 pl-14 pr-6'>
                        <p className='text-gray-600 text-md'>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                    </div>
                </div>
                <div className='item flex flex-col'>
                    <div className='flex items-center gap-3 pb-4'>
                        <div className='h-7 w-14 items-center rounded-full border-2 border-blue-500 text-center justify-center flex text-sm text-gray-600'><span className=''>2022</span></div>
                        <h1 className='text-lg text-gray-400'>The Hunar Foundation</h1>
                    </div>
                    <h1 className='text-xl pl-14 font-semibold text-gray-800'>Microcontroller Programming</h1>
                    <div className=' pt-1 pb-3 pl-14 pr-6'>
                        <p className='text-gray-600 text-md'>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                    </div>
                </div>
                <div className='item flex flex-col mt-2'>
                    <div className='flex items-center gap-3 pb-4'>
                        <div className='h-7 w-14 items-center rounded-full border-2 border-blue-500 text-center justify-center flex text-sm text-gray-600'><span className=''>2023</span></div>
                        <h1 className='text-lg text-gray-400'>Panavere Dao</h1>
                    </div>
                    <h1 className='text-xl pl-14 font-semibold text-gray-800'>UI/UX Design</h1>
                    <div className=' pt-1 pb-3 pl-14 pr-6'>
                        <p className='text-gray-600 text-md'>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                    </div>
                </div>
                <div className='item flex flex-col mt-2'>
                    <div className='flex items-center gap-3 pb-4'>
                        <div className='h-7 w-14 items-center rounded-full border-2 border-blue-500 text-center justify-center flex text-sm text-gray-600'><span className=''>2023</span></div>
                        <h1 className='text-lg text-gray-400'>Panaverse Dao</h1>
                    </div>
                    <h1 className='text-xl pl-14 font-semibold text-gray-800'>Metaverse, AI and Web 3.0</h1>
                    <div className=' pt-1 pb-3 pl-14 pr-6'>
                        <p className='text-gray-600 text-md'>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
