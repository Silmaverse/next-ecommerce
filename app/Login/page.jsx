import React from 'react'
import Image from "next/image";
import sidenav from "../../public/Side Image.png"
import Link from 'next/link';

const page = () => {
  return (
    <>
           <div className="container">
        <div className="signuprow flex gap-[129px]">

        <div className="w-[805px] h-[781px] relative">
            <Image src={sidenav}  fill={true}  alt='err' className='object-cover' />
        </div>

        <div className="right-part w-[370px] mt-[125px]">
            <h2 className='text-[36px] font-medium'>Log in to Exclusive</h2>
            <p className='text-base font-normal mt-6'>Enter your details below</p>
            <div className="w-full  border-b border-black mt-12">

            <input type='text' placeholder='Email or Phone Number' className='border-none outline-none text-base font-normal' />
            </div>

           
            <div className="w-[370px]  border-b border-black mt-12">

            <input type='text' placeholder='Password' className='border-none outline-none text-base font-normal' />
            </div>
           <div className="flex gap-[87px] items-center mt-10">

            <Link href={"#"}  className='flex justify-center items-center w-[143px] h-14 bg-[#DB4444]
             text-[#FAFAFA]  font-medium text-base
             ' >Log In</Link>

           
             <Link href={"#"} className='font-medium text-base text-[#DB4444]'>Forget Password? </Link>
            </div>
            
        </div>
        </div>
     </div>
    </>
  )
}

export default page