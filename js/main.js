const bg = [`url("./img/header/1.jpg")`, `url("./img/header/1.jpg")`, `url("./img/header/1.jpg")`];
const header = document.getElementById("header");
let i = 1;

function SetImage() {
    header.style.backgroundImage = bg[i];

    if (i == bg.length) {
        i = 0;
        header.style.backgroundImage = bg[i];
    }

    i++;
}

setInterval(SetImage, 2000);
