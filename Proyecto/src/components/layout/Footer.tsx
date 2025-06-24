import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, ClockIcon, InstagramIcon, PhoneIcon } from "lucide-react";
import WhatsAppButton from "../ui/WhatsAppButton";
const Footer = () => {
  return (
    <footer className="bg-primary text-white-1">
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">¿Listo para ordenar?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ordena ahora por WhatsApp y disfruta de nuestra deliciosa comida en
            casa o pasa a visitarnos.
          </p>
          <div className="max-w-xs mx-auto">
            <WhatsAppButton className="w-full bg-ternary-1 hover:bg-ternary-3 active:bg-ternary-2 text-sm py-2.5 px-4" />
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Donde Carla</h3>
            <p className="text-sm  mb-4">
              Comida casera, de alta calidad y con un servicio rápido y
              personalizado en Juan Viñas, Costa Rica.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/p/DBUyxSAx3kf/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-6 h-6 hover:text-secondary-3 active:text-secondary-2 transition-colors" />
              </a>
              <a
                href="https://wa.me/50612345678"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <PhoneIcon className="w-6 h-6 hover:text-secondary-3 active:text-secondary-2 transition-colors" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-secondary-3 active:text-secondary-2 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="hover:text-secondary-3 active:text-secondary-2 transition-colors"
                >
                  Menú
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-secondary-3 active:text-secondary-2 transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-secondary-3 active:text-secondary-2 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Información</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <p>Juan Viñas, Cartago, Costa Rica</p>
              </div>
              <div className="flex items-start">
                <ClockIcon className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Lunes: 11:00 AM - 8:00 PM</p>
                  <p>Martes: Cerrado</p>
                  <p>Miércoles y Domingo: 11:00 AM - 9:00 PM</p>
                  <p>Jueves: 11:00 AM - 9:30 PM</p>
                  <p>Viernes y Sábado: 11:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 text-center">
          <p>
            © {new Date().getFullYear()} Donde Carla. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
