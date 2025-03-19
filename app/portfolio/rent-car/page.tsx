"use client"
import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const RentCarDetailPage = () => {
  const router = useRouter();

  const features = [
    {
      title: "Sistema de Alquiler de Vehículos",
      description: "Plataforma robusta diseñada para facilitar operaciones de alquiler de vehículos entre múltiples sucursales y proveedores. Ofrece una experiencia de usuario fluida para que los clientes alquilen autos, gestionen reservas y reporten daños, mientras los administradores supervisan eficientemente la gestión de flota.",
      image: "/images/Portfolio/car2.png"
    },
    {
      title: "Gestión de Usuarios",
      description: "Permite a los usuarios crear cuentas, iniciar sesión de forma segura y administrar sus perfiles para una experiencia de alquiler personalizada.",
      image: "/images/Portfolio/car3.png"
    },
    {
      title: "Reservas de Vehículos",
      description: "Permite a los clientes alquilar autos para fechas específicas, asegurando disponibilidad y gestión fluida de reservas.",
      image: "/images/Portfolio/car4.png"
    },
    {
      title: "Pasarela de Pago Integrada",
      description: "Facilita transacciones en línea seguras a través de un sistema de pago integrado, garantizando pagos de alquiler sin problemas.",
      image: "/images/Portfolio/car5.png"
    },
    {
      title: "Panel de Administración para Gestión de Flota",
      description: "Permite a los administradores añadir, editar y eliminar vehículos, monitorear reservas y supervisar eficientemente las operaciones de alquiler.",
      image: "/images/Portfolio/car6.png"
    },
    {
      title: "Seguimiento de Mantenimiento",
      description: "Sistema integrado para programar y dar seguimiento al mantenimiento regular y reparaciones de vehículos, optimizando la disponibilidad de la flota.",
      image: "/images/Portfolio/car7.png"
    },
    {
      title: "Configuración de Precios Dinámicos",
      description: "Herramienta avanzada que permite ajustar automáticamente las tarifas de alquiler basadas en la demanda, temporada y disponibilidad de vehículos.",
      image: "/images/Portfolio/car8.png"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <Button
        variant="outline"
        size="sm"
        className="mb-6 gap-1 border-fern-green text-fern-green hover:bg-timberwolf"
        onClick={() => router.back()}
      >
        <ArrowLeft className="h-4 w-4" />
        Volver
      </Button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Sistema de Gestión de Flotas para Alquiler de Vehículos</h1>
        <p className="text-muted-foreground">
          Una solución completa para optimizar operaciones de alquiler de vehículos con seguimiento de mantenimiento, 
          evaluación de daños y configuración de precios dinámicos.
        </p>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
        <Image
          src="/images/Portfolio/car1.png"
          fill
          alt="Sistema de Gestión de Flotas"
          className="object-cover"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-6">Características del Sistema</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="overflow-hidden border-sage/40 h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={feature.image}
                fill
                alt={feature.title}
                className="object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/images/Portfolio/car1.png";
                }}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-sm text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-hunter-green/5 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Tecnologías Utilizadas</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 bg-white p-3 rounded-md shadow-sm">
            <span className="font-medium">Frontend:</span> Next.js, React, TailwindCSS
          </div>
          <div className="flex items-center gap-2 bg-white p-3 rounded-md shadow-sm">
            <span className="font-medium">Backend:</span> Ruby on Rails, API RESTful
          </div>
          <div className="flex items-center gap-2 bg-white p-3 rounded-md shadow-sm">
            <span className="font-medium">Base de datos:</span> PostgreSQL
          </div>
          <div className="flex items-center gap-2 bg-white p-3 rounded-md shadow-sm">
            <span className="font-medium">Autenticación:</span> JWT, OAuth 2.0
          </div>
          <div className="flex items-center gap-2 bg-white p-3 rounded-md shadow-sm">
            <span className="font-medium">Despliegue:</span> Docker, AWS
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentCarDetailPage;