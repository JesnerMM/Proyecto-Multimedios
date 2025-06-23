import React from "react";
import { CheckIcon } from "lucide-react";

const About = () => {
  return (
    <div className="w-full bg-[#F5F1EB]">
      {/* Hero Section con imagen del banner sin botones */}
      <section className="relative bg-[#2D1B14] text-white">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src="src/assets/banner.jpeg"
            alt="Interior de Donde Carla"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="container mx-auto px-4 z-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="font-playfair text-white">Sobre Nosotros </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Conoce la historia y los valores detrás de Donde Carla
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2D1B14] mb-4">
                Nuestra Historia
              </h2>
              <p className="text-gray-700 mb-4">
                Donde Carla nació hace más de 15 años como un pequeño negocio
                familiar en Juan Viñas. Fundado por Carla Rodríguez, quien
                siempre soñó con compartir sus recetas familiares con la
                comunidad.
              </p>
              <p className="text-gray-700 mb-4">
                Lo que comenzó como un modesto local con apenas cinco mesas, se
                ha convertido en uno de los restaurantes más queridos de la
                zona, manteniendo siempre la esencia casera y el toque personal
                que nos caracteriza.
              </p>
              <p className="text-gray-700">
                A lo largo de los años, hemos crecido gracias al apoyo de
                nuestros fieles clientes, quienes nos han permitido expandir
                nuestro menú y mejorar nuestras instalaciones, pero siempre
                conservando la calidad y el sabor que nos distingue.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="src\assets\nuestra-historia.jpeg"
                alt="Cocineros preparando comida en Donde Carla"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-[#F5F1EB]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2D1B14] mb-4">
              Misión, Visión y Valores
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              En Donde Carla, nos guiamos por principios claros que definen
              quiénes somos y hacia dónde vamos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2D1B14] mb-4">
                Misión
              </h3>
              <p className="text-gray-700">
                Promover la calidad y satisfacción del cliente a través de una
                cocina consistente, atención personalizada y productos frescos,
                manteniendo la autenticidad de los sabores y la calidez del
                servicio para fidelizar a nuestros clientes y destacar en el
                mercado local.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2D1B14] mb-4">
                Visión
              </h3>
              <p className="text-gray-700">
                Consolidarnos como un referente gastronómico en la zona,
                reconocido por nuestra excelencia culinaria y servicio ágil,
                innovando con nuevos platillos y mejoras continuas en el local
                para atraer a más clientes y, a largo plazo, establecernos en un
                espacio propio que refleje nuestra identidad y crecimiento.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2D1B14] mb-4">
                Valores
              </h3>
              <ul className="space-y-2">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-[#8B6F47] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const values = [
  "Entregar calidad en cada platillo",
  "Mantener la satisfacción del cliente",
  "Honestidad, transparencia y sinceridad",
  "Compromiso con la comunidad",
  "Trabajo en equipo",
  "Mejora continua",
];

export default About;
