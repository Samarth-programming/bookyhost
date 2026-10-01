import {
  BookCheckIcon,
  BookXIcon,
  DownloadIcon,
  MoreVerticalIcon,
  PencilIcon,
  ScanLineIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { ContentCardAction } from "@/components/content/types"

const menuClassName =
  "w-max min-w-0 max-w-[calc(100vw-1rem)] px-1 py-0.5 text-xs sm:text-sm"

export function ContentCardMenu({
  title,
  actions,
}: {
  title: string
  href?: string
  onOpen?: () => void
  actions?: ContentCardAction[]
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label={`${title} actions`}
          />
        }
      >
        <MoreVerticalIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={menuClassName}>
        <DropdownMenuItem>
          <BookCheckIcon />
          Mark as read
        </DropdownMenuItem>
        <DropdownMenuItem>
          <BookXIcon />
          Mark as Unread
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ScanLineIcon />
          Scan Series
        </DropdownMenuItem>
        <DropdownMenuItem>
          <DownloadIcon />
          Download
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilIcon />
          Edit
        </DropdownMenuItem>
        {actions?.map((action) => (
          <DropdownMenuItem
            key={action.label}
            variant={action.destructive ? "destructive" : "default"}
            onClick={action.onSelect}
          >
            {action.icon}
            {action.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
