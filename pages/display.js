import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; 
import Link from 'next/link';
import pic1 from "../public/assets/popular/1.jpg";
import pic2 from "../public/assets/popular/2.jpg";
import pic3 from "../public/assets/popular/3.jpg";
import pic4 from "../public/assets/popular/4.jpg";
import pic5 from "../public/assets/popular/5.jpg";
import pic6 from "../public/assets/popular/6.jpg";
import Image from 'next/image';



const display = () => {
  

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



            <p className="underline font-bold text-[#000000] text-3xl top-[88px] left-[530px] w-[506px] h-[41px] whitespace-pre-wrap absolute" >Welcom All Students in Toronto</p>
        
            <form className="whitespace-pre-wrap absolute top-[303px] left-[376px] w-[270px] h-[370px] border border-black">
  <img src="/assets/popular/1.jpg" alt="Your Image" />
  <p style={{ fontSize: '16px' }}>TORONTO BUSINESS COMMUNITY</p>
  <br></br>
  <p style={{ fontSize: '12px' }}>THIS IS A COMMUNITY WHERE WE MEET ONCE IN A MONTH WITH ALL BUSINIESS PEOPLE TO GET NETWORKING AND LEARN MORE ABOUT BUSINESS.</p>
  <br></br>
  <p style={{ fontSize: '12px' }}>TORONTO, ONTARIO, CANADA</p>
  <br></br>
</form>

      <form className="whitespace-pre-wrap absolute top-[303px] left-[732px] w-[270px] h-[370px] border border-black">
      <img src="/assets/popular/2.jpg" alt="Your Image" />
      <p style={{ fontSize: '16px' }}>TORONTO LECTURE COMMUNITY</p>
  <br></br>
  <p style={{ fontSize: '12px' }}>JOIN OUR COMMUNITY OF LIKE-MINDED INDIVIDUALS WHO LOVE TO LEARN AND GROW TOGETHER THROUGH OUR MONTHLY LECTURE SERIES.</p>
  <br></br>
  <p style={{ fontSize: '12px' }}>TORONTO, ONTARIO, CANADA</p>
  <br></br>
            </form>
            <form className="whitespace-pre-wrap absolute top-[303px] left-[1088px] w-[270px] h-[370px] border border-black">
            <img src="/assets/popular/3.jpg" alt="Your Image" />
            <p style={{ fontSize: '16px' }}>TORONTO ART COMMUNITY</p>
  <br></br>
  <p style={{ fontSize: '12px' }}>JOIN OUR COMMUNITY OF ART ENTHUSIASTS AND SHARE YOUR PASSION FOR ART. WE HOST MONTHLY MEETINGS TO CONNECT WITH OTHER ARTISTS AND DISCUSS THE LATEST ART TRENDS AND TECHNIQUES.</p>
  <br></br>
  <p style={{ fontSize: '12px' }}>TORONTO, ONTARIO, CANADA</p>
            </form>

            <form className="whitespace-pre-wrap absolute top-[714px] left-[376px] w-[270px] h-[370px] border border-black">
            <img src="/assets/popular/4.jpg" alt="Your Image" />
            <p style={{ fontSize: '16px' }}>TORONTO LANGUAGE EXCHANGE</p>
  <br></br>
  <p style={{ fontSize: '12px' }}>PRACTICE A NEW LANGUAGE AND MEET NEW FRIENDS AT OUR MONTHLY MEETUPS.</p>
  <br></br>
  <p style={{ fontSize: '12px' }}>TORONTO, ONTARIO, CANADA</p>
  <br></br>
  <br></br>
            </form>

            <form className="whitespace-pre-wrap absolute top-[714px] left-[732px] w-[270px] h-[370px] border border-black">
            <img src="/assets/popular/5.jpg" alt="Your Image" />
            <p style={{ fontSize: '16px' }}>TORONTO SOCIAL COMMUNITY</p>
  <br></br>
  <p style={{ fontSize: '12px' }}>JOIN US ONCE A MONTH TO CONNECT WITH OTHERS AND DISCUSS SOCIAL ISSUES IN TORONTO.</p>
  <br></br>
  <p style={{ fontSize: '12px' }}>TORONTO, ONTARIO, CANADA</p>
  <br></br>  <br></br>

            </form>

            <form className="whitespace-pre-wrap absolute top-[714px] left-[1088px] w-[270px] h-[370px] border border-black">
            <img src="/assets/popular/6.jpg" alt="Your Image" />
            <p style={{ fontSize: '16px' }}>TORONTO NEIGHBORHOOD COMMUNITY</p>
  <br></br>
  <p style={{ fontSize: '12px' }}>MEET WITH NEIGHBORS ONCE A MONTH TO BUILD A STRONGER COMMUNITY AND GET INVOLVED IN LOCAL EVENTS.</p>
  <br></br>
  <p style={{ fontSize: '12px' }}>TORONTO, ONTARIO, CANADA</p>
  <br></br>
            </form>



            <form className="whitespace-pre-wrap absolute top-[325px] left-[100px] w-[200px] h-[435px] border border-gray-400 rounded-2xl">
  <div className="flex items-center border-b border-b-2 border-grey py-2">
    <input
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
      type="text"
      placeholder="Search..."
      aria-label="Search"
    />
    <button
      className="flex-shrink-0 bg-gray-400  text-sm  text-white py-1 px-2 rounded"
      type="button"
    >
      Search
    </button>
  </div>
  <p className="text-gray-500">  Result : </p>
</form>
            <form className="whitespace-pre-wrap absolute top-[800px] left-[554px] w-[270px] h-[335px] ">

            </form>
            
            <Link href="/MoreAboutCommunity" style={{ backgroundColor: '#00AFFA' }} className="whitespace-pre-wrap absolute top-[645px] left-[380px] w-[80px] h-[20px] ">Read More</Link>
            <Link href="/MoreAboutCommunity" style={{ backgroundColor: '#00AFFA' }} className="whitespace-pre-wrap absolute top-[645px] left-[736px] w-[80px] h-[20px] ">Read More</Link>
            <Link href="/MoreAboutCommunity" style={{ backgroundColor: '#00AFFA' }} className="whitespace-pre-wrap absolute top-[645px] left-[1092px] w-[80px] h-[20px] ">Read More</Link>
            <Link href="/MoreAboutCommunity" style={{ backgroundColor: '#00AFFA' }} className="whitespace-pre-wrap absolute top-[1060px] left-[380px] w-[80px] h-[20px] ">Read More</Link>
            <Link href="/MoreAboutCommunity" style={{ backgroundColor: '#00AFFA' }} className="whitespace-pre-wrap absolute top-[1060px] left-[736px] w-[80px] h-[20px] ">Read More</Link>
            <Link href="/MoreAboutCommunity" style={{ backgroundColor: '#00AFFA' }} className="whitespace-pre-wrap absolute top-[1060px] left-[1092px] w-[80px] h-[20px] ">Read More</Link>

        
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
};

export default display;