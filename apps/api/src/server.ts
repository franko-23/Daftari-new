import express from "express";

const app = express();

const PORT = process.env.PORT || 10000;

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Daftari Plus API is working"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
