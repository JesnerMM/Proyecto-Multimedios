import React, { useState } from 'react';
import { SearchIcon } from 'lucide-react';
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  // Filter menu items based on category and search term
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return <div className="w-full bg-[#F5F1EB] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#2D1B14] mb-8">
          Nuestro Menú
        </h1>
        {/* Search and filter */}
        <div className="mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative flex-grow">
                <input type="text" placeholder="Buscar platillos..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent" />
                <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === category.id ? 'bg-[#8B6F47] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    {category.name}
                  </button>)}
              </div>
            </div>
          </div>
        </div>
        {/* Menu items */}
        {filteredItems.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
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
                  <p className="text-gray-600 text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {getCategoryName(item.category)}
                    </span>
                    {item.isSpecial && <span className="inline-block bg-[#D4AF37] text-white text-xs px-2 py-1 rounded">
                        Especial
                      </span>}
                  </div>
                </div>
              </div>)}
          </div> : <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No se encontraron platillos que coincidan con tu búsqueda.
            </p>
            <button onClick={() => {
          setSearchTerm('');
          setActiveCategory('all');
        }} className="mt-4 text-[#8B6F47] hover:text-[#9d8259] font-medium">
              Mostrar todos los platillos
            </button>
          </div>}
      </div>
    </div>;
};
// Helper function to get category name from ID
const getCategoryName = categoryId => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.name : '';
};
// Categories
const categories = [{
  id: 'all',
  name: 'Todos'
}, {
  id: 'main',
  name: 'Platos Principales'
}, {
  id: 'sides',
  name: 'Acompañamientos'
}, {
  id: 'drinks',
  name: 'Bebidas'
}, {
  id: 'desserts',
  name: 'Postres'
}];
// Sample menu items
const menuItems = [{
  name: 'Casado Tradicional',
  price: '4500',
  description: 'Arroz, frijoles, ensalada, plátano maduro y su elección de proteína.',
  category: 'main',
  image: 'https://images.unsplash.com/photo-1599789197514-47270cd526b4?q=80&w=2070&auto=format&fit=crop',
  isSpecial: true
}, {
  name: 'Arroz con Pollo',
  price: '3800',
  description: 'Arroz salteado con pollo, vegetales y especias caseras.',
  category: 'main',
  image: 'https://images.unsplash.com/photo-1594221708779-94832f4320d1?q=80&w=2070&auto=format&fit=crop',
  isSpecial: false
}, {
  name: 'Sopa de Pollo',
  price: '3200',
  description: 'Caldo de pollo casero con vegetales y fideos.',
  category: 'main',
  image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop',
  isSpecial: false
}, {
  name: 'Gallo Pinto',
  price: '2800',
  description: 'Tradicional mezcla de arroz y frijoles con especias.',
  category: 'main',
  image: 'https://images.unsplash.com/photo-1551889579-7d2c37b2c9e7?q=80&w=2070&auto=format&fit=crop',
  isSpecial: false
}, {
  name: 'Patacones',
  price: '2200',
  description: 'Plátanos verdes fritos y prensados, servidos con frijoles molidos.',
  category: 'sides',
  image: 'https://images.unsplash.com/photo-1626198226928-ca8c9af16999?q=80&w=2070&auto=format&fit=crop',
  isSpecial: false
}, {
  name: 'Ensalada Fresca',
  price: '1800',
  description: 'Mezcla de lechugas, tomate, pepino y aderezo de la casa.',
  category: 'sides',
  image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
  isSpecial: false
}, {
  name: 'Batido de Frutas',
  price: '2200',
  description: 'Batido natural con las frutas más frescas de la temporada.',
  category: 'drinks',
  image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=2071&auto=format&fit=crop',
  isSpecial: false
}, {
  name: 'Café Chorreado',
  price: '1500',
  description: 'Café tradicional costarricense preparado al momento.',
  category: 'drinks',
  image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
  isSpecial: true
}, {
  name: 'Tres Leches',
  price: '2500',
  description: 'Esponjoso bizcocho bañado en tres tipos de leche.',
  category: 'desserts',
  image: 'https://images.unsplash.com/photo-1602663491496-37963b3c2b75?q=80&w=2070&auto=format&fit=crop',
  isSpecial: true
}];
export default Menu;