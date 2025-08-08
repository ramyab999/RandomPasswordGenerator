const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const copiedMsg = document.getElementById("copiedMsg");

// Character set for generating passwords
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/{}[]~";

function generatePassword(length = 12) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomChar =
      characters[Math.floor(Math.random() * characters.length)];
    password += randomChar;
  }
  return password;
}

// Show notification briefly
function showCopiedMessage() {
  copiedMsg.style.display = "block";
  setTimeout(() => {
    copiedMsg.style.display = "none";
  }, 2000);
}

// Event: Generate password
generateBtn.addEventListener("click", () => {
  const newPassword = generatePassword(16);
  passwordField.value = newPassword;
});

// Event: Copy to clipboard
copyBtn.addEventListener("click", () => {
  const password = passwordField.value;
  if (password) {
    navigator.clipboard.writeText(password).then(() => {
      showCopiedMessage();
    });
  }
});
