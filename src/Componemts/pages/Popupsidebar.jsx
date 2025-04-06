import React from 'react';
import { Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Popupsidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
    className={`sidebar ${isOpen ? "open" : ""}`}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "250px",
      height: "100vh",
      backgroundColor: "#fff",
      boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      transform: isOpen ? "translateX(0)" : "translateX(-100%)",
      transition: "transform 0.3s ease-in-out",
      zIndex: 1050,
    }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="light" className="border-0" onClick={toggleSidebar}>
          <FaTimes size={20} />
        </Button>
      </div>

      <nav className="mt-3">
      <ul style={{ listStyle: "none", padding: 0 }}>
  <li><Link to="/" onClick={toggleSidebar} style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
  <li><Link to="/issues" onClick={toggleSidebar} style={{ textDecoration: 'none', color: 'black' }}>Issues</Link></li>
  <li><Link to="/pull-requests" onClick={toggleSidebar} style={{ textDecoration: 'none', color: 'black' }}>Pull Requests</Link></li>
  <li><Link to="/projects" onClick={toggleSidebar} style={{ textDecoration: 'none', color: 'black' }}>Projects</Link></li>
  <li><Link to="/discussions" onClick={toggleSidebar} style={{ textDecoration: 'none', color: 'black' }}>Discussions</Link></li>
</ul>

      </nav>
    </div>
  );
};

export default Popupsidebar;
