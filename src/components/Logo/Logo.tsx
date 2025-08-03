import Link from "next/link";

interface LogoProps {
    size: string | "text-3xl"
}

export default function Logo({size}:LogoProps){
    return <div>
        <Link href={'/'} className={`${size} font-bold bg-gradient-to-br from-red-800 via-purple-800  to-blue-800 bg-clip-text text-transparent`}>streamVibe</Link>
    </div>
}