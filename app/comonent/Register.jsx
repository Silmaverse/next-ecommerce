'use client'
import React, { useState } from 'react'
import Image from "next/image";
import sidenav from "../../public/Side Image.png"
import Link from 'next/link';
import { headers } from 'next/headers';

const page = () => {

  const[fromdata ,setfromdata] =useState({
    name:null,
    password:null,
    emailorphone:null

  })

  const handleChange=(e)=>{

     setfromdata((prev)=>({...prev , [e.target.name]: e.target.value}))
  }


  const handleSubmit =async(e)=>{

    e.preventDefault();
    console.log(fromdata)

    try{

        const res= await fetch("/api/Signup",{
           method:"POST"
        } , { headers:{'Content-type':'application/json'}})

        const data =await res.json()
        console.log(data)

    }catch(err){

        console.err(err)

    }
   

  }



  console.log(fromdata)




  return (
    <>
     <div className="container">
        <div className="signuprow flex gap-[129px]">

        <div className="w-[805px] h-[781px] relative">
            <Image src={sidenav}  fill={true}  alt='err' className='object-cover' />
        </div>

        <div className="right-part w-[370px] mt-[125px]">
            <h2 className='text-[36px] font-medium'>Create an account</h2>
            <p className='text-base font-normal mt-6'>Enter your details below</p>
            <form  onSubmit={handleSubmit}>

                <div className="w-full  border-b border-black mt-12">

                  <input type='text' onChange={handleChange} placeholder='Name' name='name' className='border-none outline-none text-base font-normal' />
                </div>

                <div className="w-[370px]  border-b border-black mt-12">

                <input type='text' onChange={handleChange} placeholder='Email or Phone Number' name='emailorphone' className='border-none outline-none text-base font-normal' />
                </div>

                <div className="w-[370px]  border-b border-black mt-12">

                  <input type='text' placeholder='Password' name='password' onChange={handleChange} className='border-none outline-none text-base font-normal' />
                </div>

                <button type='submit'  className='flex justify-center items-center w-full h-14 bg-[#DB4444]
                text-[#FAFAFA] mt-14 font-medium text-base
                ' >Create Account</button>
             </form>

            <div className="mt-9 text-center">

            <h2 className='font-medium text-base  inline'>Already have account?  </h2>
             <Link href={"#"} className='font-medium text-base'>Log in</Link>
            </div>
        </div>
        </div>
     </div>
    </>
  )
}

export default page