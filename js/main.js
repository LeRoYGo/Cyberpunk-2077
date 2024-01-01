(function () {
    var block = document.getElementById("header");

    setInterval(changeBackground, 5000);

    function changeBackground() {
        const max = 3;
        const number = Math.floor(Math.random() * max + 1);
        block.style.backgroundImage = `url('./../img/header/${number}.jpg')`;
        console.log(number);
    }
})();
