function increment() {
    const nextNum = getNum() + 1;
    txt.textContent = nextNum;
}
function getNum() {
    return parseInt(txt.textContent);
}