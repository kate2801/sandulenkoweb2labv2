function increment() {
    const nextNum = getNum() + 1;
    txt.textContent = nextNum;
}

function decrement() {
    const prevNum = getNum() - 1;
    txt.textContent = prevNum;
}

function getNum() {
    return parseInt(txt.textContent);
}