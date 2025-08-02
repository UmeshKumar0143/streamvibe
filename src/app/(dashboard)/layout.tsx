import Navbar from "@/components/Navbar"

export default function layout({children}:{children: React.ReactNode}){
        return <div className="flex h-screen" >
            <div className="w-[16%] border">
                sidebar
            </div>
            <div className=" w-[74%]  h-full">
            <Navbar/>
            {children}
            </div>
        </div>
}