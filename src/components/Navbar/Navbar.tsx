import Link from "next/link";
import Search from "./Search";
import Action from "./Actions/Actions";
import { AlignJustify, Home } from "lucide-react";
import Logo from "../Logo/Logo";

export default function Navbar(){
        return <div className="container relative mx-auto md:py-5  py-1 md:border-none border-b md:px-16 px-4    ">
            <div className="w-full flex justify-between items-center">
            <div className=" justify-center items-center gap-2 hover:text-purple-500 hidden md:flex">
            <Link href={'/'}  ><Home/></Link>
            <Link href={'/'} className="text-sm md:text-lg" >Home</Link>
            </div>
            <div className="flex items-center md:hidden gap-1">
                <AlignJustify height={"20px"}  />
                <Logo size="text-xl"/>
            </div>
            <Search/>
            <Action/>
            </div>
        </div>
}