const textInput = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

textInput.addEventListener("input", handleInput);
function handleInput(event){
    const result = event.currentTarget.value;
    if (result.trim() === "") {
        userName.textContent = "Anonymous";
    } else {
        userName.textContent = result;
    }
};
