import { BrowserRouter, Route, Routes } from "react-router"

import { AppNavbar } from "@/components/navigation/app-navbar"
import { AppSidebar } from "@/components/navigation/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Homepage } from "@/pages/homepage/homepage"
import { AllSeries } from "@/pages/read-now/All-Series/All-Series"
import { Bookmarks } from "@/pages/read-now/Bookmarks/Bookmarks"
import { Collections } from "@/pages/read-now/Collections/Collections"
import { ContinueReading } from "@/pages/read-now/Continue-Reading/Continue-Reading"
import { NewlyAddedSeries } from "@/pages/read-now/Newly-Added-Series/Newly-Added-Series"
import { ReadNow } from "@/pages/read-now/read-now"
import { RecentlyUpdatedSeries } from "@/pages/read-now/Recently-Updated-Series/Recently-Updated-Series"

export function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <AppNavbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="read-now" element={<ReadNow />} />
            <Route path="read-now/all-series" element={<AllSeries />} />
            <Route
              path="read-now/continue-reading"
              element={<ContinueReading />}
            />
            <Route
              path="read-now/newly-added-series"
              element={<NewlyAddedSeries />}
            />
            <Route
              path="read-now/recently-updated-series"
              element={<RecentlyUpdatedSeries />}
            />
            <Route path="read-now/collections" element={<Collections />} />
            <Route path="read-now/bookmarks" element={<Bookmarks />} />
          </Routes>
        </SidebarInset>
      </SidebarProvider>
    </BrowserRouter>
  )
}

export default App
