import React from 'react'
import Image from "next/image";
import cardimage from "../../public/globe.svg"
import Link from 'next/link';

const Card = ({cardImage , cardTitle , cardDescription , cardPrice , cardid}) => {
  return (
    <>

      <div className="flex flex-col items-center gap-5 mt-5 w-[400px] px-2 py-3 border border-gray-400 rounded-xl">
                <div className="w-full  bg-gray-100 rounded-[5px]">
                  <Image src={cardImage} width={500} height={500} alt='errr' />
                </div>

                <div className="">
                    <h2 className='text-lg font-medium text-black font-popins'>{cardTitle}</h2>
                    <p className='text-[12px] font-medium text-black font-popins w-full'>{cardDescription}</p>
                    <p className='text-[12px] font-medium text-black font-popins'>${cardPrice}</p>
                    <Link href={`/productdetails/${cardid}`}   className='w-4 h-2 p-2 bg-amber-200 text-black mt-4'>Get Details</Link>
                </div>
            </div>
    </>
  )
}

export default Card;