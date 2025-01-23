const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "client")));

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/join.html"));
});

// Create an HTTP server
const server = http.createServer(app);

// Attach socket.io to the same server
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Start the server
server.listen(port, () => {
  console.log(`Server and socket running at http://localhost:${port}`);
});

//LOGGING IN-----------------------------------------------------------------------------------------

app.post("/login", (req, res) => {
  const { usernameInput, passwordInput } = req.body;
  //console.log('sbruh');
  console.log(`username: ${usernameInput} password: ${passwordInput}`);

  const query = "SELECT * FROM users WHERE username = ? LIMIT 1";
});

//LOGGING IN-----------------------------------------------------------------------------------------

//JOINING ROOMS-----------------------------------------------------------------------------------------

const waitingPlayers = {}; //list of players waiting to join a room

const openQueue = [];

const lobbies = {};

const players = {}; // Store player data { playerId: { roomId, socketId, ... } }

io.on("connection", (socket) => {
  console.log(`Player connected: ${socket.id}`);
  const playerId = socket.handshake.query.playerId;
  const roomId = socket.handshake.query.roomId; // Get roomId from query

  if (playerId && players[playerId]) {
    players[playerId].socketId = socket.id; // Update socket ID

    if (roomId && lobbies[roomId]) {
      socket.join(roomId); // Rejoin the room
      console.log(`Player ${playerId} rejoined room: ${roomId}`);
      io.to(roomId).emit("player-reconnected", {
        playerId,
        socketId: socket.id,
      });
    }
  }

  //HANDLE THE RECONNECTIONS---------------------------
  socket.on("reconnect-attempt", ({ playerId, roomId }) => {
    if (playerId && roomId && lobbies[roomId]) {
      socket.join(roomId);
      console.log(`Player ${playerId} rejoined room: ${roomId}`);
      io.to(roomId).emit("player-reconnected", {
        playerId,
        socketId: socket.id,
      });


    } else {
      console.log(`Reconnection failed: Room ${roomId} does not exist.`);
    }
  });
  
  socket.on("request-player-list", (playerList) =>{
    console.log("here's the player list!")
    console.log(playerList)
    
     io.to(roomId).emit('player-list',playerList)
  })

  //HANDLE THE RECONNECTIONS---------------------------

  socket.on("join-open", ({ username }) => {
    const playerId = `player-${socket.id}`; // Assign a unique player ID
    const player = {
      id: socket.id,
      username: username || `Player-${socket.id}`,
    };

    let lobbyId;
    if (openQueue.length === 0) {
      // Create a new lobby
      lobbyId = `lobby-${socket.id}`;
      lobbies[lobbyId] = { players: [player], votes: 0, started: false };
      openQueue.push(lobbyId);
    } else {
      // Join an existing lobby
      lobbyId = openQueue[0];
      lobbies[lobbyId].players.push(player);
    }

    socket.join(lobbyId);
    players[playerId] = {
      roomId: lobbyId,
      socketId: socket.id,
      username: player.username,
    };

    console.log(`Player ${playerId} joined room: ${lobbyId}`);
    io.in(lobbyId).emit("player-joined", { players: lobbies[lobbyId].players });

    // Check if lobby is full (4 players)
    if (lobbies[lobbyId].players.length === 4) {
      console.log(`Lobby ${lobbyId} is full, starting game...`);
      io.in(lobbyId).emit("game-start", { lobbyId });
      
      lobbies[lobbyId].started = true; // Mark lobby as started
      openQueue.shift(); // Remove the lobby from the queue
    }
  });

  //HANDLE DISCONNECTS------------------------------------------------------------
  socket.on("disconnect", () => {
    console.log(`Player disconnected: ${socket.id}`);
    const playerId = Object.keys(players).find(
      (id) => players[id].socketId === socket.id
    );

    if (playerId) {
      const { roomId } = players[playerId];
      const lobby = lobbies[roomId];

      if (lobby) {
        // Remove player from lobby
        lobby.players = lobby.players.filter((p) => p.id !== socket.id);

        // Check if lobby is empty
        if (lobby.players.length === 0) {
          console.log(
            `Room ${roomId} is empty, setting timeout for deletion...`
          );

          // Delay room deletion to allow reconnection within 15 seconds
          setTimeout(() => {
            if (lobbies[roomId] && lobbies[roomId].players.length === 0) {
              console.log(`Deleting room ${roomId} after grace period.`);
              delete lobbies[roomId];
              openQueue.shift();
            }
          }, 15000); // 15 seconds grace period
        } else {
          io.in(roomId).emit("player-left", { players: lobby.players });
        }
      }
      delete players[playerId];
    }
  });
  //HANDLE DISCONNECTS------------------------------------------------------------

  socket.on("test-sent", ({ roomId }) => {
    console.log(`roomId received: ${roomId}`);
    const room = io.sockets.adapter.rooms.get(roomId);
    if (room) {
      console.log(`Room ${roomId} exists with members:`, [...room]);
      io.to(roomId).emit("test-recieved", "hello world!");
    } else {
      console.log(`Room ${roomId} does not exist.`);
    }
  });
});
