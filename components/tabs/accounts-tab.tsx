"use client"

import React, { useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TabsContent } from "@/components/ui/tabs"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, PieChartIcon, Table as TableIcon, ArrowUpDown, ArrowUp, ArrowDown, Filter } from "lucide-react"
import { AccountRow } from "@/components/tables"
import { PieChartCard } from "@/components/charts/pie-chart-card"
import { EmptyState } from "@/components/states/empty-state"
import { getPaginatedData, getTotalPages, getPageInfo } from "@/lib/utils/helpers"
import { exportToExcel } from "@/lib/utils/export-helpers"
import type { Account, Function } from "@/lib/types"

interface AccountsTabProps {
  accounts: Account[]
  functions: Function[]
  accountChartData: {
    regionData: Array<{ name: string; value: number; fill?: string }>
    primaryNatureData: Array<{ name: string; value: number; fill?: string }>
    revenueRangeData: Array<{ name: string; value: number; fill?: string }>
    employeesRangeData: Array<{ name: string; value: number; fill?: string }>
  }
  accountsView: "chart" | "data"
  setAccountsView: (view: "chart" | "data") => void
  currentPage: number
  setCurrentPage: (page: number | ((prev: number) => number)) => void
  itemsPerPage: number
  sortColumn?: string | null
  sortDirection?: "asc" | "desc"
  onSort?: (column: string) => void
  onResetFilters?: () => void
  hasActiveFilters?: boolean
}

