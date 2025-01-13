const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const AWS = require("aws-sdk");
require("dotenv").config();

const app = express();

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Enable CORS

const allowedOrigins = [
  "http://localhost:5173", // Local development
  "https://portfolio-new-self-ten.vercel.app", // Deployed frontend
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies or authentication headers
  })
);

// Parse JSON request body
app.use(express.json());

// Configure AWS SDK with your SES credentials
AWS.config.update({
  region: "ap-south-1",
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

// Create a transporter using AWS SES
const transporter = nodemailer.createTransport({
  SES: new AWS.SES({ apiVersion: "2010-12-01" }),
});

// Send email POST request handler
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Define the email details
    const mailOptions = {
      from: "withcoolisha93@gmail.com", // Verified sender email
      to: "iamishagoyal@gmail.com", // Verified recipient email
      subject: `New Message from ${name}`,
      text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    // Log the result of sending the email
    console.log("Email sent successfully:", info);

    // Send response back to the client
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to send email.", error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
