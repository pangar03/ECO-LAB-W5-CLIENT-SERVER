// document.getElementById("get-btn").addEventListener("click", getUsers);

// function getUsers() {
//   fetch("http://localhost:5050/users")
//     .then((response) => response.json())
//     .then((data) => console.log("get response", data))
//     .catch((error) => console.error("Error:", error));
// }

const counterTimer = document.getElementById("counter-time");

// GAME START
fetch("http://localhost:5050/start", {
  method: "POST",
})
  .then((response) => response.json())
  .then((data) => console.log("start response", data))
  .catch((error) => console.error("Error:", error));

const playersDiv = document.getElementById("players-choice");
const counterStatus = document.getElementById("counter-status");

// Counter for the round
const gameInterval = () => {
  let counter = 10;
  let interval = setInterval(() => {
    counterTimer.innerHTML = parseInt(counter);
    counter--;
    if (counter < 0) {
      counter = 10;
      console.log("EXECUTE OTHER FUNCTION");
      clearInterval(interval);
      displayMatch();
    }
  }, 1000);
}

gameInterval();

// Display function

const displayMatch = async () => {
  const response = await fetch("http://localhost:5050/check");
  const data = await response.json();
  counterStatus.innerHTML = "Resetting in...";
  
  data.forEach((player) => {
    const playerText = document.createElement("h3");
    playerText.innerHTML = `${player.name} selected ${player.selection}`;
    playersDiv.appendChild(playerText);
  });

  if(data.length < 2) {
    const playerText = document.createElement("h2");
    playerText.innerHTML = "Some players didn't play this round";
    playersDiv.appendChild(playerText);
  }
  

  let displayCounter = 5;
  let displayInterval = setInterval(async () => {
    counterTimer.innerHTML = parseInt(displayCounter);
    displayCounter--;
    if (displayCounter < 0) {
      playersDiv.innerHTML = "";
      await fetch ("http://localhost:5050/reset", {
        method: "POST",
      }); 
      counterStatus.innerHTML = "Time Remaining";
      clearInterval(displayInterval);
      gameInterval();
    }
  }, 1000);
};