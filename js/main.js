(function () {
    var block = document.getElementById("header");

    setInterval(changeBackground, 5000);

    function changeBackground() {
        const arr = [1, 2, 3];
        const min = 0;
        const number = Math.floor(Math.random() * arr.length + 1);
        block.style.backgroundImage = `url('./../img/header/${number}.jpg')`;
        console.log(number);
    }
})();
