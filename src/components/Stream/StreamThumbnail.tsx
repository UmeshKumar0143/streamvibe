import CurrentUser from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface ThumbnailProps {
  title: string;
  category?: string;
  thumbnail: string;
  viewers: number;
  duration?: string;
  isLive: boolean;
  started_at?: string;
  user?: CurrentUser;
}

export default function StreamThumbnail({
  ThumbnailProps,
}: {
  ThumbnailProps: ThumbnailProps;
}) {
  const {
    title,
    category,
    thumbnail,
    viewers,
    duration,
    isLive,
    started_at,
    user,
  } = ThumbnailProps;
  return (
      <Link href={`/stream/user/1`} >
        <div className="block w-[16vw] h-[15vh] p-2  border">
          <div className="flex justify-between px-2 h-full" style={{backgroundImage: `url('/thumb.jpeg')`, backgroundSize: "cover", backgroundPosition:"center", backgroundRepeat: "no-repeat"}}>
            <p>Live</p>
            <p>12k</p>
          </div>
      </div>
      <div className="p-1 w-[16vw] truncate ">
        <h1 className="font-semibold text-lg ">{title}</h1>
      </div>
         <div  className=" flex  items-center  gap-2 ">
        <Image src={"/avatar.png"} alt="avatar" className="rounded-full  mt-2  w-7 h-7 " width={20} height={20} />
        <p className="text-lg ">{user?.username}</p>
        </div>
      </Link>
  );
}
