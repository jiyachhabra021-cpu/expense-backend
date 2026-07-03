const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let expenses = [];

app.post("/add", (req, res) => {
    expenses.push(req.body);
    res.json({ message: "added" });
});

app.get("/get", (req, res) => {
    res.json(expenses);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});