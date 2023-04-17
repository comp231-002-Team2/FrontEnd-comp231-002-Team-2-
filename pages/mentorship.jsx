import React from 'react'
import Image from 'next/image';


import mentorshipImg from '../public/assets/popular/mentorship.jpg'
import Link from 'next/link';

const mentorship = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative' >
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' >
                <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-2 text-black">
    <div className="w-28 bg-blue-300">
        <h1 className= "whitespace-pre-wrap w-[340px] font-['Sarabun'] text-[25px] leading-[0.9] font-bold text-left uppercase text-white">FRIENDLY COMMUNITY</h1>             
    </div>      
          <ul className='hidden md:flex'>
              <Link href='/'>
                  <li className= "whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-white">Community Display</li>
              </Link>
              <Link href='/'>
                  <li className= "whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-white">Channel</li>
              </Link>
              <Link href='/'>
                  <li className= "whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-white">Contact Us</li>
              </Link>
              <Link href='/'>
                  <li className="whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-white">Login</li>
              </Link>
              <Link href='/'>
                  <div className="white] h-30">
                      <li className= "whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Sign Up</li>
                  </div>
              </Link>     
          </ul>
          </div>
                </div>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={mentorshipImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2 font-bold text-4xl'>Mentorship Program</h2>

                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md: grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>
                        Community
                    </p>
                    <h2 className='font-bold text-4xl'>Overview</h2>
                    <p>A mentorship program is a community initiative where experienced individuals offer guidance 
                        and support to less experienced individuals who are seeking to advance their personal or professional goals. 
                        In the context of international students, a mentorship program can be a valuable resource for those who are 
                        new to a country, institution, or industry and are seeking guidance from someone who has more experience and 
                        knowledge. The mentorship program typically pairs a mentee, the less experienced individual, with a mentor,
                         an experienced individual who is willing to offer guidance and support. The mentor may provide advice on academic 
                         or career-related issues, share personal experiences and insights, and help the mentee develop skills and knowledge 
                         in their field of interest. The mentorship program is designed to be a mutually beneficial relationship, 
                         where both the mentor and mentee can learn and grow from each other. The mentor gains the satisfaction of 
                         helping someone else achieve their goals while also expanding their network and developing their leadership skills.
                         Meanwhile, the mentee benefits from the guidance and support of a more experienced individual, gaining valuable insights 
                         into their field of interest and developing their own professional and personal skills.
                    </p>
                    <button className='px-8 py-2 mt-4 mr-8 bg-[#af92ef] rounded-lg  text-gray-700 font-bold text-lg cursor-pointer '>Contact Us</button> 

                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'></div>
                    <p></p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                    </div>
                </div>
                <Link href='/#Popular_display'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    )
}

export default mentorship