import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-sage/40 bg-hunter-green text-timberwolf">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-sage">CodeCrafters</h3>
            <p className="text-sm text-timberwolf/80">Ofreciendo soluciones innovadoras para su negocio desde 2022.</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-sage">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-timberwolf/80 hover:text-timberwolf">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-timberwolf/80 hover:text-timberwolf">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-timberwolf/80 hover:text-timberwolf">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-timberwolf/80 hover:text-timberwolf">
                  Portafolio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-sage">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-timberwolf/80 hover:text-timberwolf">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-timberwolf/80 hover:text-timberwolf">
                  Equipo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-timberwolf/80 hover:text-timberwolf">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-sage">Contacto</h3>
            <address className="not-italic text-sm text-timberwolf/80">
              <p>Los Chasquis y Rio Payamino</p>
              <p>Ambato, Ecuador</p>
              <p className="mt-2">info@codecrafters.com</p>
              <p>+593 967229875</p>
            </address>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-timberwolf/80 hover:text-timberwolf">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-timberwolf/80 hover:text-timberwolf">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-timberwolf/80 hover:text-timberwolf">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-timberwolf/80 hover:text-timberwolf">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-timberwolf/10 pt-8 text-center text-sm text-timberwolf/70">
          <p>&copy; {new Date().getFullYear()} CodeCrafters. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

