import React from 'react'

const Content = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-r from-white via-teal-100 to-teal-200 ">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20 flex-col line-height-10  items-center text-center">
        <p className="sm:text-3xl  title-font mb-2 text-gray-900 font-extrabold">MVP OF ALL THE JOB BOARDS</p>
        <p className="lg:w-1/2 mt-5 w-full leading-relaxed text-gray-700 text-3xl">You are not alone ,we are with u to take you to your dream JOB .</p>
        <nav className="mt-3 flex flex-wrap items-center text-base justify-center">
            <a className=" bg-teal-600 hover:bg-teal-900 text-xl text-white font-semibold px-8 py-4 rounded-full shadow-md transition duration-300 ease-in-out" href='/'>Try Us for free</a>        
        </nav>
      </div>
    </div>  
  </section>
  )
}

export default Content