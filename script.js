import diff from './data/difficulties.js';
import blueCards from './assets/MythicCards/blue/index.js';
import brownCards from './assets/MythicCards/brown/index.js';
import greenCards from './assets/MythicCards/green/index.js'
import ancients from './assets/Ancients/index.js';
import ancientsData from './data/ancients.js';
import blueCardsData from './data/mythicCards/blue/index.js';
import brownCardsData from './data/mythicCards/brown/index.js';
import greenCardsData from './data/mythicCards/green/index.js';
import aza from './aza.js';
import cthuhlu from './cthuhlu.js';
import max from './sothoth.js';
import shub from './shub.js';

'use strict';

const wrapper = document.querySelector('.wrapper');
const start = document.querySelector('.start');
const myCards = document.querySelectorAll('.ancients__card');
const difficulties = document.querySelector('.difficulties');
const levels = document.querySelectorAll('.difficulties__item');
const deckTitle = document.querySelector('.deck-title');
const stages = document.querySelector('.stages');
const deck = document.querySelector('.deck');
const sortCard = document.querySelector('.sort-card');
const firstStageTitle = document.querySelector('.first-stage');
const secondStageTitle = document.querySelector('.second-stage');
const thirdStageTitle = document.querySelector('.third-stage');
const firstGreenDot = document.getElementById('first-green');
const firstBlueDot = document.getElementById('first-blue');
const firstBrownDot = document.getElementById('first-red');
const secondGreenDot = document.getElementById('second-green');
const secondBlueDot = document.getElementById('second-blue');
const secondBrownDot = document.getElementById('second-red');
const thirdGreenDot = document.getElementById('third-green');
const thirdBlueDot = document.getElementById('third-blue');
const thirdBrownDot = document.getElementById('third-red');
const downBox = document.querySelector('.down-box');
const haventCard = document.querySelector('.havent-card')

console.log('Я оцениваю свою работу на 85 балов: \n1. На выбор предоставляется минимум одна карта древнего (максимум 4) +5-20 баллов(по 5 за каждого древнего). В моём случае это 4 карты. +20\n2. На выбор предоставляется несколько уровней сложности (максимум 5) +5-25 баллов(по 5 за каждый уровень сложности). В моём случае это один уровень сложности. +5\n3. Карты замешиваются согласно правилам игры. +40\n4. Есть трекер текущего состояния колоды. +20\nИтого: 85 балов.');

// Функція та виклик головної кнопки.
function getStart(){
    start.style.opacity = 1;
}
setTimeout(getStart,1000);

// Функції появи карток.
function appearanceFirstCard(){
        myCards[0].style.opacity = 1;
        myCards[0].style.visibility = 'visible';
}
function appearanceSecondCard(){
    myCards[1].style.opacity = 1;
    myCards[1].style.visibility = 'visible';
}
function appearanceThirdCard(){
    myCards[2].style.opacity = 1;
    myCards[2].style.visibility = 'visible';
}
function appearanceFourthCard(){
    myCards[3].style.opacity = 1;
    myCards[3].style.visibility = 'visible';
}

// Виклик появи карток.
start.addEventListener('click', ()=>{
    setTimeout(appearanceFirstCard,700);
    setTimeout(appearanceSecondCard,1200);
    setTimeout(appearanceThirdCard,1700);
    setTimeout(appearanceFourthCard,2200);
    // Зникнення головної кнопки
    start.style.top = '120%';
})

// Виділення картки по кліку.
myCards[0].addEventListener('click' , ()=>{
    
    for(let i = 0; i < myCards.length; i++){
        if(myCards[i].classList.contains('chosenCard')){
            myCards[i].classList.remove('chosenCard');
        } 
    }
    myCards[0].classList.add('chosenCard');
});

myCards[1].addEventListener('click' ,()=>{
    for(let i = 0; i < myCards.length; i++){
        if(myCards[i].classList.contains('chosenCard')){
            myCards[i].classList.remove('chosenCard');
        } 
    }
    myCards[1].classList.add('chosenCard');
});

