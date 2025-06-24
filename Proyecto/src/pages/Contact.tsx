import React from "react";
import {
  MapPinIcon,
  ClockIcon,
  InstagramIcon,
  MessageCircleIcon,
} from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Mensaje enviado. ¡Gracias por contactarnos!");
  };

  return (
    <div className="w-full bg-background-white">
      <section className="relative bg-[#2D1B14] text-white">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="relative h-[50vh] md:h-[25vh] flex items-center justify-center overflow-hidden">
          <img
            src="src/assets/banner.jpeg"
            alt="Interior de Donde Carla"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="container mx-auto px-4 z-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="font-playfair text-white">Contáctanos </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Estamos listos para atenderte
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                    <p>Lunes: 11:00 AM - 8:00 PM</p>
                    <p>Martes: Cerrado</p>
                    <p>Miércoles: 11:00 AM - 9:00 PM</p>
                    <p>Jueves: 11:00 AM - 9:30 PM</p>
                    <p>Viernes: 11:00 AM - 10:00 PM</p>
                    <p>Sábado: 11:00 AM - 10:00 PM</p>
                    <p>Domingo: 11:00 AM - 9:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageCircleIcon className="w-6 h-6 text-[#8B6F47] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#2D1B14]">WhatsApp</h3>
                    <p className="text-gray-700">+506 1234-5678</p>
                    <a
                      href="https://wa.me/50612345678?text=Hola,%20quiero%20hacer%20un%20pedido"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 bg-[#1F2937] hover:bg-[#374151] text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      Ordenar por WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <InstagramIcon className="w-6 h-6 text-[#8B6F47] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#2D1B14]">Instagram</h3>
                    <a
                      href="https://instagram.com/dondecarla"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8B6F47] hover:text-[#9d8259]"
                    >
                      @dondecarla
                    </a>
                  </div>
                </div>
              </div>
              <div className="h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15721.096697724362!2d-83.75551161298818!3d9.925640112744494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0d5a26bd7e887%3A0x9c1e8c0a0a7afa6e!2sJuan%20Vi%C3%B1as%2C%20Cartago%20Province%2C%20Costa%20Rica!5e0!3m2!1sen!2sus!4v1652432193696!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Donde Carla"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#2D1B14] mb-6">
                Envíanos un Mensaje
              </h2>
              <form
                onSubmit={handleSubmit}
                className="bg-[#F5F1EB] p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-[#2D1B14] font-medium mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-[#2D1B14] font-medium mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-[#2D1B14] font-medium mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-[#2D1B14] font-medium mb-2"
                  >
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-[#2D1B14] font-medium mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1F2937] hover:bg-[#374151] text-white font-medium py-3 px-4 rounded-md transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
