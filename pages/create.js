import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; 
import Link from 'next/link';
import pic1 from "../public/asdasdasdsaw.jpg";
import pic2 from "../public/asdasdasdsaw2.jpg";

function create() {
  return (
    <div >
        <p className="whitespace-pre-wrap absolute font-bold  text-[#003AA9] text-3xl top-[108px] left-[250px] w-[375px]  h-[104px]">YOUR COMMUNITY KNOWS BEST</p>
       <p className="whitespace-pre-wrap absolute top-[221px] left-[250px] w-[400px]  h-[83px] ">GET IN TOUCH WITH THE PEOPLE WITH THE BEST TIPS. SHARE IDEAS, EVENTS. EXPERIENCE THE POWER OF COMMUNITY</p>




        <Link href="/CMcontact" style={{ backgroundColor: '#FFE353', fontSize: '33px',color: '#FFFFFF' }}  className="whitespace-pre-wrap absolute top-[350px] left-[250px] w-[300px]  h-[63px]"> POST COMMUNITY</Link>

       
        <img src="/asdasdasdsaw.jpg" alt="Your Image" className="whitespace-pre-wrap absolute top-[70px] left-[750px] w-[650px]  h-[420px]" />
        <img src="/asdasdasdsaw2.jpg" alt="Your Image2" className="whitespace-pre-wrap absolute top-[500px] left-[340px] w-[1217]  h-[224px]" />
        <Link href="/" style={{ backgroundColor: '#FFE353',fontSize: '14px',color: '#FFFFFF' }} className="whitespace-pre-wrap absolute top-[430px] left-[252px] w-[90px]  h-[20px] ">  Return Back</Link>


    </div>


  );
}

export default create;
