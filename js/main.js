(function () {
    var block = document.getElementById("header");
    setInterval(changeBackground, 5000);
    function changeBackground() {
        const max = 3;
        const min = 1;
        const number = Math.floor(Math.random() * (max - min + 1)) + min;
        block.style.backgroundImage = `url('./../img/header/${number}.jpg')`;
        console.log(number);
    }
})();
