const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use("/player", express.static(path.join(__dirname, "app1")));
app.use("/match", express.static(path.join(__dirname, "app2")));

let users = [
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/play-round/:id", (req, res) => {
  const { id } = req.params;
  const {name, selection} = req.body;
  
  const indexUser = users.findIndex((user) => user.id === id);
  if(indexUser >= 0) {
    users[indexUser] = {
      ...users[indexUser],
      name,
      selection,
    };
  } else {
    users.push({
      id,
      name,
      selection,
    });
  }

  res.send(users);
});

app.post("/reset", (req, res) => {
  users = [];
  res.send(users);
});

app.get("/check", (req, res) => {

  const data = [];

  users.forEach((user) => {
    if(data.length < 2){
      data.push({
        name: user.name || "Empty",
        selection: user.selection || "Empty"
      });
    } else {
      return;
    }
  });

  res.send(data);
});

app.post("/start", (req, res) => {
  res.send(users);
});

app.listen(5050);
