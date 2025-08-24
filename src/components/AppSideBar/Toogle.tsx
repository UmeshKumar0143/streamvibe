"use client"
import { useSideBar } from "@/store/use-sidebar"
import { ArrowLeft, ArrowLeftFromLine, ArrowLeftIcon, ArrowRightFromLine, PanelLeftOpen, PanelRightOpen } from "lucide-react";
import { Button } from "../ui/button";
import Hint from "./Hint";

export default function Toogle(){
    const {collasped,onCollaspe,onExpand} = useSideBar((state)=>state); 
    const label = collasped ? "Expand" : "Collaspe"

    return <div>
      {!collasped && 
   
      <div className="flex justify-between items-center px-4 py-2">
                <h1 className="md:text-base text-xs md:ml-3 truncate font-medium">For you</h1> 
            <Hint label={label} side={"right"} asChild >
                <Button onClick={()=>onCollaspe()} variant={"ghost"} className="hover:cursor-pointer">
                <ArrowLeftFromLine  />
                </Button>
            </Hint>
      </div>
}        
      {collasped && <div className="flex justify-between items-center px-4 py-2">
          <Hint label={label} side="right" asChild >
                <Button onClick={()=>onExpand()} variant={"ghost" }  className="hover:cursor-pointer">
                <ArrowRightFromLine  />
                </Button>
                </Hint>
      </div>
}        
    </div>
}