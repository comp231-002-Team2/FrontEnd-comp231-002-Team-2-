import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white  bg-blue-300'>
<div>
<h1 className= "whitespace-pre-wrap w-[340px] font-['Sarabun'] text-[25px] leading-[0.9] font-bold text-left uppercase text-black">FRIENDLY COMMUNITY</h1>   
<p></p>   
<div className='flex justify-between md:w-[75%] my-6  '>
    <FaFacebookSquare  size={30}  />
    <FaDribbbleSquare size={30} />
    <FaGithubSquare  size={30}/>
    <FaInstagram size={30}/>
    <FaTwitterSquare size={30}/>
    
    </div>   
</div>
<div className='lg:col-span-5 flex justify-between'>
    <div>
        <h6 className='font-medium text gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerece</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
    <h6 className='font-medium text gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>Services</li>
        </ul>
    </div>
    <div>
    <h6 className='font-medium text gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>Services</li>
        </ul>
    </div>

</div>

</div>


  )
}

export default Footer