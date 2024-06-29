const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8000; // Backend server port

app.use(cors());
app.use(bodyParser.json());

app.post("/signup", (req, res) => {
  const { username, email, password, password_confirm } = req.body;
  // Handle signup logic
  res.status(200).send({ message: "Signup successful" });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
