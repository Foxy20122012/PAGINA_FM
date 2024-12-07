export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Bienvenido a INED Francisco Marroquin</h1>
      <p className="text-lg md:text-xl mb-6 text-gray-600">
        Tu plataforma para aprender y colaborar.
      </p>
      <a
        href="/explore"
        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-all duration-200"
      >
        Comenzar
      </a>
    </div>
  );
}
