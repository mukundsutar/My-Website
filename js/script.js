function copyTextPhone() {
    const text = "(+91) 8275812026"
    const btnText = document.getElementById('btn')
    navigator.clipboard.writeText(text);
}