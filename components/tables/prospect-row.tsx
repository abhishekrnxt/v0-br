import { memo } from "react"
import { TableRow, TableCell } from "@/components/ui/table"
import type { Prospect } from "@/lib/types"

interface ProspectRowProps {
  prospect: Prospect
  onClick: () => void
}

export const ProspectRow = memo(({ prospect, onClick }: ProspectRowProps) => (
  <TableRow
    className="cursor-pointer hover:bg-muted/50 transition-colors"
    onClick={onClick}
  >
    <TableCell className="font-medium">{prospect["FIRST NAME"]}</TableCell>
    <TableCell>{prospect["LAST NAME"]}</TableCell>
    <TableCell>{prospect.TITLE}</TableCell>
    <TableCell>{prospect["ACCOUNT NAME"]}</TableCell>
  </TableRow>
))
ProspectRow.displayName = "ProspectRow"
