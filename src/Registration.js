import React, { useState } from "react";

function RegistrationForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.firstName) newErrors.firstName = "First Name is required";
    if (!form.lastName) newErrors.lastName = "Last Name is required";

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password) newErrors.password = "Password is required";
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Registration Successful!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div>
      <h2>User Registration</h2>

      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
        <p style={{ color: "red" }}>{errors.firstName}</p>

        <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
        <p style={{ color: "red" }}>{errors.lastName}</p>

        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <p style={{ color: "red" }}>{errors.email}</p>

        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <p style={{ color: "red" }}>{errors.password}</p>

        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />
        <p style={{ color: "red" }}>{errors.confirmPassword}</p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
