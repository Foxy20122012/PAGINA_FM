'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col, Button, Modal } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
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

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Cursos Disponibles</h1>
      <p className="text-lg text-gray-600 text-center mb-6">
        Explora los cursos disponibles en nuestra plataforma.
      </p>
      <Row gutter={[24, 24]}>
        {courses.map((course) => (
          <Col key={course.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              className="hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden border border-gray-200"
              title={course.nombre}
              hoverable
            >
              <p className="text-sm text-gray-600 mb-3">
                <strong>Descripción:</strong>{' '}
                {course.descripcion?.length > 100
                  ? `${course.descripcion.substring(0, 100)}...`
                  : course.descripcion}
              </p>
              <Button
                type="primary"
                icon={<EyeOutlined />}
                onClick={() => handleOpenModal(course)}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Ver más
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedCourse && (
        <Modal
          title={selectedCourse.nombre}
          open={isModalOpen}
          onCancel={handleCloseModal}
          footer={null}
          centered
        >
          <p className="text-gray-600 mb-4">
            <strong>Descripción:</strong> {selectedCourse.descripcion}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Temas:</strong>{' '}
            {selectedCourse.temas && selectedCourse.temas.length > 0
              ? selectedCourse.temas.map((tema) => tema.nombre).join(', ')
              : 'No hay temas asociados'}
          </p>
          <p className="text-gray-600">
            <strong>Posts asociados:</strong>{' '}
            {selectedCourse.posts && selectedCourse.posts.length > 0
              ? selectedCourse.posts.map((post) => post.titulo).join(', ')
              : 'No hay posts asociados'}
          </p>
        </Modal>
      )}
    </div>
  );
};

export default CoursesPage;
