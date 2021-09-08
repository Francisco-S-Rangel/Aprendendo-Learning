 // Challenge 1: Your age in Days.
function ageInDays(){
var birthYear;
birthYear = Number(window.prompt("What year were you born my friend ?"));
var age_in_Days = (2021 -birthYear) * 365;
var h1 = document.createElement("h1");
var textAnswer = document.createTextNode("You are " + age_in_Days + " days old");
h1.setAttribute ("id","age_in_Days");
h1.appendChild(textAnswer);
document.getElementById("flex-box-result").appendChild(h1);
}

function reset(){
document.getElementById("age_in_Days").remove();
}
// Challenge 2: Cat Generator.
var img_ch_2;
var aux=0;
function generateCat(){
    if(aux==0){
    img_ch_2 = document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    img_ch_2.src= randomCat();
    div.appendChild(img_ch_2);
    aux=1;
    }
}
function deleteCat(){
    img_ch_2.parentNode.removeChild(img_ch_2);
    aux=0;
}
function randomCat(){
    let cat = Math.floor(Math.random()*5);
    if( cat==0){
          return "https://deliriumnerd.com/wp-content/uploads/2020/04/myroommateisacat2.jpg";
    }else if( cat==1){
        return "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,g=0.5x0.5,f=auto/b5bd34054bc849159d949d50021d8926.png";
    }else if( cat== 2){
        return "https://cdn.pixabay.com/photo/2013/11/22/23/07/kitten-216019_960_720.jpg";
    }else if(cat ==3){
        return "https://assets.b9.com.br/wp-content/uploads/2011/10/gato.jpg";
    }else{
        return "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/05/Meowth_Team_Rocket.jpg";
    }
}
// Challenge 3: Rock,Paper,Scissors.

function rpsGame(yourChoice){
    var humanChoice= yourChoice.id;
    var botChoice = numberToChoice(ranToRpsInt());
    result = decideWinner(humanChoice,botChoice);
    message = finalmessage(result);
    rpsFrontEnd(humanChoice,botChoice,message);
}
function ranToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    if (number==0){
        return 'rock';
    }else if (number==1){
        return 'paper';
    }else{
        return 'scissors';
    }
}
function decideWinner(yourChoice,computerChoice){
    var dataBaserps = {
        'rock' :{'scissors' : 1,'rock' : 0.5,'paper': 0},
        'paper' :{'rock' : 1,'paper': 0.5, 'scissors' : 0},
        'scissors':{'paper': 1,"scissors": 0.5,"rock": 0}
    };
    var yourScore = dataBaserps[yourChoice][computerChoice];
    var computerScore = dataBaserps[computerChoice][yourChoice];

    return [yourScore,computerScore];
}
function finalmessage([yourscore,computerscore]){
      if(yourscore==0){
          return {"message":"You Lose !","color":"red"};
      }else if(computerscore==0){
          return {"message":"You won !","color":"green"};
      }else{
          return {"message":"You tied !","color":"blue"};
       }
}
function rpsFrontEnd(humanImageChoice,botImageChoice,message){
    var imagesDataBase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
    };
    //let's remove all the images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var computerDiv = document.createElement('div');
    var resultDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(0,255,0)'>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
   
    resultDiv.innerHTML = "<h1 style= 'color: " + message.color + "'; font-size: 60px; padding: 30px;>" + message.message + "</h1>";
    document.getElementById('flex-box-rps-div').appendChild(resultDiv);

    computerDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(255,0,0)'>";
    document.getElementById('flex-box-rps-div').appendChild(computerDiv);

    let btn = document.createElement("button");
    btn.innerHTML = "Play again";
    document.getElementById('flex-aux-rps-div').appendChild(btn);
    btn.style = "background-color: rgb(0,128,0);  padding: 15px 36px; text-align: center; color: white; border: none; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 5px 5px 5px 5px;";
    btn.onclick= function(){
        humanDiv.parentNode.removeChild(humanDiv);
        resultDiv.parentNode.removeChild(resultDiv);
        document.getElementById('computerDiv');
        computerDiv.remove();
        play_again();
        btn.parentNode.removeChild(btn);
    };   
}
function play_again(){
    const text_rps = document.querySelector(".flex-box-rps");
    text_rps.insertAdjacentHTML(
        "beforeend",
        `<img id="rock" src="https://www.seekpng.com/png/detail/816-8161371_rock-paper-scissor-icon-png.png" height=150 width=150 alt="" onclick="rpsGame(this)">
        <img id='paper' src="https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png" height=150 width=150 alt="" onclick="rpsGame(this)">
        <img id='scissors' src="data:image/png;base64,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" height=150 width=150 alt="" onclick="rpsGame(this)">`
    );
}
// Challenge 4: Coin flipping.
function coinGame(yourClick){
    reset_button();
    var coin_played = Math.floor(Math.random()*2);
    var userChoice = yourClick.id;
    var coinChoice;
    var message;
    var ImageDiv = document.createElement("div");
    var MessageDiv =document.createElement("div");
    if(userChoice== "headbtn"){
        coinChoice=0;
    }else if(userChoice== "tailbtn"){
        coinChoice=1;
    }
    if(coinChoice==coin_played){
        message = "You hit it!";
        MessageDiv.innerHTML ="<h1 style= 'color: green'; font-size: 60px; padding: 30px;>"+ message + "</h1>";
        document.getElementById("flex-box-coinflipping-div").appendChild(MessageDiv);
    } else{
        message ="You missed it!"
        MessageDiv.innerHTML = "<h1 style= 'color: red'; font-size: 60px; padding: 30px;>" + message + "</h1>";
        document.getElementById("flex-box-coinflipping-div").appendChild(MessageDiv);
    }
    if(coin_played==0){
        ImageDiv.innerHTML =  "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Presidential_dollar_coin_reverse.png/477px-Presidential_dollar_coin_reverse.png' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(192,192,192)'>";
        document.getElementById("flex-box-coinflipping-div").appendChild(ImageDiv);
    }else if(coin_played==1){
        ImageDiv.innerHTML =  "<img src='https://upload.wikimedia.org/wikipedia/commons/f/fe/Sacagawea_dollar_obverse.png' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(192,192,192)'>";
        document.getElementById("flex-box-coinflipping-div").appendChild(ImageDiv);
    }
    
    let btn_aux = document.createElement("button");
    btn_aux.innerHTML = "Play again";
    document.getElementById('flex-aux-coinflipping-div').appendChild(btn_aux);
    btn_aux.style =  "background-color: rgb(0,128,0);  padding: 15px 36px; text-align: center; color: white; border: none; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 5px 5px 5px 5px;";
    btn_aux.onclick = function(){
        MessageDiv.parentNode.removeChild(MessageDiv);
        ImageDiv.parentNode.removeChild(ImageDiv);
        flip_again();
        btn_aux.parentNode.removeChild(btn_aux);
    };
}
function reset_button(){
    document.getElementById("headbtn").remove();
    document.getElementById("tailbtn").remove();
}
function flip_again(){
    const text_coin = document.querySelector(".flex-box-coinflipping");
    text_coin.insertAdjacentHTML(
        "beforeend",
        `<button class="btn-btn-head" id="headbtn" onclick="coinGame(this)">Head.</button>
        <button class="btn-btn-tail" id="tailbtn" onclick="coinGame(this)">Tail.</button>`
    );
}
// Challenge 5: Change the Color of All Buttons!

