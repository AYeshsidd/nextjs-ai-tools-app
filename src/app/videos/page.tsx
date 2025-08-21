import { Raleway } from "next/font/google"
const raleway = Raleway({
  subsets: ['latin'],
  weight: "800"
})

export default function Videos(){
    return(
        <><h1 className={`${raleway.className} text-white tracking-wider text-center md:text-4xl sm:text-3xl lg:px-76 pt-7 px-4 text-2xl  `}>
    &quot;Videos & Podcast&quot;</h1>

    
  
        </>
    )
}