import React from 'react'
import List from "../comonent/List"

async function getList(skip ,limit){

    const res= await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    return res.json();
}

async function Pagination ()  {

    const initaillimit=10;
    const skip =0;
    const list = await getList(skip ,initaillimit);
    const procusts= list.products;
    console.log(procusts)

  return (
     <>
    <List  skip={skip} limit={initaillimit} />
    </>
  )
}

export default Pagination