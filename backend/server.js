// server.js
const express = require("express");
const twilio = require("twilio");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
// Use environment port (for Render) or default to 3000
const port = process.env.PORT || 3000;

// --- Middleware ---
// Enable CORS for development
app.use(cors());
// Enable Express to parse JSON bodies from incoming requests
app.use(express.json());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../build')));

// --- Twilio Configuration ---
// Get credentials from a .env file for security
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const myPhoneNumber = process.env.MY_PHONE_NUMBER; // The number you want to send the SMS to

// Check if all required environment variables are set
if (!accountSid || !authToken || !twilioPhoneNumber || !myPhoneNumber) {
  console.error(
    "Twilio environment variables are not set. Please create a .env file."
  );
  process.exit(1); // Exit if configuration is missing
}

const client = twilio(accountSid, authToken);

// --- API Route ---
// This is the endpoint your React app will send the form data to
app.post("/api/send-sms", async (req, res) => {
  // Extract form data from the request body
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "All fields are required." });
  }

  // Create the message content
  const smsBody = `Hii , Pranay Sir someone wanted to contact you..\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

  try {
    // Use the Twilio client to send the SMS
    const twilioResponse = await client.messages.create({
      body: smsBody,
      from: twilioPhoneNumber,
      to: myPhoneNumber,
    });

    console.log("SMS sent successfully! SID:", twilioResponse.sid);
    // Send a success response back to the React app
    res.status(200).json({ success: true, message: "SMS sent successfully!" });
  } catch (error) {
    console.error("Error sending SMS:", error);
    // Send an error response back to the React app
    res.status(500).json({ success: false, error: "Failed to send SMS." });
  }
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
