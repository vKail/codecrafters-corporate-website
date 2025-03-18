import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Lightbulb, Shield, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="gradient-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Soluciones innovadoras para su negocio
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Transformamos ideas en resultados. Nuestro equipo de expertos está listo para ayudarle a alcanzar sus
                  objetivos empresariales.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="bg-hunter-green text-timberwolf hover:bg-hunter-green/90">
                    Contáctenos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="border-fern-green text-fern-green hover:bg-timberwolf">
                    Nuestros servicios
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Hero Image"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full bg-timberwolf/50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl md:text-5xl">
                Nuestros Servicios
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ofrecemos una amplia gama de servicios diseñados para ayudar a su empresa a crecer y prosperar.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <Card className="border-sage/40">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Zap className="h-8 w-8 text-fern-green" />
                <CardTitle className="text-xl">Desarrollo Web</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Creamos sitios web modernos, responsivos y optimizados para buscadores que representan perfectamente
                  su marca.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-sage/40">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Lightbulb className="h-8 w-8 text-sage" />
                <CardTitle className="text-xl">Consultoría</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Asesoramiento estratégico para optimizar sus procesos de negocio y maximizar su rendimiento.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-sage/40">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Shield className="h-8 w-8 text-hunter-green" />
                <CardTitle className="text-xl">Ciberseguridad</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Proteja su negocio con nuestras soluciones de seguridad informática de vanguardia.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-fern-green text-fern-green hover:bg-timberwolf">
                Ver todos los servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Why Choose Us"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl md:text-5xl">
                  ¿Por qué elegirnos?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nos distinguimos por nuestro compromiso con la excelencia y la satisfacción del cliente.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-sage" />
                  <div>
                    <h3 className="font-bold">Experiencia comprobada</h3>
                    <p className="text-muted-foreground">
                      Más de 10 años de experiencia en el sector, con cientos de proyectos exitosos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-sage" />
                  <div>
                    <h3 className="font-bold">Equipo de expertos</h3>
                    <p className="text-muted-foreground">
                      Profesionales altamente cualificados y especializados en diversas áreas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-sage" />
                  <div>
                    <h3 className="font-bold">Soluciones personalizadas</h3>
                    <p className="text-muted-foreground">
                      Adaptamos nuestros servicios a las necesidades específicas de cada cliente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-sage" />
                  <div>
                    <h3 className="font-bold">Atención al cliente</h3>
                    <p className="text-muted-foreground">
                      Soporte continuo y comunicación transparente durante todo el proceso.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button size="lg" className="bg-hunter-green text-timberwolf hover:bg-hunter-green/90">
                    Conozca más sobre nosotros
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
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
                ¿Listo para transformar su negocio?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contáctenos hoy mismo para una consulta gratuita y descubra cómo podemos ayudarle a alcanzar sus
                objetivos.
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

