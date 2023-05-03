import React from 'react'
import { FaStar } from 'react-icons/fa'
export default function Container5() {
  return (
    <>
      <section className="lg:max-w-4xl xl:max-w-6xl md:max-w-2xl sm:max-w-lg max-w-md mx-4 sm:mx-auto mt-32" id="contact">
        <h1 className='ml-0 lg:ml-2 2xl:ml-0 border-b-4 inline-block border-blue-500 font-bold text-3xl pb-1 text-gray-700 '>Get In</h1><span className='pb-1 border-b-4 inline-block border-gray-200 font-bold text-3xl text-gray-700 pl-1.5'>Touch</span>
          <div className="items-center lg:flex-row flex-col flex justify-center mt-10" id="contact">
            <div className="text-gray-500 sm:px-10 sm:ml-8">
              <p className="text-center my-5 text-xl font-medium text-blue-500 ">Leave me a messege</p>
              <form action="https://formspree.io/f/mbjeaqpn" method="POST">
                <div>
                  <input
                    placeholder="Name"
                    type="text"
                    required
                    name="name"
                    className="p-2 w-96 bg-transparent border-2 rounded-md focus:outline-none text--gray-700"
                  />
                </div>
                <div className="my-5">
                  <input
                    required
                    className="p-2 w-96 bg-transparent border-2 rounded-md focus:outline-none text-gray-700"
                    placeholder="contacts@company.com"
                    type="email"
                    name="email"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    name="meraMessage"
                    required
                    className="p-2 w-96 bg-transparent border-2 rounded-md focus:outline-none text-gray-700"
                    placeholder="Write your messege here"
                  />
                </div>
                <button
                  type="submit"
                  className="flex justify-center hover:text-white hover:bg-blue-500 transition duration-500 items-center bg-white border-2 border-blue-500 text-lg text-gray-700 shadow-xl my-5 py-1 rounded-full mx-auto px-8"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className='h-[380px] w-full mx-0 xl:mx-2 2xl:mx-0 sm:w-[480px] bg-blue-500 items-center' >
              <div className='sm:mt-72 mt-10'>
                <div className='flex items-center justify-start p-2'>
                  <FaStar size={30} className='text-gray-400 py-1' />
                  <p className='text-white text-lg'>Gulshan-e-Iqbal, Karachi, Pakistan</p>
                </div>
                <div className='flex items-center justify-start p-2'>
                  <FaStar size={30} className='text-gray-400 py-1' />
                  <p className='text-white text-lg'>muhammad.binyammani@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}
