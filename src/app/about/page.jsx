'use client';

import { FaWhatsapp, FaGlobe } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20">
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">Acerca del Proyecto</h1>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Este proyecto es una iniciativa desarrollada por <strong>CacaoByte S.A.</strong>, una empresa
          especializada en soluciones tecnológicas, desarrollo de software y outsourcing tecnológico.
          Nuestro enfoque principal es transformar ideas en herramientas útiles y accesibles, con un
          compromiso particular hacia la innovación tecnológica.
        </p>
      </div>

      {/* Contenido principal */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nuestra Historia</h2>
        <p className="text-gray-700 leading-relaxed">
          CacaoByte S.A. surgió con la misión de cerrar las brechas tecnológicas y facilitar el acceso
          a herramientas innovadoras en diversos sectores, incluyendo el educativo. Este proyecto nació
          como parte de una colaboración entre nuestros miembros para acercar la tecnología al
          aprendizaje, optimizando la calidad y el filtrado del contenido educativo. A través de este
          esfuerzo, buscamos no solo transformar la educación, sino también destacar nuestro
          compromiso con la excelencia en el desarrollo de aplicaciones y servicios tecnológicos.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Además, nos dedicamos al desarrollo de aplicaciones web y soluciones personalizadas para
          empresas, con un enfoque en el <strong>outsourcing</strong>. Ayudamos a nuestros clientes a
          alcanzar sus objetivos tecnológicos con soluciones escalables y de alta calidad.
        </p>
        <div className="flex items-center mt-6">
          <a
            href="https://www.cacaobyte.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:underline mr-4"
          >
            <FaGlobe size={20} className="mr-2" />
            Página oficial de CacaoByte S.A.
          </a>
          <a
            href="https://wa.me/50258261532?text=¡Hola!%20Estoy%20interesado%20en%20conocer%20más%20sobre%20CacaoByte%20S.A.%20y%20sus%20proyectos."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-600 hover:underline"
          >
            <FaWhatsapp size={20} className="mr-2" />
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
