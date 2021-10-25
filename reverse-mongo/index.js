const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

const users = [
  {
    id: 0,
    name: "Tanvir Hossain",
    Department: "CMT",
    Subject: "Software",
    email: "tanvir.hossaindev1@gmail.com",
  },
  {
    id: 1,
    name: "Saiful islam",
    Department: "CMT",
    Subject: "AI",
    email: "sifFahim25@gmail.com",
  },
  {
    id: 2,
    name: "Rakibul Islam",
    Department: "CMT",
    Subject: "Web Application",
    email: "rakib.dev1@gmail.com",
  },
  {
    id: 3,
    name: "Aysha Akter",
    Department: "CMT",
    Subject: "Teacher",
    email: "aysha@gmail.com",
  },
  {
    id: 4,
    name: "Uk proloy",
    Department: "CMT",
    Subject: "Web designer",
    email: "ukProloy@gmail.com",
  },
];

app.get("/", (req, res) => {
  res.send("Reversing somethings from node");
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

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});
app.listen(port, () => {
  console.log("listening from", port);
});
