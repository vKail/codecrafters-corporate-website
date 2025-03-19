"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaFlutter } from "react-icons/fa6";
import { DiDjango } from "react-icons/di";
import { SiSqlite } from "react-icons/si";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RestaurantProject = () => {
  const router = useRouter();

  return (
    <div>
      {/* Project 2 */}
      <Card className="overflow-hidden border-sage/40">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src="/images/Restaurant/restaurant3.png"
            width={800}
            height={450}
            alt="Project 2"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>Sistema de Gestión de Pedidos para Restaurantes</CardTitle>
          <CardDescription>
            Plataforma integral para gestionar pedidos, controlar mesas,
            supervisar la cocina y administrar pagos en restaurantes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <h3 className="font-semibold">El Desafío</h3>
            <p className="text-sm text-muted-foreground">
              El cliente necesitaba un sistema centralizado para gestionar
              pedidos, controlar el flujo de trabajo en la cocina, administrar
              mesas y procesar pagos de manera eficiente.
            </p>
            <h3 className="font-semibold">La Solución</h3>
            <p className="text-sm text-muted-foreground">
              Desarrollamos una plataforma personalizada que permite a los
              camareros tomar pedidos, a los cocineros visualizar y preparar
              pedidos, y a los administradores gestionar clientes, pagos y mesas
              en tiempo real.
            </p>
            <h3 className="font-semibold">Resultados</h3>
            <p className="text-sm text-muted-foreground">
              Reducción del 50% en los tiempos de espera de los clientes, mejora
              del 35% en la eficiencia de la cocina y aumento del 20% en la
              satisfacción del cliente.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
              <FaFlutter />
              Flutter
            </span>
            <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
              <DiDjango className="h-10 w-10" />
            </span>
            <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
              <SiSqlite className="h-6 w-6" />
              SQLite
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            size="sm"
            className="gap-1 border-fern-green text-fern-green hover:bg-timberwolf"
            onClick={() => router.push("/portfolio/restaurant")}
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
