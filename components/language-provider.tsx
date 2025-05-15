"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es" | "nl"
type Translations = Record<string, Record<Language, string>>

const translations: Translations = {
  // Navigation
  "nav.home": {
    en: "Home",
    es: "Inicio",
    nl: "Home",
  },
  "nav.dashboard": {
    en: "Dashboard",
    es: "Panel",
    nl: "Dashboard",
  },
  "nav.contact": {
    en: "Contact Coach",
    es: "Contactar Coach",
    nl: "Contact Coach",
  },
  "nav.logout": {
    en: "Logout",
    es: "Cerrar Sesión",
    nl: "Uitloggen",
  },
  "nav.loggingOut": {
    en: "Logging out...",
    es: "Cerrando sesión...",
    nl: "Uitloggen...",
  },
  "nav.menu": {
    en: "Menu",
    es: "Menú",
    nl: "Menu",
  },
  // Pitch Canvas
  "pitch.title": {
    en: "Pitch Canvas Generator",
    es: "Generador de Pitch Canvas",
    nl: "Pitch Canvas Generator",
  },
  "pitch.subtitle": {
    en: "Create your perfect pitch with AI",
    es: "Crea tu pitch perfecto con IA",
    nl: "Maak je perfecte pitch met AI",
  },
  "pitch.problem": {
    en: "Problem",
    es: "Problema",
    nl: "Probleem",
  },
  "pitch.problem.placeholder": {
    en: "What problem are you solving?",
    es: "¿Qué problema estás resolviendo?",
    nl: "Welk probleem los je op?",
  },
  "pitch.solution": {
    en: "Solution",
    es: "Solución",
    nl: "Oplossing",
  },
  "pitch.solution.placeholder": {
    en: "How does your solution work?",
    es: "¿Cómo funciona tu solución?",
    nl: "Hoe werkt je oplossing?",
  },
  "pitch.uniqueness": {
    en: "Uniqueness",
    es: "Singularidad",
    nl: "Uniekheid",
  },
  "pitch.uniqueness.placeholder": {
    en: "What makes your solution unique?",
    es: "¿Qué hace única a tu solución?",
    nl: "Wat maakt je oplossing uniek?",
  },
  "pitch.market": {
    en: "Target Market",
    es: "Mercado Objetivo",
    nl: "Doelmarkt",
  },
  "pitch.market.placeholder": {
    en: "Who is your target audience?",
    es: "¿Quién es tu público objetivo?",
    nl: "Wie is je doelgroep?",
  },
  "pitch.traction": {
    en: "Traction",
    es: "Tracción",
    nl: "Tractie",
  },
  "pitch.traction.placeholder": {
    en: "What traction do you have so far?",
    es: "¿Qué tracción tienes hasta ahora?",
    nl: "Welke tractie heb je tot nu toe?",
  },
  "pitch.business": {
    en: "Business Model",
    es: "Modelo de Negocio",
    nl: "Businessmodel",
  },
  "pitch.business.placeholder": {
    en: "How will you make money?",
    es: "¿Cómo generarás ingresos?",
    nl: "Hoe ga je geld verdienen?",
  },
  "pitch.team": {
    en: "Team",
    es: "Equipo",
    nl: "Team",
  },
  "pitch.team.placeholder": {
    en: "Who is on your team?",
    es: "¿Quién forma parte de tu equipo?",
    nl: "Wie zit er in je team?",
  },
  "pitch.ask": {
    en: "The Ask",
    es: "La Petición",
    nl: "De Vraag",
  },
  "pitch.ask.placeholder": {
    en: "What are you asking for?",
    es: "¿Qué estás pidiendo?",
    nl: "Wat vraag je?",
  },
  "pitch.generate": {
    en: "Generate Pitch",
    es: "Generar Pitch",
    nl: "Genereer Pitch",
  },
  "pitch.generating": {
    en: "Generating...",
    es: "Generando...",
    nl: "Genereren...",
  },
  "pitch.canvas": {
    en: "Pitch Canvas",
    es: "Canvas de Pitch",
    nl: "Pitch Canvas",
  },
  "pitch.result": {
    en: "Generated Pitch",
    es: "Pitch Generado",
    nl: "Gegenereerde Pitch",
  },
  "pitch.canvas.title": {
    en: "David Beckett's Pitch Canvas",
    es: "Canvas de Pitch de David Beckett",
    nl: "David Beckett's Pitch Canvas",
  },
  "pitch.canvas.description": {
    en: "Fill in the details below to generate your 3-minute pitch",
    es: "Completa los detalles a continuación para generar tu pitch de 3 minutos",
    nl: "Vul de onderstaande details in om je 3-minuten pitch te genereren",
  },
  "pitch.result.title": {
    en: "Your Generated Pitch",
    es: "Tu Pitch Generado",
    nl: "Je Gegenereerde Pitch",
  },
  "pitch.result.description": {
    en: "Here's your AI-generated 3-minute pitch based on David Beckett's method",
    es: "Aquí está tu pitch de 3 minutos generado por IA basado en el método de David Beckett",
    nl: "Hier is je door AI gegenereerde 3-minuten pitch gebaseerd op de methode van David Beckett",
  },
  "pitch.edit": {
    en: "Edit Canvas",
    es: "Editar Canvas",
    nl: "Canvas Bewerken",
  },
  "pitch.copy": {
    en: "Copy Text",
    es: "Copiar Texto",
    nl: "Tekst Kopiëren",
  },
  "pitch.print": {
    en: "Print",
    es: "Imprimir",
    nl: "Afdrukken",
  },
  "pitch.download": {
    en: "Download",
    es: "Descargar",
    nl: "Downloaden",
  },
  "pitch.copied": {
    en: "Copied to clipboard",
    es: "Copiado al portapapeles",
    nl: "Gekopieerd naar klembord",
  },
  "pitch.copied.description": {
    en: "Your pitch has been copied to the clipboard",
    es: "Tu pitch ha sido copiado al portapapeles",
    nl: "Je pitch is gekopieerd naar het klembord",
  },
  "pitch.your3min": {
    en: "Your 3-Minute Pitch",
    es: "Tu Pitch de 3 Minutos",
    nl: "Je 3-Minuten Pitch",
  },
  "pitch.based": {
    en: "Based on David Beckett's Pitch Canvas",
    es: "Basado en el Canvas de Pitch de David Beckett",
    nl: "Gebaseerd op David Beckett's Pitch Canvas",
  },
  // Contact
  "contact.title": {
    en: "Contact Pitch Coach",
    es: "Contactar Coach de Pitch",
    nl: "Contact Pitch Coach",
  },
  "contact.subtitle": {
    en: "Get professional coaching from Martina Guzman",
    es: "Obtén coaching profesional de Martina Guzman",
    nl: "Krijg professionele coaching van Martina Guzman",
  },
  "contact.name": {
    en: "Name",
    es: "Nombre",
    nl: "Naam",
  },
  "contact.email": {
    en: "Email",
    es: "Correo Electrónico",
    nl: "E-mail",
  },
  "contact.message": {
    en: "Message",
    es: "Mensaje",
    nl: "Bericht",
  },
  "contact.submit": {
    en: "Submit",
    es: "Enviar",
    nl: "Versturen",
  },
  "contact.sending": {
    en: "Sending...",
    es: "Enviando...",
    nl: "Versturen...",
  },
  "contact.success": {
    en: "Message sent successfully!",
    es: "¡Mensaje enviado con éxito!",
    nl: "Bericht succesvol verzonden!",
  },
  "contact.success.description": {
    en: "Martina Guzman will contact you soon.",
    es: "Martina Guzman te contactará pronto.",
    nl: "Martina Guzman zal spoedig contact met je opnemen.",
  },
  "contact.coach.title": {
    en: "Meet Your Coach",
    es: "Conoce a Tu Coach",
    nl: "Ontmoet Je Coach",
  },
  "contact.coach.description": {
    en: "Professional pitch coaching from an industry expert",
    es: "Coaching profesional de pitch de una experta en la industria",
    nl: "Professionele pitch coaching van een expert uit de industrie",
  },
  "contact.coach.bio": {
    en: "Professional Pitch Coach with over 10 years of experience helping entrepreneurs and executives deliver compelling presentations. Specialized in the David Beckett pitch canvas methodology.",
    es: "Coach Profesional de Pitch con más de 10 años de experiencia ayudando a emprendedores y ejecutivos a realizar presentaciones convincentes. Especializada en la metodología de canvas de pitch de David Beckett.",
    nl: "Professionele Pitch Coach met meer dan 10 jaar ervaring in het helpen van ondernemers en executives bij het geven van overtuigende presentaties. Gespecialiseerd in de David Beckett pitch canvas methodologie.",
  },
  "contact.form.title": {
    en: "Contact Martina Guzman",
    es: "Contactar a Martina Guzman",
    nl: "Contact Martina Guzman",
  },
  "contact.form.description": {
    en: "Get professional coaching to perfect your pitch delivery and presentation",
    es: "Obtén coaching profesional para perfeccionar la entrega y presentación de tu pitch",
    nl: "Krijg professionele coaching om je pitch delivery en presentatie te perfectioneren",
  },
  "contact.services": {
    en: "Coaching Services",
    es: "Servicios de Coaching",
    nl: "Coaching Diensten",
  },
  "contact.basic.title": {
    en: "Basic Coaching",
    es: "Coaching Básico",
    nl: "Basis Coaching",
  },
  "contact.basic.description": {
    en: "One-on-one pitch review session",
    es: "Sesión individual de revisión de pitch",
    nl: "Één-op-één pitch review sessie",
  },
  "contact.basic.feature1": {
    en: "60-minute virtual session",
    es: "Sesión virtual de 60 minutos",
    nl: "60-minuten virtuele sessie",
  },
  "contact.basic.feature2": {
    en: "Detailed feedback on your pitch",
    es: "Retroalimentación detallada sobre tu pitch",
    nl: "Gedetailleerde feedback op je pitch",
  },
  "contact.basic.feature3": {
    en: "Delivery tips and techniques",
    es: "Consejos y técnicas de presentación",
    nl: "Delivery tips en technieken",
  },
  "contact.premium.title": {
    en: "Premium Coaching",
    es: "Coaching Premium",
    nl: "Premium Coaching",
  },
  "contact.premium.description": {
    en: "Comprehensive pitch preparation",
    es: "Preparación integral del pitch",
    nl: "Uitgebreide pitch voorbereiding",
  },
  "contact.premium.feature1": {
    en: "3 coaching sessions (90 minutes each)",
    es: "3 sesiones de coaching (90 minutos cada una)",
    nl: "3 coaching sessies (90 minuten elk)",
  },
  "contact.premium.feature2": {
    en: "Pitch content refinement",
    es: "Refinamiento del contenido del pitch",
    nl: "Verfijning van pitch inhoud",
  },
  "contact.premium.feature3": {
    en: "Body language and voice coaching",
    es: "Coaching de lenguaje corporal y voz",
    nl: "Lichaamstaal en stem coaching",
  },
  "contact.premium.feature4": {
    en: "Video recording and analysis",
    es: "Grabación y análisis de video",
    nl: "Video opname en analyse",
  },
  // Video Course
  "course.title": {
    en: "Video Course",
    es: "Curso en Video",
    nl: "Videocursus",
  },
  "course.name": {
    en: "The Complete Pitch Mastery Course",
    es: "El Curso Completo de Dominio del Pitch",
    nl: "De Complete Pitch Beheersing Cursus",
  },
  "course.description": {
    en: "Learn the art of pitching directly from Martina Guzman with this comprehensive video course. Master every aspect of creating and delivering compelling pitches that win over investors, clients, and stakeholders.",
    es: "Aprende el arte del pitch directamente de Martina Guzman con este curso completo en video. Domina todos los aspectos de la creación y presentación de pitches convincentes que conquisten a inversores, clientes y partes interesadas.",
    nl: "Leer de kunst van het pitchen direct van Martina Guzman met deze uitgebreide videocursus. Beheers elk aspect van het creëren en presenteren van overtuigende pitches die investeerders, klanten en belanghebbenden overwinnen.",
  },
  "course.feature1": {
    en: "10+ hours of professional video content",
    es: "Más de 10 horas de contenido profesional en video",
    nl: "10+ uur professionele video-inhoud",
  },
  "course.feature2": {
    en: "Downloadable resources and templates",
    es: "Recursos y plantillas descargables",
    nl: "Downloadbare bronnen en sjablonen",
  },
  "course.feature3": {
    en: "Lifetime access and updates",
    es: "Acceso de por vida y actualizaciones",
    nl: "Levenslange toegang en updates",
  },
  "course.feature4": {
    en: "Private community access",
    es: "Acceso a comunidad privada",
    nl: "Toegang tot privé community",
  },
  "course.reviews": {
    en: "4.9/5 (120+ reviews)",
    es: "4.9/5 (más de 120 reseñas)",
    nl: "4.9/5 (120+ beoordelingen)",
  },
  "course.purchase": {
    en: "Purchase Course",
    es: "Comprar Curso",
    nl: "Cursus Kopen",
  },
  "course.preview": {
    en: "Preview: Mastering Your Pitch Delivery",
    es: "Vista previa: Dominando la Presentación de tu Pitch",
    nl: "Voorbeeld: Je Pitch Delivery Beheersen",
  },
  // Home Page
  "home.hero.title": {
    en: "Create Perfect Pitches with AI",
    es: "Crea Pitches Perfectos con IA",
    nl: "Maak Perfecte Pitches met AI",
  },
  "home.hero.subtitle": {
    en: "Generate professional 3-minute pitches based on David Beckett's pitch canvas method. Free pitch generation with optional professional coaching.",
    es: "Genera pitches profesionales de 3 minutos basados en el método de canvas de pitch de David Beckett. Generación de pitch gratuita con coaching profesional opcional.",
    nl: "Genereer professionele 3-minuten pitches gebaseerd op David Beckett's pitch canvas methode. Gratis pitch generatie met optionele professionele coaching.",
  },
  "home.getstarted": {
    en: "Get Started",
    es: "Comenzar",
    nl: "Aan de Slag",
  },
  "home.contactcoach": {
    en: "Contact Coach",
    es: "Contactar Coach",
    nl: "Contact Coach",
  },
  "home.feature1.title": {
    en: "The Best 3 Minutes Pitch Method",
    es: "El Mejor Método de Pitch de 3 Minutos",
    nl: "De Beste 3 Minuten Pitch Methode",
  },
  "home.feature1.description": {
    en: "Based on David Beckett's proven pitch canvas methodology, our AI helps you create compelling pitches that capture attention and drive results.",
    es: "Basado en la probada metodología de canvas de pitch de David Beckett, nuestra IA te ayuda a crear pitches convincentes que captan la atención y generan resultados.",
    nl: "Gebaseerd op David Beckett's bewezen pitch canvas methodologie, helpt onze AI je bij het maken van overtuigende pitches die aandacht trekken en resultaten opleveren.",
  },
  "home.feature1.point1": {
    en: "Define your problem and solution clearly",
    es: "Define tu problema y solución claramente",
    nl: "Definieer je probleem en oplossing duidelijk",
  },
  "home.feature1.point2": {
    en: "Highlight your unique value proposition",
    es: "Destaca tu propuesta de valor única",
    nl: "Benadruk je unieke waardepropositie",
  },
  "home.feature1.point3": {
    en: "Structure your pitch for maximum impact",
    es: "Estructura tu pitch para máximo impacto",
    nl: "Structureer je pitch voor maximale impact",
  },
  "home.feature2.title": {
    en: "Professional Coaching",
    es: "Coaching Profesional",
    nl: "Professionele Coaching",
  },
  "home.feature2.description": {
    en: "Get personalized coaching from Martina Guzman to perfect your pitch delivery and presentation.",
    es: "Obtén coaching personalizado de Martina Guzman para perfeccionar la entrega y presentación de tu pitch.",
    nl: "Krijg gepersonaliseerde coaching van Martina Guzman om je pitch delivery en presentatie te perfectioneren.",
  },
  "home.feature2.point1": {
    en: "Build confidence in your delivery",
    es: "Desarrolla confianza en tu presentación",
    nl: "Bouw vertrouwen op in je presentatie",
  },
  "home.feature2.point2": {
    en: "Refine your presentation style",
    es: "Refina tu estilo de presentación",
    nl: "Verfijn je presentatiestijl",
  },
  "home.feature2.point3": {
    en: "Get expert feedback on your pitch",
    es: "Obtén retroalimentación experta sobre tu pitch",
    nl: "Krijg expert feedback op je pitch",
  },
  "home.course.title": {
    en: "Master Pitching with Our Video Course",
    es: "Domina el Pitching con Nuestro Curso en Video",
    nl: "Beheers Pitching met Onze Videocursus",
  },
  "home.course.description": {
    en: "Learn at your own pace with Martina Guzman's comprehensive video course on pitch mastery. From fundamentals to advanced techniques, this course covers everything you need to deliver compelling pitches that win over any audience.",
    es: "Aprende a tu propio ritmo con el curso completo en video de Martina Guzman sobre dominio del pitch. Desde fundamentos hasta técnicas avanzadas, este curso cubre todo lo que necesitas para realizar pitches convincentes que conquisten a cualquier audiencia.",
    nl: "Leer in je eigen tempo met Martina Guzman's uitgebreide videocursus over pitch beheersing. Van fundamenten tot geavanceerde technieken, deze cursus behandelt alles wat je nodig hebt om overtuigende pitches te geven die elk publiek overwinnen.",
  },
  "home.course.learnmore": {
    en: "Learn More About the Course",
    es: "Más Información Sobre el Curso",
    nl: "Meer Informatie Over de Cursus",
  },
  "home.cta.title": {
    en: "Ready to Create Your Perfect Pitch?",
    es: "¿Listo para Crear tu Pitch Perfecto?",
    nl: "Klaar om Je Perfecte Pitch te Maken?",
  },
  "home.cta.description": {
    en: "Start using our AI-powered pitch generator today and transform your ideas into compelling presentations.",
    es: "Comienza a usar nuestro generador de pitch impulsado por IA hoy y transforma tus ideas en presentaciones convincentes.",
    nl: "Begin vandaag nog met het gebruik van onze door AI aangedreven pitch generator en transformeer je ideeën in overtuigende presentaties.",
  },
  "home.cta.button": {
    en: "Get Started Now",
    es: "Comenzar Ahora",
    nl: "Nu Beginnen",
  },
  // Footer
  "footer.copyright": {
    en: "© 2025 PitchAI. All rights reserved.",
    es: "© 2025 PitchAI. Todos los derechos reservados.",
    nl: "© 2025 PitchAI. Alle rechten voorbehouden.",
  },
  "footer.free": {
    en: "Pitch generation is free",
    es: "La generación de pitch es gratuita",
    nl: "Pitch generatie is gratis",
  },
  "footer.coaching": {
    en: "Professional coaching is a paid service",
    es: "El coaching profesional es un servicio de pago",
    nl: "Professionele coaching is een betaalde dienst",
  },
  // Auth
  "auth.signin": {
    en: "Sign In",
    es: "Iniciar Sesión",
    nl: "Inloggen",
  },
  "auth.signup": {
    en: "Sign Up",
    es: "Registrarse",
    nl: "Registreren",
  },
  "auth.google": {
    en: "Continue with Google",
    es: "Continuar con Google",
    nl: "Doorgaan met Google",
  },
  "auth.email": {
    en: "Email",
    es: "Correo Electrónico",
    nl: "E-mail",
  },
  "auth.password": {
    en: "Password",
    es: "Contraseña",
    nl: "Wachtwoord",
  },
  "auth.confirmPassword": {
    en: "Confirm Password",
    es: "Confirmar Contraseña",
    nl: "Wachtwoord Bevestigen",
  },
  "auth.noAccount": {
    en: "Don't have an account?",
    es: "¿No tienes una cuenta?",
    nl: "Heb je geen account?",
  },
  "auth.hasAccount": {
    en: "Already have an account?",
    es: "¿Ya tienes una cuenta?",
    nl: "Heb je al een account?",
  },
  "auth.or": {
    en: "Or continue with",
    es: "O continúa con",
    nl: "Of ga verder met",
  },
  "auth.signin.description": {
    en: "Sign in to your account to create and manage your pitches",
    es: "Inicia sesión en tu cuenta para crear y gestionar tus pitches",
    nl: "Log in op je account om je pitches te maken en te beheren",
  },
  "auth.signup.description": {
    en: "Create an account to start generating professional pitches",
    es: "Crea una cuenta para empezar a generar pitches profesionales",
    nl: "Maak een account aan om professionele pitches te gaan genereren",
  },
  "auth.error": {
    en: "An error occurred. Please try again.",
    es: "Ocurrió un error. Por favor, inténtalo de nuevo.",
    nl: "Er is een fout opgetreden. Probeer het opnieuw.",
  },
  "auth.invalid": {
    en: "Invalid email or password",
    es: "Correo electrónico o contraseña inválidos",
    nl: "Ongeldige e-mail of wachtwoord",
  },
  "auth.passwordMismatch": {
    en: "Passwords do not match",
    es: "Las contraseñas no coinciden",
    nl: "Wachtwoorden komen niet overeen",
  },
  "auth.registrationFailed": {
    en: "Registration failed. Please try again.",
    es: "Registro fallido. Por favor, inténtalo de nuevo.",
    nl: "Registratie mislukt. Probeer het opnieuw.",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default language is Spanish
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
