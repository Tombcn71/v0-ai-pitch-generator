"use server"

import { generateText } from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google"

interface PitchFormData {
  problem: string
  solution: string
  uniqueness: string
  market: string
  traction: string
  business: string
  team: string
  ask: string
}

export async function generatePitch(data: PitchFormData): Promise<string> {
  try {
    console.log("Starting pitch generation...")
    console.log("API Key exists:", !!process.env.GOOGLE_API_KEY)

    const apiKey = process.env.GOOGLE_API_KEY

    if (!apiKey) {
      console.error("Google API key is missing")
      throw new Error("Google API key is not configured. Please add GOOGLE_API_KEY to your environment variables.")
    }

    const googleClient = createGoogleGenerativeAI({
      apiKey: apiKey,
    })

    // English prompt
    const prompt = `
Create a professional 3-minute pitch based on David Beckett's pitch canvas method using the following information:

PROBLEM:
${data.problem}

SOLUTION:
${data.solution}

UNIQUENESS:
${data.uniqueness}

TARGET MARKET:
${data.market}

TRACTION:
${data.traction}

BUSINESS MODEL:
${data.business}

TEAM:
${data.team}

THE ASK:
${data.ask}

Format the pitch as a well-structured script that can be presented in exactly 3 minutes. Include clear sections, transitions, and compelling opening and closing. The pitch should be persuasive, concise, and follow best practices for pitch presentations.
`

    // English system message
    const systemMessage =
      "You are an expert pitch writer who specializes in creating compelling 3-minute pitches based on David Beckett's pitch canvas methodology. Your pitches are clear, concise, and persuasive."

    const geminiModel = googleClient("gemini-1.5-pro")

    console.log("Calling Gemini API...")
    const { text } = await generateText({
      model: geminiModel,
      prompt,
      system: systemMessage,
    })

    console.log("Pitch generated successfully")
    return text
  } catch (error) {
    console.error("Error generating pitch:", error)

    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        throw new Error("API key configuration error. Please check your Google API key.")
      } else if (error.message.includes("quota")) {
        throw new Error("API quota exceeded. Please try again later.")
      } else if (error.message.includes("network")) {
        throw new Error("Network error. Please check your internet connection and try again.")
      } else {
        throw new Error(`Pitch generation failed: ${error.message}`)
      }
    }

    throw new Error("Failed to generate pitch. Please try again.")
  }
}
