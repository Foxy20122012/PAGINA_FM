import { FaWhatsapp, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 space-y-2 sm:space-y-0">
        {/* Copyrigth Section */}
        <div className="text-center sm:text-left text-xs sm:text-sm">
          © {new Date().getFullYear()} <span className="font-bold">CacaoByte S.A.</span>. Todos los derechos reservados.
        </div>
        
        {/* Links Section */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
          <a
            href="https://www.cacaobyte.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-400 transition duration-300"
          >
            <FaGlobe size={18} className="mr-2" />
            Página Oficial
          </a>
          <a
            href="https://wa.me/50258261532?text=¡Hola!%20Estoy%20interesado%20en%20conocer%20más%20sobre%20CacaoByte%20S.A.%20y%20sus%20proyectos."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-green-400 transition duration-300"
          >
            <FaWhatsapp size={18} className="mr-2" />
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
