let step = 0;

function send() {
  let input = document.getElementById("input");
  let chat = document.getElementById("chat");

  let text = input.value;
  if (!text) return;

  // User Nachricht
  chat.innerHTML += `<div class="user">Du: ${text}</div>`;

  input.value = "";

  // Bot Logik
  step++;

  if (step === 1) {
    chat.innerHTML += `<div class="bot">🌱 Wo genau hast du das gesehen?</div>`;
  }

  if (step === 2) {
    chat.innerHTML += `<div class="bot">🌱 Welche Emotion verbindest du damit?</div>`;
  }

  if (step === 3) {
    chat.innerHTML += `<div class="bot">Danke! Deine Culture Probe ist gespeichert 🌿</div>`;
  }
}