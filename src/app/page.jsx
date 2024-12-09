import Card from "../components/cards/home/CardsInits";
import { cardData } from "../models/home/cards/cardDataHome";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 text-gray-800 px-6">
      {/* Encabezado principal */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
          Bienvenido a INED Francisco Marroquín
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          Infórmate de las últimas novedades: actividades, eventos realizados, eventos futuros,
          procesos de inscripción, pensum, ¡y mucho más! Ponte en contacto con nosotros y sé parte
          de nuestra comunidad educativa.
        </p>

        {/* Llamado a la acción */}
        <div className="flex justify-center space-x-4">
          <a
            href="/explore"
            className="px-6 py-3 bg-gray-800 text-white text-lg rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg transition-all duration-300"
          >
            Explorar más
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border-2 border-gray-800 text-gray-800 text-lg rounded-full shadow-md hover:bg-gray-800 hover:text-white hover:shadow-lg transition-all duration-300"
          >
            Contáctanos
          </a>
        </div>
      </div>

      {/* Sección de características */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl">
        {cardData.map((item, index) => (
          <Card key={index} href={item.link}>
            <Card.Title>{item.title}</Card.Title>
            <Card.Description>{item.description}</Card.Description>
          </Card>
        ))}
      </div>
      <div className="mt-14"></div>
    </div>
  );
}
