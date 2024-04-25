// Exercicio 1: Operações Matemáticas com as variáveis 100 e 10
let numero1 = 10;
let numero2 = 100;

let soma = numero1 + numero2;
let subtracao = numero2 - numero1;
let divisao = numero2 / numero1;
let multiplicacao = numero1 * numero2;

alert(
  `> Primeira Variável: 100\n> Segunda Variável: 10\nSoma: ${soma}\nSubtração: ${subtracao}\nDivisão: ${divisao}\nMultiplicação: ${multiplicacao}`
);

// Exercicio 2: Loop que exibe os números de 10 à 100
for (let i = 10; i <= 100; i++) {
  console.log(i);
}

// Exercicio 3: Tabuada do 5
const numero = 5;

for (let i = 1; i <= 10; i++) {
  const resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}

// Exercicio 4: Tabuada do número digitado pelo usuário
const tabuada = parseInt(prompt("Digite um número:"));
for (let i = 1; i <= 10; i++) {
  console.log(tabuada + " X " + i + " = " + tabuada * i);
}

// Exercicio 5: Calculadora
function calcular() {
  let numeroCalc1 = parseInt(document.getElementById("numeroCalc1").value);
  let numeroCalc2 = parseInt(document.getElementById("numeroCalc2").value);
  let selectCalc = parseInt(document.getElementById("selectCalc").value);
  let resultado = document.getElementById("resultado");

  if (selectCalc == "1") {
    resultado.value = numeroCalc1 + numeroCalc2;
  } else if (selectCalc == "2") {
    resultado.value = numeroCalc1 - numeroCalc2;
  } else if (selectCalc == "3") {
    resultado.value = numeroCalc1 * numeroCalc2;
  } else if (selectCalc == "4") {
    resultado.value = numeroCalc1 / numeroCalc2;
  }
}

// Exercicio 6: Percorre array de 1 à 10 e retorna os valores pares
vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
vetor.filter((numero) => {
  if (numero % 2 == 0) {
    console.log(numero);
  }
});

// Exercicio 7: Calculadora de custo de um carro
function calcularCusto() {
  let custoFabrica = parseInt(document.getElementById("custoFabrica").value);
  let percDistribuidor = parseInt(
    document.getElementById("percDistribuidor").value 
  );
  let percImpostos =
    parseInt(document.getElementById("percImpostos").value) ;
  let valorFinal = document.getElementById("valorFinal");

  valorFinal.value =
    custoFabrica +
    custoFabrica * (percDistribuidor/100) +
    custoFabrica * (percImpostos/100);
}
