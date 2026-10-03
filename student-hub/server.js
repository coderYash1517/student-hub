import path from "path";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import crypto from "crypto";

const app = express();

app.use(cors());
app.use(express.json());


// ===============================
// MONGODB CONNECTION
// ===============================

const MONGO_URI =
process.env.MONGO_URI;  

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully ✅");
  })
  .catch((error) => {
    console.error("MongoDB connection failed ❌");
    console.error(error.message);
  });


// ===============================
// USER MODEL
// ===============================

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    // Academic information
    attendance: {
      type: Number,
      default: 84,
    },

    cgpa: {
      type: Number,
      default: 8.2,
    },

    assignments: {
      type: Number,
      default: 5,
    },

    events: {
      type: Number,
      default: 4,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);


// ===============================
// REGISTER
// ===============================

app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    const cleanEmail = email.toLowerCase().trim();

    const existingUser = await User.findOne({
      email: cleanEmail,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "An account with this email already exists.",
      });
    }

    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const user = await User.create({
      name: name.trim(),
      email: cleanEmail,
      password: hashedPassword,

      // Default academic data
      attendance: 84,
      cgpa: 8.2,
      assignments: 5,
      events: 4,
    });

    console.log("New user registered:", user.email);

    res.status(201).json({
      message: "Account created successfully.",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        attendance: user.attendance,
        cgpa: user.cgpa,
        assignments: user.assignments,
        events: user.events,
      },
    });

  } catch (error) {
    console.error("Registration error:", error);

    res.status(500).json({
      message: "Server error. Please try again.",
    });
  }
});


// ===============================
// LOGIN
// ===============================

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    const cleanEmail = email.toLowerCase().trim();

    const user = await User.findOne({
      email: cleanEmail,
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    if (hashedPassword !== user.password) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    console.log("User logged in:", user.email);

    res.status(200).json({
      message: "Login successful.",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        attendance: user.attendance,
        cgpa: user.cgpa,
        assignments: user.assignments,
        events: user.events,
      },
    });

  } catch (error) {
    console.error("Login error:", error);

    res.status(500).json({
      message: "Server error. Please try again.",
    });
  }
});


// ===============================
// GET USER DATA
// ===============================

app.get("/api/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select(
      "-password"
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    res.status(200).json({
      user,
    });

  } catch (error) {
    console.error("Get user error:", error);

    res.status(500).json({
      message: "Server error.",
    });
  }
});


// ===============================
// TEST ROUTE
// ===============================

app.use(express.static(path.join(process.cwd(), "dist")));

app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist", "index.html"));
});


// ===============================
// START SERVER
// ===============================

const PORT = process.env.PORT || 5000;

// START SERVER
app.listen(PORT, "0.0.0.0", () => {
  console.log(`StudentHub server running on port ${PORT}`);
});