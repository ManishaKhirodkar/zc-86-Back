const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./Router/index");

const port = 4545;
const hostname = "localhost";
const serverDB =
  "mongodb+srv://db_user:LLvmOVBw1M9ZCKTq@cluster0.0htzs.mongodb.net/TestDB?retryWrites=true&w=majority";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);


mongoose
  .connect(serverDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    app.listen(port, hostname, () => {
      console.log(`Server is running at ${hostname}: ${port}`);
    });
  })
  .catch((err) => console.log(err));
