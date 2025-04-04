import React, { useState } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { FaGithub, FaPlus, FaBell, FaUsers, FaBars, FaUserCircle } from "react-icons/fa";
import ProfileSidebar from "../homepage/ProfileSidebar";

const CustomNavbar = ({ toggleSidebar }) => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  // Toggle profile sidebar
  const toggleProfileSidebar = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar
        bg="light"
        className="px-3 d-flex align-items-center justify-content-between border-bottom"
        style={{ height: "50px", borderTop: "4px solid gold" }}
      >
        {/* Left Section: Menu Button & Brand */}
        <div className="d-flex align-items-center">
          <Button variant="light" className="me-2 border-0" onClick={toggleSidebar}>
            <FaBars size={20} />
          </Button>
          <Navbar.Brand href="#" className="fw-bold d-flex align-items-center">
            <FaGithub size={30} className="me-2" /> Dashboard
          </Navbar.Brand>
        </div>

       

        {/* Right Section: Icons */}
        <div className="d-flex align-items-center">
           {/* Center: Search Bar */}
        <Form className="d-flex flex-grow-1 mx-3">
          <FormControl type="search" placeholder="Type / to search" className="me-2" />
        </Form>
          <FaUsers className="mx-2" size={20} />
          <FaPlus className="mx-2" size={20} />
          <FaBell className="mx-2" size={20} />
          
          {/* Profile Icon */}
          <FaUserCircle
            className="mx-2"
            size={30}
            style={{ cursor: "pointer" }}
            onClick={toggleProfileSidebar}
          />
        </div>
      </Navbar>

      {/* Profile Sidebar */}
      <ProfileSidebar isOpen={isProfileOpen} toggleSidebar={toggleProfileSidebar} />
    </>
  );
};

export default CustomNavbar;
