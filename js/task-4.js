const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const email = form.elements.email;
    const password = form.elements.password;
    if (!email.value || !password.value) {
        alert("All form fields must be filled in");
    } else {
        const obj = {
            email: email.value.trim(),
            password: password.value.trim(),
        };
        form.reset();
    console.log(obj);
    }
}