import React from "react";

const personsData = [
  { name: "John Doe", dateOfBirth: "1990-01-15" },
  { name: "Jane Smith", dateOfBirth: "1985-05-20" },
  { name: "Alice Johnson", dateOfBirth: "1995-09-10" },
];

function PersonDetails() {
  const calculateAge = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Person Details</h2>

      <ul>
        {personsData.map((person, index) => (
          <li key={index} style={{ marginBottom: "15px" }}>
            <p><strong>Name:</strong> {person.name}</p>
            <p><strong>Date of Birth:</strong> {person.dateOfBirth}</p>
            <p><strong>Age:</strong> {calculateAge(person.dateOfBirth)} years</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonDetails;