var all_buttons = document.getElementsByTagName('button');

function buttonColorChange(buttonthingy){
    if(buttonthingy.value === 'red'){
        buttonsRed();
    }else if(buttonthingy.value === 'green'){
        buttonsGreen();
    }else if(buttonthingy.value === 'yellow'){
        buttonsYellow();
    }else if(buttonthingy.value === 'blue'){
        buttonsBlue();
    }else if(buttonthingy.value === 'null'){
        buttonNULL();
    }else if(buttonthingy.value === 'random'){
        buttonRandom();
    }else if(buttonthingy.value === 'reset'){
         colorReset();
    }

}

function buttonsRed(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-danger");
    }
}
function buttonsGreen(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-success");
    }
}
function buttonsYellow(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-warning");
    }
}
function buttonsBlue(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-primary");
    }
}
function buttonNULL(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    }
}
function buttonRandom(){
    var choices = ['btn-primary','btn-danger','btn-success','btn-warning'];
    var aux_0;
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        aux_0 = random_aux();
        all_buttons[i].classList.add(choices[aux_0]);
    }
}
function random_aux(){
       return Math.floor(Math.random()*3);
}
function colorReset(){
    var copyallbuttons = ['btn-primary','btn-danger','btn-success','btn-danger','btn-sucess','btn-sucess','btn-primary','btn-danger','btn-warning','btn-success'];
    for(let i=0;i <all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyallbuttons[i]);
    }
}
//Challenge 6= Blackjack.
let blackjack = {
    'you' : { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer' : {'scoreSpan': '#dealer-blackjack-result', 'div':'#dealer-box', 'score': 0},
    'cards' : ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap' : {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A': [1,11]},
};
const YOU = blackjack['you'];
const DEALER = blackjack['dealer'];
//the command bellow allow us to insert a song in our pag!!
const hitSound = new Audio("sounds/swish.m4a");

document.querySelector("#blackjack-hit-button").addEventListener('click', blackjackhit);
document.querySelector("#blackjack-deal-button").addEventListener('click', BlackjackDealer);
//function that control your moves !!
function blackjackhit(){
    let card = randomCard();
    showCard(YOU,card);
    updateScore(card,YOU);
    showScore(YOU);
    
}
function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackjack['cards'][randomIndex];
    }
function showCard(activePlayer,card){
    if(activePlayer['score'] <= 21 ){
    let cardImage = document.createElement('img');
    cardImage.src = `images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }
}
//function that control the Deal!!
function BlackjackDealer(){
    let yourimages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerimages = document.querySelector('#dealer-box').querySelectorAll('img');
    console.log(yourimages);
    for(let i=0;i<yourimages.length;i++){
    yourimages[i].remove();}
    for(let i=0;i<dealerimages.length;i++){
    dealerimages[i].remove();
    }
}
function updateScore(card,activePlayer){
    if(card==="A"){
    if(activePlayer['score'] + blackjack['cardsMap'][card][1] <=21){
        activePlayer['score'] += blackjack['cardsMap'][card][1];
    }else{
        activePlayer['score'] += blackjack['cardsMap'][card][0];
    }}else{
    activePlayer['score'] += blackjack['cardsMap'][card];}
}
function showScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'Bust!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }else{
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}