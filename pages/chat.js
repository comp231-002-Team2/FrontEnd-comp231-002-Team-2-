import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';

const ChatBox = () => {
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

          <form className="whitespace-pre-wrap absolute top-[150px] left-[350px] right-auto w-[864px] h-[490px] border border-gray-400">

    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flex: "1", backgroundColor: "#F5F5F5", padding: "20px" }}>
        <h2>User Directory</h2>
        <p>____________________________</p>
        <ul>
            <br></br>
          <li>User 1</li>
          <br></br>
          <li>User 2</li>
          <br></br>
          <li>User 3</li>
          <br></br>
          <li>User 4</li>
          <br></br>
          <li>User 5</li>
        </ul>
      </div>


      <div style={{ flex: "2", backgroundColor: "#F5F5F5", padding: "20px" }}>
        <div
          style={{
            backgroundColor: "#FFF",
            border: "1px solid #CCC",
            borderRadius: "5px",
            height: "400px",
            overflowY: "scroll",
            marginBottom: "10px",
            padding: "10px"
          }}
        >
          <p>Chat message 1</p>
          <p>Chat message 2</p>
          <p>Chat message 3</p>
          <p>Chat message 4</p>
          <p>Chat message 5</p>
          <p>Chat message 6</p>
          <p>Chat message 7</p>
          <p>Chat message 8</p>
          <p>Chat message 9</p>
          <p>Chat message 10</p>
        </div>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Type your message here"
            style={{
              flex: "1",
              borderRadius: "5px",
              padding: "10px",
              marginRight: "10px",
              border: "1px solid #CCC"
            }}
          />
          <button
            style={{
              backgroundColor: "#00BFFF",
              color: "#FFF",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
              cursor: "pointer"
            }}
          >
            Send
          </button>


        </div>
      </div>
    </div></form>
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

export default ChatBox;
