const express = require("express");

const PORT = process.env.APP_PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Goodbye World",
  });
});

app.all("/:message", (req, res) => {
  res.json({
    message: req.params.message,
  });
});

app.listen(PORT, () => {
  console.log(`app run on port ${PORT}`);
});
