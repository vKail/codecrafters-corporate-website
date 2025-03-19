"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
  } from "@/components/ui/card";
  import React from "react";
  import Image from "next/image";
  import { ExternalLink } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { RiNextjsFill } from "react-icons/ri";
  import { SiRubyonrails } from "react-icons/si";
  import { BiLogoPostgresql } from "react-icons/bi";
  import { useRouter } from "next/navigation";

  const RentCarPage = () => {
    const router = useRouter();

    return (
      <div>
        {/* Project 1 */}
        <Card className="overflow-hidden border-sage/40">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src="/images/Portfolio/car1.png"
              width={800}
              height={450}
              alt="Project 1"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardHeader>
            <CardTitle>Sistema de Gestión de Flotas para Alquiler de Vehículos</CardTitle>
            <CardDescription>
              Plataforma robusta diseñada para optimizar las operaciones de alquiler de vehículos, con seguimiento de mantenimiento, evaluación de daños y configuración de precios dinámicos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <h3 className="font-semibold">El Desafío</h3>
              <p className="text-sm text-muted-foreground">
                El cliente necesitaba una solución integral para gestionar su flota de vehículos, optimizar el alquiler, realizar un seguimiento del mantenimiento y evaluar daños de manera eficiente.
              </p>
              <h3 className="font-semibold">La Solución</h3>
              <p className="text-sm text-muted-foreground">
                Desarrollamos un sistema de gestión de flotas que permite a los usuarios alquilar vehículos, reportar daños y gestionar reservas, mientras que los administradores pueden supervisar operaciones, configurar precios dinámicos y realizar un seguimiento del mantenimiento.
              </p>
              <h3 className="font-semibold">Resultados</h3>
              <p className="text-sm text-muted-foreground">
                Mejora del 40% en la eficiencia operativa, reducción del 25% en los tiempos de inactividad de los vehículos y aumento del 30% en la satisfacción del cliente.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
                <RiNextjsFill className="w-8 h-8" />
                Next
              </span>
              <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
              <SiRubyonrails className="h-8 w-8"/>
                Ruby on Rails
              </span>
              <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
                <BiLogoPostgresql className="h-8 w-8" />
                PostgreSQL
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              size="sm"
              className="gap-1 border-fern-green text-fern-green hover:bg-timberwolf"
              onClick={() => router.push("/portfolio/rent-car")}
            >
              <ExternalLink className="h-4 w-4" />
              Ver proyecto
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  };
  
  export default RentCarPage;