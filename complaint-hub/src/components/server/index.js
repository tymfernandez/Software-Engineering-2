const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/user");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/user");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email })
  .then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Login successful " + user.fullname);
      } else {
        res.json("The username or password is incorrect");
      }
    } else {
      res.json("You have no Account, Sign up first?");
    }
  })
})

app.post("/register", (req, res) => {
  console.log(req.body); // Log incoming data
  userModel
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running!!");
});
