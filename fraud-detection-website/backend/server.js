const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Website Verification Endpoint
app.post("/api/verify-website", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ status: "error", details: "URL is required" });
  }

  try {
    // Simulated logic for checking website legitimacy
    const isLegitimate = url.includes("https"); // Placeholder logic

    res.json({
      status: isLegitimate ? "Legitimate" : "Suspicious",
      details: isLegitimate
        ? "The website has a valid SSL certificate."
        : "The website does not appear secure.",
    });
  } catch (error) {
    res.status(500).json({ status: "error", details: "Server error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
