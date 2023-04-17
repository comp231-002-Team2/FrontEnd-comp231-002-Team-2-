import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; 

import Link from 'next/link';



const Login = () => {
    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };

      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${username}\nPassword: ${password}`);
        // You can add your own logic here to submit the form data
      };

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


        
        <form 
        className="whitespace-pre-wrap absolute top-[170px] left-[470px] w-[637px] h-[446px] border border-blue-400  shadow-md
        "style={{ boxShadow: "10px 10px 0 0 #00AFFA" }}
        onSubmit={handleSubmit}>
  <fieldset style={{ textAlign: "center" }}>

            <br></br>
            <br></br>
            <p className="font-bold  text-[#00AFFA] text-3xl">Sign UP</p>
            <br></br>
            <p>Create your account</p>
            <br></br>
        <label>
        First name :&nbsp;
          <input type="username"  value={username} onChange={handleUsernameChange} style={{ backgroundColor: '#D9D9D9' , boxShadow: "0px 1px 0px #00AFFA"}}/>
        </label>
        <label >
        &nbsp;Last name :&nbsp;
          <input type="username" style={{ backgroundColor: '#D9D9D9' , boxShadow: "0px 1px 0px #00AFFA" }} />
        </label>
        <br></br>            <br></br>
        <label>
        Country :&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="country"  style={{ backgroundColor: '#D9D9D9' , boxShadow: "0px 1px 0px #00AFFA", width: "450px"}}/>
        </label>
        <br></br>            <br></br>
        <label>
        Email :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="email"  style={{ backgroundColor: '#D9D9D9' , boxShadow: "0px 1px 0px #00AFFA", width: "450px"}}/>
        </label>
        <br></br>            <br></br>

        <label >
        Password :&nbsp;&nbsp;
          <input type="password"  style={{ backgroundColor: '#D9D9D9' , boxShadow: "0px 1px 0px #00AFFA" }} />
        </label>
        <label >
        &nbsp;Re-type :&nbsp;
          <input type="password"  style={{ backgroundColor: '#D9D9D9' , boxShadow: "0px 1px 0px #00AFFA" }} />
        </label>
        <br></br>            <br></br>


        <button type="signup" style={{ backgroundColor: '#00AFFA' }}>    Sign Up    </button>
        <br></br>

        <br></br>
        <br></br>

        <p style={{ backgroundColor: '#D9D9D9' }}>Already have an account? <Link href='/login' className=" text-[#00AFFA]" >Log In</Link></p>
        
        </fieldset>

      </form>
      <Link href='/contact' className="whitespace-pre-wrap absolute top-[670px] left-[1220px] w-[118x] h-[28px] text-[#00AFFA]">Contact Us</Link>


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

export default Login;