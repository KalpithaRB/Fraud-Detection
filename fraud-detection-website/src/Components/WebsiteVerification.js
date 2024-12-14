import React, { useState } from "react";
import axios from "axios";
import "./WebsiteVerification.css"; // For styling

function WebsiteVerification() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    try {
      const response = await axios.post("http://localhost:5000/api/verify-website", { url });
      setResult(response.data);
    } catch (err) {
      setError("An error occurred while verifying the website.");
    }
  };

  return (
    <div className="website-verification">
      <h1>Website Verification</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit">Verify</button>
      </form>
      {result && (
        <div className="result">
          <h2>Result</h2>
          <p>Status: {result.status}</p>
          <p>Details: {result.details}</p>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default WebsiteVerification;
