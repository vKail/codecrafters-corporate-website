import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Target, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="space-y-3 max-w-[700px] mx-auto">
                <h1 className="gradient-heading text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl lg:text-6xl">
                  Sobre Nosotros
                </h1>
                <p className="text-muted-foreground md:text-xl text-justify">
                  En <strong>Codecrafters</strong>, combinamos{" "}
                  <strong>tecnología</strong> e<strong> innovación</strong> para
                  crear soluciones digitales de alto impacto. Nuestro equipo de
                  expertos desarrolla{" "}
                  <strong>aplicaciones web y móviles</strong>, implementa{" "}
                  <strong>ciberseguridad</strong> y optimiza el
                  <strong> análisis de datos</strong>, siempre con un enfoque en
                  <strong> calidad, eficiencia y escalabilidad</strong>.
                </p>
                <p className="text-muted-foreground md:text-xl text-justify">
                  Nos caracteriza la <strong>excelencia</strong>, el{" "}
                  <strong>trabajo en equipo</strong>y la búsqueda constante de
                  mejoras. Personalizamos cada solución para adaptarnos a las
                  <strong> necesidades de nuestros clientes</strong>, asegurando
                  un impacto real en su negocio.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="images/about/CCI-tagline_logo-1.png"
                width={500}
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
                src="images/about/image_h.png"
                width={550}
                height={550}
                alt="Our Story"
                className="rounded-lg object-cover"
              />
            </div>

            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="space-y-3 max-w-[700px] mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl md:text-5xl text-center">
                  Nuestra Historia
                </h2>
                <p className="text-muted-foreground md:text-xl lg:text-lg xl:text-xl text-justify">
                  <strong>Codecrafters</strong> nació del entusiasmo de un grupo
                  de estudiantes apasionados por la <strong>tecnología</strong>{" "}
                  y la <strong>innovación</strong>. Con el deseo de transformar
                  ideas en soluciones digitales
                  <strong> escalables</strong> y <strong>eficientes</strong>, nos
                  embarcamos en el desafío de crear{" "}
                  <strong>software de calidad</strong> para empresas y
                  emprendedores.
                </p>
                <p className="text-muted-foreground md:text-xl lg:text-lg xl:text-xl text-justify">
                  Lo que comenzó como un <strong>proyecto universitario</strong>
                   pronto se convirtió en un equipo multidisciplinario que ofrece
                  <strong> desarrollo web</strong>,
                  <strong> aplicaciones móviles</strong>,
                  <strong> software a medida</strong>,
                  <strong> análisis de datos</strong> y
                  <strong> ciberseguridad</strong>. Nos impulsan la
                  <strong> creatividad</strong>, la <strong>excelencia</strong> y
                  el compromiso con la
                  <strong> transformación digital</strong> de nuestros clientes.
                </p>
                <p className="text-muted-foreground md:text-xl lg:text-lg xl:text-xl text-justify">
                  Hoy, seguimos evolucionando con las{" "}
                  <strong>últimas tecnologías</strong> y
                  <strong> metodologías ágiles</strong>, con el objetivo de{" "}
                  <strong>crear experiencias digitales impactantes</strong> y
                  ayudar a nuestros clientes a alcanzar su{" "}
                  <strong>máximo potencial</strong> en la era digital.
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
                Los principios que guían nuestro trabajo y nuestras relaciones
                con los clientes.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 text-center">
              <Users className="h-12 w-12 text-hunter-green" />
              <h3 className="text-xl font-bold">Colaboración</h3>
              <p className="text-muted-foreground">
                Trabajamos estrechamente con nuestros clientes para entender sus
                necesidades y ofrecer soluciones personalizadas.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <Award className="h-12 w-12 text-fern-green" />
              <h3 className="text-xl font-bold">Excelencia</h3>
              <p className="text-muted-foreground">
                Nos esforzamos por alcanzar los más altos estándares en todo lo
                que hacemos.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <Target className="h-12 w-12 text-sage" />
              <h3 className="text-xl font-bold">Innovación</h3>
              <p className="text-muted-foreground">
                Constantemente buscamos nuevas formas de mejorar y ofrecer
                soluciones más efectivas.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <Clock className="h-12 w-12 text-brunswick-green" />
              <h3 className="text-xl font-bold">Compromiso</h3>
              <p className="text-muted-foreground">
                Nos comprometemos a cumplir con los plazos y a superar las
                expectativas de nuestros clientes.
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
                <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl">
                  Nuestra Misión
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestra misión es empoderar a empresas y emprendedores con
                  soluciones tecnológicas innovadoras, optimizadas y seguras.
                  Buscamos simplificar procesos, mejorar la eficiencia y crear
                  experiencias digitales impactantes a través de software de
                  alta calidad.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl">
                  Nuestra Visión
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ser una empresa líder en el desarrollo de software y
                  soluciones digitales, reconocida por nuestra capacidad de
                  innovación, calidad y compromiso con la satisfacción del
                  cliente. Aspiramos a expandir nuestro impacto globalmente,
                  impulsando la evolución tecnológica y siendo un referente en
                  el sector de la transformación digital.
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
                Contáctenos hoy mismo para programar una reunión o visitar
                nuestras oficinas.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-hunter-green text-timberwolf hover:bg-hunter-green/90"
                >
                  Contáctenos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/team">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-fern-green text-fern-green hover:bg-timberwolf"
                >
                  Conozca a nuestro equipo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
