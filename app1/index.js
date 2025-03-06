// document.getElementById("get-btn").addEventListener("click", getUsers);

// function getUsers() {
//   fetch("http://localhost:5050/users")
//     .then((response) => response.json())
//     .then((data) => console.log("get response", data))
//     .catch((error) => console.error("Error:", error));
// }

// ID assignatn of the player
const id = Date.now();

let player = {
  id
}

const username = document.getElementById("player-name");
const rockButton = document.getElementById("btn-rock");
const paperButton = document.getElementById("btn-paper");
const scissorsButton = document.getElementById("btn-scissors");

rockButton.addEventListener("click", async () => {
  player = {
    ...player,
    selection: "🪨",
    name: username.value
  }
  
  const response = await fetch("http://localhost:5050/play-round/" + id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(player)
  }).then((response) => response.json())
    .then((data) => console.log("post response", data))
    .catch((error) => console.error("Error:", error));
});

paperButton.addEventListener("click", async () => {
  player = {
    ...player,
    selection: "📄",
    name: username.value
  }

  const response = await fetch("http://localhost:5050/play-round/" + id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(player)
  }).then((response) => response.json())
    .then((data) => console.log("post response", data))
    .catch((error) => console.error("Error:", error));
});

scissorsButton.addEventListener("click", async () => {
  player = {
    ...player,
    selection: "✂️",
    name: username.value
  }

  const response = await fetch("http://localhost:5050/play-round/" + id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(player)
  }).then((response) => response.json())
    .then((data) => console.log("post response", data))
    .catch((error) => console.error("Error:", error));
});
