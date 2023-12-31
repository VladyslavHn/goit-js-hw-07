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

function handleCreate(amount) {
  amount = Number(refs.input.value);
  let size = 30;
  let box = "";
  for (let i = 0; i < amount; i++){
    const color = getRandomHexColor();
    box += `<div style="width: ${size}px; height: ${size}px; background-color:${color};"></div>`;
    size += 10;
    if (amount > 100) {
      return;
    }
  }
  refs.input.value = "";
  refs.boxes.innerHTML += box;
}

function handleDestroy() {
  refs.boxes.innerHTML = "";
}



