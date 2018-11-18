var addBGImagesToCards = function () {
    $("span").css(`background-image`, `url("./images/backgroundImage.PNG")`);
}

var randomizeImagesToCards = function () {
    var arrOfCardElements = document.getElementsByTagName("span");
    var arrofNum = [0, 1, 2, 3, 4, 5];
    var map = new Map();
    for (var i = 0; i < 6; i++) {
        var rand = Math.floor(Math.random() * (arrofNum.length - 1));
        arrOfCardElements[i].setAttribute("style", `background-image: url("./images/card${arrofNum[rand]}.PNG")`);
        arrOfCardElements[i].classList.add("blur");
        mainGame.arrOfImages[i] = arrofNum[rand];
        arrofNum.splice(rand, 1);
    }
    arrofNum = [0, 1, 2, 3, 4, 5];
    for (var i = 6; i < 12; i++) {
        var rand = Math.floor(Math.random() * (arrofNum.length - 1));
        map.set(arrOfCardElements[i].getAttribute("id"), arrofNum[rand]);
        arrOfCardElements[i].setAttribute("style", `background-image: url("./images/card${arrofNum[rand]}.PNG")`);
        arrOfCardElements[i].classList.add("blur");
        mainGame.arrOfImages[i] = arrofNum[rand];
        arrofNum.splice(rand, 1);
    }
    setTimeout(function () {
        addBGImagesToCards();
        $("span").removeClass("blur");
    }, 1000);
}

var findImgOfCard = function (cardId) {
    if (cardId === undefined) {
        console.log("No ID passed")
    }
    cardId = parseInt(cardId.match(/\d+/));
    var cardImg = mainGame.arrOfImages[cardId - 1];
    var wrapWithUrl = `url("./images/card${cardImg}.PNG")`;
    return wrapWithUrl;
}

var flipCard = function (event) {
    $(event.target).css("background-image", findImgOfCard(event.target.id));
    if (mainGame.flippedCard === null) {
        mainGame.flippedCard = event.target.id;
        return this;
    }
    else {
        var imgOfOldCard = findImgOfCard(mainGame.flippedCard);
        var imgOfNewCard = findImgOfCard(event.target.id);
        if (imgOfNewCard === imgOfOldCard) {
            mainGame.score++;
            mainGame.flippedCard = null;
        }
        else {
            document.querySelector(".card-contain").removeEventListener("click", flipCard);
            setTimeout(function () {
                $(`#${mainGame.flippedCard}`).css(`background-image`, `url("./images/backgroundImage.PNG")`);
                $(`#${event.target.id}`).css(`background-image`, `url("./images/backgroundImage.PNG")`);
                mainGame.flippedCard = null;
                document.querySelector(".card-contain").addEventListener("click", flipCard);
            }, 1000)
        }
    }
    didPlayerWin();
}

var didPlayerWin = function () {
    if (mainGame.score === mainGame.arrOfImages.length / 2) {
        $(".main").addClass("opacity");
        $("#popUpWin").css("display", "block");
    }
}

var mainGame = {
    numOfFlippedCards: 0,
    arrOfImages: [],
    score: 0,
    flippedCard: null
}

randomizeImagesToCards();
document.querySelector(".card-contain").addEventListener("click", flipCard);
