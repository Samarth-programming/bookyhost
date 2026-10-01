import {
  BookmarkIcon,
  BookOpenTextIcon,
  FoldersIcon,
  RefreshCwIcon,
  SparklesIcon,
  type LucideIcon,
} from "lucide-react"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
// import { Mock } from "@/mock";

const sections: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Continue Reading",
    description: "Series you are in the middle of will show up here.",
    icon: BookOpenTextIcon,
  },
  {
    title: "Newly Added Series",
    description: "Series you just added will show up here.",
    icon: SparklesIcon,
  },
  {
    title: "Recently Updated Series",
    description: "Series with new issues will show up here.",
    icon: RefreshCwIcon,
  },
  {
    title: "Collections",
    description: "Your collections will show up here.",
    icon: FoldersIcon,
  },
  {
    title: "Bookmarks",
    description: "Bookmarked series will show up here.",
    icon: BookmarkIcon,
  }
]

export function ReadNow() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-4">
      {/* <Mock /> */}
      {sections.map((section) => {
        const Icon = section.icon

        return (
          <section key={section.title} className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold tracking-tight">
              {section.title}
            </h2>
            <Empty className="border bg-card">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <Icon />
                </EmptyMedia>
                <EmptyTitle>Nothing here yet</EmptyTitle>
                <EmptyDescription>{section.description}</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </section>
        )
      })}
    </div>
  )
}
