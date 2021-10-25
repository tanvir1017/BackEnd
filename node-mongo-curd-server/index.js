const express = require("express");
const { MongoClient } = require("mongodb");
const Objectid = require("mongodb").ObjectId;
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());

// mongodb user : tanvir1
// mongodb pass : TFrBJ0ZclbKdFjBm

// from mongodb
const uri =
  "mongodb+srv://tanvir1:TFrBJ0ZclbKdFjBm@cluster0.14uaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function run() {
  try {
    await client.connect();
    const database = client.db("foodMaster");
    const userCollection = database.collection("users");

    // api get
    app.get("/users", async (req, res) => {
      const cursor = userCollection.find({});
      const users = await cursor.toArray();
      res.send(users);
    });

    // api edit
    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: Objectid(id) };
      const user = await userCollection.findOne(query);
      console.log("deleting this id", id);
      res.send(user);
    });

    // api post
    app.post("/users", async (req, res) => {
      // create a document to insert
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);
      console.log("got new user", req.body);
      console.log("addded user", result);
      res.json(result);
    });
    // api put
    app.put("/users/:id", async (req, res) => {
      const id = req.params.id;
      const updateUsers = req.body;
      const filter = { _id: Objectid(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          name: updateUsers.name,
          email: updateUsers.email,
        },
      };
      const result = await userCollection.updateOne(filter, updateDoc, options);
      console.log("updating user", req);
      res.send(result);
    });
    // api delete
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: Objectid(id) };
      const result = await userCollection.deleteOne(query);
      console.log("deleting id", result);
      res.json(result);
    });

    /*
    const result = await userCollection.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`); */
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("hello from app.get");
});

app.listen(port, () => {
  console.log("listening from port", port);
});
