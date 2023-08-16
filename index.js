var randomNumber1 = Math.floor(Math.random() * 6)+1
var randomNumber2 = Math.floor(Math.random() * 6)+1

function changeImg(){
    var dice1 = document.getElementById('img_1').setAttribute('src', './images/dice'+randomNumber1+'.png');
    var dice2 = document.getElementById('img_2').setAttribute('src', './images/dice'+randomNumber2+'.png');

    if(randomNumber1 === randomNumber2){
        document.querySelector("h1").innerHTML = "Draw!"
    }
    else if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
    } else{
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
    }
}


