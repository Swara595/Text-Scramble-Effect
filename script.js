let para = document.querySelector('p');
let h1 = document.querySelector('h1');
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText;
const headText1 = h1.innerText;

let iteration = 0;

function randomText() {
    const str = text.split('').map(function (char, idx) {
        if (idx < iteration) {
            return char;
        }
        return chars.split("")[Math.floor(Math.random() * 53)];
    }).join('');
    para.innerText = str;





    iteration += 0.1;

}
function randomHead1() {
    const headStr1 = headText1.split('').map(function (char, idx) {
        if (idx < iteration) {
            return char;
        }
        return chars.split("")[Math.floor(Math.random() * 53)];
    }).join('');
    h1.innerText = headStr1;
    iteration += 0.1;
}

setInterval(randomText, 40);
setInterval(randomHead1, 40);
