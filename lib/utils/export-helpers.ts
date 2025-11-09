import * as XLSX from "xlsx"

/**
 * Export data to Excel file
 */
export const exportToExcel = (data: any[], filename: string, sheetName: string) => {
  try {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(data)
    XLSX.utils.book_append_sheet(wb, ws, sheetName)
    XLSX.writeFile(wb, `${filename}.xlsx`)
  } catch (error) {
    console.error("Error exporting to Excel:", error)
  }
}

/**
 * Export all data to a multi-sheet Excel file
 */
export const exportAllData = (
  accounts: any[],
  centers: any[],
  functions: any[],
  services: any[]
) => {
  try {
    const wb = XLSX.utils.book_new()

    const accountsWs = XLSX.utils.json_to_sheet(accounts)
    XLSX.utils.book_append_sheet(wb, accountsWs, "Accounts")

    const centersWs = XLSX.utils.json_to_sheet(centers)
    XLSX.utils.book_append_sheet(wb, centersWs, "Centers")

    const functionsWs = XLSX.utils.json_to_sheet(functions)
    XLSX.utils.book_append_sheet(wb, functionsWs, "Functions")

    const servicesWs = XLSX.utils.json_to_sheet(services)
    XLSX.utils.book_append_sheet(wb, servicesWs, "Services")

    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, "-")
    const filename = `dashboard-export-${timestamp}`

    XLSX.writeFile(wb, `${filename}.xlsx`)
  } catch (error) {
    console.error("Error exporting all data to Excel:", error)
  }
}
