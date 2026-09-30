import { BrowserRouter, Route, Routes } from "react-router"

import { AppNavbar } from "@/components/navigation/app-navbar"
import { AppSidebar } from "@/components/navigation/app-sidebar"
import { Homepage } from "@/pages/homepage/homepage"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <AppNavbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </SidebarInset>
      </SidebarProvider>
    </BrowserRouter>
  )
}

export default App
