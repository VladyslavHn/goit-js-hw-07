function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  boxes: document.querySelector("#boxes"),
  input: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
}

refs.createBtn.addEventListener("click", handleCreate);
refs.destroyBtn.addEventListener("click", handleDestroy);

function handleCreate(event) {
  const amount = Number(refs.input.value);
  refs.boxes.innerHTML = "";
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
}

function handleDestroy() {
  destroyBoxes();
}

function createBoxes(amount) {
  let size = 30;
  let box = "";
  for (let i = 0; i < amount; i++){
    const color = getRandomHexColor();
    box += `<div style="width: ${size}px; height: ${size}px; background-color:${color};"></div>`;
    size += 10;
  }
  refs.input.value = "";
  refs.boxes.innerHTML += box;
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}


