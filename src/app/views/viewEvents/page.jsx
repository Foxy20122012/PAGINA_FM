// src/app/admin/views/viewEvents/page.jsx
'use client';

import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Tag, Tooltip, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import approvedEventsService from '../../../services/byteService/posts/approved/eventsApproveService';
import { CalendarOutlined, EnvironmentOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ViewEventsPage = () => {
  const [events, setEvents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchApprovedEvents = async () => {
      try {
        const service = new approvedEventsService();
        const response = await service.getPostsApproved();
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching approved events:', error);
      }
    };

    fetchApprovedEvents();
  }, []);

  const handleCardClick = (id) => {
    router.push(`/views/viewEvents/${id}`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Introducción a los eventos */}
      <div className="mb-8 text-center">
        <Title level={2} className="text-blue-800 font-extrabold">
          Eventos Pasados y Futuros
        </Title>
        <Paragraph className="text-gray-600 text-lg">
          Explora los eventos más relevantes organizados por nuestra institución. Aquí encontrarás detalles sobre actividades recientes y próximas que fortalecen nuestra comunidad educativa. ¡Haz clic en un evento para más información!
        </Paragraph>
      </div>

      {/* Sección de tarjetas */}
      <Row gutter={[24, 24]}>
        {events.map((event) => (
          <Col key={event.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              className="hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden border border-gray-200"
              hoverable
              onClick={() => handleCardClick(event.id)}
              cover={
                <div
                  className={`h-52 rounded-t-xl`}
                  style={{
                    backgroundImage: event.imagenes?.length
                      ? `url(${event.imagenes[0].url})`
                      : 'linear-gradient(to right, #3b82f6, #06b6d4)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              }
            >
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">
                  {event.titulo}
                </h3>
                <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                  <strong>Descripción:</strong>{' '}
                  {event.contenido.length > 60 ? `${event.contenido.substring(0, 60)}...` : event.contenido}
                </p>
                <div className="flex items-center mb-2">
                  <strong className="mr-1">Estado:</strong>
                  {event.estado === 'aprobado' ? (
                    <Tag color="green" className="rounded-md text-sm">
                      <CheckCircleOutlined /> Aprobado
                    </Tag>
                  ) : (
                    <Tag color="orange" className="rounded-md text-sm">
                      <ClockCircleOutlined /> Pendiente
                    </Tag>
                  )}
                </div>
                <Tooltip title="Fecha del evento">
                  <p className="text-gray-600 flex items-center mb-1">
                    <CalendarOutlined className="mr-1" />
                    {new Date(event.fecha_actualizacion).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </Tooltip>
                <Tooltip title="Ubicación del evento">
                  <p className="text-gray-600 flex items-center">
                    <EnvironmentOutlined className="mr-1" />
                    {event.ubicacion_evento || 'Por definir'}
                  </p>
                </Tooltip>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ViewEventsPage;
