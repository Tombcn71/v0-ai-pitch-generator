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

export async function generatePitch(data: PitchFormData, language = "es"): Promise<string> {
  // Get API key from environment variable - this works on the server
  const apiKey = process.env.GOOGLE_API_KEY

  if (!apiKey) {
    throw new Error("Google API key is not set. Please add GOOGLE_API_KEY to your environment variables.")
  }

  // Create a custom Google client with explicit API key
  const googleClient = createGoogleGenerativeAI({
    apiKey: apiKey,
  })

  // Adjust the prompt based on the language
  const promptEN = `
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

Format the pitch as a well-structured script that can be delivered in exactly 3 minutes. Include clear sections, transitions, and a compelling opening and closing. The pitch should be persuasive, concise, and follow best practices for pitch delivery.
`

  const promptES = `
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

  let prompt
  if (language === "es") {
    prompt = promptES
  } else {
    prompt = promptEN
  }

  // System message based on language
  const systemMessageEN =
    "You are an expert pitch writer who specializes in creating compelling 3-minute pitches based on David Beckett's pitch canvas methodology. Your pitches are clear, concise, and persuasive."
  const systemMessageES =
    "Eres un experto escritor de pitches que se especializa en crear pitches convincentes de 3 minutos basados en la metodología de canvas de pitch de David Beckett. Tus pitches son claros, concisos y persuasivos."

  let systemMessage
  if (language === "es") {
    systemMessage = systemMessageES
  } else {
    systemMessage = systemMessageEN
  }

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
