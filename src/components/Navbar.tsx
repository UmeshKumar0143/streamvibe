import Link from "next/link";
import Logo from "./Logo";


const navItem = [
    {
        title: "Home",
        to_link: "/"
    }, 
    {
        title: "Trending", 
        to_link: "/trending", 
    }, 
    {
        title: "Followed", 
        to_link: "/followed"
    }
]

export default function Navbar(){
    return <div className="container mx-auto py-5 flex justify-between border-b-2 border-zinc-500">
        <Logo />
        <div>
            <div className="flex gap-10 ">
            {navItem.map((item, index)=> {
                return <Link className="font-medium text-lg  px-4 py-1 bg-purple-500 rounded-xl" href={item.to_link}>{item.title} </Link>
            })}
            </div>
        </div>
            <div className="flex  gap-5 items-center`">
                Sign in
            <div>
                Sign in
            </div>
            </div>
    </div>
}