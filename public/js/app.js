//FRONT
const socket = new WebSocket("ws://localhost:3000");

// DOM 요소
const welcome = document.getElementById("welcome");
const room = document.getElementById("room");
const welcomeForm = welcome.querySelector("form");
const roomForm = room.querySelector("#msg");
const nameForm = room.querySelector("#name");
const messageList = room.querySelector("ul");

// 닉네임 설정
let nickname = "Anonymous";

socket.addEventListener("open", () => {
  console.log("Connected to Server ✅");
});

socket.addEventListener("message", (event) => {
  const li = document.createElement("li");
  li.innerText = event.data;
  messageList.appendChild(li);
});

socket.addEventListener("close", () => {
  console.log("Disconnected from Server ❌");
});

// 채팅방 입장
function handleWelcomeSubmit(event) {
  event.preventDefault();
  const input = welcomeForm.querySelector("input");
  room.querySelector("h3").innerText = `Room: ${input.value}`;
  welcome.hidden = true;
  room.hidden = false;
  input.value = "";
}

// 닉네임 변경
function handleNameSubmit(event) {
  event.preventDefault();
  const input = nameForm.querySelector("input");
  nickname = input.value;
  const li = document.createElement("li");
  li.innerText = `You changed your nickname to: ${nickname}`;
  messageList.appendChild(li);
  input.value = "";
}

// 메시지 전송
function handleMessageSubmit(event) {
  event.preventDefault();
  const input = roomForm.querySelector("input");
  const message = `${nickname}: ${input.value}`;
  socket.send(message);
  const li = document.createElement("li");
  li.innerText = `You: ${input.value}`;
  messageList.appendChild(li);
  input.value = "";
}

welcomeForm.addEventListener("submit", handleWelcomeSubmit);
nameForm.addEventListener("submit", handleNameSubmit);
roomForm.addEventListener("submit", handleMessageSubmit);