import TrendinStreamers from "@/components/DashBoardComponents/TrendingStreamers";

export default function Home() {
  return (
    <div className="px-8 py-5 ">
      <div>
            <div className="h-[24vh] w-full  border-b-1 ">
              <h1 className="font-semibold text-4xl ">Trending Streamers</h1>
              <TrendinStreamers/>
            </div>
            <div className="p-2 "> 
              <h1 className="font-semibold text-4xl ">Followed Streamers</h1>
            </div>
            </div>
       </div>


  );
}
