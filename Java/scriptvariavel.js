
/* **Outras ações **

console.log('Hello World!');
var nomeCompleto = 'James Andrade';
const code = 'TRUSTED';
let nome = 'James';

var btnDark = document.getElementById ('btnDark');
btnDark.addEventListener('click', function(){

    document.body.style.backgroundColor = "RED";
    console.log('Mudando para dark mode!');
     
    
});

var btnLight = document.getElementById ('btnLight');
btnLight.addEventListener('click', function(){

    document.body.style.backgroundColor = "Pink";
    console.log('Mudando para light mode!');
     
    
});
*/

var inputPlayer1 = document.getElementById("player1");
var inputPlayer2 = document.getElementById("player2");

function showResult (){

    //Mostrar 3 possiveis resultados: Player 1 Ganha, Player 2 Ganha, Empate
var scorePlayer1 = parseFloat(inputPlayer1.value);
var scorePlayer2 = parseFloat(inputPlayer2.value);
/* Aqui com um else IF...
if(scorePlayer1 > scorePlayer2) {
    alert("O Jogador 1 venceu!");

} else if  (scorePlayer2 > scorePlayer1) {
    alert("O Jogador 2 venceu!");
}else{

    alert("Foi empate!")}*/

//Aqui com um SWITCH...
switch (true) {
    case scorePlayer1 > scorePlayer2:
        alert("O Jogador 1 venceu!");
        break;

    case scorePlayer2 > scorePlayer1:
        alert("O Jogador 2 venceu!");
        break;

    case scorePlayer1 === scorePlayer2:
        alert("Empate!");
        break;

    default:
        alert("Algo deu errado na comparação!"); }}