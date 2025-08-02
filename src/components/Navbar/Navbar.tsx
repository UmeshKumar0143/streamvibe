import Link from "next/link";
import Search from "./Search";
import Action from "./Actions";
import { Home } from "lucide-react";

export default function Navbar(){
        return <div className="container mx-auto md:py-5 py-1 md:px-16 px-4    ">
            <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center gap-2 hover:text-purple-500">
            <Link href={'/'}  ><Home/></Link>
            <Link href={'/'} className="text-sm md:text-lg" >Home</Link>
            </div>
            <Search/>
            <Action/>
            </div>
        </div>
}