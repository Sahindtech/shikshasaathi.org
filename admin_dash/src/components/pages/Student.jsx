import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./student.css";
function Student() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    guardian: "",
    dob: "",
    mobile1: "",
    mobile2: "",
    address: "",
    education: "",
    admissionDate: "",
    course: "",
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];

      // Check if the file is a valid image and not exceeding 2 MB
      const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
      const maxSize = 2 * 1024 * 1024; // 2 MB

      if (file && validImageTypes.includes(file.type) && file.size <= maxSize) {
        setStudent({ ...student, photo: file });
      } else {
        // Clear the input if the file is not valid
        e.target.value = null;
        alert("Please select a valid image less than or equal to 2 MB.");
      }
    } else {
      setStudent({ ...student, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation for required fields
    const requiredFields = ["name", "guardian", "dob", "mobile1"];
    const hasEmptyFields = requiredFields.some((field) => !student[field]);

    if (hasEmptyFields) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const formData = new FormData();
      for (const key in student) {
        formData.append(key, student[key]);
      }

      const response = await fetch("http://localhost:5050/students", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Registered successfully");
        const data = await response.json();
        console.log(data);
        navigate("/list");
      } else {
        console.error("Registration failed:", response.statusText);
        // Provide a user-friendly error message
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error creating student:", error);
      // Provide a user-friendly error message
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={student.name}
            onChange={handleInputChange}
          />
          <br />
          <br />

          <label htmlFor="guardian">Guardian*</label>
          <input
            type="text"
            id="guardian"
            name="guardian"
            value={student.guardian}
            onChange={handleInputChange}
          />
          <br />
          <br />

          <label htmlFor="dob">Date of birth*</label>
          <input
            type="date"
            id="dob"
            name="dob"
            placeholder="dd/mm/yy"
            value={student.dob}
            onChange={handleInputChange}
          />
          <br />
          <br />

          <label htmlFor="mobile1">Mobile1*</label>
          <input
            type="text"
            id="mobile1"
            name="mobile1"
            value={student.mobile1}
            onChange={handleInputChange}
          />
          <br />
          <br />

          <label htmlFor="mobile2">Mobile2*</label>
          <input
            type="text"
            id="mobile2"
            name="mobile2"
            value={student.mobile2}
            onChange={handleInputChange}
          />
          <br />
          <br />

          <label htmlFor="address">Address*</label>
          <input
            type="text"
            id="address"
            name="address"
            value={student.address}
            onChange={handleInputChange}
          />
          <br />
          <br />

          <label htmlFor="education">Education*</label>
          <input
            type="text"
            id="education"
            name="education"
            value={student.education}
            onChange={handleInputChange}
          />
          <br />
          <br />

          <label htmlFor="admissionDate">Admission date*</label>
          <input
            type="date"
            id="admissionDate"
            name="admissionDate"
            placeholder="02/03/2024"
            value={student.admissionDate}
            onChange={handleInputChange}
          />
          <br />
          <br />

          <label htmlFor="course">Course*</label>
          <input
            type="text"
            id="course"
            name="course"
            placeholder="MCA"
            value={student.course}
            onChange={handleInputChange}
          />
          <br />
          <br />

          <label htmlFor="photo">Photo*</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleInputChange}
          />
          <br />
          <br />
        </div>

        <div id="button1">
          <button type="reset">Reset</button>
        </div>

        <div id="button2">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Student;
