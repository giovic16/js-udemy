console.log("Olá Mundo!");

var umNumero; // Por questão de boas práticas o var já não é mais tão utilizado
var umNumero = 10; // Declara uma variável podendo atribuir um valor junto na sua criação
let outroNumero = 5; // Declara uma variável com escopo de bloco
const ola = "Olá Mundo!"; // Declara uma variável apenas para leitura. Após atribuir um valor, não será possível altera-lo

// -------------------------------------------------------------------------------------------------------------------------------------------------------- //

// Tipos de dados - NUMBER
// São todos os números reais que aprendemos nas aulas de matemática

let numeroInteiro = 100;
let numedoDecimal = 5.38;
let numeroNegativo = -200.99;

// -------------------------------------------------------------------------------------------------------------------------------------------------------- //

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

// -------------------------------------------------------------------------------------------------------------------------------------------------------- //

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

// -------------------------------------------------------------------------------------------------------------------------------------------------------- //

// Tipos de dados - ARRAY (vetor)
// É uma lista ou coleções de dados que pode ser acessada por índice. 
let vetor = [];

// Criando um vetor e atribuindo valores separados por vírgula.
let vetor2 = [1, 22, 0, 100];

// Adicionando valores de qualquer tipo no vetor
let vetor3 = [1, "Olá Mundo", true, [1, 2, 3]];

// Os valores podem ser acessador através de seu índice
let vetor4 = [1, 2, 3, 4];
console.log(vetor4[1]); // exibirá 2

// Alterando e atribuindo valores pelo índice
let vetor5 = [8, 4, 3, 10, 78];
// Altera o valor da primeira posição
vetor5[0] = 9000;
// Insere um valor após o último elemento
vetor5[5] = 7;

// -------------------------------------------------------------------------------------------------------------------------------------------------------- //

// Tipos de dados - NULL e UNDEFINED
// O Null é um tipo de dado especial, ele representa a falta de valor de qualquer outro tipo de dado

let x = null;
let y = 1;
y = null;

// O Undefined aparece quando criamos uma variável e tentamos acessar seu valor antes de ter algo atribuído a ela.
let a;
console.log(a); // retorno de undefined

// Undefined !== Null
console.log(null === undefined);
// Isso ocorre pois null ainda é um valor e undefined é quando o JavaScript não sabe qual o tipo de dado

// -------------------------------------------------------------------------------------------------------------------------------------------------------- //

// Tipos de dados - OBJETO
// É um tipo de dado composto pelos outros tipos. Com ele, podemos oganizar informações relacionadas em uma variável

let carro = {
    rodas: 4,
    portas: 2,
    nome: "um carro",
    aVenda: true
};

// Criação de um objeto vazio
let carro2 = {};
// Objeto com propriedades (variáveis)
let carro3 = {
    rodas: 4,
    nome: "Carro"
};

// Caso já tenha criado um objeto e queira adicionar uma nova propriedade
carro3.portas = 2;
carro3["portas"] = 2;
// Se utilizar a segunda opção, é necessário ter uma string dentro dos []

// Para alterar os dados, funciona da mesma forma
carro3.portas = 4;
carro3["portas"] = 4;

// -------------------------------------------------------------------------------------------------------------------------------------------------------- //

// Tipos de dados - FUNÇÕES
// As funções são utilizadas para criar uma sequência de operações e serem executadas

let oiUsuario = function(){
    console.log("Oi usuário");
    console.log("Oi usuário novamente");
    console.log("Oi usuário mais uma vez");
}
oiUsuario(); // Para a função ser executada, é necessário utlizar os ()

// Outra forma de criar uma função é chamando o function com o nome dela
function oiUsuario(){
    console.log("Oi usuário");
    console.log("Oi usuário novamente");
    console.log("Oi usuário mais uma vez");
}
oiUsuario();

// Também é possível passar valores para a função acessar
let somar = function(valor1, valor2) {
    let resultado = valor1 + valor2;
    console.log(resultado);
  }
  somar(1,2);
  somar(4,4);
  somar(99,1);
//somar();

// Comando return

let soma = function(numero1, numero2){
    let resultado2 = numero1 + numero2;
    return resultado2;
}