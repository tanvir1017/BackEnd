const express = require("express");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.14uaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("Genius_Car_Mechanic");
    const serviceCollection = database.collection("service");
    // api get
    app.get("/service", async (req, res) => {
      const cursor = serviceCollection.find({});
      const service = await cursor.toArray();
      res.send(service);
    });

    // single api get
    app.get("/service/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const service = await serviceCollection.findOne(query);
      res.send(service);
    });

    //api delete
    app.delete("/service/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const service = await serviceCollection.deleteOne(query);
      res.json(service);
    });

    // API POST
    app.post("/service", async (req, res) => {
      const service = req.body;
      console.log("post hit the api", service);
      const result = await serviceCollection.insertOne(service);
      console.log(result);
      res.json(result);

      console.log("hitting the api");
      res.send("post hitted");
    });
    console.log("connect to database");
  } finally {
  }
}
run().catch(console.dir);

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Genius car service doctor");
});
app.listen(port, () => {
  console.log("Running from port", port);
});
