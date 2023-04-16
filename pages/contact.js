import React from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const MyComponent = () => {
  const [nav, setNav] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };
    
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-2 text-black">
      <div className="w-28 bg-blue-300">
        <h1 className="whitespace-pre-wrap w-[340px] font-['Sarabun'] text-[25px] leading-[0.9] font-bold text-left uppercase text-black">FRIENDLY COMMUNITY</h1>
      </div>
      <ul className="hidden md:flex">
        <Link href="/display">
          <li className="whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Community Display</li>
        </Link>
        <Link href="/chat">
          <li className="whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Channel</li>
        </Link>
        <Link href="/contact">
          <li className="whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Contact Us</li>
        </Link>
        <Link href="/login">
          <li className="whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Login</li>
        </Link>
        <Link href="/signup">
          <div className="bg-[#ec7777] h-30">
            <li className="whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Sign Up</li>
          </div>
        </Link>
      </ul>
  
      {/* Add the Contact form here */}
      <form 
        className="whitespace-pre-wrap absolute top-[170px] left-[470px] w-[637px] h-[446px] border border-blue-400 shadow-md"
        style={{ boxShadow: "10px 10px 0 0 #00AFFA" }}
        onSubmit={handleSubmit}
      >
        <h1 style={{fontWeight: "bold"}}>Love to hear from you,</h1>
        <h2 style={{fontWeight: "bold"}}>Get in touch with us!</h2>
<br/>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
  <div style={{ marginRight: '10px' }}>
    <label htmlFor="name">Your Name:</label><br />
    <input type="text" id="name" value={name} onChange={handleNameChange} required  style={{backgroundColor: '#D9D9D9' , boxShadow: "0px 1px 0px #00AFFA"}}/>
  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div>
    <label htmlFor="email">Your Email:</label><br />
    <input type="email" id="email" value={email} onChange={handleEmailChange} required style={{backgroundColor: '#D9D9D9' , boxShadow: "0px 1px 0px #00AFFA"}}/>
  </div>
</div>
        <br /><br/>
        <label>
  Your Message: <br/>
  <textarea value={message} onChange={handleMessageChange} required style={{border: '1px solid black', height: '200px', width: '400px'}} />
</label>

        <br />
        <button type="submit" style={{background:'black', color:'white', padding: '10px 20px'}}>Submit</button>


      </form>
  
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-blue-100 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-black m-4'>FRIENDLY COMMUNITY</h1>
        <ul className='uppercase p-4'>
          <Link href='/display'>
            <li className="p-4 border-b border-gray-300">Community Display</li>
            </Link>
            <Link href='/chat'>
              <li className="p-4 border-b border-gray-300">Channel</li>
              </Link>
              <Link href='/contact'>
                <li className="p-4 border-b border-gray-300">Contact Us</li>
                </Link>
                <Link href="/login">
                  <li className="p-4 border-b border-gray-300">Login</li>
                  </Link>
                  <Link href='/signup'>
                    <li className="p-4 border-b border-gray-300">Sign Up</li>
                  </Link>                          
     </ul>
     </div>
     </div>
  );
};
export default MyComponent;