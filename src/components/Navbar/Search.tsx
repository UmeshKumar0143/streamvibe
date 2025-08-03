"use client"
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search as SearchIcon , X    }from "lucide-react";
import queryString from "query-string";
import { useRouter } from "next/navigation";


export default function Search(){

    const [inputValue, setInputValue] = useState(""); 
    const router = useRouter(); 
    const handleSubmit =(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        
        const url = queryString.stringifyUrl({
            url: '/', 
            query:{
                term: inputValue
            }
        },{skipEmptyString:true})

        router.push(url); 
        
    }
    
    const clearInput = () => {
            setInputValue(""); 
    }

    return <form onSubmit={handleSubmit} className="relative md:w-[75%] w-[100%]    md:px-10  pr-2 py-2 flex justify-center items-center">
        <Input className="focus-visible:ring-off-0 focus-visible:ring-0
         focus-visible:ring-transparent md:rounded-r-none w-[120px]  md:w-full text-sm ms:text-xl " value={inputValue} onChange={e=>setInputValue(e.target.value)} placeholder="Search">
        </Input>
        { inputValue&& <X onClick={()=>clearInput()} className="absolute text-xs text-muted-foreground hover:cursor-pointer hover:text-gray-300 right-[65px]    md:right-[85px]"/>}
        <Button type="submit" variant={"ghost"} className="md:text-muted-foreground md:bg-muted md:border-l-0 md:rounded-l-none  border-none "><SearchIcon className="md:h-3 h-4"/></Button>
    </form>
}