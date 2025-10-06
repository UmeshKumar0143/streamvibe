"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { Eye,  Share2, ThumbsDown, ThumbsUp } from "lucide-react";
import CurrentUser from "@/lib/types";



export default  function StreamingUser({user}: {user: CurrentUser}) {
    const [isFollowing, setIsFollowing] = useState<boolean>(false); 


    return <>
    <div className=" ">
    <div className="flex  justify-between ">
    <h1 className="text-xl mt-2 font-semibold ">Video/Stream Title | Live from Italy  </h1>
    <div className="flex  items-center pt-3  gap-3 flex-row-reverse w-[6vw]">
    <p className="text-sm flex     items-center gap-1   "><Eye size={20} className="hover:text-rose-400" />223k</p>
   {user.isLive &&  <p className={` text-sm font-semibold  px-[6px] py-[2px] bg-rose-400 rounded-sm`}>Live</p>}
    </div>

    </div>
    <div className="flex  justify-between ">
    <p className="text-xs font-light mt-[1px] ml-[1px] ">Streaming from 2 hrs </p>
    </div>

    </div>
    <div className="flex justify-between gap-2 items-center  ">
        <div className="flex px-2 py-2  rounded-lg   items-center gap-4 hover:bg-accent">
        <Link href={"./username"} className=" flex  items-center gap-4 ">
        <Image src={"/avatar.png"} alt="avatar" className="rounded-full  mt-2  w-10 h-10 " width={20} height={20} />
        <div>
        <h2 className="text-md font-semibold">{user.name}</h2>
        <p className="text-xs ">@{user.username}</p>
        </div>
        </Link>
        <Button onClick={()=>setIsFollowing(prev=> !prev)} className="hover:cursor-pointer " variant={isFollowing? "secondary": "primary"}>{isFollowing ? "Unfollow": "Follow" }</Button>
        </div>
        <div className="gap-2 flex ">
            <Button variant={"ghost"} className="hover:cursor-pointer">20K<ThumbsUp fill="" className=" text-lg"/></Button>
            <Button variant={"ghost"} className="hover:cursor-pointer">1K<ThumbsDown/></Button>
            <Button variant={"ghost"} className="hover:cursor-pointer">Share<Share2/></Button>
        </div>

    </div>
    </>
}