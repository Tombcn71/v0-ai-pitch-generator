"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { generatePitch } from "@/lib/generate-pitch"

export default function TestAPI() {
  const [result, setResult] = useState<string>("")
  const [loading, setLoading] = useState(false)

  const testAPI = async () => {
    setLoading(true)
    setResult("")

    try {
      const testData = {
        problem: "Test problem",
        solution: "Test solution",
        uniqueness: "Test uniqueness",
        market: "Test market",
        traction: "Test traction",
        business: "Test business",
        team: "Test team",
        ask: "Test ask",
      }

      const pitch = await generatePitch(testData)
      setResult(`SUCCESS: ${pitch.substring(0, 200)}...`)
    } catch (error) {
      setResult(`ERROR: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle>API Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={testAPI} disabled={loading}>
            {loading ? "Testing..." : "Test Pitch Generation"}
          </Button>
          {result && (
            <div className="p-4 bg-muted rounded-md">
              <pre className="whitespace-pre-wrap text-sm">{result}</pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
