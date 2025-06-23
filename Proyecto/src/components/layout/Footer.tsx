import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, ClockIcon, InstagramIcon, PhoneIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-[#2D1B14] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Donde Carla</h3>
            <p className="text-sm text-gray-300 mb-4">
              Comida casera, de alta calidad y con un servicio rápido y
              personalizado en Juan Viñas, Costa Rica.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon className="w-6 h-6 text-white hover:text-[#D4AF37] transition-colors" />
              </a>
              <a href="https://wa.me/50612345678" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <PhoneIcon className="w-6 h-6 text-white hover:text-[#D4AF37] transition-colors" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-white transition-colors">
                  Menú
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
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
                <p className="text-gray-300">Juan Viñas, Cartago, Costa Rica</p>
              </div>
              <div className="flex items-start">
                <ClockIcon className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">
                    Lunes - Viernes: 11:00 AM - 9:00 PM
                  </p>
                  <p className="text-gray-300">
                    Sábado - Domingo: 12:00 PM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Donde Carla. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;