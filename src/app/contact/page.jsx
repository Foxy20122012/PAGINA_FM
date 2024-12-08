'use client';

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Instala react-icons si no lo tienes: npm install react-icons

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState({ show: false, type: "", message: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const predefinidoMensaje = encodeURIComponent(
    "¡Hola! Me gustaría más información sobre su el establecimiento."
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setModal({ show: false, type: "", message: "" });

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el mensaje");
      }

      // Mostrar modal de éxito
      setModal({
        show: true,
        type: "success",
        message: "¡Tu mensaje ha sido enviado exitosamente!",
      });

      // Vaciar los campos del formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      // Mostrar modal de error
      setModal({
        show: true,
        type: "error",
        message: "Hubo un problema enviando el mensaje. Inténtalo más tarde.",
      });
    } finally {
      setIsSubmitting(false);

      // Ocultar el modal automáticamente después de 5 segundos
      setTimeout(() => {
        setModal({ show: false, type: "", message: "" });
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20 relative">
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">Contáctanos</h1>
        <p className="text-gray-600 mt-2">
          ¿Tienes alguna pregunta o necesitas ayuda? Completa el formulario o
          visítanos en nuestra dirección.
        </p>
      </div>

      {/* Modal */}
      {modal.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2
              className={`text-lg font-semibold mb-4 ${
                modal.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {modal.type === "success" ? "¡Éxito!" : "Error"}
            </h2>
            <p className="text-gray-700">{modal.message}</p>
          </div>
        </div>
      )}

      {/* Contenido principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Formulario */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Envíanos un mensaje
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Campo: Nombre completo */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-gray-800"
                required
              />
            </div>

            {/* Campo: Teléfono */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Teléfono
              </label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+502 1234-5678"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-gray-800"
              />
            </div>

            {/* Campo: Correo electrónico */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tuemail@example.com"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-gray-800"
                required
              />
            </div>

            {/* Campo: Asunto */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Ej. Consulta general"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-gray-800"
              />
            </div>

            {/* Campo: Mensaje */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensaje <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-gray-800"
                required
              ></textarea>
            </div>

            {/* Botón de envío */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-gray-800 text-white text-lg font-medium rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>
            </div>
          </form>
        </div>

        {/* Información de contacto y mapa */}
        <div className="space-y-8">
          {/* Mapa de Google */}
          <div className="w-full h-64 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.7273711693124!2d-88.8313083254114!3d15.472383355140417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f61345fb55690ab%3A0x1dec27f4f3946b2f!2sInstituto%20Francisco%20Marroqu%C3%ADn!5e1!3m2!1ses!2sgt!4v1733613179641!5m2!1ses!2sgt"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Información de contacto */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Información de contacto</h2>
            <p className="text-gray-600 mb-2">
              <strong>Teléfono:</strong> +502 1234-5678
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Correo electrónico:</strong> contacto@inedfm.edu.gt
            </p>
            <p className="text-gray-600">
              <strong>Horario de atención:</strong> Lunes a Viernes, 8:00 AM - 5:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Icono flotante de WhatsApp */}
      <a
      href={`https://wa.me/50258261532?text=${predefinidoMensaje}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
      aria-label="Chatea con nosotros en WhatsApp"
    >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
