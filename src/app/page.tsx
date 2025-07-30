import { Raleway } from "next/font/google";
import Search from "@/components/Searching";
import Fotter from "@/components/fotter";

const raleway = Raleway({
  subsets: ['latin'],
  weight: "800"
})


export default function Home(){
  
  return(
  <>
   <h1 className={`${raleway.className} text-white  md:tracking-wider md:text-center md:text-4xl sm:text-3xl lg:px-76 mt-7 px-5 text-2xl md:my-6 `}>
    "FutureTools Collects & Organizes All The Best AI Tools So YOU Too Can Become Superhuman!"</h1>
  
  <Search />

  <br /> 
<Fotter/>
  
  </>
  )}