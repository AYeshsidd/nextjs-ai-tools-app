'use client'
import Link from "next/link";
import {  FaConnectdevelop } from "react-icons/fa";
import { Raleway } from "next/font/google";
import { Orbitron } from "next/font/google";
import { FaCaretDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: "600",
  })

  const raleway = Raleway({
  subsets: ['latin'],
  weight: "400",
  })

export default function Header(){
    const [navbar,setnavbar] = useState(false)

    const buttonstate_Flip = () =>{  
        setnavbar(!navbar)
        // this function works on cliking button
    }
    return(
        <div>
            <div className="flex flex-col md:flex-row md:justify-between p-10">

            <div className="flex text-white h-12">
            <FaConnectdevelop className="text-cyan-400 md:text-7xl text-6xl"/>
        <span className={`${orbitron.className} mx-4 my-3 md:text-3xl text-xl text-blue-400`}> future Tools</span>
        
             </div>
            
            <nav className={`${raleway.className} p-3 md:space-x-6 space-x-3 hidden lg:flex justify-end text-base text-white bg-gradient-to-r from-[#0f0f0f] to-[#1e3a8a] shadow-md`} >
                <Link href="/"><span className="hover:underline cursor-pointer">Home</span></Link>
                <Link href="/addToday"><span className="hover:underline cursor-pointer" >Added Today</span></Link>
                <Link href="/News"><span className="hover:underline cursor-pointer">AI News</span></Link>
                <Link href="/videos"><span className="hover:underline cursor-pointer">Videos</span></Link>
                <Link href="/help"><span className="hover:underline cursor-pointer">Help<FaCaretDown className="-my-4 mx-10 text-[12px] "/> </span></Link>
            </nav>

            <button onClick={buttonstate_Flip}className="lg:hidden ">
                {
                navbar ? (<GiHamburgerMenu className="text-white sm:mx-8 sm:my-1 mx-28 my-10 text-xl " />)
                : (<GiHamburgerMenu className="text-white sm:mx-8 sm:my-1 mx-28 text-xl my-10"/>)
                }

            </button>
            </div>
  {navbar && (
            <div className={`${raleway.className} lg:hidden flex flex-col sm:flex-row sm:justify-center sm:space-x-7 bg-gradient-to-r from-[#0f0f0f] to-[#1e3a8a] shadow-md text-white sm:my-6 -my-5 space-y-3 p-2  `}>
                <Link href = "/"><span className="hover:cursor-pointer">Home</span></Link>
                <Link href = "addToday"><span className="hover:cursor-pointer" >Added Today</span></Link>
                <Link href = "News"><span className="hover:cursor-pointer">AI News</span></Link>
                <Link href = "videos"><span className="hover:cursor-pointer">Videos</span></Link>
                <Link href = "help"><span className="hover:cursor-pointer">Help</span></Link>
            
            </div>
)}
        
    </div>
    )
}