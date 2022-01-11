let counter = document.getElementById('counter');

let minusBtn = document.createElement("button");
minusBtn.innerHTML = "-";
counter.appendChild(minusBtn);
minusBtn = document.getElementsByTagName("button")[0];

let count = document.createElement("h2");
count.innerHTML = 0;
counter.appendChild(count);
count = document.querySelector("h2");

let plusBtn = document.createElement("button");
plusBtn.innerHTML = "+";
counter.appendChild(plusBtn);
plusBtn = document.getElementsByTagName("button")[1];

minusBtn.addEventListener("click", decrement);
plusBtn.addEventListener("click", increment);

function decrement() {
    count.innerHTML--;
}

function increment() {
    count.innerHTML++;
}
