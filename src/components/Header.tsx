import React from 'react'

const Header = () => {
  return (
    <header className="text-gray-600 body-font sticky top-0 bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
             <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-teal-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M6 6v12M6 6h10v2H6zm0 5h10v2H6zm0 5h10v2H6z"></path>
                </svg>
                <span className="ml-3 text-xl">EdgeNix</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-7  font-bold" href='/'>About Us</a>
                <a className="mr-7 text-gray-900 font-bold" href='/'>Sign In</a>
                <a className="mr-7 bg-gray-600 hover:bg-gray-900 text-white font-semibold px-7 py-2 rounded-full shadow-md transition duration-300 ease-in-out" href='/'>Join Now</a>
                
            </nav>
         </div>
    </header>
  )
}

export default Header