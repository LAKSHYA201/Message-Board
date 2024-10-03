const express = require("express");
const app = express();
const path = require("node:path");
const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const messages = [
  {
    text: "Hi there! How is the application?",
    user: "LAKSHYA201",
    added: new Date(),
  },
  {
    text: "It's Great, let's have a match of tanki online :)",
    user: "dhruv111",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});
app.get("/new", (req, res) => {
  res.render("form");
});
app.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

app.listen(3005, () => {
  console.log("The server is live at localhost:3005");
});
