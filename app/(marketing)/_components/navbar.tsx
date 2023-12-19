"use client";

import { useScrollTop } from "@/hooks/use-scroll-top"
import { ModeToggle } from "@/components/mode-toggle";
// import {SignInButton,UserButton} from "@clerk/clerk-react";
// import {useSignConfirm} from "con"
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () =>{
    // const {isAuthenticated,isLoading}= useSignConfirm();
    const scrolled = useScrollTop();
    return(
        <div className={cn("z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm")}>
            <Logo/>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-z">
                {/* {isLoading && (
                    <p>Loading</p>
                )}
                {!isAuthenticated && !isLoading &&(
                   <> */}
                    {/* <SignInButton mode="modal"> */}
                        <Button variant="ghost" size="sm">
                            <Link href="/login">
                            Log in
                            </Link>
                        </Button>
                    {/* </SignInButton>  */}
                    {/* <SignInButton mode="modal">  */}
                    <Button size="sm">
                        <Link href="/signup">
                            Get IMS free demo
                        </Link>
                    </Button>
                    {/* </SignInButton>  */}
                    {/* </>
                )} */}
            <ModeToggle />
            </div>
        </div>
    )
}