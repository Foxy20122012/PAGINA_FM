'use client';

import React from 'react';

const RequirementsPage = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-blue-700">
            Requisitos de Inscripción
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Asegúrate de contar con todos los documentos necesarios para un proceso de inscripción exitoso.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-600 mb-6">
            Documentos Requeridos
          </h2>
          <ul className="list-none space-y-6">
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="h-8 w-8 flex items-center justify-center bg-gray-500 text-white rounded-full font-bold">
                  1
                </span>
              </div>
              <p className="text-lg text-gray-700">
                <strong>Fotocopia de documento de identidad:</strong> Presentar una copia legible del DPI o pasaporte.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="h-8 w-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold">
                  2
                </span>
              </div>
              <p className="text-lg text-gray-700">
                <strong>Certificado de estudios:</strong> Certificado del último nivel educativo aprobado.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="h-8 w-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold">
                  3
                </span>
              </div>
              <p className="text-lg text-gray-700">
                <strong>Formulario de inscripción:</strong> Completar y entregar el formulario oficial.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="h-8 w-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold">
                  4
                </span>
              </div>
              <p className="text-lg text-gray-700">
                <strong>Fotografías tamaño carnet:</strong> Dos fotos recientes con fondo blanco.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="h-8 w-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold">
                  5
                </span>
              </div>
              <p className="text-lg text-gray-700">
                <strong>Recibo de pago:</strong> Comprobante del pago correspondiente al proceso de inscripción.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="h-8 w-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold">
                  6
                </span>
              </div>
              <p className="text-lg text-gray-700">
                <strong>Requisitos adicionales:</strong> En caso de requisitos específicos, consulta con la oficina administrativa.
              </p>
            </li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <a
            href="/contact"
            className="px-6 py-3 text-gray-600 text-white text-lg font-medium rounded-md shadow-lg hover:text-gray-600 transition"
          >
            Contactar para más información
          </a>
        </div>
      </div>
    </div>
  );
};

export default RequirementsPage;
