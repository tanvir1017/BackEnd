// first create require express
const express = require("express");
// cors install
const cors = require("cors");
// creating app with the cors
app.use(cors());
// create app with the express
const app = express();
// create port with || process.env.PORT || 3000;
const port = process.env.PORT || 5000;
// you have get app by "/" (req, res)
app.get("/", (req, res) => {
  res.send("wow i am so satisfied to learn node express app.get(response)");
});

// api
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

app.get("/users/fruits/mangoes/fazli", (req, res) => {
  res.send("Fazli amar shate koiro na chalaki");
});
// you have to listening the app
app.listen(port, () => {
  console.log("listening from ", port);
});
