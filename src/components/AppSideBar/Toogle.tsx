"use client"
import { useSideBar } from "@/store/use-sidebar"
import { ArrowLeft, ArrowLeftFromLine, ArrowLeftIcon, PanelLeftOpen, PanelRightOpen } from "lucide-react";
import { Button } from "../ui/button";

export default function Toogle(){
    const {collasped,onCollaspe,onExpand} = useSideBar((state)=>state); 
    const label = collasped ? "Expand" : "Collaspe"

    return <div>
      {!collasped && <div className="flex justify-between items-center px-4 py-2">
                <h1 className="text- font-medium">For you</h1> 
                <Button variant={"ghost"}>
                <ArrowLeftFromLine className=""/>
                </Button>

      </div>

      }        
    </div>
}