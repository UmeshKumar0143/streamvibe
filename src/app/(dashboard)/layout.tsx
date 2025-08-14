import Navbar from "@/components/Navbar/Navbar"
import Sidebar from "@/components/AppSideBar/Sidebar"

export default function layout({children}:{children: React.ReactNode}){
        return <div className="flex h-screen relative" >
            <div className="  w-full">
            <Navbar/>
            <div className="flex pt-[9vh] w-full h-full ">
            <Sidebar/>
            {children}
            </div>
            </div>
        </div>
}