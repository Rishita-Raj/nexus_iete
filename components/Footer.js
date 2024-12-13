// import React from 'react'
// import { FaFacebookF } from "react-icons/fa";
// import Link from 'next/link';
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { CiLocationOn } from "react-icons/ci";
// import { FaRegEnvelope } from "react-icons/fa";
// import { FaPhone } from "react-icons/fa";
// // import Link from 'next/link';

// const Footer = () => {
//   return (
//     <div>
//       <footer className='h-40 bg-gray-300 mt-10 mb-5 py-25 overflow-hidden px-15 text-gray-800 flex justify-around'>
//             <div className='contanier mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
              
//               <div>
//                 <Link href="/">
//             <img
//               src="/img/ieteLogo.png"
//               alt="navLogo"
//               className=' hover:scale-105 transition-all justify-center text-3xl mt-4 '
//               width={80}
//               height={30}
//             />
//           </Link>
//             <div className='flex space-x-4 mb-10'>
//                     <Link href="https://www.facebook.com/ietebits"><FaFacebookF className='text-white h-8 w-8 rounded-full bg-blue-800 pt-1 pb-1 mt-1' /></Link>
//                     <Link href="https://www.instagram.com/ietebits?igsh=eXVoamFtdjUwcm16"><FaInstagram className='text-white h-8 w-8 rounded-full bg-pink-400 pt-1 pb-1 mt-1'/></Link>
//                     <Link href="https://www.linkedin.com/company/iete-students-chapter-bit-sindri123/"><FaLinkedin className='text-white h-8 w-8 rounded-full bg-blue-500 pt-1 pb-1 mt-1'/> </Link>
//             </div>
//                 </div>
//             <div> 
//             <h3 className='text-xl font-bold mb-5'></h3>
//              <ul className='page-y-2 text-lg'> 
             
             
//                </ul>
//            </div>

//             <div>
//             <h3 className='text-xl font-bold mb-3 mt-5 ml-5'>CONTACTS</h3>
//             {/* <h3 className='text-xl font-bold mb-3'>CONTACTS</h3> */}
//                     <ul className='mb-5 text-lg mr-1 '>
//                 <li><a href=""><FaPhone className='inline-block align-middle mr-2'/>Priyanshu Mukherjee(2021) - 9142040066</a></li>
//                 <li><a href=""><FaPhone className='inline-block align-middle mr-2'/>Adarsh kumar(2022) - 7909041883</a></li>
//                 <li><a href=""><FaPhone className='inline-block align-middle mr-2' />Faizan Ahmad(2022) - 8102061756</a></li>           
//                     </ul>
//             </div>
//             </div>
//       </footer>
//       <div className="flex justify-center text-neutral-300">

//         <p>&copy;2024 all rights reserved | IETE Students' Forum BIT Sindri
//         Made with <span className="text-red-600">❤</span> and support, Team IETE</p>
// </div>
//     </div>
//   )
// }

// export default Footer



import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-300 mt-10 mb-5 py-6 px-5 text-gray-800">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Logo and Social Media Links */}
          <div className="text-center md:text-left">
            <Link href="/">
              <img
                src="/img/ieteLogo.png"
                alt="navLogo"
                className="mx-auto md:mx-0 hover:scale-105 transition-all mt-2"
                width={80}
                height={30}
              />
            </Link>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <Link href="https://www.facebook.com/ietebits">
                <FaFacebookF className="text-white h-8 w-8 rounded-full bg-blue-800 p-2 hover:opacity-90" />
              </Link>
              <Link href="https://www.instagram.com/ietebits?igsh=eXVoamFtdjUwcm16">
                <FaInstagram className="text-white h-8 w-8 rounded-full bg-pink-400 p-2 hover:opacity-90" />
              </Link>
              <Link href="https://www.linkedin.com/company/iete-students-chapter-bit-sindri123/">
                <FaLinkedin className="text-white h-8 w-8 rounded-full bg-blue-500 p-2 hover:opacity-90" />
              </Link>
            </div>
          </div>

          {/* Placeholder for Other Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left"></h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link href="/"></Link></li>
              <li><Link href="/about"></Link></li>
              <li><Link href="/contact"></Link></li>
            </ul>
          </div>
          {/* <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div> */}

          {/* Contact Information */}
          <div className='mr-30 sm:ml-0'>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Contacts</h3>
            <ul className="space-y-3">
              <li className=''>
                <FaPhone className="inline-block align-middle mr-2" />
                Priyanshu Mukherjee (2021) - 9142040066
              </li>
              <li>
                <FaPhone className="inline-block align-middle mr-2" />
                Adarsh Kumar (2022) - 7909041883
              </li>
              <li>
                <FaPhone className="inline-block align-middle mr-2" />
                Faizan Ahmad (2022) - 8102061756
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="bg-black text-center text-neutral-300 py-3">
        <p>
          &copy;2024 All rights reserved | IETE Students' Forum BIT Sindri <br />
          Made with <span className="text-red-600">❤</span> and support, Team IETE
        </p>
      </div>
    </div>
  );
};

export default Footer;