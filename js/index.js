let count = document.getElementById('countEl');


// get the minus div and implement a button to decrement count
let minus = document.getElementById('minus');
function decrement() {
    count.innerHTML--;
}

minus.addEventListener('click', decrement);

// get the plus div and implement a button to increment count
let plus = document.getElementById('plus');
function increment() {
    count.innerHTML++;
}

plus.addEventListener('click', increment);