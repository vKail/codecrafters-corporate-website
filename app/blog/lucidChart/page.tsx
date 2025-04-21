import { Calendar, User, Video, Users, Columns, PenTool, BarChartHorizontal, MessageSquare, Mail, Bookmark, Tag, FileText } from "lucide-react"

export default function LucidChartBlog() {
  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8 p-4">
      <div className="flex flex-col w-full md:w-2/3">
        <header className="w-full py-8">
          <h1 className="text-4xl font-bold tracking-tighter text-brunswick-green mb-4">
            Lucid Chart: Una Poderosa Herramienta de Diagramación
          </h1>
          <div className="flex items-center text-sm text-muted-foreground mb-6">
            <User className="h-4 w-4 mr-1" />
            <span className="mr-3">Por Adrián Jurado</span>
            <span className="mr-3">|</span>
            <Calendar className="h-4 w-4 mr-1" />
            <span>18 de abril, 2025</span>
          </div>
          <div className="w-full rounded-lg mb-6 overflow-hidden">
            <img 
              src="/images/interfaz-lucidchart.png" 
              alt="Lucid Chart Interface 1" 
              className="w-full h-auto" 
            />
          </div>
        </header>
  
        <section className="w-full mb-8">
          <p className="text-lg text-muted-foreground mb-4">
            Lucid Chart es una plataforma de diagramación basada en la nube que permite crear diagramas profesionales de manera colaborativa. Con su interfaz intuitiva, se ha convertido en una herramienta esencial para profesionales que necesitan visualizar ideas, procesos y datos de manera efectiva.
          </p>
          <p className="text-muted-foreground">
            Ya sea que necesites crear diagramas de flujo, mapas mentales, organigramas o wireframes, Lucid Chart proporciona las herramientas necesarias para plasmar tus ideas con claridad y profesionalismo.
          </p>
        </section>
  
        <section className="w-full mb-8">
  <h2 className="text-2xl font-bold text-brunswick-green mb-4">
    Video Tutorial: Primeros Pasos
  </h2>
  <div className="w-full overflow-hidden rounded-xl border border-timberwolf/50 shadow-md">
    <div className="aspect-video relative w-full h-full">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-xl"
        src="https://www.youtube.com/embed/8VqlzBxjGJw"
        title="Video Tutorial de Lucidchart"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
</section>

  
        <section className="w-full mb-8">
          <h2 className="text-2xl font-bold text-brunswick-green mb-4">¿Por qué elegir Lucid Chart?</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-timberwolf/20 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Users className="h-6 w-6 text-brunswick-green mr-2" />
                <h3 className="font-medium text-brunswick-green text-xl">Colaboración en tiempo real</h3>
              </div>
              <p className="text-muted-foreground">
                Trabaja simultáneamente con tu equipo en diagramas compartidos y visualiza actualizaciones al instante.
              </p>
            </div>
            <div className="bg-timberwolf/20 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Columns className="h-6 w-6 text-brunswick-green mr-2" />
                <h3 className="font-medium text-brunswick-green text-xl">Biblioteca de plantillas</h3>
              </div>
              <p className="text-muted-foreground">
                Accede a cientos de plantillas profesionales para todo tipo de diagramas y visualizaciones.
              </p>
            </div>
          </div>
        </section>
  
        <section className="w-full mb-8">
          <h2 className="text-2xl font-bold text-brunswick-green mb-4">Cómo estamos usando Lucid Chart</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <div className="bg-timberwolf/30 rounded-lg w-24 h-24 flex items-center justify-center">
                <FileText className="h-12 w-12 text-brunswick-green" />
              </div>
              <div>
                <h3 className="font-medium text-brunswick-green text-xl mb-1">Diagramas de flujo de procesos</h3>
                <p className="text-muted-foreground">
                  Visualiza procesos comerciales y flujos de trabajo para identificar oportunidades de mejora.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-timberwolf/30 rounded-lg w-24 h-24 flex items-center justify-center">
                <BarChartHorizontal className="h-12 w-12 text-brunswick-green" />
              </div>
              <div>
                <h3 className="font-medium text-brunswick-green text-xl mb-1">Planificación de proyectos</h3>
                <p className="text-muted-foreground">
                  Crea mapas visuales de proyectos y comparte la visión general con todo el equipo.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="w-full py-6 bg-hunter-green/10 rounded-lg px-6 mb-8">
          <h2 className="text-2xl font-bold text-brunswick-green mb-4">¿Listo para probar Lucid Chart?</h2>
          <p className="text-muted-foreground mb-6">
            Lucid Chart se destaca como una herramienta de diagramación versátil que puede transformar la forma en que visualizas información y colaboras con tu equipo.
          </p>
          <a 
            href="https://www.lucidchart.com/"
            className="inline-flex items-center bg-hunter-green text-timberwolf px-4 py-2 rounded-md hover:bg-hunter-green/90 transition-colors"
          >
            <PenTool className="h-4 w-4 mr-2" />
            Comenzar ahora - ¡Prueba gratuita!
          </a>
        </section>
        
        <section className="w-full mb-8">
          <h2 className="text-2xl font-bold text-brunswick-green mb-4 flex items-center">
            <MessageSquare className="h-6 w-6 mr-2" />
            Comentarios
          </h2>
          <div className="space-y-4">
            <div className="border-b border-timberwolf/30 pb-4">
              <div className="flex items-center mb-2">
                <div className="bg-timberwolf/30 w-8 h-8 rounded-full mr-3 flex items-center justify-center">
                  <User className="h-5 w-5 text-brunswick-green" />
                </div>
                <div>
                  <p className="font-medium text-brunswick-green">Carlos Martinez</p>
                  <p className="text-xs text-muted-foreground">18 de abril, 2025</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                ¡Excelente artículo! He estado usando Lucid Chart para documentar los procesos de mi empresa y la verdad ha simplificado mucho nuestro trabajo.
              </p>
            </div>
            <div className="border-b border-timberwolf/30 pb-4">
              <div className="flex items-center mb-2">
                <div className="bg-timberwolf/30 w-8 h-8 rounded-full mr-3 flex items-center justify-center">
                  <User className="h-5 w-5 text-brunswick-green" />
                </div>
                <div>
                  <p className="font-medium text-brunswick-green">Ana López</p>
                  <p className="text-xs text-muted-foreground">19 de abril, 2025</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                ¿Alguien sabe si hay planes para integrar más funciones de IA en la plataforma? Me encantaría poder generar diagramas a partir de descripciones textuales.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-medium text-brunswick-green mb-2">Deja tu comentario</h3>
            <textarea 
              className="w-full p-3 border border-timberwolf/50 rounded-md" 
              placeholder="Escribe tu comentario aquí..."
              rows={4}
            />
            <button className="mt-2 bg-brunswick-green text-white px-4 py-2 rounded-md hover:bg-brunswick-green/90 transition-colors flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              Publicar comentario
            </button>
          </div>
        </section>
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
              <p className="font-medium text-brunswick-green">Adrián Jurado</p>
              <p className="text-sm text-muted-foreground">Desarrollador de Software</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Estudiante de Ingeniería en Software, con experiencia en desarrollo de aplicaciones web y móviles
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
                  <a href="#">Las 5 mejores herramientas de diagramación para 2025</a>
                </h4>
                <p className="text-xs text-muted-foreground">12 de abril, 2025</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-14 h-14 bg-brunswick-green/20 rounded flex items-center justify-center">
                <Users className="h-6 w-6 text-brunswick-green" />
              </div>
              <div>
                <h4 className="font-medium text-brunswick-green text-sm hover:underline">
                  <a href="#">Cómo optimizar la colaboración remota con herramientas visuales</a>
                </h4>
                <p className="text-xs text-muted-foreground">8 de abril, 2025</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-14 h-14 bg-brunswick-green/20 rounded flex items-center justify-center">
                <PenTool className="h-6 w-6 text-brunswick-green" />
              </div>
              <div>
                <h4 className="font-medium text-brunswick-green text-sm hover:underline">
                  <a href="#">UX vs UI: Visualizando la diferencia</a>
                </h4>
                <p className="text-xs text-muted-foreground">3 de abril, 2025</p>
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
            Recibe las últimas noticias sobre herramientas de productividad y consejos para mejorar tus flujos de trabajo.
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
        
        <div className="border-t border-timberwolf/30 pt-4">
          <h3 className="font-medium text-brunswick-green text-xl mb-3 flex items-center">
            <Tag className="h-5 w-5 mr-2" />
            Categorías
          </h3>
          <div className="flex flex-wrap gap-2">
            <a href="#" className="bg-timberwolf/30 px-3 py-1 rounded-full text-sm text-brunswick-green hover:bg-timberwolf/50 transition-colors">
              Productividad
            </a>
            <a href="#" className="bg-timberwolf/30 px-3 py-1 rounded-full text-sm text-brunswick-green hover:bg-timberwolf/50 transition-colors">
              Herramientas
            </a>
            <a href="#" className="bg-timberwolf/30 px-3 py-1 rounded-full text-sm text-brunswick-green hover:bg-timberwolf/50 transition-colors">
              Colaboración
            </a>
            <a href="#" className="bg-timberwolf/30 px-3 py-1 rounded-full text-sm text-brunswick-green hover:bg-timberwolf/50 transition-colors">
              Trabajo Remoto
            </a>
            <a href="#" className="bg-timberwolf/30 px-3 py-1 rounded-full text-sm text-brunswick-green hover:bg-timberwolf/50 transition-colors">
              Diseño
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}