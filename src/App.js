import React, { useState } from "react";

import Sidebar from "./Componemts/utility/Sidebar";
// import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import CustomNavbar from "./Componemts/utility/CustomNavbar";
import MainContent from "./Componemts/pages/MainContent";
import RightSidebar from "./Componemts/pages/RightSidebar";
import Popupsidebar from "./Componemts/pages/Popupsidebar";





const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
};
  return (
    <>
    <CustomNavbar toggleSidebar={toggleSidebar} />
    <Popupsidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Container fluid>
        <Row>
          <Col md={3}><Sidebar /></Col>
          <Col md={6}><MainContent /></Col>
          <Col md={3}><RightSidebar /></Col>
        </Row>
      </Container>
    </>
  );
};

export default App;

