import Navbar from "@/components/Navbar/Navbar"
import AppSidebar from "@/components/AppSideBar/AppSidebar"

export default function layout({children}:{children: React.ReactNode}){
        return <div className="flex h-screen relative" >
            <div className="  w-full">
            <Navbar/>
            <div className="flex mt-24 ">
            <div className="w-[16%] h-screen border-r">
            <AppSidebar/>
            </div>
            {children}
            </div>
            </div>
        </div>
}