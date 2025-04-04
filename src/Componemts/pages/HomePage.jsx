import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from '../homepage/Sidebar';
import MainContent from '../homepage/MainContent';
import RightSidebar from '../homepage/RightSidebar';

const HomePage = () => {
  return (
    <Container fluid className="p-4">
    <Row>
      {/* Left Sidebar */}
      <Col md={3}>
        <Sidebar />
      </Col>

      {/* Main Content */}
      <Col md={6}>
        <MainContent />
      </Col>

      {/* Right Sidebar */}
      <Col md={3}>
        <RightSidebar />
      </Col>
    </Row>
  </Container>
  )
}

export default HomePage