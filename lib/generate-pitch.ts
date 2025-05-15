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
  // Get API key from environment variable - this works on the server
  const apiKey = process.env.GOOGLE_API_KEY

  if (!apiKey) {
    throw new Error("Google API key is not set. Please add GOOGLE_API_KEY to your environment variables.")
  }

  // Create a custom Google client with explicit API key
  const googleClient = createGoogleGenerativeAI({
    apiKey: apiKey,
  })

  // Spanish prompt only
  const prompt = `
Crea un pitch profesional de 3 minutos basado en el método de canvas de pitch de David Beckett utilizando la siguiente información:

PROBLEMA:
${data.problem}

SOLUCIÓN:
${data.solution}

SINGULARIDAD:
${data.uniqueness}

MERCADO OBJETIVO:
${data.market}

TRACCIÓN:
${data.traction}

MODELO DE NEGOCIO:
${data.business}

EQUIPO:
${data.team}

LA PETICIÓN:
${data.ask}

Formatea el pitch como un guión bien estructurado que pueda ser presentado en exactamente 3 minutos. Incluye secciones claras, transiciones, y una apertura y cierre convincentes. El pitch debe ser persuasivo, conciso y seguir las mejores prácticas para la presentación de pitches.
`

  // Spanish system message
  const systemMessage =
    "Eres un experto escritor de pitches que se especializa en crear pitches convincentes de 3 minutos basados en la metodología de canvas de pitch de David Beckett. Tus pitches son claros, concisos y persuasivos."

  try {
    // Use the custom client to create a model
    const geminiModel = googleClient("gemini-1.5-pro")

    // Use the model instance in generateText
    const { text } = await generateText({
      model: geminiModel,
      prompt,
      system: systemMessage,
    })

    return text
  } catch (error) {
    console.error("Error generating pitch:", error)
    throw new Error("Failed to generate pitch. Please try again.")
  }
}
