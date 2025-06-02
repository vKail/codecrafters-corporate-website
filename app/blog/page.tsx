import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "LucidChart: Una Poderosa Herramienta de Diagramación",
      excerpt:
        "Lucid Chart es una herramienta de diagramación en línea que permite a los usuarios crear diagramas de flujo, organigramas y otros tipos de gráficos de manera colaborativa.",
      image: "./images/lucidchart.webp",
      date: "18 de abril, 2025",
      readTime: "4 min de lectura",
      author: "Adrián Jurado",
      category: "Tecnología",
      slug: "lucidChart",
    },
    {
      id: 2,
      title: "Drizzle ORM: ORM moderno para TypeScript",
      excerpt:
        "Drizzle ORM es una solución moderna y ligera para la gestión de bases de datos en aplicaciones TypeScript y JavaScript. Descubre cómo aprovechar su tipado estricto y migraciones automáticas.",
      image: "./images/drizzle/drizzle-logo.png",
      date: "27 de abril, 2025",
      readTime: "5 min de lectura",
      author: "Zhu Daniel",
      category: "Tecnología",
      slug: "drizzle",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <div className="space-y-2">
              <h1 className="gradient-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Nuestro Blog
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Descubra las últimas tendencias, consejos y mejores prácticas en
                tecnología y negocios.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="flex flex-col overflow-hidden border-sage/40 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`${post.image}`}
                    width={435}
                    height={200}
                    alt={post.title}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 rounded-full bg-sage px-2 py-1 text-xs font-medium text-hunter-green">
                    {post.category}
                  </div>
                </div>
                <CardHeader className="flex-1 pb-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2 mb-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {post.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Link href={`/blog/${post.slug}`} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-fern-green text-fern-green hover:bg-timberwolf"
                    >
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

      <section className="w-full py-10 md:py-16 lg:py-20 bg-hunter-green/10 mt-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter text-brunswick-green sm:text-3xl md:text-4xl">
                Suscríbase a nuestro boletín
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-lg lg:text-base xl:text-lg">
                Reciba las últimas noticias, artículos y recursos directamente
                en su bandeja de entrada.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-2 mt-4">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Correo electrónico"
                  type="email"
                  required
                />
                <Button
                  type="submit"
                  className="bg-hunter-green text-timberwolf hover:bg-hunter-green/90"
                >
                  Suscribirse
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                Respetamos su privacidad. Puede darse de baja en cualquier
                momento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
