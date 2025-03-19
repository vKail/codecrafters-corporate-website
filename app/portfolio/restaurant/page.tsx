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

const RestaurantDetailPage = () => {
  const router = useRouter();

  const features = [
    {
      title: "Gestión de Pedidos",
      description: "Permite a los meseros tomar pedidos de manera rápida y eficiente directamente desde dispositivos móviles, con acceso inmediato al menú actualizado y opciones de personalización.",
      image: "/images/Restaurant/restaurant1.jpeg",
      role: "Mesero"
    },
    {
      title: "Interfaz de Cocina",
      description: "Panel en tiempo real para el equipo de cocina donde pueden visualizar los pedidos entrantes, marcar los platos en preparación y completados, y gestionar la cola de pedidos.",
      image: "/images/Restaurant/restaurant2.png",
      role: "Cocinero"
    },
    {
      title: "Facturación y Pagos",
      description: "Sistema completo de facturación que permite al administrador procesar pagos, generar facturas electrónicas y gestionar diferentes métodos de pago (efectivo, tarjeta, transferencias).",
      image: "/images/Restaurant/restaurant3.png",
      role: "Administrador"
    },
    {
      title: "Gestión de Mesas",
      description: "Mapa interactivo del restaurante que permite a los meseros asignar clientes a mesas, visualizar ocupación y gestionar reservas para optimizar el uso del espacio.",
      image: "/images/Restaurant/restaurant4.png",
      role: "Mesero y Administrador"
    },
    {
      title: "Gestión de Inventario",
      description: "Control automático de inventario que actualiza existencias en tiempo real a medida que se procesan pedidos, generando alertas cuando los ingredientes están por agotarse.",
      image: "/images/Restaurant/restaurant5.png",
      role: "Administrador"
    },
    {
      title: "Panel Administrativo",
      description: "Centro de control para administradores donde pueden configurar menús, gestionar personal, analizar ventas y generar informes personalizados sobre el rendimiento del restaurante.",
      image: "/images/Restaurant/restaurant6.png",
      role: "Administrador"
    },
    {
      title: "Configuración de Espacios",
      description: "Herramienta para crear y modificar la disposición de mesas, sillas y áreas del restaurante, permitiendo adaptarse fácilmente a diferentes configuraciones según la necesidad.",
      image: "/images/Restaurant/restaurant7.png",
      role: "Administrador"
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
        <h1 className="text-3xl font-bold mb-4">Sistema de Gestión de Pedidos para Restaurantes</h1>
        <p className="text-muted-foreground">
          Plataforma integral para gestionar pedidos, controlar mesas, supervisar la cocina y administrar pagos en restaurantes.
        </p>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
        <Image
          src="/images/Restaurant/restaurant8.png"
          fill
          alt="Sistema de Gestión de Pedidos para Restaurantes"
          className="object-cover"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg?height=450&width=800";
          }}
        />
      </div>

      <div className="mb-8 bg-hunter-green/5 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Roles del Sistema</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-sage/40">
            <CardHeader className="bg-hunter-green/10">
              <CardTitle className="text-lg">Mesero</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">
                Recepción de órdenes, asignación de mesas, envío de pedidos a cocina, y atención al cliente.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-sage/40">
            <CardHeader className="bg-hunter-green/10">
              <CardTitle className="text-lg">Cocinero</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">
                Visualización de pedidos entrantes, gestión de la preparación, y notificación de platos listos.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-sage/40">
            <CardHeader className="bg-hunter-green/10">
              <CardTitle className="text-lg">Administrador</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">
                Facturación, gestión de pagos, configuración de mesas, administración de personal y reportes.
              </p>
            </CardContent>
          </Card>
        </div>
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
                  e.currentTarget.src = "/placeholder.svg?height=200&width=400";
                }}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <CardDescription className="text-xs font-medium text-hunter-green mt-1">
                <span className="inline-block px-2 py-1 bg-hunter-green/10 rounded-md">
                  Rol: {feature.role}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-sm text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  );
};

export default RestaurantDetailPage;