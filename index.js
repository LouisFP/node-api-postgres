const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");
const db = require("./queries");
const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", db.getUsers);

app.get("/users/:id", db.getUserById);

app.post("/users", db.createUser);

app.put("/users/:id", db.updateUser);

app.delete("/users/:id", db.deleteUser);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
