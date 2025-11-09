import { memo } from "react"
import { TableRow, TableCell } from "@/components/ui/table"
import { formatRevenueInMillions, parseRevenue } from "@/lib/utils/helpers"
import type { Account } from "@/lib/types"

export const AccountRow = memo(({ account }: { account: Account }) => (
  <TableRow>
    <TableCell className="font-medium">{account["ACCOUNT NAME"]}</TableCell>
    <TableCell>{account["ACCOUNT COUNTRY"]}</TableCell>
    <TableCell>{account["ACCOUNT REGION"]}</TableCell>
    <TableCell>{account["ACCOUNT INDUSTRY"]}</TableCell>
    <TableCell>{account["ACCOUNT SUB INDUSTRY"]}</TableCell>
    <TableCell>{account["ACCOUNT PRIMARY CATEGORY"]}</TableCell>
    <TableCell>{account["ACCOUNT PRIMARY NATURE"]}</TableCell>
    <TableCell>{account["ACCOUNT NASSCOM STATUS"]}</TableCell>
    <TableCell>{formatRevenueInMillions(parseRevenue(account["ACCOUNT REVNUE"]))}</TableCell>
    <TableCell>{account["ACCOUNT REVENUE RANGE"]}</TableCell>
    <TableCell>{account["ACCOUNT EMPLOYEES RANGE"]}</TableCell>
    <TableCell>{account["ACCOUNT CENTER EMPLOYEES"]}</TableCell>
  </TableRow>
))
AccountRow.displayName = "AccountRow"
