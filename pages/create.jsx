import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; 
import Link from 'next/link';
import pic1 from "../public/assets/asdasdasdsaw.jpg";
import pic2 from "../public/assets/asdasdasdsaw2.jpg";
import Image from 'next/image';


function create() {
  const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-2 text-black">
    <div className="w-28 bg-blue-300">
        <h1 className= "whitespace-pre-wrap w-[340px] font-['Sarabun'] text-[25px] leading-[0.9] font-bold text-left uppercase text-black">FRIENDLY COMMUNITY</h1>             
    </div>      
          <ul className='hidden md:flex'>
              <Link href='/display'>
                  <li className= "whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Community Display</li>
              </Link>
              <Link href='/chat'>
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
  <p className="whitespace-pre-wrap absolute font-bold  text-[#003AA9] text-3xl top-[108px] left-[250px] w-[375px]  h-[104px]">YOUR COMMUNITY KNOWS BEST</p>
  <p className="whitespace-pre-wrap absolute top-[221px] left-[250px] w-[400px]  h-[83px] ">GET IN TOUCH WITH THE PEOPLE WITH THE BEST TIPS. SHARE IDEAS, EVENTS. EXPERIENCE THE POWER OF COMMUNITY</p>
  <Link href="/CMcontact" style={{ backgroundColor: '#FFE353', fontSize: '33px',color: '#FFFFFF' }}  className="whitespace-pre-wrap absolute top-[350px] left-[250px] w-[300px]  h-[63px]"> POST COMMUNITY</Link> 
  <Image className="whitespace-pre-wrap absolute top-[70px] left-[750px] w-[650px]  h-[420px]" src={pic1} alt="profile" />
  <Image className="whitespace-pre-wrap absolute top-[500px] left-[340px] w-[1217]  h-[224px]" src={pic2} alt="profile"/>
  <Link href="/" style={{ backgroundColor: '#FFE353',fontSize: '14px',color: 'black' }} className="font-bold whitespace-pre-wrap absolute top-[430px] left-[252px] w-[90px]  h-[20px] ">  Return Back</Link>

      

    <div onClick={handleNav} className= 'block md:hidden'>
            { nav ? <AiOutlineClose size ={20}/> : <AiOutlineMenu size={20} /> }
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r boder-r-gray-900 bg-blue-100 ease-in-out duration-500' : 'fixed left-[-100%] '  }>
        <h1 className= 'w-full text-3xl font-bold text-[black] m-4'>FRIENDLY COMMUNITY</h1>
            <ul className='uppercase p-4'>
                <Link href='/display'>
                    <li className= "p-4 border-b border-gray-300">Community Display</li>
                </Link>
                <Link href='/chat'>
                    <li className= "p-4 border-b border-gray-300">Channel</li>
                </Link>
                <Link href='/contact'>
                    <li className= "p-4 border-b border-gray-300">Contact Us</li>
                </Link>
                <Link href="/login">
                    <li className="p-4 border-b border-gray-300">Login</li>
                </Link>
                <Link href='/signup'>
                    <li className= "p-4 border-b border-gray-300">Sign Up</li>
                </Link>                          
            </ul>
            
        </div>    

    </div>


  );
}

export default create;