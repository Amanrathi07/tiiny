import { CommandDialog, CommandItem, CommandList } from "@/components/ui/command";
import { CommandInput } from "cmdk";
import { Dispatch, SetStateAction } from "react";


interface props {
    open:boolean ;
    setOpen:Dispatch<SetStateAction<boolean>>
}

export  function DashboardCommand({open,setOpen}:props) {
  return (
    <CommandDialog  open={open} onOpenChange={setOpen}>
        <CommandInput className="p-4" placeholder="Find a meeting or agent"/>
        <CommandList>
            <CommandItem>
                Test
            </CommandItem>
        </CommandList>
    </CommandDialog>
  )
}
