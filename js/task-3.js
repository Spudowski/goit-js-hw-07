const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

textInput.addEventListener("input", (e) => {
    output.textContent = e.currentTarget.value;
});