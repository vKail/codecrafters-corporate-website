import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Database, Globe, Lightbulb, LineChart, Shield, Smartphone, Zap } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="gradient-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Nuestros Servicios
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Ofrecemos una amplia gama de servicios diseñados para ayudar a su empresa a crecer y prosperar en el
                entorno digital actual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-timberwolf/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-sage/40">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Globe className="h-8 w-8 text-hunter-green" />
                <CardTitle className="text-xl">Desarrollo Web</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="min-h-[100px]">
                  Creamos sitios web modernos, responsivos y optimizados para buscadores que representan perfectamente
                  su marca y atraen a su público objetivo.
                </CardDescription>
                <Link href="/contact" className="mt-4 inline-flex items-center text-sm font-medium text-fern-green">
                  Saber más
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-sage/40">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Smartphone className="h-8 w-8 text-fern-green" />
                <CardTitle className="text-xl">Desarrollo de Aplicaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="min-h-[100px]">
                  Desarrollamos aplicaciones móviles y de escritorio personalizadas que satisfacen las necesidades
                  específicas de su negocio y mejoran la experiencia del usuario.
                </CardDescription>
                <Link href="/contact" className="mt-4 inline-flex items-center text-sm font-medium text-fern-green">
                  Saber más
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-sage/40">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Code className="h-8 w-8 text-sage" />
                <CardTitle className="text-xl">Desarrollo de Software</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="min-h-[100px]">
                  Creamos soluciones de software a medida que automatizan procesos, mejoran la eficiencia y resuelven
                  problemas específicos de su negocio.
                </CardDescription>
                <Link href="/contact" className="mt-4 inline-flex items-center text-sm font-medium text-fern-green">
                  Saber más
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-sage/40">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Database className="h-8 w-8 text-brunswick-green" />
                <CardTitle className="text-xl">Gestión de Datos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="min-h-[100px]">
                  Implementamos soluciones de gestión de datos que le permiten almacenar, acceder y analizar su
                  información de manera eficiente y segura.
                </CardDescription>
                <Link href="/contact" className="mt-4 inline-flex items-center text-sm font-medium text-fern-green">
                  Saber más
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-sage/40">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Shield className="h-8 w-8 text-hunter-green" />
                <CardTitle className="text-xl">Ciberseguridad</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="min-h-[100px]">
                  Proteja su negocio con nuestras soluciones de seguridad informática de vanguardia, diseñadas para
                  defender sus activos digitales contra amenazas cibernéticas.
                </CardDescription>
                <Link href="/contact" className="mt-4 inline-flex items-center text-sm font-medium text-fern-green">
                  Saber más
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-sage/40">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <LineChart className="h-8 w-8 text-fern-green" />
                <CardTitle className="text-xl">Análisis de Datos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="min-h-[100px]">
                  Transformamos sus datos en información valiosa que le ayuda a tomar decisiones informadas y a
                  identificar oportunidades de crecimiento.
                </CardDescription>
                <Link href="/contact" className="mt-4 inline-flex items-center text-sm font-medium text-fern-green">
                  Saber más
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-sage/40">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Zap className="h-8 w-8 text-sage" />
                <CardTitle className="text-xl">Optimización de Rendimiento</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="min-h-[100px]">
                  Mejoramos el rendimiento de sus aplicaciones y sitios web para garantizar tiempos de carga rápidos y
                  una experiencia de usuario óptima.
                </CardDescription>
                <Link href="/contact" className="mt-4 inline-flex items-center text-sm font-medium text-fern-green">
                  Saber más
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-sage/40">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Lightbulb className="h-8 w-8 text-brunswick-green" />
                <CardTitle className="text-xl">Consultoría Tecnológica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="min-h-[100px]">
                  Asesoramiento estratégico para optimizar sus procesos de negocio, seleccionar las tecnologías
                  adecuadas y maximizar su rendimiento.
                </CardDescription>
                <Link href="/contact" className="mt-4 inline-flex items-center text-sm font-medium text-fern-green">
                  Saber más
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl md:text-5xl">
                Nuestro Proceso
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Un enfoque estructurado para garantizar resultados excepcionales en cada proyecto.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-hunter-green text-timberwolf">
                1
              </div>
              <h3 className="text-xl font-bold">Descubrimiento</h3>
              <p className="text-muted-foreground">Entendemos sus necesidades, objetivos y desafíos específicos.</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-hunter-green text-timberwolf">
                2
              </div>
              <h3 className="text-xl font-bold">Planificación</h3>
              <p className="text-muted-foreground">Desarrollamos una estrategia detallada y un plan de acción.</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-hunter-green text-timberwolf">
                3
              </div>
              <h3 className="text-xl font-bold">Ejecución</h3>
              <p className="text-muted-foreground">
                Implementamos la solución con un enfoque meticuloso y profesional.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-hunter-green text-timberwolf">
                4
              </div>
              <h3 className="text-xl font-bold">Evaluación</h3>
              <p className="text-muted-foreground">
                Medimos los resultados y realizamos ajustes para optimizar el rendimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-brunswick-green to-fern-green text-timberwolf py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Listo para impulsar su negocio?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contáctenos hoy mismo para una consulta gratuita y descubra cómo nuestros servicios pueden ayudarle a
                alcanzar sus objetivos.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" className="bg-sage text-brunswick-green hover:bg-sage/90">
                  Solicitar consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

