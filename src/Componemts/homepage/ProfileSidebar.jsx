import React from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { auth, signInWithEmailAndPassword } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebaseConfig";
// import { signOut } from "firebase/auth";


const ProfileSidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  // const handleSignOut = async () => {
  //   try {
  //     await signOut(auth); // Firebase logout
  //     navigate("/login"); // Redirect to login page
  //   } catch (error) {
  //     console.error("Error signing out:", error);
  //   }
  // };
  const handleSignOut = () => {
    signOut(auth).then(() => {
      window.location.href = "/login"; // or use navigate()
    });
  };
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
  <li><a href="/profile" style={{ textDecoration: "none", color: "black" }}>Your Profile</a></li>
  <li><a href="/repositories" style={{ textDecoration: "none", color: "black" }}>Your Repositories</a></li>
  <li><a href="/projects" style={{ textDecoration: "none", color: "black" }}>Your Projects</a></li>
  <li><a href="/stars" style={{ textDecoration: "none", color: "black" }}>Your Stars</a></li>
  <li><a href="/settings" style={{ textDecoration: "none", color: "black" }}>Settings</a></li>
  {/* <li><a href="/signout" style={{ textDecoration: "none", color: "black" }}>Sign Out</a></li> */}
  <li>
        <span
          onClick={handleSignOut}
          style={{
            textDecoration: "none",
            color: "black",
            cursor: "pointer"
          }}
        >
          Sign Out
        </span>
      </li>
</ul>

      </div>
    </div>
  );
};

export default ProfileSidebar;
