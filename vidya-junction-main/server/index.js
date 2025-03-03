// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
const Slot = require("./models/Slot");
const Class = require("./models/Class");
// Create an Express app
const app = express();
const port = process.env.PORT || 3003;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://admin:adiweb@cluster0.c7igevz.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Check MongoDB connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define a sample route
app.get("/", (req, res) => {
  res.send("Hello, Express with MongoDB!");
});

app.post("/add-slot", async (req, res) => {
  try {
    const { className, date, time, chapter, subtopics, description } = req.body;
    let c = await Class.findOne({ className: className });
    let attendance = [];
    if (c) {
      c.students.forEach((student) => {
        attendance.push(false);
      });
    } else {
      return;
    }
    const newSlot = new Slot({
      className,
      date,
      time,
      chapter,
      subtopics,
      description,
      attendance,
    });
    await newSlot.save();

    res.status(201).json({ message: "Slot added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const { name, password } = req.body;

    const existingUser = await User.findOne({ name });

    if (!existingUser) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (password !== existingUser.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Sign in successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password, phoneNumber, schoolName } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const newUser = new User({
      name,
      email,
      password: password,
      phoneNumber,
      schoolName,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/addClass", async (req, res) => {
  let { students, className } = req.body;
  let newClass = new Class({ students: students, className: className });
  newClass.save();
});

app.get("/getSlots", async (req, res) => {
  let slots = await Slot.find({});
  res.json({ slots: slots });
});

app.post("/getSlots", async (req, res) => {
  let { className } = req.body;
  let slots = await Slot.find({ className: className });
  let c = await Class.findOne({ className: className });
  if (c) {
    res.json({ slots: slots, students: c.students });
  } else {
    res.json({ error: "Error" });
  }
});

app.post("/updateAttendance", async (req, res) => {
  let { id, attendance } = req.body;
  let slot = await Slot.findById(id);
  slot.attendance = attendance;
  slot.save();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
