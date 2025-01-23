console.log("bruh!!!");

//GRABBING DATA FROM SESSION STORAGE (CUZ THE SOCKET RECONNECTS WHEN REDIRECTING)----------------------------
localStorage.removeItem("username");
let playerId = localStorage.getItem("playerId");
if (!playerId) {
  playerId = `player-${Math.random().toString(36).substr(2, 9)}`;
  localStorage.setItem("playerId", playerId);
}

// Retrieve the roomId from the URL or localStorage
let roomId =
  new URLSearchParams(window.location.search).get("room") ||
  localStorage.getItem("roomId");

if (roomId) {
  localStorage.setItem("roomId", roomId); // Store it in localStorage for persistence
}

//GRAB THE USERNAME FROM SESSION STORAGE
const username = sessionStorage.getItem("username");

if (!username) {
  alert("No username found! Redirecting to join page...");
  window.location.href = "/";
} else {
  console.log(`Username for this tab: ${username}`);
  document.getElementById(
    "welcomeMessage"
  ).textContent = `Welcome, ${username}!`;
}
// Connect to the socket server with the playerId and roomId
const socket = io(window.location.origin, {
  query: { playerId, roomId }, // Send playerId and roomId during connection
});

socket.on("connect", () => {
  console.log(`Connected to server with socket ID: ${socket.id}`);
  socket.emit("reconnect-attempt", { playerId, roomId });
});

socket.on("player-reconnected", ({ playerId, socketId }) => {
  console.log(`Player ${playerId} reconnected with socket ${socketId}`);
});

// Ensure the roomId is valid before requesting room players
if (roomId) {
  console.log(`Client retrieved roomId: ${roomId}`);
  socket.emit("get-room-players", { roomId });
} else {
  console.error("No roomId found. Redirecting to join page...");
  window.location.href = "/";
}

//GRABBING DATA FROM LOCAL STORAGE (CUZ THE SOCKET RECONNECTS WHEN REDIRECTING)----------------------------

const playerListDiv = document.getElementById("playersInYourRoom");

const welcomeMessageDiv = document.getElementById("welcomeMessage");



welcomeMessageDiv.textContent = `hello ${username}`;

// Grab the players from the server
socket.on("player-joined", ({ players }) => {
  console.log("Player joined: ", players);
  playerListDiv.innerHTML = "";

  players.forEach((player) => {
    const playerItem = document.createElement("div");
    playerItem.textContent = player.username || player.id;
    playerListDiv.appendChild(playerItem);
  });
});
// Request for room players as soon as the page loads-------------------

socket.on("test-recieved", (data) => {
  console.log(data);
});

socket.on("player-list", (playerList)=>{
  console.log('bruh')
  console.log(playerList)
})
