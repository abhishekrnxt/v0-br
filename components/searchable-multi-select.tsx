"use client"

import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

interface SearchableMultiSelectProps {
  allItems: string[]
  selected: string[]
  onChange: (selected: string[]) => void
  placeholder?: string
  searchPlaceholder?: string
  maxResults?: number
  className?: string
}

// Memoized Badge component for performance
const SelectBadge = React.memo(({ item, onRemove }: { item: string; onRemove: () => void }) => (
  <Badge
    variant="secondary"
    key={item}
    className="mr-1 mb-1 cursor-pointer group"
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
      onRemove()
    }}
  >
    {item}
    <X className="ml-1 h-3 w-3" />
  </Badge>
))
SelectBadge.displayName = "SelectBadge"

export const SearchableMultiSelect = React.memo(function SearchableMultiSelect({
  allItems,
  selected,
  onChange,
  placeholder = "Select items...",
  searchPlaceholder = "Start typing to search...",
  maxResults = 100,
  className,
}: SearchableMultiSelectProps) {
  const [open, setOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")

  const handleUnselect = React.useCallback((item: string) => {
    onChange(selected.filter((i) => i !== item))
  }, [selected, onChange])

  const handleSelect = React.useCallback((item: string) => {
    if (selected.includes(item)) {
      onChange(selected.filter((i) => i !== item))
    } else {
      onChange([...selected, item])
    }
  }, [selected, onChange])

  const renderBadges = React.useMemo(() => {
    return selected.map((item) => (
      <SelectBadge
        key={item}
        item={item}
        onRemove={() => handleUnselect(item)}
      />
    ))
  }, [selected, handleUnselect])

  // Filter items based on search query and limit results
  const filteredItems = React.useMemo(() => {
    if (!searchQuery.trim()) {
      return []
    }

    const query = searchQuery.toLowerCase()
    const matches = allItems.filter((item) =>
      item.toLowerCase().includes(query)
    )

    return matches.slice(0, maxResults)
  }, [allItems, searchQuery, maxResults])

  const hasMoreResults = React.useMemo(() => {
    if (!searchQuery.trim()) return false

    const query = searchQuery.toLowerCase()
    const totalMatches = allItems.filter((item) =>
      item.toLowerCase().includes(query)
    ).length

    return totalMatches > maxResults
  }, [allItems, searchQuery, maxResults])

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between h-auto min-h-10 bg-transparent"
          >
            <div className="flex gap-1 flex-wrap">
              {selected.length === 0 && <span className="text-muted-foreground">{placeholder}</span>}
              {renderBadges}
            </div>
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command shouldFilter={false}>
            <CommandInput
              placeholder={searchPlaceholder}
              className="h-9"
              value={searchQuery}
              onValueChange={setSearchQuery}
            />
            <CommandList className="max-h-64">
              {!searchQuery.trim() && (
                <div className="p-4 text-sm text-muted-foreground text-center">
                  {searchPlaceholder}
                </div>
              )}
              {searchQuery.trim() && filteredItems.length === 0 && (
                <CommandEmpty>No items found.</CommandEmpty>
              )}
              {filteredItems.length > 0 && (
                <CommandGroup>
                  {filteredItems.map((item) => {
                    const isSelected = selected.includes(item)
                    return (
                      <CommandItem
                        key={item}
                        onSelect={() => handleSelect(item)}
                        className="cursor-pointer"
                      >
                        <div className="flex items-center space-x-2 flex-1">
                          <Checkbox
                            checked={isSelected}
                            className="h-4 w-4"
                          />
                          <Check
                            className={cn(
                              "h-4 w-4",
                              isSelected ? "opacity-100" : "opacity-0"
                            )}
                          />
                          <span className="flex-1">{item}</span>
                        </div>
                      </CommandItem>
                    )
                  })}
                  {hasMoreResults && (
                    <div className="p-2 text-xs text-muted-foreground text-center border-t">
                      Showing first {maxResults} results. Refine your search to see more.
                    </div>
                  )}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
})

SearchableMultiSelect.displayName = "SearchableMultiSelect"
