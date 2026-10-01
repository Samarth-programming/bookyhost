import { useState } from "react"
import { Link } from "react-router"

export function PosterControl({
  title,
  href,
  onOpen,
}: {
  title: string
  href?: string
  onOpen?: () => void
}) {
  const className =
    "absolute inset-0 z-10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset focus-visible:outline-none"

  if (href) {
    return (
      <Link
        to={href}
        aria-label={`Open ${title}`}
        onClick={onOpen}
        className={className}
      />
    )
  }

  if (!onOpen) return null

  return (
    <button
      type="button"
      aria-label={`Open ${title}`}
      onClick={onOpen}
      className={className}
    />
  )
}

export function CoverImage({ src }: { src: string }) {
  const [hasError, setHasError] = useState(false)
  if (hasError) return null

  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      className="size-full object-cover"
      onError={() => setHasError(true)}
    />
  )
}
