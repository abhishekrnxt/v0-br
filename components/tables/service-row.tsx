import { memo } from "react"
import { TableRow, TableCell } from "@/components/ui/table"
import type { Service } from "@/lib/types"

export const ServiceRow = memo(({ service }: { service: Service }) => (
  <TableRow>
    <TableCell className="text-xs text-muted-foreground">{service["CN UNIQUE KEY"]}</TableCell>
    <TableCell>{service["CENTER NAME"]}</TableCell>
    <TableCell>{service["PRIMARY SERVICE"]}</TableCell>
    <TableCell>{service["FOCUS REGION"]}</TableCell>
    <TableCell>{service.IT}</TableCell>
    <TableCell>{service["ER&D"]}</TableCell>
    <TableCell>{service.FnA}</TableCell>
    <TableCell>{service.HR}</TableCell>
    <TableCell>{service.PROCUREMENT}</TableCell>
    <TableCell>{service["SALES & MARKETING"]}</TableCell>
    <TableCell>{service["CUSTOMER SUPPORT"]}</TableCell>
    <TableCell>{service.OTHERS}</TableCell>
    <TableCell>{service["SOFTWARE VENDOR"]}</TableCell>
    <TableCell>{service["SOFTWARE IN USE"]}</TableCell>
  </TableRow>
))
ServiceRow.displayName = "ServiceRow"
