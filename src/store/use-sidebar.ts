import { create } from "zustand";

interface SideBarProps{
    collasped:boolean
    onExpand:()=>void
    onCollaspe: ()=>void
}

export const useSideBar = create<SideBarProps>((set)=>({
    collasped:false,
    onExpand:()=>set(()=>({collasped:true})),
    onCollaspe:()=>set(()=>({collasped:false}))
}))