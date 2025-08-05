import Link from "next/link";
import Search from "./Search";
import Action from "./Actions/Actions";
import { AlignJustify, Home } from "lucide-react";
import Logo from "../Logo/Logo";

export default function Navbar(){
        return <div className=" relative mx-auto md:py-5  py-1 md:border-none border-b md:px-16 px-4    ">
            <div className="w-full flex justify-between items-center">
            <Logo/>
            <Search/>
            <Action/>
            </div>
        </div>
}