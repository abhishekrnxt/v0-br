"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Filter, RotateCcw, AlertCircle } from "lucide-react"

interface EmptyStateProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  onResetFilters?: () => void
  hasActiveFilters?: boolean
  suggestions?: string[]
  quickActions?: Array<{
    label: string
    onClick: () => void
    icon?: React.ReactNode
  }>
}

export function EmptyState({
  title = "No data found",
  description = "There are no items to display with the current filters.",
  icon,
  onResetFilters,
  hasActiveFilters = false,
  suggestions = [],
  quickActions = [],
}: EmptyStateProps) {
  const defaultIcon = icon || <Database className="h-12 w-12 text-muted-foreground" />

  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center justify-center py-16 px-6">
        <div className="rounded-full bg-muted p-4 mb-4">
          {defaultIcon}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground text-center max-w-md mb-6">
          {description}
        </p>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="bg-muted/50 rounded-lg p-4 mb-6 w-full max-w-md">
            <div className="flex items-start gap-2 mb-2">
              <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <span className="text-xs font-medium text-foreground">Try these suggestions:</span>
            </div>
            <ul className="space-y-1 ml-6">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="text-xs text-muted-foreground list-disc">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
          {hasActiveFilters && onResetFilters && (
            <Button
              variant="outline"
              onClick={onResetFilters}
              className="flex items-center gap-2 flex-1"
            >
              <RotateCcw className="h-4 w-4" />
              Reset All Filters
            </Button>
          )}

          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant={index === 0 && !hasActiveFilters ? "default" : "outline"}
              onClick={action.onClick}
              className="flex items-center gap-2 flex-1"
            >
              {action.icon}
              {action.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
