import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const RentCarPage = () => {
  return (
    <div>
        {/* Project 1 */}
        <Card className="overflow-hidden border-sage/40">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=800"
                  width={800}
                  height={450}
                  alt="Project 1"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Plataforma E-commerce</CardTitle>
                <CardDescription>
                  Desarrollo de una plataforma de comercio electrónico completa para una empresa de retail.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="font-semibold">El Desafío</h3>
                  <p className="text-sm text-muted-foreground">
                    El cliente necesitaba una plataforma de comercio electrónico escalable y fácil de usar que pudiera
                    manejar un gran catálogo de productos y proporcionar una experiencia de compra fluida.
                  </p>
                  <h3 className="font-semibold">La Solución</h3>
                  <p className="text-sm text-muted-foreground">
                    Desarrollamos una plataforma personalizada con un diseño atractivo, funcionalidades avanzadas de
                    búsqueda y filtrado, carrito de compras optimizado y un proceso de pago simplificado.
                  </p>
                  <h3 className="font-semibold">Resultados</h3>
                  <p className="text-sm text-muted-foreground">
                    Aumento del 45% en las ventas en línea, reducción del 30% en la tasa de abandono del carrito y
                    mejora significativa en la satisfacción del cliente.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
                    React
                  </span>
                  <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
                    Node.js
                  </span>
                  <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
                    MongoDB
                  </span>
                  <span className="inline-flex items-center rounded-md bg-hunter-green/10 px-2 py-1 text-xs font-medium text-hunter-green">
                    AWS
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
  )
}

export default RentCarPage