let count = 0

// if + btn is clicked increment by one the count element
function increment() {
    count += 1;
    countEl.innerText = count;
}

// if - btn is clicked decrement by one the count element
function decrement() {
    count -= 1;
    countEl.innerText = count;
}