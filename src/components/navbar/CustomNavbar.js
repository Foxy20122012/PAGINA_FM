import { useState } from "react";
import { IconHome, IconInfoCircle, IconTool } from "@tabler/icons-react";

const iconMap = {
  home: <IconHome size={20} />,
  "info-circle": <IconInfoCircle size={20} />,
  tool: <IconTool size={20} />,
};

export default function CustomNavbar({ model, title, logo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (e, label) => {
    e.preventDefault(); // Evita recargar la página
    setActiveSubmenu((prev) => (prev === label ? null : label)); // Abre o cierra el submenú
  };

  return (
    <div className="w-full fixed top-0 left-0 bg-white shadow-md border-b border-gray-200 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl md:text-3xl font-extrabold text-gray-800 hover:text-gray-600 transition-all"
        >
          {logo}
        </a>

        {/* Navbar Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {model.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href || "#"}
                className="flex items-center text-gray-800 hover:text-blue-500 transition-all space-x-2 font-medium"
                onClick={(e) => {
                  if (item.children && item.children.length > 0) {
                    toggleSubmenu(e, item.label);
                  }
                }}
              >
                {iconMap[item.icon]}
                <span>{item.label}</span>
              </a>
              {item.children && item.children.length > 0 && activeSubmenu === item.label && (
                <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg transition-all duration-300 transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-6 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded transition-all"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none text-xl"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          {model.map((item) => (
            <div key={item.label} className="px-6 py-2">
              <div
                className="flex items-center justify-between text-gray-800 hover:text-blue-600 cursor-pointer"
                onClick={(e) => {
                  if (item.children && item.children.length > 0) {
                    toggleSubmenu(e, item.label);
                  }
                }}
              >
                <div className="flex items-center space-x-2">
                  {iconMap[item.icon]}
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.children && item.children.length > 0 && (
                  <span>{activeSubmenu === item.label ? "▲" : "▼"}</span>
                )}
              </div>
              {item.children && item.children.length > 0 && activeSubmenu === item.label && (
                <div className="mt-2 pl-4 space-y-1">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-all"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
