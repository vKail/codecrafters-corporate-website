import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tendencias Tecnológicas que Transformarán los Negocios en 2023",
      excerpt:
        "Descubra las tecnologías emergentes que están redefiniendo el panorama empresarial y cómo puede aprovecharlas para impulsar su negocio.",
      date: "15 de junio, 2023",
      readTime: "8 min de lectura",
      author: "Carlos Rodríguez",
      category: "Tecnología",
      slug: "tendencias-tecnologicas-2023",
    },
    {
      id: 2,
      title: "Cómo Implementar una Estrategia de Transformación Digital Exitosa",
      excerpt:
        "Una guía paso a paso para ayudar a las empresas a navegar por el proceso de transformación digital y maximizar sus beneficios.",
      date: "28 de mayo, 2023",
      readTime: "12 min de lectura",
      author: "Ana Martínez",
      category: "Estrategia Digital",
      slug: "estrategia-transformacion-digital",
    },
    {
      id: 3,
      title: "La Importancia de la Ciberseguridad en el Entorno Empresarial Actual",
      excerpt:
        "Explore los riesgos de seguridad cibernética que enfrentan las empresas hoy en día y las mejores prácticas para proteger sus activos digitales.",
      date: "10 de mayo, 2023",
      readTime: "10 min de lectura",
      author: "Miguel Sánchez",
      category: "Ciberseguridad",
      slug: "importancia-ciberseguridad-empresarial",
    },
    {
      id: 4,
      title: "Inteligencia Artificial: Aplicaciones Prácticas para Pequeñas y Medianas Empresas",
      excerpt:
        "Descubra cómo las pequeñas y medianas empresas pueden aprovechar la inteligencia artificial para mejorar sus operaciones y aumentar su competitividad.",
      date: "2 de mayo, 2023",
      readTime: "9 min de lectura",
      author: "Laura Gómez",
      category: "Inteligencia Artificial",
      slug: "ia-aplicaciones-pymes",
    },
    {
      id: 5,
      title: "Optimización del Rendimiento Web: Estrategias para Mejorar la Experiencia del Usuario",
      excerpt:
        "Aprenda técnicas efectivas para optimizar el rendimiento de su sitio web y proporcionar una experiencia de usuario excepcional.",
      date: "20 de abril, 2023",
      readTime: "7 min de lectura",
      author: "David Fernández",
      category: "Desarrollo Web",
      slug: "optimizacion-rendimiento-web",
    },
    {
      id: 6,
      title: "El Futuro del Trabajo: Cómo la Tecnología Está Redefiniendo el Lugar de Trabajo",
      excerpt:
        "Explore cómo las nuevas tecnologías están transformando la forma en que trabajamos y las implicaciones para las empresas y los empleados.",
      date: "5 de abril, 2023",
      readTime: "11 min de lectura",
      author: "Elena Torres",
      category: "Futuro del Trabajo",
      slug: "futuro-trabajo-tecnologia",
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
                Nuestro Blog
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Descubra las últimas tendencias, consejos y mejores prácticas en tecnología y negocios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-timberwolf/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Featured Post"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium text-fern-green">Destacado</span>
                  <span>•</span>
                  <span>15 de junio, 2023</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl">
                  10 Tendencias Tecnológicas que Transformarán los Negocios en 2023
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubra las tecnologías emergentes que están redefiniendo el panorama empresarial y cómo puede
                  aprovecharlas para impulsar su negocio.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Carlos Rodríguez</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">8 min de lectura</span>
                </div>
              </div>
              <div>
                <Link href="/blog/tendencias-tecnologicas-2023">
                  <Button className="bg-hunter-green text-timberwolf hover:bg-hunter-green/90">
                    Leer artículo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden border-sage/40">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=${encodeURIComponent(post.title)}`}
                    width={400}
                    height={200}
                    alt={post.title}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 rounded-full bg-sage px-2 py-1 text-xs font-medium text-hunter-green">
                    {post.category}
                  </div>
                </div>
                <CardHeader className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/${post.slug}`} className="w-full">
                    <Button variant="outline" className="w-full border-fern-green text-fern-green hover:bg-timberwolf">
                      Leer artículo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-hunter-green/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl md:text-5xl">
                Suscríbase a nuestro boletín
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Reciba las últimas noticias, artículos y recursos directamente en su bandeja de entrada.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Correo electrónico"
                  type="email"
                  required
                />
                <Button type="submit" className="bg-hunter-green text-timberwolf hover:bg-hunter-green/90">
                  Suscribirse
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                Respetamos su privacidad. Puede darse de baja en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

