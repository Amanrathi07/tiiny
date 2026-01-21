import { authClient } from "@/lib/auth-client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function DashboardUserButton(){
    const {data,isPending} =authClient.useSession();

  
    if(isPending || !data?.user){
        return null ;
    }
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-lg border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden ">
                {data.user.image ? (
                    <Avatar>
                        <AvatarImage src={data.user.image} alt="Avtar"/>
                    </Avatar>
                    ):null}
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
 }