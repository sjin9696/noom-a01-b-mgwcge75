//BACKEND
import express from "express";
import path from "path";
import { WebSocketServer } from "ws";

const app = express();
app.set('view engine', "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/public", express.static(path.join(__dirname, "../public")));
app.get("/", (req, res) => res.render("home"));

console.log("hello");

const server = app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

const wss = new WebSocketServer({ server });

// 모든 연결된 클라이언트를 저장
const clients = new Set();

wss.on("connection", (socket) => {
  console.log("Connected to Browser ✅");
  clients.add(socket);
  
  socket.on("close", () => {
    console.log("Disconnected from Browser ❌");
    clients.delete(socket);
  });

  socket.on("message", (message) => {
    const messageString = message.toString();
    console.log("New message:", messageString);
    
    // 모든 클라이언트에게 메시지 브로드캐스트
    clients.forEach((client) => {
      if (client !== socket) {
        client.send(messageString);
      }
    });
  });

  socket.send("Welcome to the chat!");
});