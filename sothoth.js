import diff from './data/difficulties.js';
import blueCards from './assets/MythicCards/blue/index.js';
import brownCards from './assets/MythicCards/brown/index.js';
import greenCards from './assets/MythicCards/green/index.js'
import ancients from './assets/Ancients/index.js';
import ancientsData from './data/ancients.js';
import blueCardsData from './data/mythicCards/blue/index.js';
import brownCardsData from './data/mythicCards/brown/index.js';
import greenCardsData from './data/mythicCards/green/index.js';
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
const haventCard = document.querySelector('.havent-card');

function max(){
    // Функція виклику рандомного числа
    function randomNum(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // мені треба створити 3 масиви по кольорам, де будуть вказані шляхи до картинок
    let greenArr = [];
    for(let i =0; i < greenCardsData.length;i++){
        greenArr.push(Object.values(greenCardsData[i])[1])
    }
    
    let brownArr = [];
    for(let i =0; i < brownCardsData.length;i++){
        brownArr.push(Object.values(brownCardsData[i])[1])
    }
    
    let blueArr = [];
    for(let i =0; i < blueCardsData.length;i++){
        blueArr.push(Object.values(blueCardsData[i])[1])
    }
    
    // Функція яка формує масив першого етапу(3)
    let firstStageArr = [];
    let n = brownArr.splice(randomNum(0,brownArr.length -1), 1)
    firstStageArr.push(n[0]);
    n = brownArr.splice(randomNum(0,brownArr.length -1), 1)
    firstStageArr.push(n[0]);
    n = blueArr.splice(randomNum(0,blueArr.length -1), 1)
    firstStageArr.push(n[0])
    
    // Формуємо массив другого етапу (6)
    let secondStageArr = [];
    let b = greenArr.splice(randomNum(0,greenArr.length -1), 1);
    secondStageArr.push(b[0]);
    b = greenArr.splice(randomNum(0,greenArr.length -1), 1);
    secondStageArr.push(b[0]);
    b = brownArr.splice(randomNum(0,brownArr.length -1), 1)
    secondStageArr.push(b[0]);
    b = brownArr.splice(randomNum(0,brownArr.length -1), 1)
    secondStageArr.push(b[0]);
    b = brownArr.splice(randomNum(0,brownArr.length -1), 1)
    secondStageArr.push(b[0]);
    b = blueArr.splice(randomNum(0,blueArr.length -1), 1)
    secondStageArr.push(b[0]);
    
    // Формуємо масив третього етапу (7)
    let thirdStageArr = [];
    let c = greenArr.splice(randomNum(0,greenArr.length -1), 1);
    thirdStageArr.push(c[0]);
    c = greenArr.splice(randomNum(0,greenArr.length -1), 1);
    thirdStageArr.push(c[0]);
    c = greenArr.splice(randomNum(0,greenArr.length -1), 1);
    thirdStageArr.push(c[0]);
    c = brownArr.splice(randomNum(0,brownArr.length -1), 1)
    thirdStageArr.push(c[0]);
    c = brownArr.splice(randomNum(0,brownArr.length -1), 1)
    thirdStageArr.push(c[0]);
    c = brownArr.splice(randomNum(0,brownArr.length -1), 1)
    thirdStageArr.push(c[0]);
    c = brownArr.splice(randomNum(0,brownArr.length -1), 1)
    thirdStageArr.push(c[0]);
    
    // Берем рандомне число з полученого масиву і викликаємо картку по кліку
    
    // Функція виклику першої стадії
    function getRandomNumfirstStageArr(){
        let srcBg = firstStageArr.splice(randomNum(0,firstStageArr.length -1),1);
        sortCard.style.backgroundImage = `url(assets/MythicCards/allcards/${srcBg}`;
        // if(firstStageArr.length === 0) firstStageTitle.style.color = 'red',firstStageTitle.style.textDecoration = `line-through`;
    }
    
    // Функція виклику другої стадії
    function getRandomNumSecondStageArr(){
        let srcBg2 = secondStageArr.splice(randomNum(0,secondStageArr.length -1),1);
        sortCard.style.backgroundImage = `url(assets/MythicCards/allcards/${srcBg2}`;
        // if(secondStageArr.length === 0) secondStageTitle.style.color = 'red',secondStageTitle.style.textDecoration = `line-through`;;
    
    }
    // Функція виклику третьої стадії
    function getRandomNumThirdStageArr(){
        let srcBg3 = thirdStageArr.splice(randomNum(0,thirdStageArr.length -1),1);
        sortCard.style.backgroundImage = `url(assets/MythicCards/allcards/${srcBg3}`;
        // if(thirdStageArr.length === 0) thirdStageTitle.style.color = 'red',thirdStageTitle.style.textDecoration = `line-through`;;
    }
    for(let i = 0 ; i < firstStageArr.length; i++){
        firstStageArr[i]
    }
    
    let click = 0;
    // функція виклику карток трьох стадій по кліку (Азатот)
    function sotot(){
        sortCard.style.transform = `translateX(0px)`;
        deckTitle.style.opacity ='0';
        deckTitle.style.visibility ='hidden';
        if(firstStageArr.length !== 0)   {
            getRandomNumfirstStageArr();
        }
        else if(firstStageArr.length === 0 && secondStageArr.length !== 0) {
            getRandomNumSecondStageArr();
        }
        else if(firstStageArr.length === 0 && secondStageArr.length === 0)  {
            getRandomNumThirdStageArr()
        }
        // Функція яка викликається коли карти закінчилися
        click = click + 1;
        if(click >= 17){
            haventCard.textContent = 'Ваши карты закончились';
        } else haventCard.textContent = '';
        checkingFirstArr();
        checkingSecondArr();
        checkingThirddArr();
    }
    deck.addEventListener('click', sotot )
    let blueColor = 'blue';
    let brownColor = 'brown';
    let greenColor = 'green';
    
    // Функція перераховки кількості кольорів у масиві першої стадії і зміна лічильника
    function checkingFirstArr(){
        let counterBlue = 0;
        let counterBrown = 0;
        let counterGreen = 0;
        for(let i =0 ;i < firstStageArr.length;i++){
            if(firstStageArr[i].includes(blueColor)) counterBlue++;
            else if(firstStageArr[i].includes(brownColor)) counterBrown++;
            else if(firstStageArr[i].includes(greenColor)) counterGreen++;
        }
        firstBlueDot.textContent = counterBlue;
        firstBrownDot.textContent = counterBrown;
        firstGreenDot.textContent = counterGreen;
    }
    checkingFirstArr();
    
    // Функція перераховки кількості кольорів у масиві другої стадії і зміна лічильника
    function checkingSecondArr(){
        let counterBlue = 0;
        let counterBrown = 0;
        let counterGreen = 0;
        for(let i =0 ;i < secondStageArr.length;i++){
            if(secondStageArr[i].includes(blueColor)) counterBlue++;
            else if(secondStageArr[i].includes(brownColor)) counterBrown++;
            else if(secondStageArr[i].includes(greenColor)) counterGreen++;
        }
        secondBlueDot.textContent = counterBlue;
        secondBrownDot.textContent = counterBrown;
        secondGreenDot.textContent = counterGreen;
    }
    checkingSecondArr();
    
    // Функція перераховки кількості кольорів у масиві третьої стадії і зміна лічильника
    function checkingThirddArr(){
        let counterBlue = 0;
        let counterBrown = 0;
        let counterGreen = 0;
        for(let i =0 ;i < thirdStageArr.length;i++){
            if(thirdStageArr[i].includes(blueColor)) counterBlue++;
            else if(thirdStageArr[i].includes(brownColor)) counterBrown++;
            else if(thirdStageArr[i].includes(greenColor)) counterGreen++;
        }
        thirdBlueDot.textContent = counterBlue;
        thirdBrownDot.textContent = counterBrown;
        thirdGreenDot.textContent = counterGreen;
    }
    checkingThirddArr();
}
export default max