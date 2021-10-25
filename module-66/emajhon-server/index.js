const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

// env require
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middleware used
app.use(cors());
app.use(express.json());

// uri used
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.14uaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    const database = client.db("Ema_jhon_shop");
    const productCollection = database.collection("products_info");

    //   APP GETTING FOR API
    app.get("/products", async (req, res) => {
      const cursor = productCollection.find({});
      const page = req.query.page;
      const size = parseInt(req.query.size);
      const count = await cursor.count();
      let products;
      if (page) {
        products = await cursor
          .skip(page * size)
          .limit(size)
          .toArray();
      } else {
        products = await cursor.toArray();
      }
      res.send({
        count,
        products,
      });
    });

    app.post("/products/byKeys", async (req, res) => {
      const keys = req.body;
      const query = { key: { $in: keys } };
      const products = await productCollection.find(query).toArray();
      res.json(products);
    });
  } finally {
    // await client.close()
  }
}

run().catch(console.dir);

// APP GETTING THE ROOT SERVER
app.get("/", (req, res) => {
  res.send("Running from the ema-jhon server");
});

app.listen(port, () => {
  console.log("listening from the server of ema jhon", port);
});
