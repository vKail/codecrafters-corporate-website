import RentCarPage from "./rent-car";
import RestaurantProject from "./restaurant-project";
import CtaPage from "./cta";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="gradient-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Nuestro Portafolio
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Explore algunos de nuestros proyectos más destacados y descubra
                cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-timberwolf/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Project 1 */}
            <RentCarPage />
            {/* Project 2 */}
            <RestaurantProject />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
          <CtaPage />
      </section>
    </div>
  );
}
