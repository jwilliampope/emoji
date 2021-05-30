const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderEmojis() {
  emojiContainer.innerHTML = ""
  for (myEmoji of myEmojis) {
    const emoji = document.createElement("span")
    emoji.textContent = myEmoji
    emojiContainer.append(emoji)
  }
}

renderEmojis()

pushBtn.addEventListener("click", () => {
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

popBtn.addEventListener("click", () => {
  myEmojis.pop()
  renderEmojis()
})

shiftBtn.addEventListener("click", () => {
  myEmojis.shift()
  renderEmojis()
})
