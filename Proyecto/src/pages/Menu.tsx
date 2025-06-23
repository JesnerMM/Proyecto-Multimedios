import React, { useState, useRef } from "react";
import { SearchIcon, ChevronRightIcon, ChevronLeftIcon } from "lucide-react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("casados");
  const [searchTerm, setSearchTerm] = useState("");
  const categoriesContainerRef = useRef(null);

  const scrollCategories = (direction) => {
    if (categoriesContainerRef.current) {
      const scrollAmount = 200; // Ajusta la cantidad de scroll
      if (direction === "left") {
        categoriesContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        categoriesContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#F5F1EB] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#2D1B14] mb-8">
          Nuestro Menú
        </h1>

        <div className="mb-8">
          {/* Search input */}
          {/* Añadimos mb-4 o un espaciado similar para separar el input de las categorías */}
          <div className="relative mx-auto w-full max-w-lg mb-4">
            <input
              type="text"
              placeholder="Buscar platillos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent text-gray-700 placeholder-gray-400"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col gap-4">
              {/* Categories scroll */}
              <div className="relative flex items-center">
                <button
                  onClick={() => scrollCategories("left")}
                  className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md text-gray-600 hover:bg-gray-100 focus:outline-none -ml-4"
                >
                  <ChevronLeftIcon size={20} />
                </button>
                <div
                  ref={categoriesContainerRef}
                  className="flex flex-row overflow-x-auto pb-2 px-8 custom-scrollbar"
                  style={{
                    scrollbarWidth: "none",
                    MsOverflowStyle: "none", // Para IE/Edge
                  }}
                >
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex-shrink-0 flex flex-col items-center p-2 mx-2 transition-transform transform hover:scale-105 ${
                        activeCategory === category.id
                          ? "border-b-2 border-[#8B6F47]"
                          : ""
                      }`}
                    >
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center p-1.5 ${
                          activeCategory === category.id
                            ? "bg-[#8B6F47]"
                            : "bg-gray-200"
                        }`}
                      >
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-contain rounded-full"
                        />
                      </div>
                      <span
                        className={`mt-2 text-sm font-medium ${
                          activeCategory === category.id
                            ? "text-[#8B6F47]"
                            : "text-gray-700"
                        }`}
                      >
                        {category.name}
                      </span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => scrollCategories("right")}
                  className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md text-gray-600 hover:bg-gray-100 focus:outline-none -mr-4"
                >
                  <ChevronRightIcon size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-[#2D1B14]">
                      {item.name}
                    </h3>
                    <span className="text-[#8B6F47] font-bold">
                      ₡{item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {getCategoryName(item.category)}
                    </span>
                    {item.isSpecial && (
                      <span className="inline-block bg-[#D4AF37] text-white text-xs px-2 py-1 rounded">
                        Especial
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No se encontraron platillos que coincidan con tu búsqueda.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
              }}
              className="mt-4 text-[#8B6F47] hover:text-[#9d8259] font-medium"
            >
              Mostrar todos los platillos
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const getCategoryName = (categoryId) => {
  const category = categories.find((cat) => cat.id === categoryId);
  return category ? category.name : "";
};

const categories = [
  {
    id: "casados",
    name: "Casados",
    image: "/src/assets/casado.png",
  },
  {
    id: "pollo-y-lomo",
    name: "Pollo y Lomo",
    image: "/src/assets/pollo-y-lomo.png",
  },
  {
    id: "camarones-y-pescado",
    name: "Camarones y Pescado",
    image: "/src/assets/camarones-y-pescado.png",
  },
  {
    id: "tortilla-de-harina",
    name: "Tortilla de harina",
    image: "/src/assets/tortilla-de-harina.png",
  },
  {
    id: "pescado",
    name: "Pescado",
    image: "/src/assets/pescado.png",
  },
  {
    id: "tortilla-de-maiz",
    name: "Tortilla de maíz",
    image: "/src/assets/tortilla-de-maiz.png",
  },
  {
    id: "hamburguesas",
    name: "Hamburguesas",
    image: "/src/assets/hamburguesa.png",
  },
  {
    id: "papas-fritas",
    name: "Papas fritas",
    image: "/src/assets/papas-fritas.png",
  },
  {
    id: "entradas",
    name: "Entradas",
    image: "/src/assets/entradas.png",
  },
  { id: "all", name: "Todos", image: "/src/assets/todos.png" },
];

const menuItems = [
  {
    name: "Casado Tradicional",
    price: "4500",
    description:
      "Arroz, frijoles, ensalada, plátano maduro y su elección de proteína.",
    category: "casados",
    image:
      "https://images.unsplash.com/photo-1599789197514-47270cd526b4?q=80&w=2070&auto=format&fit=crop",
    isSpecial: true,
  },
  {
    name: "Arroz con Pollo",
    price: "3800",
    description: "Arroz salteado con pollo, vegetales y especias caseras.",
    category: "pollo-y-lomo",
    image:
      "https://images.unsplash.com/photo-1594221708779-94832f4320d1?q=80&w=2070&auto=format&fit=crop",
    isSpecial: false,
  },
  {
    name: "Sopa de Pollo",
    price: "3200",
    description: "Caldo de pollo casero con vegetales y fideos.",
    category: "pollo-y-lomo",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop",
    isSpecial: false,
  },
  {
    name: "Gallo Pinto",
    price: "2800",
    description: "Tradicional mezcla de arroz y frijoles con especias.",
    category: "casados",
    image:
      "https://images.unsplash.com/photo-1551889579-7d2c37b2c9e7?q=80&w=2070&auto=format&fit=crop",
    isSpecial: false,
  },
  {
    name: "Patacones",
    price: "2200",
    description:
      "Plátanos verdes fritos y prensados, servidos con frijoles molidos.",
    category: "entradas",
    image:
      "https://images.unsplash.com/photo-1626198226928-ca8c9af16999?q=80&w=2070&auto=format&fit=crop",
    isSpecial: false,
  },
  {
    name: "Ensalada Fresca",
    price: "1800",
    description: "Mezcla de lechugas, tomate, pepino y aderezo de la casa.",
    category: "entradas",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
    isSpecial: false,
  },
  {
    name: "Batido de Frutas",
    price: "2200",
    description: "Batido natural con las frutas más frescas de la temporada.",
    category: "bebidas", // Nueva categoría
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=2071&auto=format&fit=crop",
    isSpecial: false,
  },
  {
    name: "Café Chorreado",
    price: "1500",
    description: "Café tradicional costarricense preparado al momento.",
    category: "bebidas", // Nueva categoría
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    isSpecial: true,
  },
  {
    name: "Tres Leches",
    price: "2500",
    description: "Esponjoso bizcocho bañado en tres tipos de leche.",
    category: "postres", // Nueva categoría
    image:
      "https://images.unsplash.com/photo-1602663491496-37963b3c2b75?q=80&w=2070&auto=format&fit=crop",
    isSpecial: true,
  },
  {
    name: "Hamburguesa Clásica",
    price: "4000",
    description: "Carne, lechuga, tomate, cebolla, queso y salsa especial.",
    category: "hamburguesas",
    image:
      "https://images.unsplash.com/photo-1568901220263-d3a90623a9d9?q=80&w=2070&auto=format&fit=crop",
    isSpecial: false,
  },
  {
    name: "Papas Fritas Grandes",
    price: "1500",
    description: "Porción grande de papas fritas crujientes.",
    category: "papas-fritas",
    image:
      "https://images.unsplash.com/photo-1630404495572-c2e36d4f40f3?q=80&w=2070&auto=format&fit=crop",
    isSpecial: false,
  },
  {
    name: "Tacos de Maíz",
    price: "3000",
    description:
      "Dos tacos de tortilla de maíz con carne, repollo y pico de gallo.",
    category: "tortilla-de-maiz",
    image:
      "https://images.unsplash.com/photo-1562967912-3269d724036f?q=80&w=2070&auto=format&fit=crop",
    isSpecial: false,
  },
  {
    name: "Burrito de Pollo",
    price: "4200",
    description:
      "Tortilla de harina rellena de pollo, arroz, frijoles y queso.",
    category: "tortilla-de-harina",
    image:
      "https://images.unsplash.com/photo-1524385392686-e7e003185360?q=80&w=2070&auto=format&fit=crop",
    isSpecial: false,
  },
  {
    name: "Pescado Entero Frito",
    price: "6000",
    description:
      "Pescado entero fresco, frito a la perfección, servido con ensalada.",
    category: "pescado",
    image:
      "https://images.unsplash.com/photo-1593540026229-37f2c61e4b9c?q=80&w=2070&auto=format&fit=crop",
    isSpecial: true,
  },
  {
    name: "Camarones al Ajillo",
    price: "5500",
    description: "Tiernos camarones salteados en salsa de ajo y mantequilla.",
    category: "camarones-y-pescado",
    image:
      "https://images.unsplash.com/photo-1582236371757-b00350d7e6d0?q=80&w=2070&auto=format&fit=crop",
    isSpecial: false,
  },
];

export default Menu;
