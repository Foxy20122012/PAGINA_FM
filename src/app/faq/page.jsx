'use client';
import { Collapse } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

export default function FAQ() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Preguntas Frecuentes
      </h1>
      <Collapse
        accordion
        expandIcon={({ isActive }) => (
          <QuestionCircleOutlined
            style={{ color: isActive ? '#1677ff' : '#aaa' }}
          />
        )}
        expandIconPosition="end"
        className="bg-white shadow-lg rounded-lg overflow-hidden"
      >
        {/* Sobre el Instituto */}
        <Panel header="Sobre el Instituto" key="1">
          <p>
            <strong>¿Qué cursos ofrece el instituto?</strong>
            <br />
            El instituto ofrece una variedad de cursos en diferentes áreas,
            como ciencias, tecnología, humanidades y más. Consulta el apartado{' '}
            <a href="/courses" className="text-blue-500 hover:underline">
              Pensum Académico
            </a>{' '}
            para más detalles.
          </p>
          <p>
            <strong>¿Cuál es el horario de atención?</strong>
            <br />
            Nuestro horario de atención es de lunes a viernes, de 8:00 AM a 4:00
            PM.
          </p>
        </Panel>

        {/* Inscripciones */}
        <Panel header="Inscripciones" key="2">
          <p>
            <strong>¿Cuáles son los requisitos para inscribirme?</strong>
            <br />
            Puedes encontrar todos los requisitos en el apartado{' '}
            <a
              href="/registration/requirements"
              className="text-blue-500 hover:underline"
            >
              Procesos de Inscripción
            </a>
            .
          </p>
          <p>
            <strong>¿Dónde puedo encontrar las fechas importantes para la inscripción?</strong>
            <br />
            Las fechas importantes se encuentran en el apartado{' '}
            <a
              href="/registration/importantDate"
              className="text-blue-500 hover:underline"
            >
              Fechas Importantes
            </a>
            .
          </p>
        </Panel>

        {/* Académico */}
        <Panel header="Académico" key="3">
          <p>
            <strong>¿El instituto ofrece clases en modalidad virtual?</strong>
            <br />
            Sí, contamos con clases en modalidad presencial y virtual según el
            curso y la disponibilidad del docente.
          </p>
          <p>
            <strong>¿Cómo puedo contactar a un catedrático?</strong>
            <br />
            Puedes consultar la lista de catedráticos en el apartado{' '}
            <a
              href="/professor"
              className="text-blue-500 hover:underline"
            >
              Catedráticos
            </a>
            .
          </p>
        </Panel>

        {/* Actividades y Eventos */}
        <Panel header="Actividades y Eventos" key="4">
          <p>
            <strong>¿Dónde puedo enterarme de los eventos y actividades del instituto?</strong>
            <br />
            Toda la información se encuentra en{' '}
            <a href="/views/viewEvents" className="text-blue-500 hover:underline">
              Eventos
            </a>
            ,{' '}
            <a href="/views/viewPost" className="text-blue-500 hover:underline">
              Posts
            </a>{' '}
            y{' '}
            <a href="/views/viewNews" className="text-blue-500 hover:underline">
              Noticias
            </a>
            .
          </p>
          <p>
            <strong>¿Puedo participar en los eventos aunque no esté inscrito en el instituto?</strong>
            <br />
            Algunos eventos son abiertos al público, pero otros son exclusivos
            para estudiantes y personal.
          </p>
        </Panel>

        {/* Historia */}
        <Panel header="Historia" key="5">
          <p>
            <strong>¿Dónde puedo leer sobre la historia del instituto?</strong>
            <br />
            Conoce más sobre nuestra trayectoria y valores en el apartado{' '}
            <a href="/history" className="text-blue-500 hover:underline">
              Historia
            </a>
            .
          </p>
        </Panel>

        {/* Contacto */}
        <Panel header="Contacto" key="6">
          <p>
            <strong>¿Cómo puedo comunicarme con el instituto?</strong>
            <br />
            Puedes escribirnos en el apartado{' '}
            <a href="/contact" className="text-blue-500 hover:underline">
              Contacto
            </a>
            .
          </p>
          <p>
            <strong>¿Dónde está ubicado el instituto?</strong>
            <br />
            Visítanos en el apartado{' '}
            <a href="/contact" className="text-blue-500 hover:underline">
              Contacto
            </a>
            .
          </p>
        </Panel>

        {/* Acerca del Proyecto */}
        <Panel header="Acerca del Proyecto" key="7">
          <p>
            <strong>¿Quién desarrolló este proyecto?</strong>
            <br />
            Este proyecto fue desarrollado por{' '}
            <a href="/about" className="text-blue-500 hover:underline">
              CacaoByte S.A
            </a>
            , con el propósito de modernizar y digitalizar los procesos del
            instituto, mejorando la experiencia tanto para estudiantes como
            para catedráticos.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
}
