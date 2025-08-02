import Navbar from "@/components/Navbar/Navbar"
import AppSidebar from "@/components/AppSideBar/AppSidebar"

export default function layout({children}:{children: React.ReactNode}){
        return <div className="flex h-screen" >
            <div className="md:w-[16%]  border hidden   md:block ">
                <AppSidebar/>
            </div>
            <div className=" md:w-[84%] w-full  h-full">
            <Navbar/>
            {children}
            </div>
        </div>
}