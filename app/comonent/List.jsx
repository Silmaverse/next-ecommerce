'use client'
import React from 'react'
import { Pagination } from 'antd';




export function  List  ({skip ,limit})  {
 
const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
  const skip =(current-1)*pageSize;
  
};





  return (
    <>

    <Pagination align='end'
      showSizeChanger
      pageSize={limit}
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={1}
      total={500}

    />

    </>
  )
}

export default  List;