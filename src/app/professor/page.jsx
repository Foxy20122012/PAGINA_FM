'use client';

import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Tag } from 'antd';
import { UserOutlined, CheckCircleOutlined, IdcardOutlined } from '@ant-design/icons';
import axios from 'axios';

const ProfessorsPage = () => {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await axios.get('https://apiumgcollab.onrender.com/api/usuarios/catedraticos');
        const activeProfessors = response.data.filter((professor) => professor.activo === 1);
        setProfessors(activeProfessors);
      } catch (error) {
        console.error('Error fetching professors:', error);
      }
    };

    fetchProfessors();
  }, []);

  const cardColors = [
    'linear-gradient(135deg, #f8fafc, #dbeafe)',
    'linear-gradient(135deg, #fdf2f8, #fde2e2)',
    'linear-gradient(135deg, #f0fdfa, #d1fae5)',
    'linear-gradient(135deg, #fffbeb, #fef3c7)',
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen py-14">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Catedráticos Activos</h1>
      <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
        Conoce a los catedráticos que forman parte de nuestro equipo educativo. Su dedicación y esfuerzo son clave para el éxito de nuestra institución.
      </p>
      <Row gutter={[24, 24]} justify="center">
        {professors.map((professor, index) => (
          <Col key={professor.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              style={{
                border: 'none',
                borderRadius: '12px',
                background: cardColors[index % cardColors.length],
              }}
            >
              <div className="flex items-center justify-center h-36">
                <UserOutlined style={{ fontSize: '64px', color: '#4a5568' }} />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {`${professor.nombre} ${professor.apellido}`}
                </h3>
                <div className="text-sm text-gray-600 mb-2">
                  <IdcardOutlined className="mr-2 text-gray-500" />
                  <strong>Rol:</strong> {professor.rol.charAt(0).toUpperCase() + professor.rol.slice(1)}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <IdcardOutlined className="mr-2 text-gray-500" />
                  <strong>Puesto:</strong> {professor.puesto.charAt(0).toUpperCase() + professor.puesto.slice(1)}
                </div>
                {professor.activo === 1 && (
                  <Tag
                    icon={<CheckCircleOutlined />}
                    color="success"
                    className="text-base px-4 py-1 rounded-full"
                  >
                    Activo
                  </Tag>
                )}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProfessorsPage;
