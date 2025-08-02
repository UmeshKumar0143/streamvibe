"use client"
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
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

    return <form onSubmit={handleSubmit} className="relative w-[75%] px-10 py-2 flex justify-center items-center">
        <Input className="focus-visible:ring-off-0 focus-visible:ring-0
         focus-visible:ring-transparent rounded-r-none " value={inputValue} onChange={e=>setInputValue(e.target.value)} placeholder="Search">
        </Input>
        { inputValue&& <X onClick={()=>clearInput()} className="absolute text-muted-foreground hover:cursor-pointer hover:text-gray-300 right-[85px]"/>}
        <Button type="submit" variant={"ghost"} className="text-muted-foreground bg-muted border-l-0 rounded-l-none "><SearchIcon className="h-3"/></Button>
    </form>
}