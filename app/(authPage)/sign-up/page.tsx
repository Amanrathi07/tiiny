import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SignUpView } from "@/modules/auth/SignUpView";

export default async function SignUpPage(){
     const session = await auth.api.getSession({
          headers: await headers() 
      })
      
      if(!!session){
        redirect("/")
      }
    return(
        <SignUpView appName="my app"/ >
    )
}