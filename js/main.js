const listSrc = [`url("./../img/header/1.jpg")`, `url("./../img/header/2.jpg")`, `url("./../img/header/3.jpg")`];
let header = document.querySelector("#header");
let i = 0;

document.querySelector("#headerButton").onclick = function () {
    if (header.style.backgroundImage === listSrc[2]) {
        header.style.backgroundImage === listSrc[0];
        i = 0;
    }
    header.style.backgroundImage === listSrc[--i];
};
