function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.body,
  span: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
}

refs.btn.addEventListener("click", handleClick);
function handleClick() {
  const result = getRandomHexColor();
  refs.span.textContent = result;
  refs.body.style.backgroundColor = result;
}
