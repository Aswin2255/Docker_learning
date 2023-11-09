const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongodbi_db:27017/mydb", {})
  .then((data) => {
    console.log("connecte8");
  })
  .catch((er) => {
    console.log(er);
  });
const newentry = new mongoose.Schema({
  text: {
    type: String,
  },
  date: {
    type: String,
    default: Date.now(),
  },
});
const entry = mongoose.model("entryofdb", newentry);
app.get("/h", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/", async (req, res) => {
  try {
    const newdata = new entry({
      text: "hellow",
    });
    await newdata.save();
    res.send("entry is created");
  } catch (error) {
    console.log(error);
    console.log("er");
  }
});
app.listen(port, () => {
  console.log(`api running @ ${port}`);
});
