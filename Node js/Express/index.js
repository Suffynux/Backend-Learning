import express from "express";

const port = 3000;
const app = express();
// Allowing our app to handle JSON data
app.use(express.json());

const teaData = [];
let index = 1;

// POST request: Add new tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).send({ error: "Name and price are required" });
  }
  const newTea = { id: index++, name, price };
  teaData.push(newTea);
  res.status(201).send(newTea);
  console.log("Data received from User! Thank you");
});

// GET request: Fetch all teas
app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});

// GET request: Fetch a single tea by ID
app.get("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Cannot find the tea");
  }
  res.status(200).send(tea);
});

// PUT request: Update a tea by ID
app.put("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Cannot find the tea");
  }
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).send({ error: "Name and price are required" });
  }
  tea.name = name;
  tea.price = price;
  res.status(202).send(tea);
});

// DELETE request: Delete a tea by ID
app.delete("/teas/:id", (req, res) => {
  const index = teaData.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("Cannot find the tea");
  }
  teaData.splice(index, 1);
  console.log("deleted");
  return res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log("Server is running on port", port);
});
