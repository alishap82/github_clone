// import React, { useState } from "react";

// import Sidebar from "./Componemts/utility/Sidebar";
// // import MainContent from "./components/MainContent";
// // import Footer from "./components/Footer";
// import { Container, Row, Col } from "react-bootstrap";
// import CustomNavbar from "./Componemts/utility/CustomNavbar";
// import MainContent from "./Componemts/pages/MainContent";
// import RightSidebar from "./Componemts/pages/RightSidebar";
// import Popupsidebar from "./Componemts/pages/Popupsidebar";





// const App = () => {

//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// const toggleSidebar = () => {
//   setIsSidebarOpen(!isSidebarOpen);
// };
//   return (
//     <>
//     <CustomNavbar toggleSidebar={toggleSidebar} />
//     <Popupsidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       <Container fluid>
//         <Row>
//           <Col md={3}><Sidebar /></Col>
//           <Col md={6}><MainContent /></Col>
//           <Col md={3}><RightSidebar /></Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Popupsidebar from "./Componemts/pages/Popupsidebar";

import Issues from "./Componemts/pages/Issues";
import PullRequests from "./Componemts/pages/PullRequests";
import Projects from "./Componemts/pages/Projects";
import Discussions from "./Componemts/pages/Discussions";
import HomePage from "./Componemts/pages/HomePage";
import CustomNavbar from "./Componemts/utility/CustomNavbar";
import Login from "./auth/Login";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Popupsidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div style={{ marginLeft: isSidebarOpen ? "250px" : "0", transition: "margin-left 0.3s ease-in-out" }}>
        <CustomNavbar toggleSidebar={toggleSidebar} />
        <Login/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/pull-requests" element={<PullRequests />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/discussions" element={<Discussions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
