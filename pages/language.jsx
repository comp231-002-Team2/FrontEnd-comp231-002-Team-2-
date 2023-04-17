import React from 'react'
import Image from 'next/image';


import languageImg from '../public/assets/popular/language.jpg'
import Link from 'next/link';

const language = () => {
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
                  <div className="bg-[#ec7777] h-30">
                      <li className= "whitespace-pre-wrap p-4 font-['Sarabun'] text-[20px] leading-[0.9] font-bold text-left text-black">Sign Up</li>
                  </div>
              </Link>     
          </ul>
          </div>
                </div>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={languageImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2 font-bold text-4xl'>Language Exchange</h2>

                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md: grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>
                        Community
                    </p>
                    <h2 className='font-bold text-4xl'>Overview</h2>
                    <p>The Language exchange community typically operates by pairing up individuals who are interested in 
                        learning each other's native languages. For example, an English speaker may be paired with a Spanish
                         speaker who is looking to improve their English, while the English speaker is looking to practice 
                         their Spanish. This allows both individuals to practice speaking, listening, and reading in their 
                         target language while also helping their partner do the same. Language exchange communities can 
                         take many different forms, from online platforms to in-person language exchanges at local coffee 
                         shops or community centers. They often provide resources such as language learning materials, 
                         conversation prompts, and feedback on pronunciation and grammar.The Language exchange community 
                         is a fantastic way for international students to improve their language skills, connect 
                         with others from different backgrounds, and expand their understanding of different cultures. 
                         By participating in language exchanges, individuals can gain confidence in their language 
                         abilities and build lasting friendships with others who share a passion for language learning.
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

export default language