export function AccountsTab({
  accounts,
  accountChartData,
  accountsView,
  setAccountsView,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  sortColumn,
  sortDirection = "asc",
  onSort,
  onResetFilters,
  hasActiveFilters = false,
}: AccountsTabProps) {
  // Sort accounts based on sort column and direction
  const sortedAccounts = useMemo(() => {
    if (!sortColumn || !onSort) return accounts

    return [...accounts].sort((a, b) => {
      let aValue = a[sortColumn as keyof Account]
      let bValue = b[sortColumn as keyof Account]

      // Handle null/undefined values
      if (aValue == null) return 1
      if (bValue == null) return -1

      // Convert to strings for comparison
      const aStr = String(aValue).toLowerCase()
      const bStr = String(bValue).toLowerCase()

      const comparison = aStr.localeCompare(bStr, undefined, { numeric: true })
      return sortDirection === "asc" ? comparison : -comparison
    })
  }, [accounts, sortColumn, sortDirection, onSort])

  const renderSortIcon = (column: string) => {
    if (sortColumn !== column) {
      return <ArrowUpDown className="h-3 w-3 ml-1 text-muted-foreground" />
    }
    return sortDirection === "asc" ? (
      <ArrowUp className="h-3 w-3 ml-1" />
    ) : (
      <ArrowDown className="h-3 w-3 ml-1" />
    )
  }

  const handleSort = (column: string) => {
    if (onSort) {
      onSort(column)
    }
  }

  return (
    <TabsContent value="accounts">
      {/* Header with View Toggle */}
      <div className="flex items-center gap-2 mb-4">
        <PieChartIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <h2 className="text-lg font-semibold text-foreground">Account Analytics</h2>
        <Badge variant="secondary" className="ml-2">
          {accounts.length} Accounts
        </Badge>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant={accountsView === "chart" ? "default" : "outline"}
            size="sm"
            onClick={() => setAccountsView("chart")}
            className="flex items-center gap-2"
          >
            <PieChartIcon className="h-4 w-4" />
            Charts
          </Button>
          <Button
            variant={accountsView === "data" ? "default" : "outline"}
            size="sm"
            onClick={() => setAccountsView("data")}
            className="flex items-center gap-2"
          >
            <TableIcon className="h-4 w-4" />
            Data
          </Button>
        </div>
      </div>

      {/* Charts Section */}
      {accountsView === "chart" && (
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PieChartCard
              title="Region Split"
              data={accountChartData.regionData}
            />
            <PieChartCard
              title="Primary Nature Split"
              data={accountChartData.primaryNatureData}
            />
            <PieChartCard
              title="Revenue Range Split"
              data={accountChartData.revenueRangeData}
            />
            <PieChartCard
              title="Employees Range Split"
              data={accountChartData.employeesRangeData}
            />
          </div>
        </div>
      )}

      {/* Data Table */}
      {accountsView === "data" && (
        <Card>
          <CardHeader>
            <CardTitle>Accounts Data</CardTitle>
          </CardHeader>
          <CardContent>
            {accounts.length === 0 ? (
              <EmptyState
                title="No accounts found"
                description="No accounts match your current filter criteria."
                icon={<Filter className="h-12 w-12 text-muted-foreground" />}
                hasActiveFilters={hasActiveFilters}
                onResetFilters={onResetFilters}
                suggestions={[
                  "Try removing some filters to see more results",
                  "Adjust the revenue range to include more accounts",
                  "Clear the search term if you have one active",
                  "Check if any region or industry filters are too restrictive"
                ]}
              />
            ) : (
              <>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead
                          className="cursor-pointer hover:bg-muted/50 select-none"
                          onClick={() => handleSort("ACCOUNT NAME")}
                        >
                          <div className="flex items-center">
                            Account Name
                            {renderSortIcon("ACCOUNT NAME")}
                          </div>
                        </TableHead>
                        <TableHead
                          className="cursor-pointer hover:bg-muted/50 select-none"
                          onClick={() => handleSort("COUNTRY")}
                        >
                          <div className="flex items-center">
                            Country
                            {renderSortIcon("COUNTRY")}
                          </div>
                        </TableHead>
                        <TableHead
                          className="cursor-pointer hover:bg-muted/50 select-none"
                          onClick={() => handleSort("REGION")}
                        >
                          <div className="flex items-center">
                            Region
                            {renderSortIcon("REGION")}
                          </div>
                        </TableHead>
                        <TableHead
                          className="cursor-pointer hover:bg-muted/50 select-none"
                          onClick={() => handleSort("INDUSTRY")}
                        >
                          <div className="flex items-center">
                            Industry
                            {renderSortIcon("INDUSTRY")}
                          </div>
                        </TableHead>
                        <TableHead
                          className="cursor-pointer hover:bg-muted/50 select-none"
                          onClick={() => handleSort("SUB INDUSTRY")}
                        >
                          <div className="flex items-center">
                            Sub Industry
                            {renderSortIcon("SUB INDUSTRY")}
                          </div>
                        </TableHead>
                        <TableHead
                          className="cursor-pointer hover:bg-muted/50 select-none"
                          onClick={() => handleSort("PRIMARY CATEGORY")}
                        >
                          <div className="flex items-center">
                            Primary Category
                            {renderSortIcon("PRIMARY CATEGORY")}
                          </div>
                        </TableHead>
                        <TableHead
                          className="cursor-pointer hover:bg-muted/50 select-none"
                          onClick={() => handleSort("PRIMARY NATURE")}
                        >
                          <div className="flex items-center">
                            Primary Nature
                            {renderSortIcon("PRIMARY NATURE")}
                          </div>
                        </TableHead>
                        <TableHead
                          className="cursor-pointer hover:bg-muted/50 select-none"
                          onClick={() => handleSort("NASSCOM STATUS")}
                        >
                          <div className="flex items-center">
                            NASSCOM Status
                            {renderSortIcon("NASSCOM STATUS")}
                          </div>
                        </TableHead>
                        <TableHead
                          className="cursor-pointer hover:bg-muted/50 select-none"
                          onClick={() => handleSort("REVENUE")}
                        >
                          <div className="flex items-center">
                            Revenue
                            {renderSortIcon("REVENUE")}
                          </div>
                        </TableHead>
                        <TableHead
                          className="cursor-pointer hover:bg-muted/50 select-none"
                          onClick={() => handleSort("REVENUE RANGE")}
                        >
                          <div className="flex items-center">
                            Revenue Range
                            {renderSortIcon("REVENUE RANGE")}
                          </div>
                        </TableHead>
                        <TableHead
                          className="cursor-pointer hover:bg-muted/50 select-none"
                          onClick={() => handleSort("EMPLOYEES RANGE")}
                        >
                          <div className="flex items-center">
                            Employees Range
                            {renderSortIcon("EMPLOYEES RANGE")}
                          </div>
                        </TableHead>
                        <TableHead
                          className="cursor-pointer hover:bg-muted/50 select-none"
                          onClick={() => handleSort("CENTER EMPLOYEES")}
                        >
                          <div className="flex items-center">
                            Center Employees
                            {renderSortIcon("CENTER EMPLOYEES")}
                          </div>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {getPaginatedData(sortedAccounts, currentPage, itemsPerPage).map(
                        (account, index) => (
                          <AccountRow key={`${account["ACCOUNT NAME"]}-${index}`} account={account} />
                        )
                      )}
                    </TableBody>
                  </Table>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                      Showing{" "}
                      {getPageInfo(currentPage, sortedAccounts.length, itemsPerPage).startItem} to{" "}
                      {getPageInfo(currentPage, sortedAccounts.length, itemsPerPage).endItem} of{" "}
                      {sortedAccounts.length} results
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => exportToExcel(sortedAccounts, "accounts-export", "Accounts")}
                      className="flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Export Accounts
                    </Button>
                  </div>
                  {getTotalPages(sortedAccounts.length, itemsPerPage) > 1 && (
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </Button>
                      <span className="text-sm text-muted-foreground">
                        Page {currentPage} of {getTotalPages(sortedAccounts.length, itemsPerPage)}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, getTotalPages(sortedAccounts.length, itemsPerPage))
                          )
                        }
                        disabled={
                          currentPage === getTotalPages(sortedAccounts.length, itemsPerPage)
                        }
                      >
                        Next
                      </Button>
                    </div>
                  )}
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </TabsContent>
  )
}
