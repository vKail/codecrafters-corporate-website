import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CtaPage = () => {
  return (
    <div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green sm:text-4xl md:text-5xl">
              ¿Listo para crear su próximo proyecto?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contáctenos hoy mismo para discutir sus ideas y descubrir cómo
              podemos ayudarle a convertirlas en realidad.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-hunter-green text-timberwolf hover:bg-hunter-green/90"
              >
                Iniciar un proyecto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-fern-green text-fern-green hover:bg-timberwolf"
              >
                Explorar servicios
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaPage;
