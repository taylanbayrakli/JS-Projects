const n1 = document.querySelector("#firstInput");
const n2 = document.querySelector("#secondInput");
const result = document.querySelector("#result");

document.getElementById("add").addEventListener("click", function () {
    result.value = parseInt(n1.value) + parseInt(n2.value);
})

document.getElementById("sub").addEventListener("click", function () {
    result.value = parseInt(n1.value) - parseInt(n2.value);
})

document.getElementById("mul").addEventListener("click", function () {
    result.value = parseInt(n1.value) * parseInt(n2.value);
})

document.getElementById("div").addEventListener("click", function () {
    result.value = parseInt(n1.value) / parseInt(n2.value);
})