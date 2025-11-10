import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

interface LoadingStateProps {
  connectionStatus?: string
  dbStatus?: any
}

export function LoadingState({ connectionStatus, dbStatus }: LoadingStateProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Card className="w-96">
        <CardContent className="flex flex-col items-center justify-center p-8">
          <Loader2 className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4 animate-spin" />
          <h2 className="text-xl font-semibold mb-2">Loading Data</h2>
          <p className="text-muted-foreground text-center mb-2">Fetching data from Neon database...</p>
          {connectionStatus && <p className="text-sm text-muted-foreground text-center">{connectionStatus}</p>}
          {dbStatus && (
            <div className="text-xs text-muted-foreground mt-2 text-center">
              <p>DB URL: {dbStatus.hasUrl ? "✓" : "✗"}</p>
              <p>Connection: {dbStatus.hasConnection ? "✓" : "✗"}</p>
              <p>Environment: {dbStatus.environment}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
