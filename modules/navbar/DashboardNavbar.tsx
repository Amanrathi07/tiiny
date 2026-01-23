"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeftClose, PanelLeftIcon , SearchIcon} from "lucide-react";

export  function DashboardNavbar() {
    const {state , toggleSidebar ,isMobile} = useSidebar()

  return (
    <nav className="flex px-4 gap-x-2 items-center py-3 border-b bg-background">
        <Button className="size-9" variant="outline" onClick={toggleSidebar}>
            {(state==="collapsed"||isMobile)
            ?<PanelLeftIcon   className="size-4"  />
            :<PanelLeftClose  className="size-4"  />}
        </Button>
        <Button className="h-9 w-[240px ] justify-start font-normal text-muted-foreground hover:text-muted-foreground" variant="outline" size="sm" >
            <SearchIcon />
            search
            <kbd>
                span
            </kbd>
        </Button>
        
    </nav>
  )
}
