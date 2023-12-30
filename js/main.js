var block = document.getElementById("header");
var btn = document.getElementById("button");

btn.onclick = function changeBgImg() {
    const a = Math.floor(Math.random(1, 4) * 4);
    block.style.backgroundImage = `url('./../img/header/${a}.jpg')`;
    console.log(a);
};
