import { Raleway } from "next/font/google";
import Fotter from "@/components/fotter";
import { allTools } from "../all_aiTools";
import Link from "next/link";
import Image from "next/image";


const raleway = Raleway({
  subsets: ["latin"],
  weight: "800",
});

export default function Added_today() {
  const today = new Date();
  const addedToday = allTools.filter((tool) => {
    const toolDate = new Date(tool.dateAdded); 

    // Tool add hone ke time se abhi tak kitne ghante guzre
    const hoursPassed = (today.getTime() - toolDate.getTime()) / (1000 * 60 * 60);
    
    return hoursPassed <= 24;
});

  ;
  return (
    <>
      <h1
        className={`${raleway.className} text-white text-4xl text-center tracking-wide my-5`}
      >
        Added In The Past 24 Hours
      </h1>

      {/* {addedToday.length > 0 ? (
        <ul className="text-white text-center">
          {addedToday.map((tool) => (
            <li key={tool.slug}>{tool.name}</li>
          ))}
        </ul> */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:mx-24">

        {addedToday.length > 0 ? (
          
          addedToday.map((tool) => (
            <div id="card" key={tool.name} className=" text-white rounded-xl flex p-3 border-gray-800 shadow-2xl border-2 hover:shadow-gray-400  duration-150 hover:scale-105 transition-transform">
          <Link href={tool.slug} target="">
             <Image src={tool.image} alt={tool.slug} width={300} height={70} className=" rounded mb-4 w-full "></Image>  
            
            <div className="p-4 rounded-xl bg-gray-900 ">
            <p className="text-base mb-1"> {tool.name}</p>
            <p className="text-gray-400 text-xs font-serif mb-1"> {tool.description}</p>
            <p className="text-gray-200 text-sm">{tool.link}</p> 
            </div>
          </Link>
          
        </div>
                
              ))
              
            ) : (
              <p className="text-gray-400 text-center">No tools added today.</p>
            )}
            </div>

      
      <Fotter />
    </>
  );
}
