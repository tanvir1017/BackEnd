const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const cors = require("cors");
app.use(cors());
app.use(express.json());

// APP GETTING
app.get("/", (req, res) => {
  res.send("from Module-63-curd-operations-server");
});

// APP LISTENING
app.listen(port, () => {
  console.log("listening from port", port);
});
