
// 1)Escreva uma função chamada dobrar que recebe um número como parâmetro e retorna o dobro desse número. Use a sintaxe de função tradicional. 
function dobrar(numero) {
    return numero * 2;
  }
  
  console.log(dobrar(4)); // Saída: 8
   

  

// 2)Reescreva a função dobrar utilizando a sintaxe de função anônima atribuída a uma variável. 

const dobrar = function(num1) {
    return num1 * 2;
  };
  
  console.log(dobrar(6)); // Saída: 12
  


// 3)Transforme a função dobrar em uma função de seta (arrow function). 

let dobroArrow = (num1) => {
    return num1 * 2;
  };
  
  console.log(dobroArrow(6)); // Saída: 12


//  4)Escreva uma função chamada saudacao que recebe o nome de uma pessoa como parâmetro e retorna uma saudação personalizada. Use a sintaxe de função de seta. 

let saudacao = (nome) => {
    return `Olá, ${nome}! Seja bem-vindo(a)!`;
  };
  
  console.log(saudacao("João")); // Saída: Olá, João! Seja bem-vindo(a)!



//  5)Reescreva a função saudacao utilizando a sintaxe de função tradicional. 

function saudacao(nome) {
    return "Olá, " + nome + "! Seja bem-vindo(a)!";
  }
  
  console.log(saudacao("João")); // Saída: Olá, João! Seja bem-vindo(a)!
  
 
//  6)Crie uma função chamada somarNumeros que recebe um número indeterminado de argumentos e retorna a soma desses números. Utilize a sintaxe de função tradicional. 
 
function somarNumeros() {
    let soma = 0;
  
    for (let i = 0; i < arguments.length; i++) {
      soma += arguments[i];
    }
  
    return soma;
  }
  
  console.log(somarNumeros(2, 4, 6)); // Saída: 12
  console.log(somarNumeros(1, 2, 3, 4, 5)); // Saída: 15
  console.log(somarNumeros(10)); // Saída: 10
  console.log(somarNumeros()); // Saída: 0


//  7) Transforme a função somarNumeros em uma função de seta. 

const somarNumeros = (...numeros) => {
    return numeros.reduce((soma, numero) => soma + numero, 0);
  };
  
  console.log(somarNumeros(2, 4, 6)); // Saída: 12
  console.log(somarNumeros(1, 2, 3, 4, 5)); // Saída: 15
  console.log(somarNumeros(10)); // Saída: 10
  console.log(somarNumeros()); // Saída: 0
 
//  8)Escreva uma função chamada saudacao que recebe o nome de uma pessoa como parâmetro e retorna uma saudação personalizada. Por exemplo, se o nome for "João", a função deve retornar "Olá, João!". 
 
function saudacao(nome) {
    return "Olá, " + nome + "!";
  }
  
  console.log(saudacao("João")); // Saída: Olá, João!


//  9)Crie uma função chamada soma que recebe dois números como parâmetros e retorna a soma desses números. Implemente uma função chamada maiorNumero que recebe três números como parâmetros e retorna o maior número entre eles. 
 
function soma(num1, num2) {
    return num1 + num2;
  }
  
  function maiorNumero(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  
  console.log(soma(2, 3)); // Saída: 5
  console.log(maiorNumero(5, 10, 3)); // Saída: 10
 
//   10)Crie uma função chamada contarVogais que recebe uma string como parâmetro e retorna o número de vogais presentes nessa string. Implemente uma função chamada calcularMedia que recebe um array de números como parâmetro e retorna a média desses números. 
 
function contarVogais(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vogais.includes(str[i].toLowerCase())) {
        count++;
      }
    }
  
    return count;
  }
  
  function calcularMedia(numeros) {
    if (numeros.length === 0) {
      return 0;
    }
  
    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return soma / numeros.length;
  }
  
  console.log(contarVogais("Hello")); // Saída: 2
  console.log(calcularMedia([1, 2, 3, 4, 5])); // Saída: 3
 












