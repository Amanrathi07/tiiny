import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SignInView } from "@/modules/auth/SignInView";

export default async function SignInPage() {
     const session = await auth.api.getSession({
          headers: await headers() 
      })
      
      if(!!session){
        redirect("/")
      }
     return(
        <SignInView appName="my app"/>
    )
}
