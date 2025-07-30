import { Raleway } from "next/font/google"
import Fotter from "@/components/fotter"
const raleway = Raleway({
  subsets: ['latin'],
  weight: "800"
})

export default function Addtoday(){
    return(
        <>
        <h1 className={`${raleway.className} text-white text-4xl text-center tracking-wide my-5 h-2`}>Added In The Past 24-Hours</h1>
        <Fotter/>

        
        </>
    )
}