import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./student.css";
function StudentUpdate() {
  const { id } = useParams();
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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`http://localhost:5050/students/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const studentData = await response.json();
        setStudent(studentData);
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    fetchStudentData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];

      // Check if the file is a valid image (JPG) and not exceeding 2 MB
      if (file && file.type === "image/jpeg" && file.size <= 2 * 1024 * 1024) {
        setStudent((prevStudent) => ({ ...prevStudent, photo: file }));
      } else {
        // Clear the input if the file is not valid
        e.target.value = null;
        alert("Please select a valid JPG image less than or equal to 2 MB.");
      }
    } else {
      setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in student) {
        formData.append(key, student[key]);
      }

      const response = await fetch(`http://localhost:5050/students/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        console.log("Student updated successfully");
        const studentData = await response.json();
        console.log(studentData);
        navigate("/list");
      } else {
        console.error("Error updating student:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating student:", error);
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
            type="text"
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
            type="text"
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

export default StudentUpdate;
