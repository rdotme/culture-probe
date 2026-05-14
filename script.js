let step = 0;

function sendAnswer(text) {
  const formData = new FormData();
  formData.append("answer", text);

  fetch("save.php", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => console.log("Server:", data));
}

function send() {
  let input = document.getElementById("input");
  let chat = document.getElementById("chat");

  let text = input.value;
  if (!text) return;

  sendAnswer(text);

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
