import {
  Calendar,
  User,
  Columns,
  PenTool,
  BarChartHorizontal,
  Mail,
  Bookmark,
  FileText,
} from "lucide-react";
import Image from "next/image";
import DrizzleComments from "../../../components/DrizzleComments";

export default function DrizzleBlog() {
  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8 p-4">
      <div className="flex flex-col w-full md:w-2/3">
        <header className="w-full py-8">
          <h1 className="text-4xl font-bold tracking-tighter text-brunswick-green mb-4">
            Drizzle ORM: ORM moderno para TypeScript
          </h1>
          <div className="flex items-center text-sm text-muted-foreground mb-6">
            <User className="h-4 w-4 mr-1" />
            <span className="mr-3">Por Adrián Jurado</span>
            <span className="mr-3">|</span>
            <Calendar className="h-4 w-4 mr-1" />
            <span>27 de abril, 2025</span>
          </div>
          <div className="w-full rounded-lg mb-6 overflow-hidden">
            <Image
              src="/images/drizzle/drizzle-logo.png"
              alt="Drizzle ORM Logo"
              width={400}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </header>

        <section className="w-full mb-8">
          <p className="text-lg text-muted-foreground mb-4">
            Drizzle ORM es una solución moderna y ligera para la gestión de
            bases de datos en aplicaciones TypeScript y JavaScript. Su enfoque
            declarativo y tipado lo convierte en una excelente opción para
            proyectos que buscan seguridad, rendimiento y facilidad de uso.
          </p>
          <p className="text-muted-foreground">
            Con Drizzle ORM puedes definir tus esquemas de base de datos
            directamente en código, aprovechar migraciones automáticas y
            disfrutar de una integración perfecta con el ecosistema de
            TypeScript.
          </p>
        </section>

        <section className="w-full mb-8">
          <h2 className="text-2xl font-bold text-brunswick-green mb-4">
            Video Tutorial: Drizzle ORM
          </h2>
          <div className="w-full overflow-hidden rounded-xl border border-timberwolf/50 shadow-md">
            <div className="aspect-video relative w-full h-full">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/G5J_PMzcNss"
                title="Video Tutorial de Drizzle ORM"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="w-full mb-8">
          <h2 className="text-2xl font-bold text-brunswick-green mb-4">
            ¿Por qué elegir Drizzle ORM?
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-timberwolf/20 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <PenTool className="h-6 w-6 text-brunswick-green mr-2" />
                <h3 className="font-medium text-brunswick-green text-xl">
                  Tipado Estricto
                </h3>
              </div>
              <p className="text-muted-foreground">
                Aprovecha el poder de TypeScript para tener consultas y esquemas
                100% tipados.
              </p>
            </div>
            <div className="bg-timberwolf/20 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Columns className="h-6 w-6 text-brunswick-green mr-2" />
                <h3 className="font-medium text-brunswick-green text-xl">
                  Migraciones automáticas
                </h3>
              </div>
              <p className="text-muted-foreground">
                Genera y ejecuta migraciones de manera sencilla y segura desde
                tu código.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full mb-8">
          <h2 className="text-2xl font-bold text-brunswick-green mb-4">
            Ejemplo de uso
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <div className="bg-timberwolf/30 rounded-lg w-24 h-24 flex items-center justify-center">
                <FileText className="h-12 w-12 text-brunswick-green" />
              </div>
              <div>
                <h3 className="font-medium text-brunswick-green text-xl mb-1">
                  Definición de tablas en código
                </h3>
                <p className="text-muted-foreground">
                  Define tus tablas y columnas usando sintaxis declarativa y
                  aprovecha el tipado de TypeScript.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-timberwolf/30 rounded-lg w-24 h-24 flex items-center justify-center">
                <BarChartHorizontal className="h-12 w-12 text-brunswick-green" />
              </div>
              <div>
                <h3 className="font-medium text-brunswick-green text-xl mb-1">
                  Consultas seguras y eficientes
                </h3>
                <p className="text-muted-foreground">
                  Realiza consultas SQL de forma segura, evitando errores
                  comunes y mejorando la productividad.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-6 bg-hunter-green/10 rounded-lg px-6 mb-8">
          <h2 className="text-2xl font-bold text-brunswick-green mb-4">
            ¿Listo para probar Drizzle ORM?
          </h2>
          <p className="text-muted-foreground mb-6">
            Drizzle ORM es ideal para desarrolladores que buscan un ORM moderno,
            ligero y totalmente integrado con TypeScript.
          </p>
          <a
            href="https://orm.drizzle.team/"
            className="inline-flex items-center bg-hunter-green text-timberwolf px-4 py-2 rounded-md hover:bg-hunter-green/90 transition-colors"
          >
            <PenTool className="h-4 w-4 mr-2" />
            Documentación Oficial
          </a>
        </section>

        <DrizzleComments />
      </div>
      <div className="w-full md:w-1/3 flex flex-col gap-6 pt-8">
        <div className="bg-timberwolf/20 p-4 rounded-lg">
          <h3 className="font-medium text-brunswick-green text-xl mb-3 flex items-center">
            <User className="h-5 w-5 mr-2" />
            Sobre el Autor
          </h3>
          <div className="flex items-center mb-3">
            <div className="w-16 h-16 rounded-full mr-3 bg-timberwolf/30 flex items-center justify-center">
              <User className="h-8 w-8 text-brunswick-green" />
            </div>
            <div>
              <p className="font-medium text-brunswick-green">Zhu Daniel</p>
              <p className="text-sm text-muted-foreground">
                Desarrollador de Software
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Apasionado por el desarrollo web y las tecnologías modernas de
            JavaScript y TypeScript.
          </p>
        </div>
        <div className="border-t border-timberwolf/30 pt-4">
          <h3 className="font-medium text-brunswick-green text-xl mb-3 flex items-center">
            <Bookmark className="h-5 w-5 mr-2" />
            Artículos Relacionados
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-14 h-14 bg-brunswick-green/20 rounded flex items-center justify-center">
                <FileText className="h-6 w-6 text-brunswick-green" />
              </div>
              <div>
                <h4 className="font-medium text-brunswick-green text-sm hover:underline">
                  <a href="/blog/lucidChart">
                    Lucid Chart: Una Poderosa Herramienta de Diagramación
                  </a>
                </h4>
                <p className="text-xs text-muted-foreground">
                  18 de abril, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-hunter-green/10 p-4 rounded-lg">
          <h3 className="font-medium text-brunswick-green text-xl mb-3 flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            Suscríbete
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            Recibe las últimas noticias sobre herramientas de desarrollo y
            productividad.
          </p>
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="w-full p-2 border border-timberwolf/50 rounded-md mb-2"
          />
          <button className="w-full bg-brunswick-green text-white p-2 rounded-md hover:bg-brunswick-green/90 transition-colors flex items-center justify-center">
            <Mail className="h-4 w-4 mr-2" />
            Suscribirse
          </button>
        </div>
      </div>
    </div>
  );
}
