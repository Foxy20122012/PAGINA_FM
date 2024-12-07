import { Menu } from "@mantine/core";
import { IconHome, IconInfoCircle, IconTool } from "@tabler/icons-react";

const iconMap = {
  home: <IconHome size={20} />,
  "info-circle": <IconInfoCircle size={20} />,
  tool: <IconTool size={20} />,
};

export default function CustomNavbar({ model }) {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a
          href="/"
          className="text-3xl font-extrabold text-white hover:text-blue-200 transition-all duration-300"
        >
          INEDFM
        </a>

        {/* Navbar Links */}
        <div className="hidden md:flex items-center space-x-8">
          {model.map((item) => (
            <div className="relative group" key={item.label}>
              {/* Parent Link */}
              <a
                href={item.href}
                className="flex items-center text-white hover:text-blue-200 transition-all duration-300"
              >
                {iconMap[item.icon]} <span className="ml-2">{item.label}</span>
              </a>
              {/* Dropdown */}
              {item.children && (
                <div className="absolute top-full left-0 mt-2 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action (Optional) */}
        <a
          href="/contact"
          className="hidden md:block bg-white text-blue-700 px-4 py-2 rounded-md shadow hover:bg-gray-100 transition-all duration-300"
        >
          Contact Us
        </a>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <button className="text-white focus:outline-none">
                ☰
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              {model.map((item) => (
                <Menu.Item key={item.label}>
                  <a href={item.href} className="text-gray-700">
                    {item.label}
                  </a>
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </div>
      </nav>
    </div>
  );
}
