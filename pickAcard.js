'use strict';

(function(){
    let card;

    document.addEventListener('DOMContentLoaded' ,init);

    function init(){
        card = document.getElementById('card');
        document.getElementById('pick').addEventListener('click', update)
    }

    function update(){
        const suite = Math.floor (Math.random()*4); //0<=rand<4 so 0,1,2,3
const rank = Math.floor (Math.random()*13)+1 //1<=rank<=13

let suiteSymbol;

if (suite === 0) { //hearts
    suiteSymbol = '\u2665';
    card.classList.add('red');
}
else if (suite === 1) { //diamonds
    suiteSymbol = '\u2666';
    card.classList.add('red');
}
else if (suite === 2) {
    suiteSymbol = '\u2660';
    card.classList.remove('red');
}
else {//clubs
    suiteSymbol = '\u2663';
    card.classList.remove('red');
}

card.textContent= `${suiteSymbol} ${rank}`;
    }
}) ();