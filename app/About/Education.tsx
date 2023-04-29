import React from 'react'

export default function Education() {
    return (
        <section className="sm:max-w-6xl max-w-md mx-4 sm:mx-auto mt-32" id='Education'>
            <h1 className='border-b-4 inline-block border-blue-500 font-bold text-2xl pb-1 text-gray-700 '>My</h1><span className='pb-1 border-b-4 inline-block border-gray-200 font-bold text-2xl text-gray-700 pl-1.5'>Education</span>
            <div className=' container gap-0 mt-10 grid grid-cols-2'>
                <div className='item flex flex-col'>
                    <div className='flex items-center gap-3 pb-4'>
                        <div className='h-7 w-14 items-center rounded-full border-2 border-blue-500 text-center justify-center flex text-sm text-gray-600'><span className=''>2020</span></div>
                        <h1 className='text-lg text-gray-400'>School Studies</h1>
                    </div>
                    <h1 className='text-xl  font-semibold text-gray-800 pl-14'>Full Stack Development</h1>
                    <div className=' pt-1 pb-3 pl-14 pr-6'>
                        <p className='text-gray-600 text-md'>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                    </div>
                </div>
                <div className='item flex flex-col'>
                    <div className='flex items-center gap-3 pb-4'>
                        <div className='h-7 w-14 items-center rounded-full border-2 border-blue-500 text-center justify-center flex text-sm text-gray-600'><span className=''>2020</span></div>
                        <h1 className='text-lg text-gray-400'>School Studies</h1>
                    </div>
                    <h1 className='text-xl pl-14 font-semibold text-gray-800'>Microcontroller Programming</h1>
                    <div className=' pt-1 pb-3 pl-14 pr-6'>
                        <p className='text-gray-600 text-md'>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                    </div>
                </div>
                <div className='item flex flex-col mt-2'>
                    <div className='flex items-center gap-3 pb-4'>
                        <div className='h-7 w-14 items-center rounded-full border-2 border-blue-500 text-center justify-center flex text-sm text-gray-600'><span className=''>2020</span></div>
                        <h1 className='text-lg text-gray-400'>School Studies</h1>
                    </div>
                    <h1 className='text-xl pl-14 font-semibold text-gray-800'>UI/UX Design</h1>
                    <div className=' pt-1 pb-3 pl-14 pr-6'>
                        <p className='text-gray-600 text-md'>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                    </div>
                </div>
                <div className='item flex flex-col mt-2'>
                    <div className='flex items-center gap-3 pb-4'>
                        <div className='h-7 w-14 items-center rounded-full border-2 border-blue-500 text-center justify-center flex text-sm text-gray-600'><span className=''>2020</span></div>
                        <h1 className='text-lg text-gray-400'>School Studies</h1>
                    </div>
                    <h1 className='text-xl pl-14 font-semibold text-gray-800'>Web design</h1>
                    <div className=' pt-1 pb-3 pl-14 pr-6'>
                        <p className='text-gray-600 text-md'>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
