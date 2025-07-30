import { BsTwitterX } from "react-icons/bs";
import { RiDiscordFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";
import Image from "next/image";
import {Inter_Tight} from "next/font/google";
import { Raleway } from "next/font/google";

const inter_Tight = Inter_Tight({
subsets: ['latin'],
weight: "700",
})

const raleway = Raleway({
subsets: ['latin'],
weight: "400",
})

export default function Fotter(){
    
    return(
    <>
    <footer>

    {/* md = tablet , lg = laptop  */}
    
    <div className={`${inter_Tight.className} flex md:flex-row flex-col justify-between md:w-[650px] lg:w-[900px] w-[250px] mx-auto bg-gradient-to-r from-sky-100 to-slate-100 md:p-12  md:py-10 space-y-4 md:my-12 my-4 md:px-8 rounded-2xl items-center`}>
       <div>
        <Image src={"/paper_news.png"} alt="news article"width={250} height={12} className="md:mx-2 md:my-2 "/>
        </div>

        <div>

       <h1 className="md:text-2xl lg:text-4xl text-xs relative text-center -top-2 font-bold tracking-wide">Grab Free Access To The <br /> AI Income Database!</h1>   
  
  <div className="rounded-lg border my-4 border-blue-500 md:px-4 text-black">
    <input type="text" placeholder="Enter your email" className="p-2 w-[150px] lg:w-[217px]" />
    <button className={`${raleway.className} md:p-4 text-white bg-blue-500 rounded-r-md py-2 px-2 relative lg:left-[93px] md:left-4 cursor-pointer hover:opacity-70`}>Subscribe</button>
 </div>
        </div>        
       </div>
       
       <div className="flex justify-center lg:mt-16 lg:my-8  ">
        <div className="text-gray-400 text-4xl relative lg:left-[360px] flex lg:space-x-9 space-x-8 my-4 ">
            <BsTwitterX className="hover:scale-125 transition-all"/><RiDiscordFill className="hover:scale-125 transition-all"/><BsYoutube className="hover:scale-125 transition-all"/>
            </div>
      
</div>

<div className="flex justify-center">
 <hr className=" lg:text-gray-300 text-gray-400 lg:w-[950px] w-[280px] md:w-[900px] " />
</div>

 <div className="flex flex-col md:flex-row md:space-x-9 space-y-5 text-xs text-gray-500 lg:mx-1 py-5 px-3 ">
    <p className="lg:ml-72 md:ml-20 ">© 2025 FutureTools.io. All rights reserved</p>
    <p className="lg:ml-88 text-sm hover:opacity-60 cursor-pointer">Built by Aaish siddiqui</p>
    <p className="hover:opacity-60 cursor-pointer">Terms Of Use</p>
    <p className="hover:opacity-60 cursor-pointer">Privacy policy</p>

</div> 
<br />
    </footer>

    </>
    )
}
