const express = require("express");
const app = express();
const port = process.env.PRT || 3000;
const users = [
  {
    id: 0,
    name: "Tanvir Hossain",
    email: "tanvirHossain@gmail.com",
    Phone: "01784070569",
  },
  {
    id: 1,
    name: "Saiful Islam",
    email: "SaifulIslam@gmail.com",
    Phone: "01844557788",
  },
  {
    id: 2,
    name: "Shohage hossain",
    email: "Shohagehossain@gmail.com",
    Phone: "01784025468",
  },
  {
    id: 3,
    name: "Sajedul Islam",
    email: "SajedulIslam@gmail.com",
    Phone: "01457870569",
  },
  {
    id: 4,
    name: "Rakibul islam",
    email: "Rakibulislam@gmail.com",
    Phone: "01784457869",
  },
];

app.get("/", (req, res) => {
  res.send("hello frome naim");
});
app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("hello world", port);
});
