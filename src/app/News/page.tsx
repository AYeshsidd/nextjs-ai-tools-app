import { Raleway } from "next/font/google";
const raleway = Raleway({
  subsets: ['latin'],
  weight: "800"
})

export default function Videos(){
    return(
        <>
        <div className="md:py-8 p-1 text-center pt-16 -tracking-normal">

        <h1 className ={`${raleway.className} text-white text-2xl md:text-4xl  `} > Latest AI News & Articles</h1>
        <p className={`${raleway.className} text-gray-500 text-base md:text-xl font-bold `}>Sifting Through All the Noise and Bringing You Just the Good Stuff!</p>
        </div>
      
      <p className={`text-gray-400 italic text-xs md:text-sm md:text-center md:my-0 my-5  px-2`}>*News may update slower on weekends and when Matt's traveling - Matt hand-picks the news to be displayed it here.</p>
        
        </>
    )
}