'use client';

import React from 'react';

const ImportantDatePage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Fechas Importantes
      </h1>
      <p className="text-lg text-gray-600 text-center mb-6">
        Mantente informado sobre las fechas clave del proceso de inscripción y eventos académicos.
      </p>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Evento</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Inicio de inscripciones</td>
              <td className="border border-gray-300 px-4 py-2">15 de enero de 2024</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Cierre de inscripciones</td>
              <td className="border border-gray-300 px-4 py-2">28 de febrero de 2024</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Inicio de clases</td>
              <td className="border border-gray-300 px-4 py-2">4 de marzo de 2024</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Semana de inducción</td>
              <td className="border border-gray-300 px-4 py-2">26 al 30 de febrero de 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportantDatePage;
