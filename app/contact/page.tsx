"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError(false)

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your server here
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="gradient-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Contáctenos
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Estamos aquí para responder a sus preguntas y ayudarle con sus necesidades. Póngase en contacto con
                nosotros hoy mismo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-timberwolf/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green">Información de Contacto</h2>
                <p className="text-muted-foreground">
                  Utilice la siguiente información para ponerse en contacto con nosotros directamente o complete el
                  formulario y nos comunicaremos con usted lo antes posible.
                </p>
              </div>
              <div className="grid gap-4 py-4">
                <Card className="border-sage/40">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <MapPin className="h-6 w-6 text-hunter-green" />
                    <CardTitle>Dirección</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Calle Principal 123, Ciudad, CP 12345</CardDescription>
                  </CardContent>
                </Card>
                <Card className="border-sage/40">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Phone className="h-6 w-6 text-fern-green" />
                    <CardTitle>Teléfono</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>+1 (555) 123-4567</CardDescription>
                  </CardContent>
                </Card>
                <Card className="border-sage/40">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Mail className="h-6 w-6 text-sage" />
                    <CardTitle>Correo Electrónico</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>info@companyname.com</CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Horario de Atención</h3>
                <p className="text-muted-foreground">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p className="text-muted-foreground">Sábado: 10:00 AM - 2:00 PM</p>
                <p className="text-muted-foreground">Domingo: Cerrado</p>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Su nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Su correo electrónico"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Su número de teléfono"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Asunto de su mensaje"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Su mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[150px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-hunter-green text-timberwolf hover:bg-hunter-green/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
                {submitSuccess && (
                  <div className="rounded-md bg-sage/20 p-4 text-sm text-hunter-green">
                    Su mensaje ha sido enviado con éxito. Nos pondremos en contacto con usted pronto.
                  </div>
                )}
                {submitError && (
                  <div className="rounded-md bg-red-100 p-4 text-sm text-red-800">
                    Ha ocurrido un error al enviar su mensaje. Por favor, inténtelo de nuevo más tarde.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-brunswick-green">Nuestra Ubicación</h2>
              <p className="max-w-[900px] text-muted-foreground">Visítenos en nuestra oficina central.</p>
            </div>
          </div>
          <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg border border-sage/40 bg-muted">
            {/* Replace with an actual map component in a real application */}
            <div className="flex h-full items-center justify-center">
              <p className="text-muted-foreground">Mapa de ubicación</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

