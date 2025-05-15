import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section - No Gradients */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-background">
          {/* Simple Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-muted/20"></div>
            {/* Pattern overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Crea Pitches Perfectos con IA
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Genera pitches profesionales de 3 minutos basados en el método
                  de canvas de pitch de David Beckett. Generación de pitch
                  gratuita con coaching profesional opcional.
                </p>
              </div>
              <div className="space-x-4 mt-6">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Sparkles className="mr-2 h-5 w-5 text-yellow-400" />
                    Comenzar
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contactar Coach
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Divider */}
        <div className="h-px w-full bg-border"></div>

        {/* Features Section - No Gradients */}
        <section className="py-12 md:py-24 bg-background relative">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4 p-6 rounded-xl bg-card border shadow-sm">
                <div className="inline-block p-3 rounded-lg bg-muted mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  El Método best 3 minutes
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Basado en la probada metodología de canvas de pitch de David
                  Beckett, nuestra IA te ayuda a crear pitches convincentes que
                  captan la atención y generan resultados.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Define tu problema y solución claramente</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Destaca tu propuesta de valor única</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Estructura tu pitch para máximo impacto</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 p-6 rounded-xl bg-card border shadow-sm">
                <div className="inline-block p-3 rounded-lg bg-muted mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Coaching Profesional
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Obtén coaching personalizado de Martina Guzman para
                  perfeccionar la entrega y presentación de tu pitch.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Desarrolla confianza en tu presentación</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Refina tu estilo de presentación</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Obtén retroalimentación experta sobre tu pitch</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Video Course Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 space-y-4">
                <div className="inline-block p-3 rounded-lg bg-primary/10 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect
                      x="1"
                      y="5"
                      width="15"
                      height="14"
                      rx="2"
                      ry="2"></rect>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Domina el Pitching con Nuestro Curso en Video
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Aprende a tu propio ritmo con el curso completo en video de
                  Martina Guzman sobre dominio del pitch. Desde fundamentos
                  hasta técnicas avanzadas, este curso cubre todo lo que
                  necesitas para realizar pitches convincentes que conquisten a
                  cualquier audiencia.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      Más de 10 horas de contenido profesional en video
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Recursos y plantillas descargables</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Acceso de por vida y actualizaciones</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button>Más Información Sobre el Curso</Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 bg-card rounded-xl overflow-hidden border shadow-sm">
                <div className="aspect-video relative bg-muted flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary/80">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                  <div className="absolute inset-0 bg-black/5"></div>
                  <p className="absolute bottom-4 left-4 text-sm font-medium">
                    Vista previa: Dominando la Presentación de tu Pitch
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">
                    El Curso Completo de Dominio del Pitch
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1 text-yellow-500">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <span className="text-sm">
                        4.9/5 (más de 120 reseñas)
                      </span>
                    </div>
                    <span className="font-bold">$199</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - No Gradients */}
        <section className="py-12 relative overflow-hidden bg-background">
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                ¿Listo para Crear tu Pitch Perfecto?
              </h2>
              <p className="text-muted-foreground mb-6">
                Comienza a usar nuestro generador de pitch impulsado por IA hoy
                y transforma tus ideas en presentaciones convincentes.
              </p>
              <Link href="/dashboard">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Sparkles className="mr-2 h-5 w-5 text-yellow-400" />
                  Comenzar Ahora
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0 bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 PitchAI. Todos los derechos reservados.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2">
            <p className="text-center text-sm leading-loose text-muted-foreground">
              La generación de pitch es gratuita • El coaching profesional es un
              servicio de pago
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
