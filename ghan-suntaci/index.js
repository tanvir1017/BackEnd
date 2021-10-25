const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

const users = [
  { id: 0, name: "Tanvir hossain", email: "hossainmdjabed@gmail.com" },
  { id: 1, name: "Saiful islam", email: "sifFahim@gmail.com" },
  { id: 2, name: "Rakibul islam", email: "Rakibulislam@gmail.com" },
  { id: 3, name: "shohage shanto", email: "shohagehossain@gmail.com" },
  { id: 4, name: "Jhanker Mahbub", email: "jahnkermahbub@gmail.com" },
  { id: 5, name: "Sajedul islam", email: "sajedulislam@gmail.com" },
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
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  res.json(newUser);
});

app.listen(port, () => {
  console.log("listening from", port);
});
