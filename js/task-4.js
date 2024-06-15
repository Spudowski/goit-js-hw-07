const logForm = document
    .querySelector(".login-form")
    .addEventListener("submit", manualSubmit);

function manualSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    
    if (email === "" || password === "") {
        return alert(`All form fields must be filled in`);
        }
        
        form.reset();

console.log(`E-mail: ${email}
Password: ${password}`)

}

        
