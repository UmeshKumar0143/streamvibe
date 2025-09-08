import { user_data } from "@/lib/data";
import StreamingUser from "./StreamingUser";



export default function VideoContainer(){
    const user = user_data[0];
    return <div> 
    <div className="w-[60vw] h-[62vh] bg-gray-700 rounded-sm">
        <video></video>
    </div>
    <StreamingUser user={user}/>
    </div>
}