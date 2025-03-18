import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="gradient-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Nuestro Portafolio
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Explore algunos de nuestros proyectos más destacados y descubra cómo hemos ayudado a nuestros clientes a
                alcanzar sus objetivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-timberwolf/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Project 1 */}
            <Card className="overflow-hidden border-sage/40">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=800"
                  width={800}
                  height={450}
                  alt="Project 1"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Plataforma E-commerce</CardTitle>
                <CardDescription>
                  Desarrollo de una plataforma de comercio electrónico completa para una empresa de retail.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="font-semibold">El Desafío</h3>
                  <p className="text-sm text-muted-foreground">
                    El cliente necesitaba una plataforma de comercio electrónico escalable y fácil de usar que pudiera
                    manejar un gran catálogo de productos y proporcionar una experiencia de compra fluida.
                  </p>
                  <h3 className="font-semibold">La Solución</h3>
                  <p className="text-sm text-muted-foreground">
                    Desarrollamos una plataforma personalizada con un diseño atractivo, funcionalidades avanzadas de
                    búsqueda y filtrado, carrito de compras optimizado y un proceso de pago simplificado.
                  </p>
                  <h3 className="font-semibold">Resultados</h3>
                  <p className="text-sm text-muted-foreground">
                    Aumento del 45% en las ventas en línea, reducción del 30% en la tasa de abandono del carrito y
                    mejora significativa en la satisfacción del cliente.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
                    React
                  </span>
                  <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
                    Node.js
                  </span>
                  <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
                    MongoDB
                  </span>
                  <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
                    AWS
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1 border-fern-green text-fern-green hover:bg-timberwolf"
                >
                  <ExternalLink className="h-4 w-4" />
                  Ver proyecto
                </Button>
              </CardFooter>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden border-sage/40">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=800"
                  width={800}
                  height={450}
                  alt="Project 2"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Sistema de Gestión Empresarial</CardTitle>
                <CardDescription>
                  Desarrollo de un sistema integral de gestión para una empresa de servicios financieros.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="font-semibold">El Desafío</h3>
                  <p className="text-sm text-muted-foreground">
                    El cliente necesitaba un sistema centralizado para gestionar clientes, proyectos, facturación y
                    recursos humanos, reemplazando múltiples sistemas desconectados.
                  </p>
                  <h3 className="font-semibold">La Solución</h3>
                  <p className="text-sm text-muted-foreground">
                    Desarrollamos un sistema personalizado con módulos integrados para cada área de negocio, con
                    informes en tiempo real y un panel de control intuitivo para la toma de decisiones.
                  </p>
                  <h3 className="font-semibold">Resultados</h3>
                  <p className="text-sm text-muted-foreground">
                    Reducción del 60% en el tiempo dedicado a tareas administrativas, mejora del 40% en la precisión de
                    los informes y aumento del 25% en la productividad general.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
                    Angular
                  </span>
                  <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
                    .NET Core
                  </span>
                  <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
                    SQL Server
                  </span>
                  <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
                    Azure
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1 border-fern-green text-fern-green hover:bg-timberwolf"
                >
                  <ExternalLink className="h-4 w-4" />
                  Ver proyecto
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl md:text-5xl">
                ¿Listo para crear su próximo proyecto?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contáctenos hoy mismo para discutir sus ideas y descubrir cómo podemos ayudarle a convertirlas en
                realidad.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" className="bg-hunter-green text-timberwolf hover:bg-hunter-green/90">
                  Iniciar un proyecto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-fern-green text-fern-green hover:bg-timberwolf">
                  Explorar servicios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

