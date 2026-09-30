"use client"

import * as React from "react"
import { CornerDownLeftIcon, SearchIcon, XIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

export function Search() {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [query, setQuery] = React.useState("")
  const hasQuery = query.length > 0

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.repeat || event.key.toLowerCase() !== "k") return
      if (!event.ctrlKey && !event.metaKey) return
      if (event.altKey || event.shiftKey) return

      event.preventDefault()
      inputRef.current?.focus()
      inputRef.current?.select()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  function clearQuery() {
    setQuery("")
    inputRef.current?.focus()
  }

  return (
    <form className="w-full min-w-0 max-w-md lg:max-w-lg">
      <InputGroup className="h-9 border-transparent bg-muted shadow-none dark:bg-muted">
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput
          ref={inputRef}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search..."
          aria-label="Search"
        />
        <InputGroupAddon align="inline-end">
          {hasQuery ? (
            <InputGroupButton
              size="icon-xs"
              aria-label="Clear search"
              onClick={clearQuery}
            >
              <XIcon />
            </InputGroupButton>
          ) : (
            <Kbd aria-hidden="true" className="hidden md:inline-flex">
              Ctrl K
            </Kbd>
          )}
          <InputGroupButton
            type="submit"
            size="icon-xs"
            aria-label="Submit search"
          >
            <CornerDownLeftIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </form>
  )
}

