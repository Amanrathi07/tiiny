import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/modules/dashboard/DashboardSidebar"
import DashboardNavbar from "@/modules/navbar/DashboardNavbar"

interface props{
    children:React.ReactNode
}

export default function Layout({children}:props){
    return(
        <SidebarProvider>
            <DashboardSidebar />
            <main className="flex flex-col h-screen w-screen bg-muted">
                <DashboardNavbar/>
                {children}
            </main>
        </SidebarProvider>
    )
}