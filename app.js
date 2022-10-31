const play = document.querySelector('.test');
var logger = document.querySelector('.logger');
const playButton = document.querySelector('.play-button')
var numbs = document.querySelector('.numbs')
const resultList = document.querySelector('.result-list')
//const trytt = document.querySelector('.try')

play.addEventListener('click', theGame);
playButton.addEventListener('click', getNumbers)

function theGame(e){
    //e.preventDefault();
    
    var butX = e.offsetX
    var butY = e.offsetY
    var diffX = Math.abs(butX - numX)
    var diffY = Math.abs(butY - numY)
    var totDistDeci = Math.sqrt((diffX*diffX)+(diffY*diffY));
    var totDist = Math.round(totDistDeci)
    logger.innerHTML = 'You clicked on: X: ' + butX + '  Y:' + butY + '<br>Distance from target X: ' + diffX + '<br>Distance from target Y: ' + diffY + '<br>Total distance from target: ' + totDist;
    var resultAfterGuess = totDist + '(' + diffX + ';' + diffY + ')'
    

        //todo div
        const resultDiv = document.createElement("div")
        resultDiv.classList.add("nares");
        resultDiv.innerText = resultAfterGuess;
        //create LI
        const newResult = document.createElement('li')
        newResult.innerText = resultAfterGuess;
        
        newResult.classList.add('result-item');
        resultList.appendChild(newResult)
        //trytt.appendChild(resultDiv)

       
        
    }

function getNumbers(e){
    e.preventDefault();
    globalThis.numX = getRandomInt();
    globalThis.numY = getRandomInt();
    numbs.innerHTML = 'Try to hit these pixels in the box below<br>X = ' + numX + '   Y = ' + numY;
    
}

function getRandomInt() {
    min = Math.ceil(0);
    max = Math.floor(500);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}