"use client"
import { useSideBar } from "@/store/use-sidebar";
import React from "react";

interface ContainerProps {
    children: React.ReactNode
}

export default function Container({children}:ContainerProps){

    const {collasped} = useSideBar(); 

        return <div className  = {`${collasped ? "md:ml-[70px] ml-[45px]" : "md:ml-60 ml-[32vw] "}`}>
            {children}
        </div>
}