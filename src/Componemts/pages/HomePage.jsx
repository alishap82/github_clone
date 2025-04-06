// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Sidebar from "../homepage/Sidebar";
// import MainContent from "../homepage/MainContent";
// import RightSidebar from "../homepage/RightSidebar";

// const HomePage = () => {
//   return (
//     <Container fluid className="p-4">
//       <Row>
//         {/* Left Sidebar */}
//         <Col md={3}>
//           <Sidebar />
//         </Col>

//         {/* Main Content */}
//         <Col md={6}>
//           <MainContent />
//         </Col>

//         {/* Right Sidebar */}
//         <Col md={3}>
//           <RightSidebar />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default HomePage;


// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Sidebar from "../homepage/Sidebar";
// import MainContent from "../homepage/MainContent";
// import RightSidebar from "../homepage/RightSidebar";
// import Popupsidebar from "../pages/Popupsidebar";


// const HomePage = () => {
//   const [popupOpen, setPopupOpen] = useState(false);
//   const toggleSidebar = () => setPopupOpen(!popupOpen);

//   return (
//     <>
//     <div style={{ position: "relative" }}>
//     {/* Popup Sidebar */}
//     <Popupsidebar isOpen={popupOpen} toggleSidebar={toggleSidebar} />

//     {/* Dimmed overlay behind popup */}
//     {popupOpen && (
//       <div
//         className="overlay"
//         onClick={toggleSidebar}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           height: "100vh",
//           width: "100vw",
//           backgroundColor: "rgba(0, 0, 0, 0.3)",
//           zIndex: 1049,
//         }}
//       />
//     )}

//     {/* Main Content */}
//     <Container
//   fluid
//   className={`p-4 ${popupOpen ? "blurred" : ""}`}
//   style={{
//     transition: "filter 0.3s ease",
//     filter: popupOpen ? "blur(2px)" : "none",
//   }}
// >
//   <Row>
//     {/* Left Sidebar (just hidden, not removed) */}
//     <Col md={3} style={{ display: popupOpen ? "none" : "block" }}>
//       <Sidebar />
//     </Col>

//     {/* Main Content - Always md=6 to avoid layout shift */}
//     <Col md={6}>
//   <div style={{ margin: popupOpen ? "0 auto" : "0" }}>
//     <MainContent />
//   </div>
// </Col>


//     {/* Right Sidebar (just hidden, not removed) */}
//     <Col md={3} style={{ display: popupOpen ? "none" : "block" }}>
//       <RightSidebar />
//     </Col>
//   </Row>
// </Container>

//   </div>
//     </>
   
//   );
// };

// export default HomePage;


import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../homepage/Sidebar";
import MainContent from "../homepage/MainContent";
import RightSidebar from "../homepage/RightSidebar";
import Popupsidebar from "../pages/Popupsidebar";

const HomePage = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const toggleSidebar = () => setPopupOpen(!popupOpen);

  return (
    <div style={{ position: "relative" }}>
      {/* Popup Sidebar (always positioned absolutely) */}
      <Popupsidebar isOpen={popupOpen} toggleSidebar={toggleSidebar} />

      {/* Overlay when popup is open */}
      {popupOpen && (
        <div
          className="overlay"
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 1049,
          }}
        />
      )}

      {/* Main Content (never shifting layout) */}
      <Container
        fluid
        className={`p-4 ${popupOpen ? "blurred" : ""}`}
        style={{
          transition: "filter 0.3s ease",
          filter: popupOpen ? "blur(2px)" : "none",
        }}
      >
        <Row>
          {/* Sidebar */}
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
    </div>
  );
};

export default HomePage;
