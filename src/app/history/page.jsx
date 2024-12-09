'use client';

export default function Historia() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="relative">
        {/* Hero Image Section */}
        <div className="relative">
          <img
            src="Equipo.jpeg"
            alt="Equipo"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-75"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-extrabold text-white mb-4 shadow-lg drop-shadow">
              Nuestra Historia
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl text-center">
              Un viaje de excelencia académica y compromiso social desde nuestros inicios.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-6 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-8 space-y-12">
            {/* Los Comienzos */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Los Comienzos
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fundado en el año <strong>[Año de fundación]</strong>, nuestro
                instituto nació con el propósito de ofrecer una educación
                accesible y de alta calidad a la comunidad. Lo que comenzó como
                un pequeño grupo de estudiantes y catedráticos apasionados, ha
                crecido hasta convertirse en una institución reconocida por su
                excelencia académica y compromiso social.
              </p>
            </section>

            {/* Evolución y Logros */}
            <section className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Evolución y Logros
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A lo largo de los años, hemos expandido nuestras áreas
                académicas, introduciendo tecnología innovadora y ofreciendo
                modalidades de aprendizaje tanto presencial como virtual.
                Nuestros estudiantes y egresados destacan en diversos campos,
                llevando el nombre de nuestra institución a nivel nacional e
                internacional.
              </p>
            </section>

            {/* Nuestra Misión Hoy */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Nuestra Misión Hoy
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Miramos hacia el futuro con el objetivo de formar líderes que
                transformen sus comunidades. Nuestra misión es seguir ofreciendo
                una educación integral que combine valores y excelencia
                académica, adaptándonos a las demandas de un mundo en constante
                cambio.
              </p>
              <div className="mt-8 text-center">
                <blockquote className="text-xl italic font-semibold text-gray-700">
                  "Innovando para un futuro mejor, honrando nuestros orígenes."
                </blockquote>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer CTA Section */}
      <div className="py-12 bg-gray-800 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Únete a nuestra historia
        </h2>
        <p className="text-lg mb-6">
          Sé parte del cambio y la excelencia que nos define.
        </p>
        <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-all">
          Contáctanos
        </button>
      </div>
    </div>
  );
}
