"use client"
import { Button } from "@/components/ui/button"
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { User, X } from "lucide-react"
import { useState } from "react"

export default function MobileActions({user}:{user:any}){
        const [isOpen , setisOpen] = useState<Boolean>(false); 

    return <div>
      {!user &&  <div className="md:hidden ">
                {!isOpen?  <User onClick={()=>setisOpen(prev=>!prev)} className="cursor-pointer transition-all ease-in " />:<X onClick={()=>setisOpen(prev=>!prev)} className="text-muted-foreground cursor-pointer hover:font-semibold transition-all ease-in duration-100"/>}
                <div className={`${isOpen? "flex": "hidden"} shadow-sm shadow-neutral-400 transform transition-all ease-in-out z-50  duration-75 absolute bg-zinc-900  flex-col justify-center  py-2 border-zinc-200/30 border-[1px] border-t-0 w-[90px] h-[100px] right-0 mt-2 border-r-0`}>
            <SignInButton mode="modal">
                <Button variant={"ghost"}>Login </Button>
            </SignInButton>
           <SignUpButton mode="modal">
                <Button variant={"ghost"}>Sign up</Button>
            </SignUpButton>
                </div>
                </div>}
            {user && <UserButton afterSignOutUrl="/"/> }
        </div>
}