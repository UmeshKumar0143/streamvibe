import Navbar from "@/components/Navbar/Navbar"
import AppSidebar from "@/components/AppSideBar/AppSidebar"
import { Sidebar } from "lucide-react"

export default function layout({children}:{children: React.ReactNode}){
        return <div className="flex h-screen" >
            <div className="  w-full  h-full">
            <Navbar/>
            {children}
            <AppSidebar/>
            </div>
        </div>
}