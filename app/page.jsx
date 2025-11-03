import Image from "next/image";
import Card from "./comonent/Card"
import Pagination from "../app/comonent/Pagination"
import List from "./comonent/List";


async function getProducts(limit ,skip){
 
 const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`,{
    next:{revalidate:1000}
 });
 return res.json();

}
export default async function Home({searchParams}) {

  const limit =await searchParams
  console.log(limit)
  const skip =await searchParams
  console.log(skip)



  const data = await getProducts(limit.limit , skip.skip);

  const products =data.products || [];


  return (
    <div className="w-full h-screen bg-zinc-50 font-sans dark:bg-black">
      <div className="conatiner">
          <div className="flex justify-end pr-50  mt-4">

            <List/>
          </div>
         <div className="flex flex-wrap  gap-3">
          {
            products.map((item)=>{

              return <Card key={item.id} cardImage={item.thumbnail} cardTitle={item.title} 
              cardDescription={item.description} cardPrice={item.price} cardid={item.id}/>
            })
          }

          
         
       </div>
       {/* <div className="m-6">

          <Pagination/>
       </div> */}
      </div>
      
    </div>
  );
}
