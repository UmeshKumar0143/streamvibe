import { StreamersData } from "@/lib/data";
import Thumbnail from "../Stream/StreamThumbnail";

export default function  TrendingStreamers(){
    return <div className="py-6 flex gap-3 w-full  ">
        {
            StreamersData.map((item,index)=> {
                return <div> 
                    <Thumbnail key={index} title={item.title} duration={item.duration} thumbnail={item.thumbnail} viewers={item.views} isLive= {item.isLive}   />
                </div>
            })
        }
    </div>
}