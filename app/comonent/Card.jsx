import React from 'react'
import Image from "next/image";
import cardimage from "../../public/globe.svg"
import Link from 'next/link';

const Card = ({cardImage , cardTitle , cardDescription , cardPrice , cardid}) => {
  return (
    <>

      <div className="flex flex-col items-center gap-5 mt-5 w-[400px] px-2 py-3 border border-gray-400 rounded-xl">
          <div className="w-[400px] h-[400px] rounded-[5px] relative">
                  <Image src={cardImage} fill={true} className='object-cover' alt='errr' />
           </div>

           <div className="h-fit">
                    <h2 className='text-lg font-medium text-black font-popins'>{cardTitle}</h2>
                    <p className='text-[12px] font-medium text-black font-popins w-full'>{cardDescription}</p>
                    <p className='text-[12px] font-medium text-black font-popins '>${cardPrice}</p>
                    <Link href={`/productdetails/${cardid}`}   className='inline-block w-25 p-2 bg-amber-200 text-black mt-3'>Get Details</Link>
           </div>
     </div>
    </>
  )
}

export default Card;