import React from 'react'

async function getProductdetails({id}){
 
 const res = await fetch( `https://dummyjson.com/products/${id}`,{
   cache:"no-store"
 });
 return res.json()

}

async  function page()  {

//   const res =await getProductdetails();
//   console.log(res)

  return (
    <>
      <div className="w-400 p-6 bg-gray-200 border border-gray-100 rounded">
          <div className="w-full  bg-gray-100 rounded-[5px]">
                  {/* <Image src={"."} width={500} height={500} alt='errr' /> */}
           </div>

            <div className="">
                    <h2 className='text-lg font-medium text-black font-popins'>hghhj</h2>
                    <p className='text-[12px] font-medium text-black font-popins w-full'>nkkj</p>
                    <p className='text-[12px] font-medium text-black font-popins'>$hjhjhjh</p>
                   
          </div>

      </div>
    </>
  )
}

export default page