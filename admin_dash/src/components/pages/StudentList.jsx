import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router";
import "./student.css";

Modal.setAppElement("#root"); // Set the root element for accessibility

function StudentList() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async (id) => {
      try {
        const response = await fetch(`http://localhost:5050/students`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const studentData = await response.json();
        setStudents(studentData);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5050/students/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Student deleted successfully");
        const updatedStudents = students.filter(
          (student) => student._id !== id
        );
        setStudents(updatedStudents);
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleUpdate = (id) => {
    console.log(`Update student with ID: ${id}`);
    navigate(`/student-update/${id}`);
  };

  const handleView = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handlePrint = () => {
    // Trigger print functionality
    window.print();
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Status</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{parseInt(student._id.slice(-5), 16)}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.status}</td>
              <td>{student.mobile1}</td>
              <td>
                <button onClick={() => handleUpdate(student._id)}>
                  Update
                </button>
                <button onClick={() => handleDelete(student._id)}>
                  Delete
                </button>
                <button onClick={() => handleView(student)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Student Details"
        className="modal-admit-card"
        overlayClassName="modal-overlay"
      >
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            {selectedStudent && (
              <>
                <h2>{selectedStudent.name}</h2>

                <div className="admit-card">
                  <img
                    src={`data:image/jpeg;base64, ${selectedStudent.photo}`}
                    alt={`${selectedStudent.name}`}
                    className="student-photo"
                  />
                  <div>
                    <p>ID: {parseInt(selectedStudent._id.slice(-5), 16)}</p>
                    <p>Name: {selectedStudent.name}</p>
                    <p>Guardian: {selectedStudent.guardian}</p>
                    <p>Course: {selectedStudent.course}</p>
                    <p>Status: {selectedStudent.status}</p>
                    <p>Mobile: {selectedStudent.mobile}</p>
                    {/* Add more details as needed */}
                  </div>
                </div>
                <button className="print-button" onClick={handlePrint}>
                  Print
                </button>
              </>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default StudentList;
