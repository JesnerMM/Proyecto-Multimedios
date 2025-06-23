import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import WhatsAppButton from '../components/ui/WhatsAppButton';
const Home = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-[#2D1B14] text-white">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop')"
      }}>
          <div className="container mx-auto px-4 z-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Donde Carla
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Comida casera con el auténtico sabor de Juan Viñas
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/menu" className="bg-[#8B6F47] hover:bg-[#9d8259] text-white font-medium py-3 px-6 rounded-md transition-colors">
                Ver Menú
              </Link>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2D1B14] mb-4">
                Bienvenidos a Donde Carla
              </h2>
              <p className="text-gray-700 mb-6">
                Desde hace más de 15 años, Donde Carla ha sido el destino
                favorito para disfrutar de comida casera de alta calidad en Juan
                Viñas. Nuestro compromiso es ofrecerte un servicio rápido y
                personalizado en un ambiente acogedor.
              </p>
              <Link to="/about" className="inline-flex items-center text-[#8B6F47] font-medium hover:text-[#9d8259] transition-colors">
                Conoce nuestra historia
                <ArrowRightIcon size={16} className="ml-2" />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" alt="Interior del restaurante Donde Carla" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      {/* Featured Menu Items */}
      <section className="py-16 bg-[#F5F1EB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2D1B14] mb-12">
            Nuestros Platillos Destacados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-[#2D1B14]">
                      {item.name}
                    </h3>
                    <span className="text-[#8B6F47] font-bold">
                      ₡{item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>)}
          </div>
          <div className="mt-10 text-center">
            <Link to="/menu" className="inline-flex items-center bg-[#1F2937] hover:bg-[#374151] text-white font-medium py-3 px-6 rounded-md transition-colors">
              Ver Menú Completo
              <ArrowRightIcon size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* Location Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-[#2D1B14] mb-4">
                Encuéntranos
              </h2>
              <p className="text-gray-700 mb-6">
                Estamos ubicados en el corazón de Juan Viñas, con fácil acceso y
                estacionamiento disponible.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <MapPinIcon className="w-5 h-5 text-[#8B6F47] mr-2 flex-shrink-0 mt-0.5" />
                  <p>Juan Viñas, Cartago, Costa Rica</p>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="w-5 h-5 text-[#8B6F47] mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Lunes - Viernes: 11:00 AM - 9:00 PM</p>
                    <p>Sábado - Domingo: 12:00 PM - 10:00 PM</p>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center text-[#8B6F47] font-medium hover:text-[#9d8259] transition-colors">
                Ver ubicación y contacto
                <ArrowRightIcon size={16} className="ml-2" />
              </Link>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg h-64 md:h-auto">
              <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop" alt="Exterior del restaurante Donde Carla" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-12 bg-[#2D1B14] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para ordenar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ordena ahora por WhatsApp y disfruta de nuestra deliciosa comida en
            casa o pasa a visitarnos.
          </p>
          <div className="max-w-xs mx-auto">
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </div>;
};
// Sample featured menu items
const featuredItems = [{
  name: 'Casado Tradicional',
  price: '4500',
  description: 'Arroz, frijoles, ensalada, plátano maduro y su elección de proteína.',
  image: 'https://images.unsplash.com/photo-1599789197514-47270cd526b4?q=80&w=2070&auto=format&fit=crop'
}, {
  name: 'Arroz con Pollo',
  price: '3800',
  description: 'Arroz salteado con pollo, vegetales y especias caseras.',
  image: 'https://images.unsplash.com/photo-1594221708779-94832f4320d1?q=80&w=2070&auto=format&fit=crop'
}, {
  name: 'Batido de Frutas',
  price: '2200',
  description: 'Batido natural con las frutas más frescas de la temporada.',
  image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=2071&auto=format&fit=crop'
}];
// Importing icons at the end to avoid errors
import { MapPinIcon, ClockIcon } from 'lucide-react';
export default Home;