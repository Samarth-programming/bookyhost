"use client"

import * as React from "react"
import { Link } from "react-router"
import { NavMain } from "@/components/navigation/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  BookHeart,
  BookmarkIcon,
  BookOpenIcon,
  BookOpenTextIcon,
  ClockIcon,
  DownloadIcon,
  HistoryIcon,
  ListOrderedIcon,
  SearchIcon,
  StarIcon,
  WrenchIcon,
  LayoutDashboard,
} from "lucide-react"
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: <LayoutDashboard />,
      bordered: true,
    },
    {
      title: "Favorites",
      url: "#",
      icon: <StarIcon />,
    },
    {
      title: "Bookmarks",
      url: "#",
      icon: <BookmarkIcon />,
    }
  ],
  library: [
    {
      title: "Read Now",
      url: "#",
      icon: <BookOpenIcon />,
      defaultOpen: true,
      items: [
        { title: "Recently Added", url: "#", icon: <ClockIcon /> },
        { title: "Up Next", url: "#", icon: <ListOrderedIcon /> },
        { title: "Continue Reading", url: "#", icon: <BookOpenTextIcon /> },
        { title: "History", url: "#", icon: <HistoryIcon /> },
      ],
    },
    { title: "Comics", url: "#" },
    { title: "Manga", url: "#" },
    { title: "Webtoon", url: "#" },
    { title: "Books", url: "#" },
    { title: "Audiobooks", url: "#" },
  ],
  discover: [
    {
      title: "Browse",
      url: "#",
      icon: <SearchIcon />,
    },
    {
      title: "Tools",
      url: "#",
      icon: <WrenchIcon />,
    },
    {
      title: "Downloads",
      url: "#",
      icon: <DownloadIcon />,
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              render={<Link to="/" />}
              className="hover:bg-transparent active:bg-transparent"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <BookHeart />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">BookyHost</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavMain label="Library" items={data.library} />
        <NavMain label="Discover" items={data.discover} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
