"use client"

import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";
import React from "react";

export default function  Wrapper ({children}:{children:React.ReactNode}){
    
    const {collasped} = useSideBar(); 

    return <aside  className = {cn(" md:w-60 w-[30vw]  h-full border-r left-0 fixed flex flex-col z-50 bg-zinc-900  " ,collasped && "md:w-[70px]" ,collasped&&"w-[40px]")}  >
            {children}  
    </aside>
}