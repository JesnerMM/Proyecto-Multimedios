import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import WhatsAppButton from "../ui/WhatsAppButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full top-0 z-50 bg-background-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="src\assets\logo-donde-carla.png"
            alt="Logo Donde Carla"
            className="h-10 md:h-12 rounded-full"
          />
          <span className="ml-2 text-2xl md:text-3xl font-playfair text-black-1 font-bold">
            {" "}
            {/* Añadido font-bold */}
            Donde
          </span>
          <span className="ml-1 text-2xl md:text-4xl font-dancing text-golden-1">
            Carla
          </span>
        </Link>
        <button
          className="md:hidden text-secondary-1"
          onClick={toggleMenu}
          aria-label="Alternar menú"
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-black-1 font-medium hover:text-secondary-3 active:text-secondary-2 transition-colors ${
                isActive ? "border-b-2 border-secondary-1 text-secondary-1 pb-1" : ""
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `text-black-1 font-medium hover:text-secondary-3 active:text-secondary-2 transition-colors ${
                isActive ? "border-b-2 border-secondary-1 text-secondary-1 pb-1" : ""
              }`
            }
          >
            Menú
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-black-1 font-medium hover:text-secondary-3 active:text-secondary-2 transition-colors ${
                isActive ? "border-b-2 border-secondary-1 text-secondary-1 pb-1" : ""
              }`
            }
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-black-1 font-medium hover:text-secondary-3 active:text-secondary-2 transition-colors ${
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

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <NavLink
              to="/"
              className="block py-2 text-[#2D1B14] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/menu"
              className="block py-2 text-[#2D1B14] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Menú
            </NavLink>
            <NavLink
              to="/about"
              className="block py-2 text-[#2D1B14] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/contact"
              className="block py-2 text-[#2D1B14] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </NavLink>
            <div className="py-2">
              <WhatsAppButton
                label="Ordenar"
                className="w-full text-sm bg-[#2D1B14] hover:bg-[#1A110D] text-white rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
