/*
2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.

Imprima o maior numero par e o menor numero impar.

Exemplo:
Entrada:
    5
    3
    4
    1
    10
    8

Saída: 
    Maior número para: 10
    Menor número impar: 1         
        
*/

const { gets, print } = require('./funcoes-auxiliares2');

const n = gets();

let maiorPar = null;
let menorImpar = null;

for(let i = 0; i < n; i++){
    const numeros = gets();
    if(numeros % 2 === 0){
        if(maiorPar === null || numeros > maiorPar){
            maiorPar = numeros;
        }                            
    }else{
        if(menorImpar === null || numeros < menorImpar){
            menorImpar = numeros;
        }
    }
}
print("Maior número par: " + maiorPar)
print("Menor número impar: " + menorImpar)


/*

****MINHA RESOLUÇÃO ANTES DA EXPLICAÇÃO*****

const numero = gets();
const numerosPar = [];
const numerosImpar = [];

let maior = 0;
let menor = 0;

for(let i = 0; i < numero; i++){
    const numeros = gets();
    if(numeros % 2 == 0){
        numerosPar.push(numeros);        
    }
    if(numeros % 2 != 0){
        numerosImpar.push(numeros);        
    }
}

for(let i = 0; i < numerosPar.length; i++){
    const numeros = numerosPar[i];  
    if(numeros > maior){
        maior = numeros;
    };
};

print("Maior número par: " + maior)

for(let i = 0; i < numerosImpar.length; i++){
    const numeros = numerosImpar[i];
    //menor = maior;  
    if(numeros < menor){
        menor = numeros;
    };
   // maior = menor;
};

print("Menor número impar: " + menor)*/


/*

for(let i = 0; i < numerosLista.length; i++){
    const numeros = numerosLista[i]; 
    //menor = maior
    if(numeros < menor && numeros % 3){
        menor = numeros;
    };
    //maior = menor
};



const numerosSorteados = [];
let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];
    if (numerosSorteado > maiorValor) {
        maiorValor = numerosSorteado;
    }
}

print(maiorValor);*/