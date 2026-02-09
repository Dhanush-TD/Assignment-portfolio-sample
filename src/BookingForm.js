import React, { useState } from "react";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.date || !form.time) {
      setError("All fields are required");
      setSuccess("");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Invalid email format");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Appointment booked successfully!");
    setForm({ name: "", email: "", phone: "", date: "", time: "" });
  };

  return (
    <div>
      <h2>Appointment Booking</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />

        <input type="date" name="date" value={form.date} onChange={handleChange} />
        <input type="time" name="time" value={form.time} onChange={handleChange} />

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookingForm;
