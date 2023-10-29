import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function App() {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is my first project. It does something awesome.',
    },
    {
      title: 'Project 2',
      description: 'The second project is even more awesome.',
    },
    {
      title: 'Project 3',
      description: 'Project 3 is the best of them all.',
    },
  ];

  return (
    <Container className="py-5">
      <h1 className="text-center">My Portfolio</h1>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col key={index} lg={4} md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
