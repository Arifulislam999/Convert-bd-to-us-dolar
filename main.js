let tk = document.querySelector("#bd");
console.log(tk.value);
tk.style.color = "red";
let us = document.querySelector("#us");

let but = document.querySelector("button");

but.addEventListener("click", () => {
    us.innerHTML = tk.value * 84;
    // us.innerHTML = "Ariful Islam";
});
let tx = document.querySelector("#tx");
but.addEventListener("click", () => {
    tx.innerHTML = "The Amount Of US($) Dolar...";
    // us.innerHTML = "Ariful Islam";
});