/* const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!");
});

// app method
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  res.json(newUser);
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
    const searchReasult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchReasult);
  } else {
    res.send(users);
  }
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listening from", port);
}); */

//pHero

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send(
    "WOW. I am Excited to learn Node and express with nodemon. automatic restart"
  );
});

const users = [
  { id: 0, name: "Shabana", email: "Shabana@gmail.com", phone: "01788888888" },
  {
    id: 1,
    name: "Shabnoor",
    email: "Shabnoor@gmail.com",
    phone: "01788888888",
  },
  {
    id: 2,
    name: "Shrabonti",
    email: "Shrabonti@gmail.com",
    phone: "01788888888",
  },
  {
    id: 3,
    name: "Suchorita",
    email: "Suchorita@gmail.com",
    phone: "01788888888",
  },
  { id: 4, name: "Soniya", email: "Soniya@gmail.com", phone: "01788888888" },
  { id: 5, name: "Susmita", email: "Susmita@gmail.com", phone: "01788888888" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  // use query parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

// app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  // res.send(JSON.stringify(newUser))
  res.json(newUser);
});

// dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "oranges", "banana", "apple"]);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("Yummy Yummy tok marka fazli");
});

app.listen(port, () => {
  console.log("Listening to port ", port);
});
