import TrendingStreamers from "@/components/DashBoardComponents/TrendingStreamers";

export default function HomePage() {
  return (
    <div className="px-8 py-5 ">
      <div className=" ">
            <div className="h-[24vh] w-[100vw]   border-b-1 ">
              <h1 className="font-semibold text-4xl ">Trending Streamers</h1>
              <TrendingStreamers/>
            </div>
            <div className="p-2 "> 
              <h1 className="font-semibold text-4xl ">Followed Streamers</h1>
            </div>
            </div>
       </div>


  );
}
