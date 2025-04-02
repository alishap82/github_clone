import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { FaGithub, FaPlus, FaBell,  FaUsers,  FaBars } from "react-icons/fa";

const CustomNavbar = ({ toggleSidebar }) => {
  return (
    <Navbar bg="light" className="px-3 d-flex align-items-center justify-content-between border-bottom" style={{ height: "50px", borderTop: "4px solid gold" }}>
    <div className="d-flex align-items-center">
      <Button variant="light" className="me-2 border-0" onClick={toggleSidebar}>
        <FaBars size={20} />
      </Button>
      <Navbar.Brand href="#" className="fw-bold d-flex align-items-center">
        <FaGithub size={30} className="me-2" /> Dashboard
      </Navbar.Brand>
    </div>
   
    <div className="d-flex align-items-center">
    <Form className="d-flex flex-grow-1 mx-3">
      <FormControl type="search" placeholder="Type / to search" className="me-2" />
    </Form>
      <FaUsers className="mx-2" size={20} />
      <FaPlus className="mx-2" size={20} />
      <FaBell className="mx-2" size={20} />
    </div>
  </Navbar>
  );
};

export default CustomNavbar;
