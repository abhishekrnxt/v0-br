import { memo } from "react"
import { TableRow, TableCell } from "@/components/ui/table"
import type { Function } from "@/lib/types"

export const FunctionRow = memo(({ func }: { func: Function }) => (
  <TableRow>
    <TableCell className="text-xs text-gray-600">{func["CN UNIQUE KEY"]}</TableCell>
    <TableCell>{func["FUNCTION"]}</TableCell>
  </TableRow>
))
FunctionRow.displayName = "FunctionRow"
