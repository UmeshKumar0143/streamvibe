import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import { Button } from "./ui/button";

export default async function Action(){
        const user = await currentUser(); 
    return <div className="flex justify-between items-center gap-4">
            {!user &&
            <div className="flex justify-between items-center gap-3 ">
            <SignInButton mode="modal">
                <Button variant={"primary"}>Login </Button>
            </SignInButton>
            <SignUpButton mode="modal">
                <Button variant={"secondary"}>Sign up</Button>
            </SignUpButton>
            </div>
}           
            {user && <UserButton afterSignOutUrl="/"/> }
    </div>
}