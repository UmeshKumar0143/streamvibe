import Search from "./Search";
import Action from "./Actions/Actions";
import Logo from "../Logo/Logo";

export default function Navbar(){
        return <div className=" fixed w-full md:py-4  py-1  border-b border-neutral-800 md:px-7 px-4 top-0 z-[1000]     ">
            <div className="w-full flex justify-between  items-center">
            <Logo/>
            <Search/>
            <Action/>
            </div>
        </div>
}