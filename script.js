// script.js - Chat functionality
function sendMessage() {
  const input = document.getElementById("messageInput");
  const chatBox = document.getElementById("chat-box");
  const msg = input.value.trim();
  if (msg) {
    const msgDiv = document.createElement("div");
    msgDiv.textContent = msg;
    chatBox.appendChild(msgDiv);
    input.value = "";
  }
}
