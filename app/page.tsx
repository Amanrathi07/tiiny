"use client";

import { authClient } from "@/lib/auth-client"; 
import { useState } from "react";
import {Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button";




export default function Home() {

  async function formHandel(){
    const { data, error } = await authClient.signUp.email({
        email, 
        password,
        name, 
      
    }, {
        onRequest: (ctx) => {
            //show loading
        },
        onSuccess: (ctx) => {
            //redirect to the dashboard or sign in page
        },
        onError: (ctx) => {
            // display the error message
            alert(ctx.error.message);
        },
});
  }
  


  const[name,setName]=useState("");
  const[password,setPassword]=useState("");
  const[email,setEmail]=useState("");


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Input name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <Input name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <Input name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <Button onClick={formHandel}>sign Up</Button>
    </div>
  );
}
