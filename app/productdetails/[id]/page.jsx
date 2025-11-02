import React from 'react'
import Image from "next/image";

async function getProductdetails(id){
 
 const res = await fetch( `https://dummyjson.com/products/${id}`,{
   cache:"no-store"
 });
 if(!res.ok){
   throw new Error("Failed to fetch product details")
 }
 return res.json()

}

async function page({params})  {
 

   const{id} =await params
  const res =await getProductdetails(id);
  console.log(res)

  return (
    <>
      <div className="w-100 
      p-6 border-3 border-gray-100 rounded">
          <div className="w-full rounded-[5px]">
                  <Image src={res.thumbnail} width={500} height={500} alt='errr' />
           </div>

            <div className="">
                    <h2 className='text-lg font-medium text-black font-popins'>{res.title}</h2>
                    <p className='text-[12px] font-medium text-black font-popins w-full'>{res.description}</p>
                    <p className='text-[12px] font-medium text-black font-popins'>${res.price}</p>
                   
          </div>

      </div>
    </>
  )
}

export default page