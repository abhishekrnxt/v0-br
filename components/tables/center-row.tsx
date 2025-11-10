import { memo } from "react"
import { TableRow, TableCell } from "@/components/ui/table"
import type { Center } from "@/lib/types"

export const CenterRow = memo(({ center }: { center: Center }) => (
  <TableRow>
    <TableCell className="font-medium">{center["CENTER NAME"]}</TableCell>
    <TableCell className="text-xs text-muted-foreground">{center["CN UNIQUE KEY"]}</TableCell>
    <TableCell>{center["ACCOUNT NAME"]}</TableCell>
    <TableCell>{center["CENTER TYPE"]}</TableCell>
    <TableCell>{center["CENTER CITY"]}</TableCell>
    <TableCell>{center["CENTER STATE"]}</TableCell>
    <TableCell>{center["CENTER COUNTRY"]}</TableCell>
    <TableCell>{center["CENTER STATUS"]}</TableCell>
    <TableCell>{center["CENTER EMPLOYEES"]}</TableCell>
    <TableCell>{center["CENTER EMPLOYEES RANGE"]}</TableCell>
  </TableRow>
))
CenterRow.displayName = "CenterRow"
