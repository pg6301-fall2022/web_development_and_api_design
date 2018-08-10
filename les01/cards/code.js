let firstChoice = null;
let gameFinished = true;
let jokerPosition  = 0;

const positions = [0, 1, 2];

const spadesImg = "img/2_of_spades.png";
const jokerImg = "img/black_joker.png";
const backcoverImg = "img/cover_card.jpg";


newGame = function(){

    gameFinished = false;
    firstChoice = null;
    jokerPosition = Math.floor(Math.random() * 3);
    showFirstMessage();
    showBackCover(0);
    showBackCover(1);
    showBackCover(2);
};


clickCard = function(index){

    if(gameFinished){
        return;
    }

    document.getElementById("img"+index).classList.add("selectedCard")

    if(firstChoice === null){
        //New game

        firstChoice = index;

        const options = positions.filter(p => p !== index && p !== jokerPosition);
        const toDisplay = options[Math.floor(Math.random() * options.length)];

        showSpades(toDisplay);
        showSecondMessage();

    } else {

        if(index !== firstChoice){
            document.getElementById("img"+firstChoice).classList.remove("selectedCard")
        }

        gameFinished = true;
        showAll();

        if(index === jokerPosition){
            //Victory
            showVictory();
        } else {
            //LOST
            showDefeat();
        }

    }
};

hideParagraphs = function(){
    document.getElementById("firstSelectId").style.display="none";
    document.getElementById("secondSelectId").style.display="none";
    document.getElementById("victoryId").style.display="none";
    document.getElementById("defeatId").style.display="none";
};

showFirstMessage = function(){
    hideParagraphs();
    document.getElementById("firstSelectId").style.display="block";
};

showSecondMessage = function(){
    hideParagraphs();
    document.getElementById("secondSelectId").style.display="block";
};

showVictory = function(){
    hideParagraphs();
    document.getElementById("victoryId").style.display="block";
};

showDefeat = function(){
    hideParagraphs();
    document.getElementById("defeatId").style.display="block";
};


showSpades = function (index) {
    const img = document.getElementById("img"+index);
    img.src = spadesImg;
    img.style.cursor = "default";
    img.classList.remove("backcover")
};

showJoker = function (index) {
    const img = document.getElementById("img"+index);
    img.src = jokerImg;
    img.style.cursor = "default";
    img.classList.remove("backcover")
};

showAll = function(){
    for(let i=0; i< positions.length; i++){
        if(i === jokerPosition){
            showJoker(i);
        } else {
            showSpades(i);
        }
    }
};

showBackCover = function (index) {
    const img = document.getElementById("img"+index);
    img.src = backcoverImg;
    img.style.cursor = "pointer";
    if(! img.classList.contains("backcover")) {
        img.classList.add("backcover")
    }
    img.classList.remove("selectedCard")
};



