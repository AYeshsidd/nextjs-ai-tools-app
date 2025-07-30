'use client'
import { allTools } from "@/app/all_aiTools";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:mx-24 ">
{/* 
      w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 */}
      
      {allTools.map((tool) => (
        
        <div id="card" key={tool.name} className=" text-white rounded-xl p-3 border-cyan-900 shadow-2xl border-2 hover:shadow-gray-400  duration-150 hover:scale-105 transition-transform">
          <Link href={tool.link} target="blank">
             <Image src={tool.image} alt="images" width={300} height={70} className=" rounded mb-4 w-full"></Image>  
            
            <div className="p-4 rounded-xl bg-gray-900  border-1 border-gray-500 ">
            <p className="text-amber-200  "> {tool.name}</p>
            <p className="text-white taxt-xs font-serif"> {tool.description}</p>
            <p className="text-cyan-400">{tool.link}</p> 
            </div>
          </Link>
          
            
          
        </div>
      ))}
    </div>
    <hr className="md:border-2 border-gray-300 my-12" />
      </>
  );
} 
