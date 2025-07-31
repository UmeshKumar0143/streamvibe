import Navbar from "@/components/Navbar"

export default function layout({children}:{children: React.ReactNode}){
        return <div>
            <Navbar/>
            <div className=" flex h-full pt-20">
            {children}
            </div>
        </div>
}