var addBGImagesToCards = function () {
    $("span").css(`background-image`, `url("./images/backgroundImage.PNG")`);
}

var randomizeImagesToCards = function () {
    var arrOfCardElements = document.getElementsByTagName("span");
    var arrofNum = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (var i = 0; i < 9; i++) {
        var rand = Math.floor(Math.random() * (arrofNum.length - 1));
        arrOfCardElements[i].setAttribute("style", `background-image: url("./images/card${arrofNum[rand]}.PNG")`);
        localStorage.setItem(arrOfCardElements[i].getAttribute("id"), arrofNum[rand]);
        arrofNum.splice(rand, 1);
    }
    arrofNum = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (var i = 9; i < 18; i++) {
        var rand = Math.floor(Math.random() * (arrofNum.length - 1));
        map.set(arrOfCardElements[i].getAttribute("id"), arrofNum[rand]);
        arrOfCardElements[i].setAttribute("style", `background-image: url("./images/card${arrofNum[rand]}.PNG")`);
        localStorage.setItem(arrOfCardElements[i].getAttribute("id"), arrofNum[rand]);
        arrofNum.splice(rand, 1);
    }
    setTimeout(addBGImagesToCards, 2000);
}

var flipCard = function (event) {
    var flippedCards = 0;
    var cardid = event.target.id;
}

var getKeyByValue = function (object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

var isRoundWin = function (rand, rand2) {
    if (rand != rand2) {
        addImagesToCards();
    }
    else {

    }
}

var mainGame = function () {
    var map = randomizeImagesToCards();
    var flipCard = function (event) {
        // Cant use event here beccause the running function is the main game function
        var flippedCards = 0;
        var cardid = event.target.id;
        var imgId = map.get(cardid);
        var keys = getKeyByValue(imgId);
    }
}

mainGame();
document.querySelector(".card-contain").addEventListener("click", flipCard);