// Кнопка "Натисни мене"
document.querySelector(".cool-btn").addEventListener("click", () => {
  alert("Ти натиснув кнопку! 🚀");
});

// ШІ вибір бабака
const aiBtn = document.getElementById("ai-btn");
const aiResult = document.getElementById("ai-result");

const babaks = [
  "Степовий бабак 🐹",
  "Альпійський бабак 🏔️",
  "Лісовий бабак 🌲",
  "Бабак-мандрівник 🌍",
  "Космічний бабак 🚀"
];

aiBtn.addEventListener("click", () => {
  const randomBabak = babaks[Math.floor(Math.random() * babaks.length)];
  aiResult.textContent = "ШІ радить: " + randomBabak;
});
