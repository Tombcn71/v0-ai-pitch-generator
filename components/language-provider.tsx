"use client"

import { createContext, useContext, type ReactNode } from "react"

// Simplified translations object with only Spanish
const translations = {
  // Navigation
  "nav.home": "Inicio",
  "nav.dashboard": "Panel",
  "nav.contact": "Contactar Coach",
  "nav.logout": "Cerrar Sesión",
  "nav.loggingOut": "Cerrando sesión...",
  "nav.menu": "Menú",
  // Pitch Canvas
  "pitch.title": "Generador de Pitch Canvas",
  "pitch.subtitle": "Crea tu pitch perfecto con IA",
  "pitch.problem": "Problema",
  "pitch.problem.placeholder": "¿Qué problema estás resolviendo?",
  "pitch.solution": "Solución",
  "pitch.solution.placeholder": "¿Cómo funciona tu solución?",
  "pitch.uniqueness": "Singularidad",
  "pitch.uniqueness.placeholder": "¿Qué hace única a tu solución?",
  "pitch.market": "Mercado Objetivo",
  "pitch.market.placeholder": "¿Quién es tu público objetivo?",
  "pitch.traction": "Tracción",
  "pitch.traction.placeholder": "¿Qué tracción tienes hasta ahora?",
  "pitch.business": "Modelo de Negocio",
  "pitch.business.placeholder": "¿Cómo generarás ingresos?",
  "pitch.team": "Equipo",
  "pitch.team.placeholder": "¿Quién forma parte de tu equipo?",
  "pitch.ask": "La Petición",
  "pitch.ask.placeholder": "¿Qué estás pidiendo?",
  "pitch.generate": "Generar Pitch",
  "pitch.generating": "Generando...",
  "pitch.canvas": "Canvas de Pitch",
  "pitch.result": "Pitch Generado",
  "pitch.canvas.title": "Canvas de Pitch de David Beckett",
  "pitch.canvas.description": "Completa los detalles a continuación para generar tu pitch de 3 minutos",
  "pitch.result.title": "Tu Pitch Generado",
  "pitch.result.description": "Aquí está tu pitch de 3 minutos generado por IA basado en el método de David Beckett",
  "pitch.edit": "Editar Canvas",
  "pitch.copy": "Copiar Texto",
  "pitch.print": "Imprimir",
  "pitch.download": "Descargar",
  "pitch.copied": "Copiado al portapapeles",
  "pitch.copied.description": "Tu pitch ha sido copiado al portapapeles",
  "pitch.your3min": "Tu Pitch de 3 Minutos",
  "pitch.based": "Basado en el Canvas de Pitch de David Beckett",
  // Contact
  "contact.title": "Contactar Coach de Pitch",
  "contact.subtitle": "Obtén coaching profesional de Martina Guzman",
  "contact.name": "Nombre",
  "contact.email": "Correo Electrónico",
  "contact.message": "Mensaje",
  "contact.submit": "Enviar",
  "contact.sending": "Enviando...",
  "contact.success": "¡Mensaje enviado con éxito!",
  "contact.success.description": "Martina Guzman te contactará pronto.",
  "contact.coach.title": "Conoce a Tu Coach",
  "contact.coach.description": "Coaching profesional de pitch de una experta en la industria",
  "contact.coach.bio":
    "Coach Profesional de Pitch con más de 10 años de experiencia ayudando a emprendedores y ejecutivos a realizar presentaciones convincentes. Especializada en la metodología de canvas de pitch de David Beckett.",
  "contact.form.title": "Contactar a Martina Guzman",
  "contact.form.description": "Obtén coaching profesional para perfeccionar la entrega y presentación de tu pitch",
  "contact.services": "Servicios de Coaching",
  "contact.basic.title": "Coaching Básico",
  "contact.basic.description": "Sesión individual de revisión de pitch",
  "contact.basic.feature1": "Sesión virtual de 60 minutos",
  "contact.basic.feature2": "Retroalimentación detallada sobre tu pitch",
  "contact.basic.feature3": "Consejos y técnicas de presentación",
  "contact.premium.title": "Coaching Premium",
  "contact.premium.description": "Preparación integral del pitch",
  "contact.premium.feature1": "3 sesiones de coaching (90 minutos cada una)",
  "contact.premium.feature2": "Refinamiento del contenido del pitch",
  "contact.premium.feature3": "Coaching de lenguaje corporal y voz",
  "contact.premium.feature4": "Grabación y análisis de video",
  // Video Course
  "course.title": "Curso en Video",
  "course.name": "El Curso Completo de Dominio del Pitch",
  "course.description":
    "Aprende el arte del pitch directamente de Martina Guzman con este curso completo en video. Domina todos los aspectos de la creación y presentación de pitches convincentes que conquisten a inversores, clientes y partes interesadas.",
  "course.feature1": "Más de 10 horas de contenido profesional en video",
  "course.feature2": "Recursos y plantillas descargables",
  "course.feature3": "Acceso de por vida y actualizaciones",
  "course.feature4": "Acceso a comunidad privada",
  "course.reviews": "4.9/5 (más de 120 reseñas)",
  "course.purchase": "Comprar Curso",
  "course.preview": "Vista previa: Dominando la Presentación de tu Pitch",
  // Home Page
  "home.hero.title": "Crea Pitches Perfectos con IA",
  "home.hero.subtitle":
    "Genera pitches profesionales de 3 minutos basados en el método de canvas de pitch de David Beckett. Generación de pitch gratuita con coaching profesional opcional.",
  "home.getstarted": "Comenzar",
  "home.contactcoach": "Contactar Coach",
  "home.feature1.title": "El Mejor Método de Pitch de 3 Minutos",
  "home.feature1.description":
    "Basado en la probada metodología de canvas de pitch de David Beckett, nuestra IA te ayuda a crear pitches convincentes que captan la atención y generan resultados.",
  "home.feature1.point1": "Define tu problema y solución claramente",
  "home.feature1.point2": "Destaca tu propuesta de valor única",
  "home.feature1.point3": "Estructura tu pitch para máximo impacto",
  "home.feature2.title": "Coaching Profesional",
  "home.feature2.description":
    "Obtén coaching personalizado de Martina Guzman para perfeccionar la entrega y presentación de tu pitch.",
  "home.feature2.point1": "Desarrolla confianza en tu presentación",
  "home.feature2.point2": "Refina tu estilo de presentación",
  "home.feature2.point3": "Obtén retroalimentación experta sobre tu pitch",
  "home.course.title": "Domina el Pitching con Nuestro Curso en Video",
  "home.course.description":
    "Aprende a tu propio ritmo con el curso completo en video de Martina Guzman sobre dominio del pitch. Desde fundamentos hasta técnicas avanzadas, este curso cubre todo lo que necesitas para realizar pitches convincentes que conquisten a cualquier audiencia.",
  "home.course.learnmore": "Más Información Sobre el Curso",
  "home.cta.title": "¿Listo para Crear tu Pitch Perfecto?",
  "home.cta.description":
    "Comienza a usar nuestro generador de pitch impulsado por IA hoy y transforma tus ideas en presentaciones convincentes.",
  "home.cta.button": "Comenzar Ahora",
  // Footer
  "footer.copyright": "© 2025 PitchAI. Todos los derechos reservados.",
  "footer.free": "La generación de pitch es gratuita",
  "footer.coaching": "El coaching profesional es un servicio de pago",
  // Auth
  "auth.signin": "Iniciar Sesión",
  "auth.signup": "Registrarse",
  "auth.google": "Continuar con Google",
  "auth.email": "Correo Electrónico",
  "auth.password": "Contraseña",
  "auth.confirmPassword": "Confirmar Contraseña",
  "auth.noAccount": "¿No tienes una cuenta?",
  "auth.hasAccount": "¿Ya tienes una cuenta?",
  "auth.or": "O continúa con",
  "auth.signin.description": "Inicia sesión en tu cuenta para crear y gestionar tus pitches",
  "auth.signup.description": "Crea una cuenta para empezar a generar pitches profesionales",
  "auth.error": "Ocurrió un error. Por favor, inténtalo de nuevo.",
  "auth.invalid": "Correo electrónico o contraseña inválidos",
  "auth.passwordMismatch": "Las contraseñas no coinciden",
  "auth.registrationFailed": "Registro fallido. Por favor, inténtalo de nuevo.",
}

interface LanguageContextType {
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Simplified t function that only returns Spanish translations
  const t = (key: string): string => {
    return translations[key] || key
  }

  return <LanguageContext.Provider value={{ t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
