// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to the Mini Task Tracker 🚀</h1>
      <p>hello eorld</p>
      <p>Manage your tasks efficiently across stages: To Do, In Progress, Done.</p>
      
      <div style={{ marginTop: "30px" }}>
        <Link to="/signup">
          <button style={{ marginRight: "10px" }}>Sign Up</button>
        </Link>
        <Link to="/">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}
