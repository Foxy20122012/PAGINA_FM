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
    <div className="p-6 bg-gray-50 min-h-screen py-12">
  <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Explora los Cursos Disponibles</h1>
  <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
    Bienvenido a la sección de cursos, donde podrás encontrar una variedad de opciones educativas diseñadas para ampliar tus conocimientos y habilidades. 
    Cada curso incluye detalles sobre su contenido, temas relevantes y publicaciones asociadas que enriquecen el aprendizaje. 
    ¡Descubre el curso ideal para ti y obtén toda la información necesaria para iniciar tu camino educativo!
  </p>

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
                <strong>Descripción:</strong> Haz clic en "Ver detalles" para más información.
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
  title={<span className="text-xl font-semibold">{selectedCourse.nombre}</span>}
  visible={isModalVisible}
  onCancel={closeModal}
  footer={null}
  centered
  bodyStyle={{
    maxHeight: '80vh',
    overflowY: 'auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
  }}
>
  <div className="mb-6">
    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
      📘 Descripción:
    </h3>
    <p className="text-sm text-gray-700">{selectedCourse.descripcion}</p>
  </div>

  <div className="mb-6">
    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
      📚 Temas:
    </h3>
    {selectedCourse.temas && selectedCourse.temas.length > 0 ? (
      <ul className="list-disc pl-5">
        {selectedCourse.temas.map((tema) => (
          <li key={tema.id} className="text-sm text-gray-700">
            {tema.nombre}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-sm text-gray-500">No hay temas asociados.</p>
    )}
  </div>

  <div>
    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
      📰 Posts:
    </h3>
    {selectedCourse.posts && selectedCourse.posts.length > 0 ? (
      <div className="grid grid-cols-2 gap-4">
        {selectedCourse.posts.map((post) => (
          <div
            key={post.id}
            className="p-2 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
          >
            <h4 className="text-sm font-semibold text-gray-800">{post.titulo}</h4>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-sm text-gray-500">No hay posts asociados.</p>
    )}
  </div>
</Modal>


      
      )}
    </div>
  );
};

export default CoursesPage;
