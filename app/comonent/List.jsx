'use client'
import { useParams, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation'
import React from 'react'

const List = () => {

  const router= useRouter();
  const searchParams= useSearchParams();

  const limit =Number(searchParams.get("limit"))|| 10;
  const skip =Number(searchParams.get("skip"))|| 0;

 const handleCahnge =(e)=>{

  const newlimit =Number(e.target.value);
  router.push(`?limit=${newlimit}&skip=${skip}`)




 }



  return (
    <div className='flex gap-4 items-center'>
      <label className='text-xl'>Show :</label>
      <select className='border border-gray-400 rounded-md px-3 py-2 '  onChange={handleCahnge}   >
        <option  value={"10"}>10</option>
        <option  value={"20"}>20</option>
        <option  value={"30"}>30</option>
        <option value={"40"}> 40</option>
      </select>
    </div>
  )
}

export default List