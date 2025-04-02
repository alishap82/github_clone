import React from 'react'
import { Button } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'

const Popupsidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
    className={`sidebar ${isOpen ? "open" : ""}`}
    style={{
      position: "fixed",
      top: 0,
      left: isOpen ? 0 : "-250px",
      width: "250px",
      height: "100%",
      backgroundColor: "#fff",
      boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
      transition: "left 0.3s ease-in-out",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      zIndex: 1050
    }}
  >
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button variant="light" className="border-0" onClick={toggleSidebar}>
        <FaTimes size={20} />
      </Button>
    </div>
    <nav className="mt-3">
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Home</li>
        <li>Issues</li>
        <li>Pull Requests</li>
        <li>Projects</li>
        <li>Discussions</li>
      </ul>
    </nav>
  </div>
  )
}

export default Popupsidebar