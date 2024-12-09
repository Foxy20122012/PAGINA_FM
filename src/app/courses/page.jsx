'use client';

import React, { useState } from 'react';
import { Card, Row, Col, Button, Modal } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import axios from 'axios';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  React.useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://apiumgcollab.onrender.com/api/cursos');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setIsModalVisible(false);
  };

  const cardColors = ['#FFFAF0', '#F0F4FF', '#E6F7F3', '#FFF4E6', '#FBEFF0']; // Paleta de colores

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Explora los Cursos Disponibles</h1>
      <Row gutter={[24, 24]}>
        {courses.map((course, index) => (
          <Col key={course.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              style={{
                backgroundColor: cardColors[index % cardColors.length],
                borderRadius: '10px',
                border: '1px solid #ddd',
              }}
              className="shadow-md hover:shadow-lg transition-shadow"
              title={
                <h3 className="text-xl font-bold text-gray-800">
                  {course.nombre}
                </h3>
              }
            >
              <p className="text-sm text-gray-700 mb-4">
                <strong>Descripción:</strong>{' '}
                {course.descripcion
                  ? `${course.descripcion.split(' ').slice(0, 20).join(' ')}...`
                  : 'Sin descripción.'}
              </p>
              <Button
                type="primary"
                icon={<EyeOutlined />}
                onClick={() => openModal(course)}
                className="bg-gray-800 hover:bg-gray-900"
              >
                Ver detalles
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedCourse && (
        <Modal
          title={selectedCourse.nombre}
          visible={isModalVisible}
          onCancel={closeModal}
          footer={null}
          centered
        >
          <h3 className="text-lg font-bold">Temas:</h3>
          <ul className="list-disc pl-5 mb-4">
            {selectedCourse.temas && selectedCourse.temas.length > 0 ? (
              selectedCourse.temas.map((tema) => (
                <li key={tema.id} className="text-sm text-gray-700">
                  {tema.nombre}
                </li>
              ))
            ) : (
              <p className="text-sm text-gray-500">No hay temas asociados.</p>
            )}
          </ul>
          <h3 className="text-lg font-bold">Posts:</h3>
          <ul className="list-disc pl-5">
            {selectedCourse.posts && selectedCourse.posts.length > 0 ? (
              selectedCourse.posts.map((post) => (
                <li key={post.id} className="text-sm text-gray-700">
                  {post.titulo}
                </li>
              ))
            ) : (
              <p className="text-sm text-gray-500">No hay posts asociados.</p>
            )}
          </ul>
        </Modal>
      )}
    </div>
  );
};

export default CoursesPage;
