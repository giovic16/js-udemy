console.log("Olá Mundo!");

var umNumero; // Por questão de boas práticas o var já não é mais tão utilizado
var umNumero = 10; // Declara uma variável podendo atribuir um valor junto na sua criação

let outroNumero = 5; // Declara uma variável com escopo de bloco

const ola = "Olá Mundo!"; // Declara uma variável apenas para leitura. Após atribuir um valor, não será possível altera-lo

// Tipos de dados - NUMBER
// São todos os números reais que aprendemos nas aulas de matemática

let numeroInteiro = 100;
let numedoDecimal = 5.38;
let numeroNegativo = -200.99;

// Tipos de dados - STRING
// São valores de texto, normalmente chamados de "cadeia de caracteres":

let ola1 = "Olá Mundo";
// Caracteres especiais - Para adicionar caracteres especiais (',",&, quebra de linha e etc), utilizamos a barra invertida
let caracteresEspeciais = "Lorem \n Ipsum \\ dolor \'\" amet";
/*
    \n = Nova linha
    \\ = Exibe a \
    \' = Exibe ''
    \" = Exibe "
*/
// Concatenação de Strings: Você pode unir (concatenar) Strings de diversas formas

// 1 - Utilizando o sinal de + 
let ola2 = "Olá";
let mundo = "Mundo";
let olaMundo = ola2+mundo;

// 2 - Utilizando o String.concat
let ola3 = "Olá";
let mundo1 = "Mundo";
let olaMundo1 = ola.concat(mundo);

// Tipos de dados - BOOLEANO
// São tipos de daods que possuem dois valores: TRUE ou FALSE

let verdadeiro = true;
let falso = false;

let comparacao = 1 == 1; // TRUE
let comparacao2 = 1 > 5; // FALSE
let comparacaoString = "banana" == "banana"; // TRUE

/*
    Se testar 1 == "1", obterá true. Para comparações que levam em consideração o valor e o tipo de dado, deverá ser utilizado ===
*/

console.log(1 == "1"); // TRUE
console.log(1 === "1"); // FALSE