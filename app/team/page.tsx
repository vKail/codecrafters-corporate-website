import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Facebook, Github, Linkedin, Twitter } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Joshua Herrera",
      position: "Jefe de Proyecto",
      bio: "Ing. en Software en proceso, encargado de dirigir y liderar un equipo y preparar soluciones tecnológicas.",
      image: "https://avatars.githubusercontent.com/u/104308498?v=4",
      social: {
        linkedin: "https://www.linkedin.com/in/joshua-herrera-5b9303277/",
        github: "https://github.com/Gokochas10",
      },
    },
    {
      id: 2,
      name: " Emilia Galarza",
      position: "Desarrolladora de Software",
      bio: "Estudiante de Ingeniería en Software, con experiencia en desarrollo de aplicaciones web y móviles.",
      image: "https://avatars.githubusercontent.com/u/94653648?v=4",
      social: {
        linkedin: "https://www.linkedin.com/in/emilia-galarza-b6b13a226/",
        github: "https://github.com/Emi1213",
      },
    },
    {
      id: 3,
      name: "José Camino",
      position: "Desarrollador Full-Stack",
      bio: "Estudiante de Ingeniería en Software, con experiencia en desarrollo de aplicaciones web, con basta experiencia con el desarrollo backend, además de contar con varias habilidades blandas.",
      image: "images/1735245667615.png",
      social: {
        linkedin: "https://www.linkedin.com/in/sebastian-camino-73b070168/",
        github: "https://github.com/scaminom",
      },
    },
    {
      id: 4,
      name: "Josue Moreira",
      position: "Desarrollador de Software",
      bio: "Estudiante de ingenieria en software con conocimiento en el área de la seguridad informática.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        github: "https://github.com/JMSebas",
      },
    },
    {
      id: 5,
      name: "Daniel Zhu",
      position: "Desarrollador Full-Stack",
      bio: "Estudiante de ingenieria en software dedicado a brindar un servicio como full-stack con experiencia en múltiples lenguajes y frameworks. Su pasión por el código limpio y las buenas prácticas se refleja en cada proyecto en el que participa.",
      image: "https://avatars.githubusercontent.com/u/107374763?v=4",
      social: {
        linkedin: "https://www.linkedin.com/in/chu-er/",
        github: "https://github.com/Chu2409",
      },
    },
    {
      id: 6,
      name: "Adrián Jurado",
      position: "Desarrollador de Software",
      bio: "Estudiante de Ingeniería en Software, con experiencia en desarrollo de aplicaciones web y móviles.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "https://www.linkedin.com/in/adrian-jurado-510613352/",
        github: "https://github.com/vKail",
      },
    },

  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="gradient-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Nuestro Equipo
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Conozca a los profesionales apasionados que hacen posible nuestro éxito y el de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-timberwolf/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden border-sage/40">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    width={400}
                    height={400}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex space-x-2">
                    {member.social.linkedin && (
                      <Link href={member.social.linkedin} className="text-muted-foreground hover:text-foreground">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    )}
                    {member.social.github && (
                      <Link href={member.social.github} className="text-muted-foreground hover:text-foreground">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Join Our Team"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl">
                  Únase a Nuestro Equipo
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos siempre en busca de profesionales talentosos y apasionados que quieran formar parte de nuestra
                  empresa y contribuir a nuestro crecimiento y éxito.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos un ambiente de trabajo colaborativo, oportunidades de desarrollo profesional y proyectos
                  desafiantes que le permitirán crecer y aprender constantemente.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Beneficios</h3>
                <ul className="list-disc space-y-2 pl-4 text-muted-foreground">
                  <li>Horario flexible y posibilidad de trabajo remoto</li>
                  <li>Oportunidades de formación y desarrollo profesional</li>
                  <li>Ambiente de trabajo colaborativo y dinámico</li>
                  <li>Proyectos desafiantes e innovadores</li>
                  <li>Paquete de beneficios competitivo</li>
                </ul>
              </div>
              <div>
                <Link href="/contact">
                  <Button size="lg" className="bg-hunter-green text-timberwolf hover:bg-hunter-green/90">
                    Ver oportunidades actuales
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
                ¿Listo para trabajar con nosotros?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contáctenos hoy mismo para discutir cómo podemos ayudarle a alcanzar sus objetivos empresariales.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" className="bg-sage text-brunswick-green hover:bg-sage/90">
                  Contáctenos
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

