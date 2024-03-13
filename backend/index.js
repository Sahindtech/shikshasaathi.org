const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://shuklaaditi129:imZ9xO4sSti6eyt1@cluster0.oq6bjth.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Define a student schema and model using Mongoose
const studentSchema = new mongoose.Schema({
  name: String,
  guardian: String,
  dob: Date,
  mobile1: String,
  mobile2: String,
  address: String,
  education: String,
  admissionDate: Date,
  course: String,
  photo: String, // This could be a URL or a reference to a stored file
});

const Student = mongoose.model("shikshasaathi", studentSchema);

// Middleware
app.use(bodyParser.json());

// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ...

// Define a background schema and model using Mongoose
const backgroundSchema = new mongoose.Schema({
  backgroundUrl: String,
});

const Background = mongoose.model("Background", backgroundSchema);

// ...

// Update the background endpoint
app.post("/update-background", async (req, res) => {
  try {
    const { backgroundUrl } = req.body;

    // Check if there is an existing background document
    const existingBackground = await Background.findOne();

    if (existingBackground) {
      // Update the existing background
      existingBackground.backgroundUrl = backgroundUrl;
      await existingBackground.save();
    } else {
      // Create a new background document
      const newBackground = new Background({ backgroundUrl });
      await newBackground.save();
    }

    res.status(200).json({ message: "Background updated successfully" });
  } catch (error) {
    console.error("Error updating background:", error);
    res.status(500).json({ error: "Error updating background" });
  }
});

// Add an endpoint to fetch the current background
app.get("/update-background", async (req, res) => {
  try {
    const existingBackground = await Background.findOne();
    const backgroundUrl = existingBackground
      ? existingBackground.backgroundUrl
      : "";
    res.status(200).json({ backgroundUrl });
  } catch (error) {
    console.error("Error fetching background:", error);
    res.status(500).json({ error: "Error fetching background" });
  }
});

// ...

// Routes
app.post("/students", upload.single("photo"), async (req, res) => {
  try {
    const {
      name,
      guardian,
      dob,
      mobile1,
      mobile2,
      address,
      education,
      admissionDate,
      course,
    } = req.body;

    // Access the photo from req.file
    const photo = req.file ? req.file.buffer.toString("base64") : null;

    const student = new Student({
      name,
      guardian,
      dob,
      mobile1,
      mobile2,
      address,
      education,
      admissionDate,
      course,
      photo,
    });

    const savedStudent = await student.save();
    console.log("Successfully registered");
    console.log(savedStudent);
    res.status(201).json(savedStudent);
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({ error: "Error creating student" });
  }
});

app.delete("/students/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ error: "Error deleting student" });
  }
});

app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Error fetching students" });
  }
});

app.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findOne({ _id: req.params.id });
    res.status(200).json(student);
  } catch (error) {
    console.error("Error fetching student:", error);
    res.status(500).json({ error: "Error fetching student" });
  }
});

// Update a student by ID
// Update a student by ID
app.put("/students/:id", upload.single("photo"), async (req, res) => {
  try {
    const {
      name,
      guardian,
      dob,
      mobile1,
      mobile2,
      address,
      education,
      admissionDate,
      course,
    } = req.body;

    // Access the photo from req.file
    const photo = req.file ? req.file.buffer.toString("base64") : null;

    // Check if the photo is provided in the request
    const updatedData = {
      name,
      guardian,
      dob,
      mobile1,
      mobile2,
      address,
      education,
      admissionDate,
      course,
      photo, // Include photo in the updatedData object
    };

    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ error: "Error updating student" });
  }
});

app.listen(5050, () => {
  console.log("Server started on port 5050");
});
