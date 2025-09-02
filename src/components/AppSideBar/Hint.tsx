import {
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from "@/components/ui/tooltip"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import React from "react"



interface HintProps  {
    label?: string
    children: React.ReactNode
    side?: "left" | "right" | "bottom" | "top"
    align?: "start" | "center" | "end"  
    asChild?: boolean
}

export default function Hint({label,children,  align, side, asChild}:HintProps){
    return <div>
        <TooltipProvider>
                <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild= {asChild}>
                            {children}
                        </TooltipTrigger>
                        <TooltipContent side={side} align={align}  className=" font-semibold bg-transparent border text-gray-300">
                            <p>
                                {label}
                            </p>
                        </TooltipContent>
             </Tooltip>        
        </TooltipProvider>
    </div>
}