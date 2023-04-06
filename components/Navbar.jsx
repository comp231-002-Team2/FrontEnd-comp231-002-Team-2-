import React, {useState} from 'react';
import{AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'; 

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
          <div className="w-28 bg-blue-300">
              <h1 className= "whitespace-pre-wrap w-[340px] font-['Sarabun'] text-[25px] leading-[0.9] font-bold text-left uppercase text-black">FRIENDLY COMMUNITY</h1>             
          </div>      
        <ul className= 'hidden md:flex'>
            <li className= "whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Community Display</li>
            <li className= "whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Channel</li>
            <li className= "whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Contact Us</li>
            <li className="whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Login</li>
            <div className="bg-[#ec7777] h-30">
                <li className= "whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Sign Up</li>
            </div>
        </ul>
        <div onClick={handleNav} className= 'block md:hidden'>
            { nav ? <AiOutlineClose size ={20}/> : <AiOutlineMenu size={20} /> }
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r boder-r-gray-900 bg-blue-100 ease-in-out duration-500' : 'fixed left-[-100%] '  }>
        <h1 className= 'w-full text-3xl font-bold text-[black] m-4'>FRIENDLY COMMUNITY</h1>
            <ul className= 'uppercase p-4'>
            <li className= 'p-4 border-b border-gray-300'>community display</li>
            <li className= 'p-4 border-b border-gray-300'>channel</li>
            <li className= 'p-4 border-b border-gray-300'>contact us</li>
            <li className= 'p-4 border-b border-gray-300'>login</li>
            <li className= 'p-4 border-b border-gray-300'>sign up</li>
            </ul>
        </div>         
    </div>
  )
}

export default Navbar