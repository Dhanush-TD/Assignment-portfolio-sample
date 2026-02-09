import React from "react";

function ContactCard({ name, email, phone, address }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        width: "250px",
        borderRadius: "8px",
        boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
}

export default ContactCard;
