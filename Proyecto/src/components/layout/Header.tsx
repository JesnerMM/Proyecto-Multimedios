import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import WhatsAppButton from '../ui/WhatsAppButton';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="https://placehold.co/200x60/F5F1EB/2D1B14?text=Donde+Carla" alt="Donde Carla Logo" className="h-10 md:h-12" />
        </Link>
        {/* Mobile menu button */}
        <button className="md:hidden text-[#2D1B14]" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={({
          isActive
        }) => `text-[#2D1B14] font-medium hover:text-[#8B6F47] transition-colors ${isActive ? 'border-b-2 border-[#8B6F47]' : ''}`}>
            Inicio
          </NavLink>
          <NavLink to="/menu" className={({
          isActive
        }) => `text-[#2D1B14] font-medium hover:text-[#8B6F47] transition-colors ${isActive ? 'border-b-2 border-[#8B6F47]' : ''}`}>
            Menú
          </NavLink>
          <NavLink to="/about" className={({
          isActive
        }) => `text-[#2D1B14] font-medium hover:text-[#8B6F47] transition-colors ${isActive ? 'border-b-2 border-[#8B6F47]' : ''}`}>
            Nosotros
          </NavLink>
          <NavLink to="/contact" className={({
          isActive
        }) => `text-[#2D1B14] font-medium hover:text-[#8B6F47] transition-colors ${isActive ? 'border-b-2 border-[#8B6F47]' : ''}`}>
            Contacto
          </NavLink>
          <WhatsAppButton compact={true} />
        </nav>
      </div>
      {/* Mobile navigation */}
      {isMenuOpen && <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <NavLink to="/" className={({
          isActive
        }) => `block py-2 text-[#2D1B14] font-medium ${isActive ? 'text-[#8B6F47]' : ''}`} onClick={() => setIsMenuOpen(false)}>
              Inicio
            </NavLink>
            <NavLink to="/menu" className={({
          isActive
        }) => `block py-2 text-[#2D1B14] font-medium ${isActive ? 'text-[#8B6F47]' : ''}`} onClick={() => setIsMenuOpen(false)}>
              Menú
            </NavLink>
            <NavLink to="/about" className={({
          isActive
        }) => `block py-2 text-[#2D1B14] font-medium ${isActive ? 'text-[#8B6F47]' : ''}`} onClick={() => setIsMenuOpen(false)}>
              Nosotros
            </NavLink>
            <NavLink to="/contact" className={({
          isActive
        }) => `block py-2 text-[#2D1B14] font-medium ${isActive ? 'text-[#8B6F47]' : ''}`} onClick={() => setIsMenuOpen(false)}>
              Contacto
            </NavLink>
            <div className="py-2">
              <WhatsAppButton compact={false} />
            </div>
          </div>
        </div>}
    </header>;
};
export default Header;