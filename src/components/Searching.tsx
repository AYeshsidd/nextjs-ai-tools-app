'use client'
import Link from "next/link";
import Image from "next/image";
import { allTools } from "@/app/all_aiTools"
import { useState,useEffect } from "react"


export default function Search(){

const[search,searchQuery] = useState('')

const handlingSearches = allTools.filter(tool => tool.name.toLowerCase().includes(search.toLowerCase())) 

const [menu,show_menu] = useState(true)

const handlemenu = () =>{
     show_menu(menu)
    
}

// useEffect (() => {
//     if(search.trim()!== ''){
//          show_menu(true)
//     }
// },
// // [search]
// )

return(
        <div>
            
            <div className="my-8 flex justify-center ">
                
                <input type="text"
                 placeholder="Try things like gpt , tome , Looka "
                 value={search}
                 onChange={(e)=>searchQuery(e.target.value )}
                 className="bg-white border rounded-xl p-3 md:w-[600px] sm:w-[200px] lg:w-[800px] w-72 px-2   text-base " />
          
            <button onClick={handlemenu}>
                
                {/* <FaCaretDown className="text-black relative right-10 text-xl cursor-pointer text-center"/>
                 */}
              </button>
            </div>


{/* if menu is true */}
{menu && (
    <div className="flex justify-center items-center  cursor-pointer text-white ">

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:mx-24">

        {handlingSearches.length > 0 ? (
            
            handlingSearches.map((tool) => (
                <div id="card" key={tool.name} className=" text-white rounded-xl flex p-3 border-cyan-900 shadow-2xl border-2 hover:shadow-gray-400  duration-150 hover:scale-105 transition-transform">
          <Link href={tool.slug} target="_blank">
             <Image src={tool.image} alt={tool.slug} width={300} height={70} className=" rounded mb-4 w-full "></Image>  
            
            <div className="p-4 rounded-xl bg-gray-900  border-1 border-gray-500 ">
            <p className="text-amber-200  "> {tool.name}</p>
            <p className="text-white taxt-xs font-serif"> {tool.description}</p>
            <p className="text-cyan-400">{tool.link}</p> 
            </div>
          </Link>
          
        </div>
                
            ))
        ) 
        
        : (
            <div className="md:-mx-20 lg:-mx-24 text-red-600 font-serif ">
                <p className="my-32 h-32">Nothing in your search list</p>
                
                </div>
            
        )
    }
    </div>

    </div>
)}
            
        </div>
    )
}
