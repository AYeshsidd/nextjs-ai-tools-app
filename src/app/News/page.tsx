"use client";

import Fotter from "@/components/fotter";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { JSX } from "react/jsx-dev-runtime";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "800",
});

export default function News(): JSX.Element {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const now = new Date();
    setTime(now.toLocaleDateString()); 
  }, []);

  return (
    <>
      <div className="md:py-4 py-2 p-1 text-center pt-12 tracking-normal">
        <h1
          className={`${raleway.className} text-white text-2xl md:text-4xl`}
        >
          Latest AI News & Articles
        </h1>
        <p
          className={`${raleway.className} text-gray-500 text-base md:text-lg font-bold tracking-wide`}
        >
          Sifting Through All the Noise and Bringing You Just the Good Stuff!
        </p>
      </div>

      <p
        className={` text-gray-400 italic text-xs md:text-sm md:text-center pb-10  tracking-wide p-2`}
      >
        &lsquo;News may update slower on weekends and when Matt&apos;s traveling
        - Matt hand-picks the news to be displayed here&rsquo;
      </p>

 <div className="p-2 md:flex md:flex-col justify-center items-center space-y-1"> 

      <div className="p-2 md:md:flex md:space-x-4 space-x-2 rounded-md shadow-md bg-gray-900 lg:w-[700px]">
        <span className="text-gray-400 text-[10px] font-extralight">{time}</span>
        <span className="text-blue-400 text-xs font-extralight tracking-wide ">
           OpenAI, Oracle, and SoftBank expand Stargate with five new AI datacenter sites Company</span>
       <Link href={"https://openai.com/news/"} target="_blank" className="text-gray-400 text-[9px] font-extralight">- check article</Link>

       </div>

       <div className="p-2 md:md:flex md:space-x-4 space-x-2 rounded-md shadow-md bg-gray-900 md:w-[700px]">
    <span className="text-gray-400 text-[10px] font-extralight">{time}</span>
    <span className="text-blue-400 text-xs font-extralight tracking-wide">
      UAE president meets OpenAI CEO to discuss AI collaborations and development</span><br />
    <Link href={"https://www.reuters.com/world/middle-east/uae-president-meets-openai-ceo-discuss-ai-collaboration-2025-09-27/"} target="blank" className="text-gray-400 text-[9px] font-extralight">- check article</Link>
  </div> 

   <div className="p-2 md:flex md:space-x-4 space-x-2 rounded-md shadow-md bg-gray-900 md:w-[700px]">
    <span className="text-gray-400 text-[10px] font-extralight">{time}</span>
    <span className="text-blue-400 text-[10px] font-extralight tracking-wide">
      CoreWeave expands OpenAI pact with new $6.5 billion contract and more to come</span>
    <Link href={"https://www.reuters.com/business/coreweave-expands-openai-pact-with-new-65-billion-contract-2025-09-25/"} target="blank" className="text-gray-400 text-[9px] font-extralight">check article</Link>
  </div>

  <div className="p-2 md:flex md:space-x-4 space-x-2 rounded-md shadow-md bg-gray-900 md:w-[700px]">
    <span className="text-gray-400 text-xs font-extralight">{time}</span>
    <span className="text-blue-400 text-xs font-extralight tracking-wide">
      Sam Altman predicts AI will surpass human intelligence by 2030 or before</span>
    <Link href={"https://www.businessinsider.com/sam-altman-predicts-ai-agi-surpass-human-intelligence-2030-2025-9"} target="blank" className="text-gray-400 text-[9px] font-extralight">- check article</Link>
  </div>


<div className="p-2 md:flex md:space-x-4 space-x-2  rounded-md shadow-md bg-gray-900 md:w-[700px]">
    <span className="text-gray-400 text-xs font-extralight">{time}</span>
    <span className="text-blue-400 text-xs font-extralight tracking-wide">
      OpenAI Scrambles to fix GPT-5 after user backlash. Gpt-5 has some serious potential</span>
    <Link href={"https://www.wired.com/story/openai-gpt-5-backlash-sam-altman/"} target="blank" className="text-gray-400 text-[9px] font-extralight">-Check article</Link>
  </div>

  <div className="p-2 md:flex md:space-x-4 space-x-2  rounded-md shadow-md bg-gray-900 md:w-[700px]">
    <span className="text-gray-400 text-xs font-extralight">{time}</span>
    <span className="text-blue-400 text-xs font-extralight tracking-wide">
      Nvidia to invest $100B in OpenAI to support AI expansion after seeing AI impact</span>
    <Link href={"https://www.reuters.com/business/nvidia-invest-100-billion-openai-2025-09-22/"} target="blank" className="text-gray-400 text-[9px] font-extralight">-check article</Link>
  </div>

  <div className="p-2 md:flex md:space-x-4 space-x-2  rounded-md shadow-md bg-gray-900 md:w-[700px]">
    <span className="text-gray-400 text-xs font-extralight">{time}</span>
    <span className="text-blue-400 text-xs font-extralight tracking-wide">
      Sam Altman predicts AI will surpass human intelligence by 2030</span>
    <Link href={"https://www.businessinsider.com/sam-altman-predicts-ai-agi-surpass-human-intelligence-2030-2025-9"} className="text-gray-400 text-[9px] font-extralight">- check article</Link>
  </div>



  <div className="p-2 md:flex md:space-x-4 space-x-2 rounded-md shadow-md bg-gray-900 md:w-[700px]">
    <span className="text-gray-400 text-xs font-extralight">{time}</span>
    <span className="text-blue-400 text-xs font-extralight tracking-wide">
      OpenAI cuts ties with Scale AI amid data labelers new Meta deal says coin telegraph</span>
    <Link href={"https://cointelegraph.com/news/openai-cuts-ties-scale-ai-data-labeler-meta-deal"}className="text-gray-400 text-[9px] font-extralight">- check article</Link>
  </div>


   <div className="p-2 md:flex md:space-x-4 space-x-2  rounded-md shadow-md bg-gray-900 md:w-[700px]">
    <span className="text-gray-400 text-xs font-extralight">{time}</span>
    <span className="text-blue-400 text-xs font-extralight tracking-wide">
      Microsoft to reduce reliance on OpenAI by using Anthropic AI for the betterment of a company</span>
    <Link href={"https://techcrunch.com/2025/09/09/microsoft-to-lessen-reliance-on-openai-by-buying-ai-from-rival-anthropic/"} className="text-gray-400 text-[9px] font-extralight">- check article</Link>
  </div>

  <div className="p-2 md:flex space-x-4 rounded-md shadow-md bg-gray-900 md:w-[700px]">
    <p className="text-gray-400 text-xs font-extralight">{time}</p>
    <p className="text-blue-400 text-xs font-extralight tracking-wide">
      Sam Altman criticizes Metas AI talent-poaching efforts and bias related to AI fields</p>
    <Link href={"https://www.wired.com/story/sam-altman-meta-ai-talent-poaching-spree-leaked-messages/"} className="text-gray-400 text-[9px] font-extralight">- check article</Link>
  </div>



  <div className="p-2 md:flex space-x-4 rounded-md shadow-md bg-gray-900 md:w-[700px]">
    <p className="text-gray-400 text-xs font-extralight">{time}</p>
    <p className="text-blue-400 text-xs font-extralight tracking-wide">
      OpenAI unveils GPT-5 — Read article for what to know about new capabilities</p>
    <Link href={"https://openai.com/index/introducing-gpt-5/"} className="text-gray-400 text-[9px] font-extralight">- check article</Link>
  </div>

<div className="p-2 md:md:flex md:space-x-4 space-x-2 rounded-md shadow-md bg-gray-900 md:w-[700px]">
        <span className="text-gray-400 text-[10px] font-extralight">{time}</span>
        <span className="text-blue-400 text-xs font-extralight tracking-wide ">
           OpenAI, Oracle, and SoftBank expand Stargate with five new AI datacenter sites Company</span>
       <Link href={"https://openai.com/news/"} target="_blank" className="text-gray-400 text-[9px] font-extralight">- check article</Link>

       </div>

       <div className="p-2 md:md:flex md:space-x-4 space-x-2 rounded-md shadow-md bg-gray-900 md:w-[700px]">
    <span className="text-gray-400 text-[10px] font-extralight">{time}</span>
    <span className="text-blue-400 text-xs font-extralight tracking-wide">
      UAE president meets OpenAI CEO to discuss AI collaborations and development</span>
    <Link href={"https://www.reuters.com/world/middle-east/uae-president-meets-openai-ceo-discuss-ai-collaboration-2025-09-27/"} target="blank" className="text-gray-400 text-[9px] font-extralight">- check article</Link>
  </div> 


<div className="p-2 md:md:flex md:space-x-4 space-x-2 rounded-md shadow-md bg-gray-900 md:w-[700px]">
        <span className="text-gray-400 text-[10px] font-extralight">{time}</span>
        <span className="text-blue-400 text-xs font-extralight tracking-wide ">
           OpenAI, Oracle, and SoftBank expand Stargate with five new AI datacenter sites Company</span>
       <Link href={"https://openai.com/news/"} target="_blank" className="text-gray-400 text-[9px] font-extralight">- check article</Link>

       </div>

       <div className="p-2 md:md:flex md:space-x-4 space-x-2 rounded-md shadow-md bg-gray-900 md:w-[700px]">
    <span className="text-gray-400 text-[10px] font-extralight">{time}</span>
    <span className="text-blue-400 text-xs font-extralight tracking-wide">
      UAE president meets OpenAI CEO to discuss AI collaborations and development</span>
    <Link href={"https://www.reuters.com/world/middle-east/uae-president-meets-openai-ceo-discuss-ai-collaboration-2025-09-27/"} target="blank" className="text-gray-400 text-[9px] font-extralight">- check article</Link>
  </div> 

 </div> 
 <Fotter/>
    </>
  );
}
