// em vez de escrever o log 100x, vamos usar um LOOP
 /*
function countNumbers () { 
    //(Inicia no 0; termina enquanto o I for menos que 100; o i++ representa o valor 1)
   for(i=0;i<100;i++) {

    console.log(i);
    } 
}
*/

/*
// Faz um loop while
var i=1;

while(i<=100){
    console.log(i);
    i++;
}

}
*/
// Call the function to start printing

function countNumbers (numeroMax) { 

    var i=1;

    while(i<=numeroMax){
    console.log(i);
    i++;
}
}
