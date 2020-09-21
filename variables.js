/* VARIABLES: Celdas de memoria dentro de un lenguaje de programación, que nos permite almacenar tipos de datos */
/* TIPOS DE VARIABLES */
/* 1. Numéricos */
var numero = 5;
var numero2 = 10;
/* JS es case sensitive */
var Numero2 = 2.5;
/* 2. Texto o String */
var saludo = "Hola";
var saludo = 'Adiós';
/* 3. Booleanas */
var verdadero = true;
var falso = false;
/* 4. Array o Matriz
var leng_prog1 = "JS";
var leng_prog1 = "Python";
.
.  */
var leng_prog = ["JS", "Python", "PHP", "C++"];
/* OPERAR CON VARIABLES
+ : SUMA
- : RESTA
* : MULTIPLICACIÓN
/ : DIVISIÓN
% : RESTO
++ : INCREMENTO EN UNA UNIDAD
-- : DECREMENTO EN UNA UNIDAD */
/* EJEMPLOS: */
var num1 = 10;
var num2 = 5;

var suma = num1 + num2;
var resta = num1 - num2;
var mult = num1 * num2;
var div = num1 / num2;
var resto = num1 % num2;

/* PARA PODER INTRODUCIR Y MOSTRAR DATOS EXISTEN LAS FUNCIONES DE ENTRADA Y SALIDA */
/* - ENTRADA (Fomulario o Prompt) */
/* La función PROMPT me permite mediante un pop up introducir datos en JS
SIEMPRE ASOCIADO A UNA VARIABLE */
var numero = prompt("Dime un numero");
/* - SALIDA (Alert o Imprimir en la consola) */
/* alert(): pop up que muestra información
console.log(): imprime datos por consola */
//alert(numero);
/* console.log(numero); */
console.log(suma);
console.log(resta);
console.log(mult);
console.log(div);
console.log(resto);

/* CONCATENACIÓN DE VARIABLES CON TEXTO */
console.log("La suma es: " + suma)