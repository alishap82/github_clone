import React from "react";
import { FaTimes } from "react-icons/fa";

const ProfileSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`profile-sidebar ${isOpen ? "open" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        right: isOpen ? "0" : "-300px", // Slide-in effect
        width: "300px",
        height: "100%",
        backgroundColor: "#fff",
        boxShadow: "-2px 0 5px rgba(0,0,0,0.1)",
        transition: "right 0.3s ease-in-out",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        zIndex: 1050,
      }}
    >
      {/* Close button */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "20px",
          }}
          onClick={toggleSidebar}
        >
          <FaTimes />
        </button>
      </div>

      {/* Profile Content */}
      <div className="mt-3">
        <h5>User</h5>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
          <li><a href="/profile">Your Profile</a></li>
          <li><a href="/repositories">Your Repositories</a></li>
          <li><a href="/projects">Your Projects</a></li>
          <li><a href="/stars">Your Stars</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/signout">Sign Out</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
