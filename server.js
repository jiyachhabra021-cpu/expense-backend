const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// simple storage for now
let expenses = [];

// add expense
app.post("/add", (req, res) => {
    expenses.push(req.body);
    res.json({ message: "added" });
});

// get expenses
app.get("/get", (req, res) => {
    res.json(expenses);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});