myCards[2].addEventListener('click' , ()=>{
    for(let i = 0; i < myCards.length; i++){
        if(myCards[i].classList.contains('chosenCard')){
            myCards[i].classList.remove('chosenCard');
        } 
    }
    myCards[2].classList.add('chosenCard');
});

myCards[3].addEventListener('click' , ()=>{
    for(let i = 0; i < myCards.length; i++){
        if(myCards[i].classList.contains('chosenCard')){
            myCards[i].classList.remove('chosenCard');
        } 
    }
    myCards[3].classList.add('chosenCard');
})

// Поява вибору складності по кліку на карту
function getDifficulties() {
    difficulties.style.opacity = '1';
    difficulties.style.visibility = 'visible';
}
// Клік по картках картці
myCards[0].addEventListener('click',getDifficulties);
myCards[1].addEventListener('click',getDifficulties);
myCards[2].addEventListener('click',getDifficulties);
myCards[3].addEventListener('click',getDifficulties);

// Виділення обраного рівня складності
function chosenLevel(){
    levels[2].style.backgroundColor = 'rgba(26, 25, 25, 1)';
    levels[2].style.border = `2px solid rgba(255,132,0,1)` 
}

// Зміна виклику функції в залежності від обраної картки
let currentCarrd = 0;
myCards[0].addEventListener('click', ()=>{
    if(currentCarrd !== 1){
        downBox.style.opacity = '0';
        sortCard.style.transform = `translateX(512px)`;
        deckTitle.style.opacity ='0';
        deckTitle.style.visibility ='hidden';
        haventCard.textContent =''
    }
    currentCarrd = 1;
})
myCards[1].addEventListener('click', ()=>{
    if(currentCarrd !== 2){
        sortCard.style.transform = `translateX(512px)`;
        downBox.style.opacity = '0';
        deckTitle.style.opacity ='0';
        deckTitle.style.visibility ='hidden';
        haventCard.textContent =''
    }
    currentCarrd = 2;
})
myCards[2].addEventListener('click', ()=>{
    if(currentCarrd !== 3){
        sortCard.style.transform = `translateX(512px)`;
        downBox.style.opacity = '0';
        deckTitle.style.opacity ='0';
        deckTitle.style.visibility ='hidden';
        haventCard.textContent =''
    }
    currentCarrd = 3;
})
myCards[3].addEventListener('click', ()=>{
    if(currentCarrd !== 4){
        sortCard.style.transform = `translateX(512px)`;
        downBox.style.opacity = '0';
        deckTitle.style.opacity ='0';
        deckTitle.style.visibility ='hidden';
        haventCard.textContent =''
    }
    currentCarrd = 4;
})

// Клік по третьому рівню складності
levels[2].addEventListener('click',()=>{
    chosenLevel();
});

// Зміна стилів для непрацюючих рівнів
for (let i = 0; i < levels.length; i++){
    levels[i].style.textDecoration = `line-through`;
    levels[i].style.opacity = `0.5`;
    levels[2].style.textDecoration = `none`;
    levels[2].style.opacity = `1`;
}

// Створення кнопки замішування колоди
function createDeck(){
    deckTitle.style.opacity = '1';
    deckTitle.style.visibility = 'visible';
}
levels[2].addEventListener('click' , createDeck);

// Виклик трекеру колоди та поява самої колоди
function getStages(){
    stages.style.opacity = '1';
    stages.style.visibility = 'visible';
    deck.style.opacity = '1';
    deck.style.visibility = 'visible';
}
deckTitle.addEventListener('click' , getStages);
deckTitle.addEventListener('click' , () =>{
    downBox.style.opacity = '1';
    sortCard.style.transform = `translateX(512px)`;
    if(currentCarrd === 1) aza();
    if(currentCarrd === 2) cthuhlu();
    if(currentCarrd === 3) max();
    if(currentCarrd === 4) shub();
})
