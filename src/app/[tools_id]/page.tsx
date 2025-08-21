import { IoNavigate } from "react-icons/io5";
import { allTools } from "../all_aiTools";
import Image from "next/image";


export default function Dynamic_Tools({params}:{params: {tools_id: string } }){
  
    const show_Tools = allTools.find((item) => item.slug === params.tools_id) //tools_id is a file name
   if(!show_Tools) return <div className="text-white">TOOL NOT FOUND ❗</div>

    return(        
        <>
        <div className="bg-sky-300 w-full">
            
<h1 className="text-4xl font-bold text-center py-10">{show_Tools.name}</h1>
<div className="flex flex-col font-serif lg:ml-44">

<h2 className="text-3xl font-bold p-2">Description</h2>
<p className="py-4 max-w-lg text-sm font-serif p-2">{show_Tools.details}</p>
      
<a
  href={show_Tools.link}
  target="_blank"
  className="lg:mx-12 my-5 lg:w-64 h-12 flex items-center justify-center gap-2 bg-cyan-300 hover:shadow-2xl rounded-2xl text-blue-600">
  Visit Site
  <IoNavigate  />
</a>
</div>
<div className="flex justify-between">
      <Image className ="relative lg:left-[800px] lg:-top-72 p-3 rounded-3xl" src={show_Tools.image} alt={show_Tools.name} width={550} height={500} />

</div>

    </div>
        
        </>
    )
}
