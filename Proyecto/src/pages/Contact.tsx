import React, { lazy } from 'react';
import { MapPinIcon, ClockIcon, InstagramIcon, MessageCircleIcon } from 'lucide-react';
const Contact = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    alert('Mensaje enviado. ¡Gracias por contactarnos!');
  };
  return <div className="w-full bg-[#F5F1EB]">
      {/* Hero Section */}
      <section className="relative bg-[#2D1B14] text-white">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="relative h-[30vh] bg-cover bg-center flex items-center justify-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop')"
      }}>
          <div className="container mx-auto px-4 z-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Estamos listos para atenderte
            </p>
          </div>
        </div>
      </section>
      {/* Contact Info and Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-[#2D1B14] mb-6">
                Información de Contacto
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPinIcon className="w-6 h-6 text-[#8B6F47] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#2D1B14]">Dirección</h3>
                    <p className="text-gray-700">
                      100m Este del Parque Central, Juan Viñas, Cartago, Costa
                      Rica
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="w-6 h-6 text-[#8B6F47] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#2D1B14]">Horario</h3>
                    <p className="text-gray-700">
                      Lunes - Viernes: 11:00 AM - 9:00 PM
                    </p>
                    <p className="text-gray-700">
                      Sábado - Domingo: 12:00 PM - 10:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageCircleIcon className="w-6 h-6 text-[#8B6F47] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#2D1B14]">WhatsApp</h3>
                    <p className="text-gray-700">+506 1234-5678</p>
                    <a href="https://wa.me/50612345678?text=Hola,%20quiero%20hacer%20un%20pedido" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 bg-[#1F2937] hover:bg-[#374151] text-white font-medium py-2 px-4 rounded-md transition-colors">
                      Ordenar por WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <InstagramIcon className="w-6 h-6 text-[#8B6F47] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#2D1B14]">Instagram</h3>
                    <a href="https://instagram.com/dondecarla" target="_blank" rel="noopener noreferrer" className="text-[#8B6F47] hover:text-[#9d8259]">
                      @dondecarla
                    </a>
                  </div>
                </div>
              </div>
              {/* Map */}
              <div className="h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15721.096697724362!2d-83.75551161298818!3d9.925640112744494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0d5a26bd7e887%3A0x9c1e8c0a0a7afa6e!2sJuan%20Vi%C3%B1as%2C%20Cartago%20Province%2C%20Costa%20Rica!5e0!3m2!1sen!2sus!4v1652432193696!5m2!1sen!2sus" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa de Donde Carla" />
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#2D1B14] mb-6">
                Envíanos un Mensaje
              </h2>
              <form onSubmit={handleSubmit} className="bg-[#F5F1EB] p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-[#2D1B14] font-medium mb-2">
                    Nombre
                  </label>
                  <input type="text" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-[#2D1B14] font-medium mb-2">
                    Correo Electrónico
                  </label>
                  <input type="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent" />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-[#2D1B14] font-medium mb-2">
                    Teléfono
                  </label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent" />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-[#2D1B14] font-medium mb-2">
                    Asunto
                  </label>
                  <input type="text" id="subject" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-[#2D1B14] font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea id="message" rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#1F2937] hover:bg-[#374151] text-white font-medium py-3 px-4 rounded-md transition-colors">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Instagram Feed */}
      <section className="py-16 bg-[#F5F1EB]">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post, index) => <a key={index} href="https://instagram.com/dondecarla" target="_blank" rel="noopener noreferrer" className="block aspect-square rounded-lg overflow-hidden transition-transform hover:scale-105">
                <img src={post} alt="Instagram post" className="w-full h-full object-cover" />
              </a>)}
          </div>
          <div className="text-center mt-8">
            <a href="https://instagram.com/dondecarla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#8B6F47] font-medium hover:text-[#9d8259]">
              <InstagramIcon size={20} className="mr-2" />
              @dondecarla
            </a>
          </div>
        </div>
      </section>
    </div>;
};
// Sample Instagram posts
const instagramPosts = ['https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1922&auto=format&fit=crop', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop', 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop', 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1965&auto=format&fit=crop', 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2010&auto=format&fit=crop', 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1974&auto=format&fit=crop'];
export default Contact;