import Image from "next/image";
import Card from "./comonent/Card"
import { Key } from "react";
import { it } from "node:test";

async function getProducts(){
 
 const res = await fetch("https://dummyjson.com/products",{
   cache:"no-store"
 });
 return res.json()

}
export default async function Home() {

  const data = await getProducts();

  const products =data.products;


  return (
    <div className="flex min-h-screen  items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="conatiner">
         <div className="flex flex-wrap  gap-3">
          {
            products.map((item)=>{

              return <Card key={item.id} cardImage={item.thumbnail} cardTitle={item.title} 
              cardDescription={item.description} cardPrice={item.price} cardid={item.id}/>
            })
          }

          
         
       </div>
      </div>
      
    </div>
  );
}
