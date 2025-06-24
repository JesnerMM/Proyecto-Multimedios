import React from "react";
import { Link } from "react-router-dom";
import InstagramFeed from "../components/layout/instagramFeed/instagramFeed";
import {
  ArrowRightIcon,
  MapPinIcon,
  ClockIcon,
  InstagramIcon,
} from "lucide-react";
import WhatsAppButton from "../components/ui/WhatsAppButton";

const Home = () => {
  return (
    <div className="w-full">
      <section className="relative text-white">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="relative h-[50vh] md:h-[46vh] flex items-center justify-center overflow-hidden">
          <img
            src="src/assets/banner.jpeg"
            alt="Interior de Donde Carla"
            className="absolute object-cover inset-0 w-full h-full"
          />
          <div className="container mx-auto px-4 z-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
              <span className="font-playfair text-white-1">Donde </span>
              <span className="font-dancing text-golden-1">Carla</span>
            </h1>
            <p className="text-white-1 text-xl md:text-2xl m-8 max-w-2xl mx-auto">
              Disfruta de la mejor comida y siéntete como en casa.
            </p>
            <div className="flex flex-row justify-center md:gap-40">
              <Link
                to="/menu"
                className="flex items-center justify-center bg-secondary-1 hover:bg-secondary-3 active:bg-secondary-2 text-white-1 font-medium text-sm py-2.5 px-4 rounded-md w-48 text-center"
              >
                Ver Menú
              </Link>
              <WhatsAppButton className="w-48 bg-ternary-1 hover:bg-ternary-3 active:bg-ternary-2 text-white-1 text-sm py-2.5 px-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Bienvenidos a Donde Carla
              </h2>
              <p className="text-white-2 mb-6">
                Desde hace 2 años, Donde Carla ha sido el destino favorito para
                disfrutar de comida casera de alta calidad en Juan Viñas.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-secondary-1 font-medium hover:text-secondary-3 active:text-secondary-2 transition-colors"
              >
                Conoce nuestra historia
                <ArrowRightIcon size={16} className="ml-2" />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="src/assets/bienvenida-imagen.jpg"
                alt="Interior de Donde Carla"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Nuestros Platillos Destacados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={`Platillo destacado: ${item.name}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-primary">
                      {item.name}
                    </h3>
                    <span className="text-secondary-1 font-bold">
                      ₡{item.price}
                    </span>
                  </div>
                  <p className="text-white-2 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center bg-ternary-1 hover:bg-ternary-3 active:bg-ternary-2 text-white-1 font-medium py-3 px-6 rounded-md transition-colors"
            >
              Ver Menú Completo
              <ArrowRightIcon size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Encuéntranos
              </h2>
              <p className="text-white-2 mb-6">
                Estamos ubicados en el corazón de Juan Viñas, con fácil acceso y
                estacionamiento disponible.
              </p>
              <div className="space-y-3 mb-6 text-white-2">
                <div className="flex items-start">
                  <MapPinIcon className="w-5 h-5 text-secondary-1 mr-2 flex-shrink-0 mt-0.5" />
                  <p>Juan Viñas, Cartago, Costa Rica</p>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="w-5 h-5 text-secondary-1 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Lunes: 11:00 AM - 8:00 PM</p>
                    <p>Martes: Cerrado</p>
                    <p>Miércoles: 11:00 AM - 9:00 PM</p>
                    <p>Jueves: 11:00 AM - 9:30 PM</p>
                    <p>Viernes: 11:00 AM - 10:00 PM</p>
                    <p>Sábado: 11:00 AM - 10:00 PM</p>
                    <p>Domingo: 11:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center text-secondary-1 font-medium hover:text-secondary-3 active:text-secondary-2 transition-colors"
              >
                Ver ubicación y contacto
                <ArrowRightIcon size={16} className="ml-2" />
              </Link>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg h-64 md:h-auto">
              <img
                src="src\assets\local-donde-Carla.jpeg"
                alt="Exterior of Donde Carla restaurant with a warm, inviting facade, large windows, and an outdoor seating area visible, surrounded by lush green foliage under a clear sky."
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#2D1B14] mb-4">
              Síguenos en Instagram
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Mantente al día con nuestras últimas creaciones y promociones
              especiales siguiéndonos en Instagram.
            </p>
          </div>
          <InstagramFeed className="w-full" />
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/p/DBUyxSAx3kf/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium text-secondary-1 hover:text-secondary-3 active:text-secondary-2"
            >
              <InstagramIcon size={20} className="mr-2" />
              @dondecarla
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const featuredItems = [
  {
    name: "Casado Tradicional",
    price: "4500",
    description:
      "Arroz, frijoles, ensalada, plátano maduro y su elección de proteína.",
    image:
      "https://images.unsplash.com/photo-1599789197514-47270cd526b4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Arroz con Pollo",
    price: "3800",
    description: "Arroz salteado con pollo, vegetales y especias caseras.",
    image:
      "https://images.unsplash.com/photo-1594221708779-94832f4320d1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Batido de Frutas",
    price: "2200",
    description: "Batido natural con las frutas más frescas de la temporada.",
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=2071&auto=format&fit=crop",
  },
];

export default Home;
