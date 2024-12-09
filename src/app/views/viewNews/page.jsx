// src/app/admin/views/viewNews/page.jsx
'use client';

import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Tag, Tooltip, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import approvedNewsService from '../../../services/byteService/posts/approved/newsApprovedService';
import { CalendarOutlined, EnvironmentOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ViewNewsPage = () => {
  const [news, setNews] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchApprovedNews = async () => {
      try {
        const service = new approvedNewsService();
        const response = await service.getPostsApproved();
        setNews(response.data); // setState dentro de useEffect
      } catch (error) {
        console.error('Error fetching approved news:', error);
      }
    };

    fetchApprovedNews();
  }, []); // dependencies pueden estar vacías si solo deseas que se ejecute al montar

  const handleCardClick = (id) => {
    router.push(`/views/viewNews/${id}`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen py-10">
      {/* Introducción a las noticias relevantes */}
      <div className="mb-8 text-center">
        <Title level={2} className="text-blue-800 font-extrabold">
          Noticias Relevantes del Instituto
        </Title>
        <Paragraph className="text-gray-600 text-lg">
          Mantente al día con las últimas noticias y eventos destacados de nuestra comunidad educativa. 
          Haz clic en cualquier noticia para leer más detalles y mantenerte informado sobre nuestras actividades.
        </Paragraph>
      </div>

      {/* Sección de tarjetas */}
      <Row gutter={[24, 24]}>
        {news.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              className="hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden border border-gray-200"
              hoverable
              onClick={() => handleCardClick(item.id)}
              cover={
                <div
                  className={`h-52 rounded-t-xl`}
                  style={{
                    backgroundImage: item.imagenes?.length
                      ? `url(${item.imagenes[0].url})`
                      : 'linear-gradient(to right, #4f46e5, #3b82f6)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              }
            >
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">
                  {item.titulo}
                </h3>
                <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                  <strong>Resumen:</strong>{' '}
                  {item.contenido.length > 60 ? `${item.contenido.substring(0, 60)}...` : item.contenido}
                </p>
                <div className="flex items-center mb-2">
                  <strong className="mr-1">Estado:</strong>
                  {item.estado === 'aprobado' ? (
                    <Tag color="green" className="rounded-md text-sm">
                      <CheckCircleOutlined /> Aprobado
                    </Tag>
                  ) : (
                    <Tag color="orange" className="rounded-md text-sm">
                      <ClockCircleOutlined /> Pendiente
                    </Tag>
                  )}
                </div>
                <Tooltip title="Fecha de publicación">
                  <p className="text-gray-600 flex items-center mb-1">
                    <CalendarOutlined className="mr-1" />
                    {new Date(item.fecha_actualizacion).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </Tooltip>
                <Tooltip title="Categoría de la noticia">
                  <p className="text-gray-600 flex items-center">
                    <EnvironmentOutlined className="mr-1" />
                    {item.tipo_contenido || 'General'}
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

export default ViewNewsPage;
