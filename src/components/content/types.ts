import type { ReactNode } from "react"

export type ContentStatus = "unread" | "reading" | "completed"

export interface ContentFormat {
  label: string
  icon?: ReactNode
}

export interface ContentCardAction {
  label: string
  onSelect?: () => void
  icon?: ReactNode
  destructive?: boolean
}

export interface ContentCardProps {
  title: string
  year?: number
  coverUrl?: string
  format?: ContentFormat
  creators?: string[]
  publisher?: string
  /** Count or length, such as "12 issues" or "6h 12m". */
  detail?: string
  /** Number of issues, chapters, or items in this content. */
  count?: number
  /** Reading progress from 0 to 100. */
  progress?: number
  status?: ContentStatus
  href?: string
  onOpen?: () => void
  actions?: ContentCardAction[]
  /** Extra content rendered on the poster. */
  children?: ReactNode
  className?: string
}
