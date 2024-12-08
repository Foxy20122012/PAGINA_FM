import { useState } from "react";
import {
  IconHome,
  IconInfoCircle,
  IconTool,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

const iconMap = {
  home: <IconHome size={24} />,
  "info-circle": <IconInfoCircle size={24} />,
  tool: <IconTool size={24} />,
};

export default function CustomNavbar({ model, title, logo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (e, label) => {
    e.preventDefault();
    setActiveSubmenu((prev) => (prev === label ? null : label));
  };

  return (
    <div className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-6">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl md:text-3xl font-extrabold text-gray-800 hover:text-gray-600 transition-all"
        >
          {logo}
        </a>

        {/* Navbar Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-8">
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
                <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg transition-all duration-300">
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
          className="lg:hidden text-gray-800 focus:outline-none text-2xl"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
        </button>
      </nav>

      {/* Mobile and Tablet Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
          {/* Close Button */}
          <button
            className="text-gray-800 text-3xl self-end mb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <IconX size={28} />
          </button>

          {model.map((item) => (
            <div key={item.label} className="mb-4">
              <div
                className="flex items-center justify-between text-gray-800 text-xl font-semibold cursor-pointer hover:text-blue-500"
                onClick={(e) => {
                  if (item.children && item.children.length > 0) {
                    toggleSubmenu(e, item.label);
                  }
                }}
              >
                <div className="flex items-center space-x-2">
                  {iconMap[item.icon]}
                  <span>{item.label}</span>
                </div>
                {item.children && (
                  <span>{activeSubmenu === item.label ? "▲" : "▼"}</span>
                )}
              </div>
              {item.children && item.children.length > 0 && activeSubmenu === item.label && (
                <div className="mt-2 ml-6 space-y-2">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block text-lg text-gray-600 hover:text-blue-500"
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
