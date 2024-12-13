"use client";

import React, { useState } from 'react'
import Link from 'next/link';

const Navbar = () => {
    const [isClick,setisClick] = useState(false);

    const toggleNavbar =() =>{
        setisClick(!isClick)
    }
  return (
    <div>
      <nav className='fixed right-0 left-0 top-0 lg:px-16  bg-black/40  z-[100]  border-b-[1px] border-neutral-900  bg-black text-white  h-auto sm:h-15 md:h-19 lg:h-19  py-2 px-3 flex sm:flex-row justify-between items-center   backdrop-blur-lg border border-white/40  shadow-lg p-6'>
        <div>
            {/* <h1>
            backdrop-blur-lg border border-white/40  shadow-lg p-6
                <a href="#">
                    <img src={logo} alt="" className='w-52 hover:scale-105 transition-all' />
                    </a>
            </h1> */}
               <Link href="/">
            <img
              src="/img/154.png"
              alt="navLogo"
              className=' hover:scale-105 transition-all'
              width={90}
              height={90}
            />
          </Link>
        </div> 
        <div className='flex flex-row space-y-3 sm:space-y-0  sm:space-x-5'>

        {/* <div className=' w-full hidden md:block sm:w-auto mb-4 sm:mb-0 relative z-10 mr-60'> */}
        {/* <ul className='flex flex-col sm:flex-row space-y-3 sm:space-y-0  sm:space-x-5'> */}
           {/* <li><a href="/" className='hover:bg-white hover:text-black hover:rounded-full hover:py-3 hover:px-5'>HOME</a></li>
           <li><a href="/components" className='hover:bg-white hover:text-black hover:rounded-full hover:py-3 hover:px-5'>ABOUT US</a></li>
           <li><a href="/" className='hover:bg-white hover:text-black hover:rounded-full hover:py-3 hover:px-5'>SPONSOR</a></li>
           <li><a href="/" className='hover:bg-white hover:text-black hover:rounded-full hover:py-3 hover:px-5'>TIMELINE</a></li> */}
        {/* </ul> */}
        {/* </div> */}
        <div className="flex flex-row md:block w-full sm:w-auto  ">
        <button className="bg-gradient-to-r from-blue-200 via-gray-700 to-gray-500 rounded-full  bg-white text-white mr-1 sm:mr-5 font-bold md:px-4 md:py-2 px-1 sm:px-2 py-1  sm:py-1 text-xs sm:text-1.8xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
  REGISTER
</button>
        <button className="bg-gradient-to-r from-blue-200 via-gray-700 to-gray-500 rounded-full  bg-white text-white mr-1 sm:mr-5 font-bold md:px-4 md:py-2 px-1 sm:px-2 py-1  sm:py-1 text-xs sm:text-1.8xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
        PROBLEM STATEMENT
</button>
       
        </div>
        </div>

        {/* <div className=' md:hidden flex items-center'>
           <button className=' inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
           onClick={toggleNavbar}
           >
            {isClick ? (
                <svg
                className='h-6 w-6'
                xmlns='https://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d = "M6 18L18 6M6 6L12 12"
                    />
                </svg>
            ) : (
                <svg
                className='h-6 w-6'
                xmlns='https://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d = "M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            )}
           </button>
        </div> */}
        {/* {isClick && ( */}
            {/* // <div className="md:hidden"> */}
                {/* <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 "> */}
                    
                {/* <ul className='flex flex-col sm:flex-row space-y-3 sm:space-y-0  sm:space-x-5 '>
           <li><a href="/" className='hover:bg-white hover:text-black hover:rounded-full hover:py-3 hover:px-5'>HOME</a></li>
           <li><a href="/components" className='hover:bg-white hover:text-black hover:rounded-full hover:py-3 hover:px-5'>ABOUT US</a></li>
           <li><a href="/" className='hover:bg-white hover:text-black hover:rounded-full hover:py-3 hover:px-5'>WORK</a></li>
           <li><a href="/" className='hover:bg-white hover:text-black hover:rounded-full hover:py-3 hover:px-5'>TIMELINE</a></li>
        </ul>

        <button className=" font-bold bg-white text-black rounded-full md:px-4 md:py-2 px-2 py-1 text-1.8xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
  REGISTER
</button> */}

                {/* </div> */}
            {/* </div> */}
        {/* // )} */}
      </nav>
    </div>
  )
}

export default Navbar

// "use client";

// import React from 'react'
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <div>
//       <nav className='sticky bg-black text-white  h-auto sm:h-15 md:h-19 lg:h-19  py-2 px-3 flex flex-col sm:flex-row justify-between items-center   backdrop-blur-lg border border-white/40  shadow-lg p-6'>
//         <div className='mb-4 sm:mb-0'>
//             {/* <h1>
//             backdrop-blur-lg border border-white/40  shadow-lg p-6
//                 <a href="#">
//                     <img src={logo} alt="" className='w-52 hover:scale-105 transition-all' />
//                     </a>
//             </h1> */}
//                <Link href="/">
//             <img
//               src="/img/ieteLogo.png"
//               alt="navLogo"
//               className='hover:scale-105 transition-all ml-10 '
//               width={50}
//               height={50}
//             />
//           </Link>
//         </div> 
//         <div className='w-full sm:w-auto mb-4 sm:mb-0 relative z-10 '>
//         <ul className='flex flex-col sm:flex-row space-y-3 sm:space-y-0  sm:space-x-5'>
//            <li><a href="/" className='hover:bg-white hover:text-black hover:rounded-full hover:py-3 hover:px-5'>HOME</a></li>
//            <li><a href="/components" className='hover:bg-white hover:text-black hover:rounded-full hover:py-3 hover:px-5'>ABOUT US</a></li>
//            <li><a href="/" className='hover:bg-white hover:text-black hover:rounded-full hover:py-3 hover:px-5'>WORK</a></li>
//            <li><a href="/" className='hover:bg-white hover:text-black hover:rounded-full hover:py-3 hover:px-5'>TIMELINE</a></li>
//         </ul>
//         </div>
//         <div className="w-full sm:w-auto mr-10">
//         <button className="font-bold bg-white text-black rounded-full md:px-4 md:py-2 px-2 py-1 text-1.8xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
//   REGISTER
// </button>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar
