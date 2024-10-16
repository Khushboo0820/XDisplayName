import React, { useState } from "react";
import "./Nameform.css";

const NameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState({ firstNameError: "", lastNameError: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    let errors = { firstNameError: "", lastNameError: "" };

    if (!firstName || !lastName) {
      errors.firstNameError = "both fields are required.";
      hasError = true;
    }
    if (!firstName) {
      errors.firstNameError = "First name is required.";
      hasError = true;
    }

    if (!lastName) {
      errors.lastNameError = "Last name is required.";
      hasError = true;
    }

    if (hasError) {
      setError(errors);
      setFullName(""); // Reset full name on error
      return;
    }

    setFullName(`${firstName} ${lastName}`); // Set full name
    setError({ firstNameError: "", lastNameError: "" }); // Clear errors
  };

  return (
    <div>
      <h1 className="heading">Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        {error.firstNameError && (
          <p style={{ color: "red" }}>{error.firstNameError}</p>
        )}

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        {error.lastNameError && (
          <p style={{ color: "red" }}>{error.lastNameError}</p>
        )}

        <button type="submit" style={{ textAlign: "center" }}>
          Submit
        </button>
      </form>

      {fullName && <h2 style={{ textAlign: "center" }}>Full Name: {fullName}</h2>}
    </div>
  );
};

export default NameForm;
