"use client"
import { user_data } from "@/lib/data";
import { useSideBar } from "@/store/use-sidebar";
import Image from "next/image";
import Link from "next/link";


interface userdata {
    user_id: number
    name: string
    email: string
    country: string
    joined_date: string
}

export default function RecommendedUser(){
           const {collasped} = useSideBar();  
    return <div>
        <div className="flex flex-col gap-4  md:gap-6 p-2 md:p-3">
                {user_data.map((item:userdata,index:number)=>{
                    return <div key={index}>
                        <Link href={`/user/:id`} className="flex group items-center gap-2  hover:bg-neutral-800 hover:cursor-pointer rounded-lg md:px-2 md:py-1 ">
                        <Image className="rounded-full md:w-8 md:h-8 w-5 h-5  " src={"/avatar.png"} alt="user" width={25} height={25} />
                        <p className={`md:text-sm text-xs  group-hover:font-semibold hidden truncate  ${collasped? "hidden": "inline"}`}>{item.name}</p>
                        </Link>
                    </div>
                })}
        </div>
    </div>
}