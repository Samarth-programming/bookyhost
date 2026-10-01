import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { ChevronRightIcon } from "lucide-react"
import { Link } from "react-router"

interface NavSubItem {
  title: string
  url: string
  icon?: React.ReactNode
}

interface NavItem {
  title: string
  url: string
  icon?: React.ReactNode
  isActive?: boolean
  defaultOpen?: boolean
  bordered?: boolean
  items?: NavSubItem[]
}

function isNavigable(url: string) {
  return url !== "#" && url !== ""
}

export function NavMain({
  label,
  items,
}: {
  label?: string
  items: NavItem[]
}) {
  return (
    <SidebarGroup>
      {label ? <SidebarGroupLabel>{label}</SidebarGroupLabel> : null}
      <SidebarMenu>
        {items.map((item) =>
          item.items?.length ? (
            <Collapsible
              key={item.title}
              defaultOpen={item.defaultOpen}
              className="group/collapsible"
              render={<SidebarMenuItem />}
            >
              {isNavigable(item.url) ? (
                <SidebarMenuButton
                  tooltip={item.title}
                  isActive={item.isActive}
                  render={<Link to={item.url} />}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              ) : (
                <CollapsibleTrigger
                  render={
                    <SidebarMenuButton
                      tooltip={item.title}
                      isActive={item.isActive}
                    />
                  }
                >
                  {item.icon}
                  <span>{item.title}</span>
                </CollapsibleTrigger>
              )}
              <CollapsibleTrigger
                render={
                  <SidebarMenuAction aria-label={`Toggle ${item.title}`} />
                }
              >
                <ChevronRightIcon className="transition-transform duration-200 group-data-open/collapsible:rotate-90" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton render={<Link to={subItem.url} />}>
                        {subItem.icon}
                        <span>{subItem.title}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </Collapsible>
          ) : (
            <SidebarMenuItem
              key={item.title}
              className={item.bordered ? "mb-1" : undefined}
            >
              <SidebarMenuButton
                tooltip={item.title}
                isActive={item.isActive}
                variant={item.bordered ? "outline" : "default"}
                render={<Link to={item.url} />}
              >
                {item.icon}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  )
}
