import React, {useState} from 'react';
import{AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'; 

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)

    }


  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-black'>
        <h1 className= 'w-2/4 text-3xl font-bold text-[black]'>FRIENDLY COMMUNITY</h1>
        <ul className= 'hidden md:flex'>
            <li className= 'p-4'>community display</li>
            <li className= 'p-4'>channel</li>
            <li className= 'p-4'>contact us</li>
            <li className= 'p-4'>login</li>
            <li className= 'p-4'>sign up</li>
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