"use client";

import { authClient } from "@/lib/auth-client"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";




export  function HomeView() {
  const router = useRouter();
     const { 
        data: session, 
    } = authClient.useSession() 


  if(session){
    return (
      <div className="h-screen flex flex-col items-center justify-center p-4 gap-y-4">
        <p>you are login as {session.user.name}</p>
        <Button  onClick={()=>{authClient.signOut({
          fetchOptions:{
            onSuccess:()=>{ router.push("/sign-in")}
          }
        })}}>sign out</Button>
      </div>
    )
  }

  return (
    <div className="flex  min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex gap-6">
        <Button><Link href='/sign-in'>Sign In</Link></Button>
        <Button><Link href='/sign-up'>Sign Up</Link></Button>
      </div>
    </div>
  );
}
