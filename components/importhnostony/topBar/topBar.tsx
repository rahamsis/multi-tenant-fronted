
import { Mail, MessageCircle, Phone, Truck } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-importhnostony-surface border-b border-importhnostony-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-9 items-center justify-between text-xs text-gray-700">

          {/* Información izquierda */}
          <div className="hidden items-center gap-2 md:flex">
            <MessageCircle className="h-3.5 w-3.5 text-importhnostony-primary" />
            <span>Repuestos originales y compatibles</span>
          </div>

          {/* Información derecha */}
          <div className="flex w-full items-center justify-center gap-5 md:w-auto md:justify-end">

            {/* Envíos */}
            <div className="flex items-center gap-1.5">
              <Truck className="h-3.5 w-3.5 text-importhnostony-primary" />
              <span>Envíos a todo el Perú</span>
            </div>

            {/* Teléfono */}
            <a
              href="tel:+51987654321"
              className="hidden items-center gap-1.5 transition-colors hover:text-importhnostony-primary sm:flex"
            >
              <Phone className="h-3.5 w-3.5 text-importhnostony-primary" />
              <span>+51 987 654 321</span>
            </a>

            {/* Correo */}
            <a
              href="mailto:ventas@importhnostony.com"
              className="hidden items-center gap-1.5 transition-colors hover:text-importhnostony-primary lg:flex"
            >
              <Mail className="h-3.5 w-3.5 text-importhnostony-primary" />
              <span>ventas@importhnostony.com</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
