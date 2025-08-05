import Link from "next/link";


export default function Logo(){
    return <div>
        <Link href={'/'} className={`md:text-4xl text-xl  font-bold bg-gradient-to-br from-red-800 via-purple-800  to-blue-800 bg-clip-text text-transparent`}>streamVibe</Link>
    </div>
}