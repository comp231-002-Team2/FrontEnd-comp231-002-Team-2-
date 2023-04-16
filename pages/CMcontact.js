import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const ContactForm = () => {
  const [title, setTitle] = useState('');
  const [logoimage, setLogoimagel] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [instagramlink, setInstagramlink] = useState('');
  const [youtubelink, setYoutubelink] = useState('');
  const [otherwebsitelink, setOtherwebsitelink] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [description, setDescription] = useState('');

  const [message, setMessage] = useState('');
  const [nav, setNav] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };
  const handleLogoimagelChange = (event) => {
    setLogoimagel(event.target.value);
  };
  const handleInstagramlinkChange = (event) => {
    setInstagramlink(event.target.value);
  };
  const handleYoutubelinkChange = (event) => {
    setYoutubelink(event.target.value);
  };
  const handleOtherwebsitelinkChange = (event) => {
    setOtherwebsitelink(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhonenumberChange = (event) => {
    setPhonenumber(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Title: ${title}\nEmail: ${email}\nMessage: ${message}`);
    // You can add your own logic here to submit the form data
  };

  const handleNav = () => {
    setNav(!nav);
  };


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

     <div style={{ 
        fontFamily: 'Sarabun',
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: '200px',
        letterSpacing: '0em',
        textAlign: 'right',
        position: 'fixed',
        top: '-5px',
        left: '300px'
        }}>
      <h1>START POSTING COMMUNITY</h1>
      </div>  

      <div style={{ 
        fontWeight:30,
        position: 'fixed',
        top: '120px',
        left: '300px'
        }}>
  <div style={{width: '45%'}}>
    <label>
      TITLE<br/>
      <input type='text' value={title} onChange={handleTitleChange} required style={{backgroundColor: 'lightgrey'}}/>
    </label>
    <br />
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <label style={{ marginRight: '20px' }}>
    LOGO IMAGE<br/>
    <input type='logoimage' value={logoimage} onChange={handleLogoimagelChange} required style={{ backgroundColor: 'lightgray' }}/>
  </label>
  <div style={{ borderLeft: '1px solid black', height: '30px', margin: '0 20px' }}></div>
  <button style={{color: 'blue'}} onClick={() => document.querySelector('input[type=file]').click()}>CHOOSE FILE</button>
</div>
    <br />
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <label style={{ marginRight: '20px' }}>
  CITY<br/>
  <input type='text' value={city} onChange={handleCityChange} required style={{backgroundColor: 'lightgray'}}/>
</label>
<label>
  POSTAL CODE<br/>
  <input type='text' value={postalCode} onChange={handlePostalCodeChange} required style={{backgroundColor: 'lightgray'}}/>
</label>
</div>
    <br />
    <label>
      INSTAGRAM LINK<br/>
      <input type='instagramlink' value={instagramlink} onChange={handleInstagramlinkChange} required style={{backgroundColor: 'lightgray'}}/>
    </label>
    <br />
    <label>
      YOUTUBE LINK<br/>
      <input type='youtubelink' value={youtubelink} onChange={handleYoutubelinkChange} required style={{backgroundColor: 'lightgray'}}/>
    </label>
    <br />
    <label>
      OTHER WEBSITE LINK<br/>
      <input type='otherwebsitelink' value={otherwebsitelink} onChange={handleOtherwebsitelinkChange} required style={{backgroundColor: 'lightgray'}}/>
    </label>
    <br />
    <label>
      EMAIL<br/>
      <input type='email' value={email} onChange={handleEmailChange} required style={{backgroundColor: 'lightgray'}}/>
    </label>
    <br />
    <label>
      PHONE NUMBER<br/>
      <input type='phonenumber' value={phonenumber} onChange={handlePhonenumberChange} required style={{backgroundColor: 'lightgray'}}/>
    </label>
    <br />
    <label>
      DESCRIPTION<br/>
      <textarea rows="4" cols="40" type='description' value={description} onChange={handleDescriptionChange} required style={{backgroundColor: 'lightgray'}}/>
    </label>
  </div>
  <div style={{ 
        fontWeight:30,
        position: 'fixed',
        top: '120px',
        right: '220px'
        }}>
    <h2>CONTENT</h2>
    <textarea rows="20" cols="80" type='message' value={message} onChange={handleMessageChange} required style={{backgroundColor: 'lightgray'}}/>
    <br />
    <Link href="/MoreAboutCommunity" type="submit" style={{
      position: 'absolute',
      width: '205px',
      height: '38px',
      left: '350px',
      top: '510px',
      background: '#EC7777'
      }}>
  POST NOW
</Link>
  </div>
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


export default ContactForm;
