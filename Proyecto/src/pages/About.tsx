import React from 'react';
import { CheckIcon } from 'lucide-react';
const About = () => {
  return <div className="w-full bg-[#F5F1EB]">
      {/* Hero Section */}
      <section className="relative bg-[#2D1B14] text-white">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="relative h-[40vh] md:h-[50vh] bg-cover bg-center flex items-center justify-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=2070&auto=format&fit=crop')"
      }}>
          <div className="container mx-auto px-4 z-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre Nosotros
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
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
              <img src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop" alt="Cocineros preparando comida en Donde Carla" className="w-full h-auto" />
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
                Garantizar la mejor experiencia gastronómica a través de
                platillos caseros de alta calidad, servicio rápido y atención
                personalizada, creando un ambiente acogedor donde nuestros
                clientes se sientan como en casa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2D1B14] mb-4">
                Visión
              </h3>
              <p className="text-gray-700">
                Ser un referente culinario en la región, reconocidos por
                preservar la autenticidad de la cocina costarricense, innovando
                constantemente para satisfacer las necesidades de nuestros
                clientes sin perder nuestra esencia.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2D1B14] mb-4">
                Valores
              </h3>
              <ul className="space-y-2">
                {values.map((value, index) => <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-[#8B6F47] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{value}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2D1B14] mb-12">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((member, index) => <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-[#2D1B14]">
                  {member.name}
                </h3>
                <p className="text-[#8B6F47]">{member.role}</p>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
// Values list
const values = ['Calidad en cada platillo', 'Satisfacción del cliente', 'Honestidad y transparencia', 'Compromiso con la comunidad', 'Trabajo en equipo', 'Mejora continua'];
// Team members
const team = [{
  name: 'Carla Rodríguez',
  role: 'Fundadora y Chef',
  image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop'
}, {
  name: 'Miguel Sánchez',
  role: 'Chef Principal',
  image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1954&auto=format&fit=crop'
}, {
  name: 'Laura Jiménez',
  role: 'Gerente',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop'
}, {
  name: 'Carlos Mora',
  role: 'Atención al Cliente',
  image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop'
}];
export default About;