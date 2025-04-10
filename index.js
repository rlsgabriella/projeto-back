const express = require("express");

const app = express();

app.use(express.json());

const users = [
  {
    name: "Gabriella",
    age: 29,
  },
];

app.get("/usuarios", function (req, res) {
  res.json(users);
});

app.post("/usuarios", function (req, res) {
  console.log(req.body)

  const newUser = req.body

  users.push(newUser);

  res.status(201).json(newUser);
});

app.listen(3001, () => console.log("Servidor rodando"));
