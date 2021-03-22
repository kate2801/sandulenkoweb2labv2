function increment() {
    const nextNum = getNum() + 1;
    txt.textContent = nextNum;
}
function getNum() {
    return parseInt(txt.textContent);
}
function decrement() {
    const prevNum = getNum() - 1;
    txt.textContent = prevNum;
}