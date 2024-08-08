//Desafio!!!!!
//Fazer uma calculadora que mostra a idade de uma pessoa utilazndo
//Dois dados de entrada.
/*
---------------------------------------------------------------
Aqui Embaixo Está Nosso Primeiro Código, Utilize Com Consulta.
---------------------------------------------------------------

let num1 = 17;
let num2 = 18;
let resultado;

resultado = num1 + num2;

alert("O resultado é: " + resultado);

num1 = parseInt(prompt("Digite o primeiro número da soma: "));
num2 = parseInt(prompt("Digite o segundo número da soma: "));

resultado = num1 + num2;

alert("O resultado é: " + resultado);
*/
/*
let num1 = 1940;
let num2 = 2024;
let resultado;

resultado = num1 - num2;

num1 = parseInt(prompt("Digite a sua ano de nascimento da soma: "));
num2 = parseInt(prompt("Digite a sua ano atual da soma: "));

resultado = num2 - num1;

alert("O resultado é: " + resultado);
*/
/*
//Declaração de variáveis
let anoNascimento;
let anoAtual;
let resultado;
let idadeCachorro;
let nome;
let qualCalculo;

//Entrada de dados pelo usuário
nome = prompt("Qual seu nome?");
anoNascimento = parseInt(prompt ("Qual o ano de nascimento?"));
anoAtual = parseInt(prompt("Qual o ano atual?"));

//Primeiro desafio (cálculo da idade humana)
resultado = anoAtual - anoNascimento;

//Segundo desafio (cálculo da idade canina)
idadeCachorro = resultado * 7;


//Terceiro dasfio (mostrar o nome)

//Quarto desafio (perguntar qual cálculo o usuário quer)
qualCalculo = parseInt(prompt("Digite 1 para idade humana ou 2 para idade canina"));

//Mostra o resultado
if (qualCalculo == 1){
    alert(nome + ", a idade é: " + resultado);
}
else if (qualCalculo == 2){
    alert(nome + ", a idade em anos caninos é: " + idadeCachorro);
} else {
    alert(nome + ", por favor digite um número válido.");
}

*/
/*
//Desafio Ultimato//

//Fazer uma calculadora que verifica nquantos pontos um estudante
//precisa para passar de ano no último trimestre

//Dicas: O estudante precisa informar as notas do primeiro e segundo trimestre
//com esses dados, a calculadora precisa informar quanrtos pontos ele precisa para passar
//de ano no terceiro trimestre. Se o estudante já estiver aprovado no segundo trimestre,
//mandar uma mensagem de parabéns!

//Utilizar como média o valor 6.0

//Declaração de variáveis
let nota1;
let nota2;
let resultado;

nota1 = parseInt(prompt("Qual a nota do 1trim?"));
nota2 = parseInt(prompt("Qual a nota do 2trim?"));

resultado = 180 - (nota1+nota2);

if (resultado > 0){
    alert("Ainda precisa de " + resultado + " para passar.")
} else {
    alert("Parabéns! Você já foi aprovado!")
}
*/

//Declaração de variáveis
let quantidade = 0;
let total = 0;

//Função utilizada para calcular a quantidade...
function CalculaBruno(){
    
//prompt de dados
quantidade = parseInt(prompt("Digite a quantidade de vezes que foi preciso mandar ele calar a boca:"));

//Faz a soma e adiciona na variável total
total = total + quantidade;

//Mostra o resultado usando alert
alert(total);
}