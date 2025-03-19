import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const RestaurantProject = () => {
  return (
    <div>
      <Card className="overflow-hidden border-sage/40">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src="/placeholder.svg?height=450&width=800"
            width={800}
            height={450}
            alt="Project 2"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>Sistema de Gestión Empresarial</CardTitle>
          <CardDescription>
            Desarrollo de un sistema integral de gestión para una empresa de
            servicios financieros.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <h3 className="font-semibold">El Desafío</h3>
            <p className="text-sm text-muted-foreground">
              El cliente necesitaba un sistema centralizado para gestionar
              clientes, proyectos, facturación y recursos humanos, reemplazando
              múltiples sistemas desconectados.
            </p>
            <h3 className="font-semibold">La Solución</h3>
            <p className="text-sm text-muted-foreground">
              Desarrollamos un sistema personalizado con módulos integrados para
              cada área de negocio, con informes en tiempo real y un panel de
              control intuitivo para la toma de decisiones.
            </p>
            <h3 className="font-semibold">Resultados</h3>
            <p className="text-sm text-muted-foreground">
              Reducción del 60% en el tiempo dedicado a tareas administrativas,
              mejora del 40% en la precisión de los informes y aumento del 25%
              en la productividad general.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
              Angular
            </span>
            <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
              .NET Core
            </span>
            <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
              SQL Server
            </span>
            <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
              Azure
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            size="sm"
            className="gap-1 border-fern-green text-fern-green hover:bg-timberwolf"
          >
            <ExternalLink className="h-4 w-4" />
            Ver proyecto
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RestaurantProject;
