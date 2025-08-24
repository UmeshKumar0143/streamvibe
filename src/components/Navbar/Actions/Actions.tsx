import {SignInButton, SignUpButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import { Button } from "../../ui/button";
import MobileActions from "./MobileActions";

export default async function Action(){
        const user = await currentUser(); 

    return <div className=" justify-between items-center gap-4 ">
            {!user &&
            <div className="md:flex hidden  justify-between items-center gap-3 ">
            <SignInButton mode="modal">
                <Button variant={"primary"}>Login </Button>
            </SignInButton>
            <SignUpButton mode="modal">
                <Button variant={"secondary"}>Sign up</Button>
            </SignUpButton>
            </div>
}           
            <MobileActions />    

    </div>
}
