import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@plushworld.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Av. Principal 123, Ciudad de Peluches</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Envíos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Categorías */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Osos de Peluche
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Animales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Personajes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Colecciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Ofertas
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Síguenos</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm">
              {"Únete a nuestra comunidad y mantente al día con las últimas novedades y ofertas especiales."}
            </p>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2024 PlushWorld. Todos los derechos reservados. | Hecho con ❤️ para los amantes de los peluches
          </p>
        </div>
      </div>
    </footer>
  )
}
