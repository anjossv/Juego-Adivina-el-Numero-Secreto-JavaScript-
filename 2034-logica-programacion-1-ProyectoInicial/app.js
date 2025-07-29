
//math.floor para eliminar decimales y math.random para elegir un numro entre 0 y 0.99
//la multiplicación se coloca dentro del math floor y fuera de los parentesis del math.random
//la suma se coloca fuera del math.floor
let NumeroMaximo = 10;
let numeroSecreto = Math.floor(Math.random()*NumeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 1;

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto)
{    
    //parseInt para convertir el texto a un valor entero
    numeroUsuario = parseInt(prompt (`ingrese un numero entre 1 y ${NumeroMaximo} por favor`));
    //typeof para saber que clase de valor se ingresa (texto o numero)
    console.log(numeroUsuario);
    console.log(numeroSecreto == numeroUsuario);
    if (numeroUsuario == numeroSecreto)
    {
        /* para colocar varibales dentro de un cuadro de texto o
        una alerta se colocan en lugar de comillas las comillas
        invertidas (``) y la variable debe de ir con un signo de 
        dollar ($) y posteriormente entre llaves ({}).
        */
        alert (`¡Felicidades! El numero secreto era ${numeroUsuario}. Lo lograste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    }
    else
    {
        if (numeroUsuario > numeroSecreto)
        {
            alert ("el numero secreto es menor");
        }
        else
        {
            alert ("el numero secreto es mayor");
        }
        intentos++
        
        if(intentos > maximoIntentos)
        {
            alert (`lleagaste al numero maximo de ${maximoIntentos} ${maximoIntentos == 1 ? "intento" : "intentos"}`);
            break;
        }                            
    }
}