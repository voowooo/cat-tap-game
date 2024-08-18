const playerOne = document.getElementById('playerOne');
const counterOne = document.getElementById('counterOne');
const playerTwo = document.getElementById('playerTwo');
const counterTwo = document.getElementById('counterTwo');
const fish = document.getElementById('fish');

var qual = true;
var scoreOne = 0;
var scoreTwo = 0;

function clicked(player){
    if(player == 'one'){
        if(qual == true){
            console.log('One plus one');
            scoreOne = scoreOne + 1;
            counterOne.innerHTML = scoreOne;
            qual = 'nothing';
            changeFishImg();
        } else if(qual == 'nothing'){
            console.log('One do nothing');
            counterOne.innerHTML = scoreOne;
            qual = 'nothing';
            changeFishImg();
        } else {
            console.log('One minus one');
            scoreOne = scoreOne - 2;
            counterOne.innerHTML = scoreOne;
            qual = 'nothing';
            changeFishImg();
        }
    } else if(player == 'two'){
        if(qual == true){
            console.log('Two plus one');
            scoreTwo = scoreTwo + 1;
            counterTwo.innerHTML = scoreTwo;
            qual = 'nothing';
            changeFishImg();
        } else if(qual == 'nothing'){
            console.log('Two do nothing');
            counterTwo.innerHTML = scoreTwo;
            qual = 'nothing';
            changeFishImg();
        } else {
            console.log('Two minus one');
            scoreTwo = scoreTwo - 2;
            counterTwo.innerHTML = scoreTwo;
            qual = 'nothing';
            changeFishImg();
        }
    }
}

function changeFish(){
    // qual = _.sample([true, false])
    qual = Math.random() < 0.5;
    console.log(qual);
    changeFishImg();
}

function changeFishImg(){
    if(qual == true){
        fish.src = 'images/normal.png'
    } else if(qual == false){
        fish.src = 'images/bad.png'
    } else if(qual == 'nothing'){
        fish.src = '';
    }
}

setInterval(changeFish, 3000);