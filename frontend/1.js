document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("usuario")
    input.addEventListener("input", function() {
        if (input.value.trim() !== "") {
            console.log("user wrote")}
    })
})
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("password")
    input.addEventListener("input", function() {
        if (input.value.trim() !== "") {
            console.log("code wrote")}
    })
})
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("name")
    input.addEventListener("input", function() {
        if (input.value.trim() !== "") {
            console.log("name wrote")}
    })
})
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("lastname")
    input.addEventListener("input", function() {
        if (input.value.trim() !== "") {
            console.log("last name wrote")}
    })
})
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("mail")
    input.addEventListener("input", function() {
        if (input.value.trim() !== "") {
            console.log("email wrote")}
    })
})
let buttom = document.getElementById("boton")
// let inputValue = document.getElementById("")

buttom.addEventListener("click", function() {
    console.log("buttom clicked")
    // console.log("Input value:", inputValue.value)
});

function login() {

}

