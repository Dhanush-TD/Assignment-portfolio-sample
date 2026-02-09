import React from "react";
import { Navigate } from "react-router-dom";

function Dashboard({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>
      <p>Welcome! You are successfully logged in.</p>
    </div>
  );
}

export default Dashboard;
