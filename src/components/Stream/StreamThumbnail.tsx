import CurrentUser from "@/lib/types"

interface ThubmnailProps {
    title: string
    category?: string
    thumbnail: string,
    viewers: number
    duration?: string
    isLive: boolean,
    started_at?: string,
    user?: CurrentUser,
    

}


export default function Thumbnail({ThubmnailProps}:ThubmnailProps){
    return <div className="w-[22vh] h-[14vh] border">    

    </div>
}