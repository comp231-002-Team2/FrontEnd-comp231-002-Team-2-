import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; 
import torontoImage from "../public/assets/torontoImage.jpg";
import communityImage from "../public/assets/communityImage.jpg";
import Image from 'next/image';
import Link from 'next/link';

const Main = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="bg-[url('../public/assets/communityImage.jpg')] bg-custom-image bg-cover h-screen bg-no-repeat top-[-91px]">
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-2 text-black">
          <div className="w-28 bg-blue-300">
              <h1 className= "whitespace-pre-wrap w-[340px] font-['Sarabun'] text-[25px] leading-[0.9] font-bold text-left uppercase text-black">FRIENDLY COMMUNITY</h1>             
          </div>      
                <ul className='hidden md:flex'>
                    <Link href='/display'>
                        <li className= "whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Community Display</li>
                    </Link>
                    <Link href='/'>
                        <li className= "whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Channel</li>
                    </Link>
                    <Link href='/contact'>
                        <li className= "whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Contact Us</li>
                    </Link>

                    <Link href='/login'>
                        <li className="whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Login</li>
                    </Link>
                    <Link href='/signup'>
                        <div className="bg-[#ec7777] h-30">
                            <li className= "whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Sign Up</li>
                        </div>
                    </Link>     
                </ul>
        <p className="whitespace-pre-wrap absolute top-[690px] left-[95px] w-[1201px] h-[194px] font-['Sarabun'] text-[100px] leading-[0.9] font-bold text-left uppercase">
        <span className="whitespace-pre-wrap w-[1201px] h-[194px] font-['Sarabun'] text-[100px] leading-[0.9] font-bold text-left uppercase text-white">
          Friendly
        </span>
        <span className="whitespace-pre-wrap w-[1201px] h-[194px] font-['Sarabun'] text-[100px] leading-[0.9] font-bold text-left uppercase text-white">
          {" "}
        </span>
        <span className="whitespace-pre-wrap w-[1201px] h-[194px] font-['Sarabun'] text-[100px] leading-[0.9] font-bold text-left uppercase text-white">
          Community
        </span>
        <span className="whitespace-pre-wrap w-[1201px] h-[194px] font-['Sarabun'] text-[100px] leading-[0.9] font-bold text-left uppercase text-white">
          {" "}
        </span>
        <br />
        <span className="whitespace-pre-wrap w-[1201px] h-[194px] font-['Sarabun'] text-[100px] leading-[0.9] font-bold text-left uppercase text-[#ec7777]">
          in
        </span>
        <span className="whitespace-pre-wrap w-[1201px] h-[194px] font-['Sarabun'] text-[100px] leading-[0.9] font-bold text-left uppercase text-[#ec7777]">
          {" "}
        </span>
        <span className="whitespace-pre-wrap w-[1201px] h-[194px] font-['Sarabun'] text-[100px] leading-[0.9] font-bold text-left uppercase text-[#ec7777]">
          TORONTO
        </span>
        </p>
        <div onClick={handleNav} className= 'block md:hidden'>
            { nav ? <AiOutlineClose size ={20}/> : <AiOutlineMenu size={20} /> }
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r boder-r-gray-900 bg-blue-100 ease-in-out duration-500' : 'fixed left-[-100%] '  }>
        <h1 className= 'w-full text-3xl font-bold text-[black] m-4'>FRIENDLY COMMUNITY</h1>
            <ul className='uppercase p-4'>
                <Link href='/display'>
                    <li className= "p-4 border-b border-gray-300">Community Display</li>
                </Link>
                <Link href='/'>
                    <li className= "p-4 border-b border-gray-300">Channel</li>
                </Link>
                <Link href='/Contact'>
                    <li className= "p-4 border-b border-gray-300">Contact Us</li>
                </Link>
                <Link href='/login'>
                    <li className="p-4 border-b border-gray-300">Login</li>
                </Link>
                <Link href='/signup'>
                    <li className= "p-4 border-b border-gray-300">Sign Up</li>
                </Link>                          
            </ul>
        </div>    
    </div>
       
    </div>        
  )
}

export default Main;