import { Link } from "react-router"
import { cn } from "cn"

import { clampProgress } from "@/components/content/progress"
import { ContentCardMenu } from "@/components/content/content-card-menu"
import { CoverImage, PosterControl } from "@/components/content/content-poster"
import type {
  ContentCardProps,
  ContentStatus,
} from "@/components/content/types"

const statusTones: Record<ContentStatus, string> = {
  unread: "bg-primary",
  reading: "bg-primary",
  completed: "bg-emerald-500",
}

export type {
  ContentCardAction,
  ContentCardProps,
  ContentFormat,
} from "@/components/content/types"

export function ContentCard({
  title,
  coverUrl,
  format,
  creators,
  publisher,
  detail,
  count,
  progress,
  status,
  href,
  onOpen,
  actions,
  children,
  className,
}: ContentCardProps) {
  const creatorLine = creators?.filter(Boolean).join(", ")
  const metaLine = [publisher, detail].filter(Boolean).join(" · ")
  const clampedProgress = clampProgress(progress)

  return (
    <article
      className={cn(
        "flex h-fit w-full min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground",
        className
      )}
    >
      <div className="relative z-0 aspect-2/3 overflow-hidden bg-muted">
        {coverUrl ? <CoverImage key={coverUrl} src={coverUrl} /> : null}
        <PosterControl title={title} href={href} onOpen={onOpen} />
        <div className="pointer-events-none absolute inset-x-2 top-2 z-20 flex items-start justify-between gap-2">
          {format ? (
            <span className="rounded-md bg-black/70 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-white uppercase backdrop-blur-sm">
              {format.label}
            </span>
          ) : null}
          {typeof count === "number" ? (
            <span className="rounded-md bg-black/70 px-1.5 py-0.5 text-[10px] font-semibold text-white tabular-nums backdrop-blur-sm">
              {count}
            </span>
          ) : null}
        </div>
        {creatorLine || metaLine || children ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-3 pt-12 pb-3">
            {creatorLine ? (
              <p className="truncate text-xs text-muted-foreground">
                {creatorLine}
              </p>
            ) : null}
            {metaLine ? (
              <p className="mt-1 truncate text-[11px] text-muted-foreground">
                {metaLine}
              </p>
            ) : null}
            {children ? (
              <div className="pointer-events-auto mt-2">{children}</div>
            ) : null}
          </div>
        ) : null}
        {clampedProgress > 0 ? (
          <div
            className="absolute inset-x-0 bottom-0 z-30 h-1 bg-white/20"
            role="progressbar"
            aria-valuenow={clampedProgress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${title} progress`}
          >
            <div
              className={cn(
                "h-full",
                status ? statusTones[status] : "bg-primary"
              )}
              style={{ width: `${clampedProgress}%` }}
            />
          </div>
        ) : null}
      </div>
      <footer className="relative z-10 grid h-9 grid-cols-[1.75rem_minmax(0,1fr)_1.75rem] items-center border-t border-border bg-card">
        <span aria-hidden />
        {href ? (
          <Link
            to={href}
            title={title}
            className="truncate px-1 text-center text-sm"
          >
            {title}
          </Link>
        ) : (
          <span title={title} className="truncate px-1 text-center text-sm">
            {title}
          </span>
        )}
        <ContentCardMenu
          title={title}
          href={href}
          onOpen={onOpen}
          actions={actions}
        />
      </footer>
    </article>
  )
}
