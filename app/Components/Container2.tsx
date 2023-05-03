import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'
import { GiPencilBrush } from 'react-icons/gi'
import { GiCpu } from 'react-icons/gi'
export default function Container2() {
  return (
    <section className="lg:max-w-4xl xl:max-w-6xl md:max-w-2xl sm:max-w-lg max-w-md mx-4 sm:mx-auto mt-32" id='whatIdo'>
      <h1 className='border-b-4 ml-0 lg:ml-2 2xl:ml-0 inline-block border-blue-500 font-bold text-3xl text-gray-700 '>What I</h1><span className='border-b-4 inline-block border-gray-200 font-bold text-3xl text-gray-700 pl-1.5'>Do</span>
      {/* <div className='flex justify-center mt-20'>
        <div className='container w-[450px] py-8 px-14 border-4 border-gray-200 bg-white rounded-2xl items-center'>
          <p className='item text-gray-700 text-lg'>Hi, I'm a 15-year-old boy who is passionate about technology and loves to keep up with the latest trends and developments in the field. As a UI/UX designer and frontend developer, I enjoy working on projects that require creativity and attention to detail. I'm also skilled in mechatronics development and can code in C++, Python, Javascript, and Typescript. I have experience working with frameworks such as Next.js and am always looking to expand my skillset. Whether I'm designing a user-friendly interface or developing a complex piece of software, I'm always eager to tackle new challenges and learn new things</p>
        </div>
      </div> */}
      <div className='container grid md:grid-cols-2 grid-cols-1 px-0 lg:px-2 2xl:px-0 gap-5 md:gap-0 lg:gap-0 mt-10 ml-2'>
        <div className='item flex gap-0 md:gap-2 lg:gap-0 flex-col px-0 xl:px-2 2xl:px-0'>
          <div className='flex items-center'>
            <FaLaptopCode size={"50"} className="text-blue-500"/>
            <h1 className='text-xl md:text-2xl font-semibold text-gray-700 ml-6'>Full Stack Development</h1>
          </div>
          <div className=' pt-0 pb-3 pl-20 pr-6'>
          <p className='text-gray-700 text-md'>My experience in full stack development allows me to work effectively in cross-functional teams, delivering high-quality products that meet business requirements and exceed user expectations</p>
          </div>
        </div>
        <div className='item flex gap-0 md:gap-2 lg:gap-0 flex-col px-0 xl:px-2 2xl:px-0'>
          <div className='flex items-center'>
            <GiCpu size={"50"} className="text-blue-500"/>
            <h1 className='text-xl md:text-2xl font-semibold text-gray-700 ml-6'>Microcontroller Programming</h1>
          </div>
          <div className=' pt-0 pb-3 pl-20 pr-6'>
          <p className='text-gray-700 text-md'>My experience in full stack development allows me to work effectively in cross-functional teams, delivering high-quality products that meet business requirements and exceed user expectations</p>
          </div>
        </div>
        <div className='item flex flex-col px-0 xl:px-2 2xl:px-0 mt-2'>
          <div className='flex items-center'>
            <GiPencilBrush size={"50"} className="text-blue-500"/>
            <h1 className='text-xl md:text-2xl font-semibold text-gray-700 ml-6'>UI/UX Design</h1>
          </div>
          <div className=' pt-0 pb-3 pl-20 pr-6'>
          <p className='text-gray-700 text-md'>My experience in full stack development allows me to work effectively in cross-functional teams, delivering high-quality products that meet business requirements and exceed user expectations</p>
          </div>
        </div>
        <div className='item flex flex-col px-0 xl:px-2 2xl:px-0 mt-2'>
          <div className='flex items-center'>
            <FaLaptopCode size={"50"} className="text-blue-500"/>
            <h1 className='text-xl md:text-2xl font-semibold text-gray-700 ml-6'>Web design</h1>
          </div>
          <div className=' pt-0 pb-3 pl-20 pr-6'>
          <p className='text-gray-700 text-md'>My experience in full stack development allows me to work effectively in cross-functional teams, delivering high-quality products that meet business requirements and exceed user expectations</p>
          </div>
        </div>
      </div>
    </section>
  )
}
