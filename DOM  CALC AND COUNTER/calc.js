// calculator form DOM

const h1 = document.getElementById("count");

const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");

let x = prompt("Enter x : ");
let y = prompt("Enter y : ");

let a = parseInt(x);
let b = parseInt(y);

add.addEventListener("click", () => {
    let add = a+b;
    h1.innerHTML = add;
});


sub.addEventListener("click", () => {
    let sub = a-b;
    h1.innerHTML = sub;
});


mul.addEventListener("click", () => {
    let mul = a*b;
    h1.innerHTML = mul;
});


div.addEventListener("click", () => {
    let div = a/b;
    h1.innerHTML = div;
});

