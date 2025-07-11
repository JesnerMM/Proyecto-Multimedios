import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "../ui/WhatsAppButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed w-full top-0 z-[70] bg-background-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="src\assets\logo-donde-carla.png"
              alt="Logo Donde Carla"
              className="h-10 md:h-12 rounded-full"
            />
            <span className="ml-2 text-2xl md:text-3xl font-playfair text-black-1 font-bold">
              Donde
            </span>
            <span className="ml-1 text-2xl md:text-4xl font-dancing text-golden-1">
              Carla
            </span>
          </Link>
          
          <button
            className="md:hidden text-secondary-1 z-[80] relative"
            onClick={toggleMenu}
            aria-label="Alternar menú"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-opensans text-black-1 font-medium hover:text-secondary-3 active:text-secondary-2 transition-colors ${
                  isActive ? "border-b-2 border-secondary-1 text-secondary-1 pb-1" : ""
                }`
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `font-opensans text-black-1 font-medium hover:text-secondary-3 active:text-secondary-2 transition-colors ${
                  isActive ? "border-b-2 border-secondary-1 text-secondary-1 pb-1" : ""
                }`
              }
            >
              Menú
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-opensans text-black-1 font-medium hover:text-secondary-3 active:text-secondary-2 transition-colors ${
                  isActive ? "border-b-2 border-secondary-1 text-secondary-1 pb-1" : ""
                }`
              }
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-opensans text-black-1 font-medium hover:text-secondary-3 active:text-secondary-2 transition-colors ${
                  isActive ? "border-b-2 border-secondary-1 text-secondary-1 pb-1" : ""
                }`
              }
            >
              Contacto
            </NavLink>
            <WhatsAppButton
              label="Ordenar"
              className="w-36 text-sm py-2.5 px-4 bg-ternary-1 hover:bg-ternary-3 active:bg-ternary-2 text-white-1 rounded-md"
            />
          </nav>
        </div>
      </header>

      {/* Menú de pantalla completa */}
      <div 
        className={`fixed inset-0 bg-[#F5F3F0] z-[60] transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full px-8 pt-20">
          {/* Enlaces del menú */}
          <nav className="flex flex-col items-center space-y-8 text-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-opensans text-4xl text-[#2D1B14] hover:text-golden-1 transition-all duration-300 transform hover:scale-105 ${
                  isActive ? 'text-golden-1 font-medium underline' : ''
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </NavLink>
            
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `font-opensans text-4xl text-[#2D1B14] hover:text-golden-1 transition-all duration-300 transform hover:scale-105 ${
                  isActive ? 'text-golden-1 font-medium underline' : ''
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Menú
            </NavLink>
            
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-opensans text-4xl text-[#2D1B14] hover:text-golden-1 transition-all duration-300 transform hover:scale-105 ${
                  isActive ? 'text-golden-1 font-medium underline' : ''
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </NavLink>
            
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-opensans text-4xl text-[#2D1B14] hover:text-golden-1 transition-all duration-300 transform hover:scale-105 ${
                  isActive ? 'text-golden-1 font-medium underline' : ''
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </NavLink>
          </nav>

          {/* Botón de ordenar original */}
          <div className="font-opensans mt-12">
            <WhatsAppButton
              label="Ordenar"
              className="w-full text-sm bg-[#2D1B14] hover:bg-[#1A110D] text-white rounded-md"
            />
          </div>

          {/* Copyright */}
          <div className="absolute bottom-8 text-center">
            <p className="font-opensans text-sm text-[#2D1B14] opacity-60">
              © 2024 Donde Carla
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;