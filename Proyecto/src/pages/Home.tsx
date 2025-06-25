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

interface HomeProps {
  useElementOnScreen: (options: any) => [React.RefObject<any>, boolean];
}

const Home: React.FC<HomeProps> = ({ useElementOnScreen }) => {
  // Hooks para animaciones
  const [bannerRef, bannerVisible] = useElementOnScreen({ threshold: 0.3 });
  const [locationTextRef, locationTextVisible] = useElementOnScreen({ threshold: 0 });
  const [locationImageRef, locationImageVisible] = useElementOnScreen({ threshold: 0 });
  const [instaTitleRef, instaTitleVisible] = useElementOnScreen({ threshold: 0 });
  const [instaFeedRef, instaFeedVisible] = useElementOnScreen({ threshold: 0 });
  const [instaLinkRef, instaLinkVisible] = useElementOnScreen({ threshold: 0 });

  return (
    <div className="w-full">

      {/* Banner */}
      <section className="relative text-white">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div
          ref={bannerRef}
          className="relative h-[50vh] md:h-[46vh] flex items-center justify-center overflow-hidden"
        >
          <img
            src="src/assets/banner.jpeg"
            alt="Interior de Donde Carla"
            className="absolute object-cover inset-0 w-full h-full brightness-50 contrast-125"
          />
          <div className="container mx-auto px-4 z-20 text-center">
            <h1
              className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-4 ${
                bannerVisible ? "animate__animated animate__fadeInDown" : "opacity-0"
              }`}
            >
              <span className="font-playfair text-white-1">Donde </span>
              <span className="font-dancing text-golden-1">Carla</span>
            </h1>
            <p
              className={`text-white-1 text-xl md:text-2xl m-8 max-w-2xl mx-auto ${
                bannerVisible ? "animate__animated animate__fadeInUp" : "opacity-0"
              }`}
            >
              Disfruta de la mejor comida y siéntete como en casa.
            </p>
            <div className="grid justify-items-stretch gap-4 md:flex md:flex-row md:justify-center md:gap-40">
              <Link
                to="/menu"
                className={`justify-self-center md:flex md:items-center md:justify-center bg-secondary-1 hover:bg-secondary-3 active:bg-secondary-2 text-white-1 font-medium text-sm py-2.5 px-4 rounded-md w-80 md:w-48 text-center ${
                  bannerVisible ? "animate__animated animate__fadeIn" : "opacity-0"
                }`}
              >
                Ver Menú
              </Link>
              <WhatsAppButton
                className={`justify-self-center w-80 md:w-48 bg-ternary-1 hover:bg-ternary-3 active:bg-ternary-2 text-white-1 text-sm py-2.5 px-4 ${
                  bannerVisible ? "animate__animated animate__fadeIn" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Encuéntranos */}
      <section className="py-16 bg-background-white container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            ref={locationTextRef}
            className={`order-2 md:order-1 ${
              locationTextVisible ? "animate__animated animate__fadeInLeft" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Encuéntranos</h2>
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
          <div
            ref={locationImageRef}
            className={`order-1 md:order-2 rounded-lg overflow-hidden shadow-lg h-64 md:h-auto ${
              locationImageVisible ? "animate__animated animate__fadeInRight" : "opacity-0"
            }`}
          >
            <img
              src="src/assets/local-donde-Carla.jpeg"
              alt="Exterior of Donde Carla restaurant with a warm, inviting facade, large windows, and an outdoor seating area visible, surrounded by lush green foliage under a clear sky."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Síguenos en Instagram */}
      <section className="py-16 bg-background-beige container mx-auto px-4">
        <div
          ref={instaTitleRef}
          className={`text-center mb-10 ${
            instaTitleVisible ? "animate__animated animate__fadeInDown" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-[#2D1B14] mb-4">Síguenos en Instagram</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Mantente al día con nuestras últimas creaciones y promociones especiales siguiéndonos en Instagram.
          </p>
        </div>
        <div
          ref={instaFeedRef}
          className={`flex justify-center ${
            instaFeedVisible ? "animate__animated animate__fadeIn" : "opacity-0"
          }`}
        >
          <InstagramFeed className="w-full" />
        </div>
        <div
          ref={instaLinkRef}
          className={`text-center mt-8 ${
            instaLinkVisible ? "animate__animated animate__fadeInUp" : "opacity-0"
          }`}
        >
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
      </section>
    </div>
  );
};

export default Home;