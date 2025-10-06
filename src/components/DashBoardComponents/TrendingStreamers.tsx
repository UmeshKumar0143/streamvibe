import { StreamersData } from "@/lib/data";
import StreamThumbnail from "../Stream/StreamThumbnail";

export default function  TrendingStreamers(){
    return <div className="py-6 flex gap-8 w-[100vw]  ">
        {
            StreamersData.map((item,index)=> {
                return <div key={index}> 
                    <StreamThumbnail ThumbnailProps={item}   />
                </div>
            })
        }
    </div>
}