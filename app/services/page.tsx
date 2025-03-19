import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Database, Globe, Lightbulb, LineChart, Shield, Smartphone, Zap, CheckCircle, Clock, Award, Users } from "lucide-react"

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
                  su marca y atraen a su público objetivo. Utilizamos tecnologías de vanguardia como React, Next.js y 
                  WordPress para garantizar rendimiento y escalabilidad.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-fern-green font-medium">Tecnologías:</p>
                  <p className="text-xs text-muted-foreground">React, Next.js, WordPress, Tailwind CSS</p>
                </div>
                <Link href="/contact" className="mt-4 inline-flex items-center text-sm font-medium text-fern-green">
                  Saber más
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-sage/40">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Smartphone className="h-8 w-8 text-fern-green" />
                <CardTitle className="text-xl">Desarrollo de Aplicaciones Móviles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="min-h-[100px]">
                  Desarrollamos aplicaciones móviles personalizadas que satisfacen las necesidades
                  específicas de su negocio y mejoran la experiencia del usuario. Nuestras soluciones son 
                  multiplataforma, permitiendo alcanzar a usuarios de iOS y Android con un solo desarrollo.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-fern-green font-medium">Tecnologías:</p>
                  <p className="text-xs text-muted-foreground">React Native, Flutter, Swift, Kotlin</p>
                </div>
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
                  problemas específicos de su negocio. Nuestro enfoque ágil garantiza entregas incrementales y resultados 
                  tangibles en cada etapa del proyecto.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-fern-green font-medium">Tecnologías:</p>
                  <p className="text-xs text-muted-foreground">Java, Python, Node.js, .NET, AWS</p>
                </div>
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
                  información de manera eficiente y segura. Ofrecemos servicios de migración, optimización y 
                  administración de bases de datos para maximizar el valor de sus datos.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-fern-green font-medium">Tecnologías:</p>
                  <p className="text-xs text-muted-foreground">PostgreSQL, MongoDB, MySQL, SQL Server, Redis</p>
                </div>
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
                  defender sus activos digitales contra amenazas cibernéticas. Realizamos auditorías, pruebas de penetración
                  y protección contra malware y ransomware.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-fern-green font-medium">Servicios:</p>
                  <p className="text-xs text-muted-foreground">Auditorías, Pentesting, SIEM, SOC</p>
                </div>
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
                  identificar oportunidades de crecimiento. Implementamos herramientas de visualización y paneles 
                  de control personalizados para monitorizar KPIs clave.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-fern-green font-medium">Tecnologías:</p>
                  <p className="text-xs text-muted-foreground">Power BI, Tableau, Python, R, TensorFlow</p>
                </div>
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
                  una experiencia de usuario óptima. Identificamos cuellos de botella y aplicamos soluciones 
                  que reducen costos operativos y mejoran la satisfacción del usuario.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-fern-green font-medium">Herramientas:</p>
                  <p className="text-xs text-muted-foreground">Lighthouse, WebPageTest, New Relic, CloudFlare</p>
                </div>
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
                  adecuadas y maximizar su rendimiento. Creamos hojas de ruta tecnológicas a medida para 
                  garantizar que sus inversiones generen el máximo retorno.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-fern-green font-medium">Áreas:</p>
                  <p className="text-xs text-muted-foreground">Arquitectura, Cloud, DevOps, Transformación Digital</p>
                </div>
                <Link href="/contact" className="mt-4 inline-flex items-center text-sm font-medium text-fern-green">
                  Saber más
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section - Enhanced */}
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
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="mr-1 h-3 w-3 text-fern-green" />
                  <span>Reuniones de análisis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-1 h-3 w-3 text-fern-green" />
                  <span>Evaluación técnica</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-1 h-3 w-3 text-fern-green" />
                  <span>Definición de alcance</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-hunter-green text-timberwolf">
                2
              </div>
              <h3 className="text-xl font-bold">Planificación</h3>
              <p className="text-muted-foreground">Desarrollamos una estrategia detallada y un plan de acción.</p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="mr-1 h-3 w-3 text-fern-green" />
                  <span>Arquitectura técnica</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-1 h-3 w-3 text-fern-green" />
                  <span>Cronograma detallado</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-1 h-3 w-3 text-fern-green" />
                  <span>Selección de recursos</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-hunter-green text-timberwolf">
                3
              </div>
              <h3 className="text-xl font-bold">Ejecución</h3>
              <p className="text-muted-foreground">
                Implementamos la solución con un enfoque meticuloso y profesional.
              </p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="mr-1 h-3 w-3 text-fern-green" />
                  <span>Desarrollo iterativo</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-1 h-3 w-3 text-fern-green" />
                  <span>Control de calidad</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-1 h-3 w-3 text-fern-green" />
                  <span>Actualizaciones regulares</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-hunter-green text-timberwolf">
                4
              </div>
              <h3 className="text-xl font-bold">Evaluación</h3>
              <p className="text-muted-foreground">
                Medimos los resultados y realizamos ajustes para optimizar el rendimiento.
              </p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="mr-1 h-3 w-3 text-fern-green" />
                  <span>Análisis de métricas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-1 h-3 w-3 text-fern-green" />
                  <span>Retroalimentación</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-1 h-3 w-3 text-fern-green" />
                  <span>Mejora continua</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section - New */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-timberwolf/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl md:text-5xl">
                Nuestra Metodología
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Combinamos las mejores prácticas de la industria para ofrecer soluciones de alta calidad, a tiempo y dentro del presupuesto.
              </p>
            </div>
          </div>
          <div className="grid gap-8 mt-12 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Clock className="h-12 w-12 text-fern-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Desarrollo Ágil</h3>
              <p className="text-center text-muted-foreground">
                Utilizamos metodologías ágiles como Scrum y Kanban para garantizar entregas incrementales, adaptabilidad a los cambios y colaboración constante con el cliente.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-brunswick-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Colaboración Estrecha</h3>
              <p className="text-center text-muted-foreground">
                Mantenemos una comunicación fluida y transparente durante todo el proyecto, asegurando que su visión y requisitos se implementen correctamente.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Award className="h-12 w-12 text-hunter-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Excelencia Técnica</h3>
              <p className="text-center text-muted-foreground">
                Nos comprometemos con los más altos estándares de calidad, aplicando prácticas como revisión de código, pruebas automatizadas y entrega continua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - New */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl md:text-5xl">
                Preguntas Frecuentes
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Respuestas a las dudas más comunes sobre nuestros servicios.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="border-sage/40">
              <CardHeader>
                <CardTitle className="text-lg">¿Cuál es el tiempo de entrega promedio de un proyecto?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  El tiempo varía según la complejidad del proyecto. Un sitio web típico puede tomar de 4 a 8 semanas, 
                  mientras que aplicaciones más complejas pueden requerir de 3 a 6 meses. Proporcionamos un cronograma 
                  detallado al inicio de cada proyecto.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-sage/40">
              <CardHeader>
                <CardTitle className="text-lg">¿Cómo gestionan la seguridad de los datos?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Implementamos prácticas de seguridad de primera clase, incluyendo cifrado de datos, pruebas de 
                  penetración regulares y cumplimiento de normativas como GDPR. Todos nuestros servicios están 
                  diseñados con la seguridad como prioridad.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-sage/40">
              <CardHeader>
                <CardTitle className="text-lg">¿Ofrecen soporte técnico después de la implementación?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sí, ofrecemos planes de mantenimiento y soporte adaptados a las necesidades de cada cliente. 
                  Estos incluyen actualizaciones, corrección de errores, mejoras y asistencia técnica continua.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-sage/40">
              <CardHeader>
                <CardTitle className="text-lg">¿Cómo calculan el costo de sus servicios?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nuestros precios se basan en la complejidad del proyecto, los recursos necesarios y el tiempo 
                  estimado de desarrollo. Ofrecemos presupuestos transparentes y flexibles que se adaptan a diferentes 
                  necesidades y presupuestos.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
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
            <div className="flex flex-col gap-4 min-[400px]:flex-row mt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-sage text-brunswick-green hover:bg-sage/90">
                  Solicitar consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-sage text-timberwolf hover:bg-hunter-green/20">
                  Ver proyectos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-timberwolf/80">
              Respuesta garantizada en menos de 24 horas
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}