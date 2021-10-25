const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello meghe meghe majhe");
});
const users = [
  { id: 0, name: "tanvir hossain", email: "hossainmdjabed037@gmail.com" },
  { id: 1, name: "Saiful islam", email: "siffahim25@gmail.com" },
  { id: 2, name: "Shohage islam", email: "shohage@gmail.com" },
  { id: 3, name: "tanvir hossain", email: "hossainmdjabed037@gmail.com" },
  { id: 4, name: "tanvir hossain", email: "hossainmdjabed037@gmail.com" },
];
app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  res.json(newUser);
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listening from ", port);
});
