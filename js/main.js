const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderEmojis() {
  emojiContainer.textContent = ""

  for (myEmoji of myEmojis) {
    const emoji = document.createElement("span")
    emoji.textContent = myEmoji
    emojiContainer.append(emoji)
  }
}

renderEmojis()

pushBtn.addEventListener("click", () => {
  const emojiInput = document.getElementById("emoji-input")
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value)
    emojiInput.value = ""
    renderEmojis()
  }
})

unshiftBtn.addEventListener("click", () => {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value)
    emojiInput.value = ""
    renderEmojis()
  }
})

shiftBtn.addEventListener("click", () => {
  myEmojis.shift(emojiInput.value)
  emojiContainer.textContent = ""
  renderEmojis()
})

const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", () => {
  const emojiInput = document.getElementById("emoji-input")
  myEmojis.pop(emojiInput.value)
  emojiContainer.textContent = ""
  renderEmojis()
})
