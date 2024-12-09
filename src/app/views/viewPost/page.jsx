// src/app/admin/views/viewPost/page.jsx
'use client';

import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Tag, Tooltip, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import approvedPostsService from '../../../services/byteService/posts/approved/postsApprovedService';
import { CalendarOutlined, EnvironmentOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ViewPostsPage = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchApprovedPosts = async () => {
      try {
        const service = new approvedPostsService();
        const response = await service.getPostsApproved();
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching approved posts:', error);
      }
    };

    fetchApprovedPosts();
  }, []);

  const handleCardClick = (id) => {
    router.push(`/views/viewPost/${id}`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen py-10">
      {/* Introducción a los posts */}
      <div className="mb-8 text-center">
        <Title level={2} className="text-blue-800 font-extrabold">
          Publicaciones Aprobadas
        </Title>
        <Paragraph className="text-gray-600 text-lg">
          Aquí encontrarás las publicaciones más recientes de nuestra comunidad. 
          Explora los posts aprobados y descubre el contenido destacado. 
          Haz clic en una tarjeta para ver más detalles.
        </Paragraph>
      </div>

      {/* Sección de tarjetas */}
      <Row gutter={[24, 24]}>
        {posts.map((post) => (
          <Col key={post.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              className="hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden border border-gray-200"
              hoverable
              onClick={() => handleCardClick(post.id)}
              cover={
                <div
                  className={`h-52 rounded-t-xl`}
                  style={{
                    backgroundImage: post.imagenes?.length
                      ? `url(${post.imagenes[0].url})`
                      : 'linear-gradient(to right, #4f46e5, #3b82f6)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              }
            >
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">
                  {post.titulo}
                </h3>
                <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                  <strong>Descripción:</strong>{' '}
                  {post.contenido.length > 60 ? `${post.contenido.substring(0, 60)}...` : post.contenido}
                </p>
                <div className="flex items-center mb-2">
                  <strong className="mr-1">Estado:</strong>
                  {post.estado === 'aprobado' ? (
                    <Tag color="green" className="rounded-md text-sm">
                      <CheckCircleOutlined /> Aprobado
                    </Tag>
                  ) : (
                    <Tag color="orange" className="rounded-md text-sm">
                      <ClockCircleOutlined /> Pendiente
                    </Tag>
                  )}
                </div>
                <Tooltip title="Fecha de creación">
                  <p className="text-gray-600 flex items-center mb-1">
                    <CalendarOutlined className="mr-1" />
                    {new Date(post.fecha_actualizacion).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </Tooltip>
                <Tooltip title="Categoría del post">
                  <p className="text-gray-600 flex items-center">
                    <EnvironmentOutlined className="mr-1" />
                    {post.tipo_contenido || 'General'}
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

export default ViewPostsPage;
