import React from 'react'
import Image from 'next/image';
import globalImg from '../public/assets/popular/global.jpg';
import languageImg from '../public/assets/popular/language.jpg';
import mentorshipImg from '../public/assets/popular/mentorship.jpg';
import careerImg from '../public/assets/popular/career.jpg';
import Link from 'next/link';
import PopularItem from './PopularItem';


const Popular_display = () => {
    return (
        <div className='w-full'>
            <div className='max-w[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Popular Communities
                </p>
                <h2 className='py-4 font-bold text-4xl'> Find Our Popular Community.</h2>
                <div className='grid md:grid-cols-2 gap-8'>

            <PopularItem 
            title= 'Global Community' 
            backgroundImg={globalImg} 
            popularUrl= '/global'
            />
             <PopularItem 
            title= 'Language Exchange' 
            backgroundImg={languageImg} 
            popularUrl= '/language'
            />
             <PopularItem 
            title= 'Mentorship Program' 
            backgroundImg={mentorshipImg} 
            popularUrl= '/mentorship'
            />

            <PopularItem 
            title= 'Dream Career' 
            backgroundImg={careerImg} 
            popularUrl= '/career'
            />

                </div>
            </div>
        </div>
    )
}

export default Popular_display 