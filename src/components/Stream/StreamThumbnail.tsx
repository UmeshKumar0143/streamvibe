import CurrentUser from "@/lib/types";
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
      <Link href={`/stream/user/1`} className= " block w-[14vw] h-[14vh] p-2  border">
        <div className="flex-col ">
          <div className="flex justify-between px-2">
            <p>Live</p>
            <p>12k</p>
          </div>
        <h1>{title}</h1>
        </div>
      </Link>
  );
}
