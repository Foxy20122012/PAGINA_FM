'use client';
import { Collapse } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

export default function FAQ() {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
        Preguntas Frecuentes
      </h1>
      <div className="max-w-4xl mx-auto">
        <Collapse
          accordion
          expandIconPosition="right"
          className="border-none"
          expandIcon={({ isActive }) => (
            <QuestionCircleOutlined
              className={`text-xl transition-all duration-300 ${
                isActive ? 'text-blue-600 rotate-180' : 'text-gray-600 rotate-0'
              }`}
            />
          )}
        >
          {/* Sobre el Instituto */}
          <Panel
            header={
              <span className="text-lg font-semibold text-gray-800">
                Sobre el Instituto
              </span>
            }
            key="1"
            className="bg-white rounded-lg mb-4 shadow-sm hover:shadow-md transition-all"
          >
            <div className="p-6 space-y-6">
              <div className="border-b pb-4">
                <p className="mb-2 text-gray-700 font-medium">
                  <strong>¿Qué cursos ofrece el instituto?</strong>
                </p>
                <p className="text-gray-600">
                  El instituto ofrece una variedad de cursos en diferentes áreas, como ciencias,
                  tecnología, humanidades y más. Consulta el apartado{' '}
                  <a href="/courses" className="text-blue-500 underline hover:text-blue-600">
                    Pensum Académico
                  </a>{' '}
                  para más detalles.
                </p>
              </div>
              <div>
                <p className="mb-2 text-gray-700 font-medium">
                  <strong>¿Cuál es el horario de atención?</strong>
                </p>
                <p className="text-gray-600">
                  Nuestro horario de atención es de lunes a viernes, de 8:00 AM a 4:00 PM.
                </p>
              </div>
            </div>
          </Panel>

          {/* Inscripciones */}
          <Panel
            header={
              <span className="text-lg font-semibold text-gray-800">
                Inscripciones
              </span>
            }
            key="2"
            className="bg-white rounded-lg mb-4 shadow-sm hover:shadow-md transition-all"
          >
            <div className="p-6 space-y-6">
              <div className="border-b pb-4">
                <p className="mb-2 text-gray-700 font-medium">
                  <strong>¿Cuáles son los requisitos para inscribirme?</strong>
                </p>
                <p className="text-gray-600">
                  Puedes encontrar todos los requisitos en el apartado{' '}
                  <a
                    href="/registration/requirements"
                    className="text-blue-500 underline hover:text-blue-600"
                  >
                    Procesos de Inscripción
                  </a>
                  .
                </p>
              </div>
              <div>
                <p className="mb-2 text-gray-700 font-medium">
                  <strong>¿Dónde puedo encontrar las fechas importantes para la inscripción?</strong>
                </p>
                <p className="text-gray-600">
                  Las fechas importantes se encuentran en el apartado{' '}
                  <a
                    href="/registration/importantDate"
                    className="text-blue-500 underline hover:text-blue-600"
                  >
                    Fechas Importantes
                  </a>
                  .
                </p>
              </div>
            </div>
          </Panel>

          {/* Académico */}
          <Panel
            header={
              <span className="text-lg font-semibold text-gray-800">
                Académico
              </span>
            }
            key="3"
            className="bg-white rounded-lg mb-4 shadow-sm hover:shadow-md transition-all"
          >
            <div className="p-6 space-y-6">
              <div className="border-b pb-4">
                <p className="mb-2 text-gray-700 font-medium">
                  <strong>¿El instituto ofrece clases en modalidad virtual?</strong>
                </p>
                <p className="text-gray-600">
                  Sí, contamos con clases en modalidad presencial y virtual según el curso y la
                  disponibilidad del docente.
                </p>
              </div>
              <div>
                <p className="mb-2 text-gray-700 font-medium">
                  <strong>¿Cómo puedo contactar a un catedrático?</strong>
                </p>
                <p className="text-gray-600">
                  Puedes consultar la lista de catedráticos en el apartado{' '}
                  <a href="/professor" className="text-blue-500 underline hover:text-blue-600">
                    Catedráticos
                  </a>
                  .
                </p>
              </div>
            </div>
          </Panel>

          {/* Actividades y Eventos */}
          <Panel
            header={
              <span className="text-lg font-semibold text-gray-800">
                Actividades y Eventos
              </span>
            }
            key="4"
            className="bg-white rounded-lg mb-4 shadow-sm hover:shadow-md transition-all"
          >
            <div className="p-6 space-y-6">
              <div className="border-b pb-4">
                <p className="mb-2 text-gray-700 font-medium">
                  <strong>¿Dónde puedo enterarme de los eventos y actividades del instituto?</strong>
                </p>
                <p className="text-gray-600">
                  Toda la información se encuentra en{' '}
                  <a href="/views/viewEvents" className="text-blue-500 underline hover:text-blue-600">
                    Eventos
                  </a>
                  ,{' '}
                  <a href="/views/viewPost" className="text-blue-500 underline hover:text-blue-600">
                    Posts
                  </a>
                  , y{' '}
                  <a href="/views/viewNews" className="text-blue-500 underline hover:text-blue-600">
                    Noticias
                  </a>
                  .
                </p>
              </div>
              <div>
                <p className="mb-2 text-gray-700 font-medium">
                  <strong>¿Puedo participar en los eventos aunque no esté inscrito en el instituto?</strong>
                </p>
                <p className="text-gray-600">
                  Algunos eventos son abiertos al público, pero otros son exclusivos para estudiantes
                  y personal.
                </p>
              </div>
            </div>
          </Panel>

          {/* Contacto */}
          <Panel
            header={
              <span className="text-lg font-semibold text-gray-800">
                Contacto
              </span>
            }
            key="5"
            className="bg-white rounded-lg mb-4 shadow-sm hover:shadow-md transition-all"
          >
            <div className="p-6 space-y-6">
              <div className="border-b pb-4">
                <p className="mb-2 text-gray-700 font-medium">
                  <strong>¿Cómo puedo comunicarme con el instituto?</strong>
                </p>
                <p className="text-gray-600">
                  Puedes escribirnos en el apartado{' '}
                  <a href="/contact" className="text-blue-500 underline hover:text-blue-600">
                    Contacto
                  </a>
                  .
                </p>
              </div>
              <div>
                <p className="mb-2 text-gray-700 font-medium">
                  <strong>¿Dónde está ubicado el instituto?</strong>
                </p>
                <p className="text-gray-600">
                  Visítanos en el apartado{' '}
                  <a href="/contact" className="text-blue-500 underline hover:text-blue-600">
                    Contacto
                  </a>
                  .
                </p>
              </div>
            </div>
          </Panel>

          {/* Acerca de */}
          <Panel
            header={
              <span className="text-lg font-semibold text-gray-800">
                Acerca de
              </span>
            }
            key="6"
            className="bg-white rounded-lg mb-4 shadow-sm hover:shadow-md transition-all"
          >
            <div className="p-6 space-y-6">
              <div>
                <p className="mb-2 text-gray-700 font-medium">
                  <strong>¿Quién desarrolló este proyecto?</strong>
                </p>
                <p className="text-gray-600">
                  Este proyecto fue desarrollado por{' '}
                  <strong>CacaoByte S.A.</strong>, una empresa dedicada al desarrollo de soluciones
                  tecnológicas innovadoras para instituciones educativas.
                </p>
              </div>
              <div>
                <p className="mb-2 text-gray-700 font-medium">
                  <strong>¿Cuál es el propósito de este proyecto?</strong>
                </p>
                <p className="text-gray-600">
                  El propósito principal es mejorar la gestión educativa del instituto, ofreciendo
                  una plataforma que facilite la comunicación, organización y acceso a información
                  relevante para estudiantes, docentes y personal administrativo.
                </p>
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
