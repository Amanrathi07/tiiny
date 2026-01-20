"use client";

import { authClient } from "@/lib/auth-client"; 
import { useState } from "react";
import {Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button";




export default function Home() {

     const { 
        data: session, 
    } = authClient.useSession() 

  async function formHandel(){
    const { data, error } = await authClient.signUp.email({
        name:name, 
        email:email, 
        password:password,
        // callbackURL:'/dashboard'
    }, {
        // onRequest: (ctx) => {
        //     //show loading
        // },
        onSuccess: (ctx) => {
          window.alert("successfully signup")
            //redirect to the dashboard or sign in page
        },
        onError: (ctx) => {
            // display the error message
            alert(ctx.error.message);
        },
});
  }
  
  async function formHandel2(){
    const { data, error } = await authClient.signIn.email({
        email:email, 
        password:password,
        // callbackURL:'/dashboard'
    }, {
        // onRequest: (ctx) => {
        //     //show loading
        // },
        onSuccess: (ctx) => {
          window.alert("successfully signin")
            //redirect to the dashboard or sign in page
        },
        onError: (ctx) => {
            // display the error message
            alert(ctx.error.message);
        },
});
  }

  async function googleHandel(){
    const data = await authClient.signIn.social({
    provider: "google",
  });
  }


  const[name,setName]=useState("");
  const[password,setPassword]=useState("");
  const[email,setEmail]=useState("");

  if(session){
    return (
      <div className="h-screen flex flex-col items-center justify-center p-4 gap-y-4">
        <p>you are login as {session.user.name}</p>
        <Button  onClick={()=>{authClient.signOut()}}>sign out</Button>
      </div>
    )
  }

  return (
    <div className="flex  min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col gap-3  p-4">
      < Input placeholder="Name"  name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <Input placeholder="Email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <Input type="password" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button onClick={formHandel}>sign Up</Button>
        <Button onClick={googleHandel}>google</Button>

      </div>

      <div className="flex flex-col gap-3  p-4">
        <Input placeholder="Email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Input type="password" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button onClick={formHandel2}>sign in</Button>
        <Button onClick={googleHandel}>google</Button>
      </div>
    </div>
  );
}
