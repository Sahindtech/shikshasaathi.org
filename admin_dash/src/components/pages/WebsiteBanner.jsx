import React, { useState } from "react";
import Img from "../images/about-us.png";
import Img1 from "../images/alex.jpg";
import Img2 from "../images/seo.png";
import "./student.css";

const WebsiteBanner = () => {
  const [backgroundOptions, setBackgroundOptions] = useState([
    { id: 1, name: "Option 1", image: Img },
    { id: 2, name: "Option 2", image: Img1 },
    { id: 3, name: "Option 3", image: Img2 },
  ]);

  const [selectedBackground, setSelectedBackground] = useState(null);

  const handleBackgroundChange = (option) => {
    setSelectedBackground(option);
  };

  const handleUpdateBackground = () => {
    if (selectedBackground) {
      const { id, image } = selectedBackground;

      // Update the background on the backend
      fetch("http://localhost:5050/update-background", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ backgroundUrl: image }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.message);
          // Now you might update the local state or perform any additional logic
        })
        .catch((error) => console.error("Error updating background:", error));
    }
  };

  const handleAddBackground = async () => {
    // Open file input dialog
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", async (event) => {
      const file = event.target.files[0];

      if (file) {
        // Convert the selected image to base64
        const base64Image = await convertImageToBase64(file);

        // Add the new background option
        const newOption = {
          id: backgroundOptions.length + 1,
          name: `Option ${backgroundOptions.length + 1}`,
          image: base64Image,
        };

        setBackgroundOptions([...backgroundOptions, newOption]);
      }
    });

    input.click();
  };

  const handleDeleteBackground = () => {
    if (selectedBackground) {
      // Remove the selected background option
      const updatedOptions = backgroundOptions.filter(
        (option) => option !== selectedBackground
      );

      setBackgroundOptions(updatedOptions);
      setSelectedBackground(null);
    }
  };

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        resolve(event.target.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="container">
      <div className="selected-background">
        {selectedBackground && (
          <img
            src={selectedBackground.image}
            alt={selectedBackground.name}
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
        )}
      </div>
      <div className="buttons-container">
        <button onClick={handleAddBackground}>Add Background</button>
      </div>
      <h2>Background Image Options</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {backgroundOptions.map((option) => (
            <tr key={option.id}>
              <td>{option.id}</td>
              <td>{option.name}</td>
              <td>
                <img
                  src={option.image}
                  alt={option.name}
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
              </td>
              <td>
                <button onClick={() => handleBackgroundChange(option)}>
                  Select
                </button>
                <button onClick={handleDeleteBackground}>Delete</button>
                <button onClick={handleUpdateBackground}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WebsiteBanner;
