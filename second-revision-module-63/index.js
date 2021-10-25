const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const users = [
  { _id: 0, name: "Tanvir Hossain", email: "hossainmdjabed037@gmail.com" },
  { _id: 1, name: "Rubayn Ahmed", email: "rubayenahmed@gmail.com" },
  { _id: 2, name: "Alif Hossain", email: "alifhossain@gmail.com" },
  { _id: 3, name: "Abdullah all mamun", email: "mamunalAbdullah@gmail.com" },
  { _id: 4, name: "Jackson zoy", email: "jacksonzoy@gmail.com" },
  { _id: 5, name: "Biplob", email: "biplob@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("hello frome server");
});
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

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  res.json(newUser);
});

app.listen(port, () => {
  console.log("listening to prot", port);
});
