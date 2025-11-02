import Image from "next/image";
import Card from "./comonent/Card"
import Pagination from "../app/comonent/Pagination"


async function getProducts(){
 
 const res = await fetch("https://dummyjson.com/products",{
    next:{revalidate:1000}
 });
 return res.json();

}
export default async function Home() {

  const data = await getProducts();

  const products =data.products;


  return (
    <div className="w-full h-screen bg-zinc-50 font-sans dark:bg-black">
      <div className="conatiner">
         <div className="flex flex-wrap  gap-3">
          {
            products.map((item)=>{

              return <Card key={item.id} cardImage={item.thumbnail} cardTitle={item.title} 
              cardDescription={item.description} cardPrice={item.price} cardid={item.id}/>
            })
          }

          
         
       </div>
       <div className="m-6">

          <Pagination/>
       </div>
      </div>
      
    </div>
  );
}
