import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Clock, Target, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="gradient-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Sobre Nosotros
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Somos una empresa comprometida con la excelencia y la innovación, dedicada a proporcionar soluciones
                  de alta calidad a nuestros clientes.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="About Us"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full bg-timberwolf/50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Our Story"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl md:text-5xl">
                  Nuestra Historia
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fundada en 2010, nuestra empresa comenzó con una visión clara: proporcionar soluciones innovadoras que
                  ayuden a las empresas a prosperar en un mundo digital en constante evolución.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A lo largo de los años, hemos crecido y evolucionado, pero nuestro compromiso con la excelencia y la
                  satisfacción del cliente sigue siendo el núcleo de todo lo que hacemos.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hoy, somos un equipo diverso de profesionales apasionados, dedicados a ofrecer soluciones
                  personalizadas que impulsan el éxito de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl md:text-5xl">
                Nuestros Valores
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Los principios que guían nuestro trabajo y nuestras relaciones con los clientes.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 text-center">
              <Users className="h-12 w-12 text-hunter-green" />
              <h3 className="text-xl font-bold">Colaboración</h3>
              <p className="text-muted-foreground">
                Trabajamos estrechamente con nuestros clientes para entender sus necesidades y ofrecer soluciones
                personalizadas.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <Award className="h-12 w-12 text-fern-green" />
              <h3 className="text-xl font-bold">Excelencia</h3>
              <p className="text-muted-foreground">
                Nos esforzamos por alcanzar los más altos estándares en todo lo que hacemos.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <Target className="h-12 w-12 text-sage" />
              <h3 className="text-xl font-bold">Innovación</h3>
              <p className="text-muted-foreground">
                Constantemente buscamos nuevas formas de mejorar y ofrecer soluciones más efectivas.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <Clock className="h-12 w-12 text-brunswick-green" />
              <h3 className="text-xl font-bold">Compromiso</h3>
              <p className="text-muted-foreground">
                Nos comprometemos a cumplir con los plazos y a superar las expectativas de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="w-full bg-hunter-green/10 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl">Nuestra Misión</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Proporcionar soluciones innovadoras y de alta calidad que ayuden a nuestros clientes a alcanzar sus
                  objetivos empresariales, mientras fomentamos un ambiente de trabajo colaborativo y de crecimiento para
                  nuestro equipo.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl">Nuestra Visión</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ser reconocidos como líderes en nuestro sector, conocidos por nuestra excelencia, innovación y
                  compromiso con el éxito de nuestros clientes, contribuyendo positivamente a la sociedad y al medio
                  ambiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl md:text-5xl">
                ¿Quiere conocer más sobre nosotros?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contáctenos hoy mismo para programar una reunión o visitar nuestras oficinas.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" className="bg-hunter-green text-timberwolf hover:bg-hunter-green/90">
                  Contáctenos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/team">
                <Button variant="outline" size="lg" className="border-fern-green text-fern-green hover:bg-timberwolf">
                  Conozca a nuestro equipo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

