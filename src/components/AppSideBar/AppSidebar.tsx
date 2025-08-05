import { PanelLeftOpen, PanelRightOpen } from "lucide-react";

export default function AppSidebar(){

    return <div className="w-full h-full py-2 px-4">
            <div className="flex  md:justify-between justify-end py-2 ">
                <h1 className="hidden md:inline font-medium  text-xl">Recomended Users </h1>
                <PanelRightOpen className="hidden  md:inline"/>
                <PanelLeftOpen size={"20px"} className="md:hidden"/>
            </div>
    </div>
}