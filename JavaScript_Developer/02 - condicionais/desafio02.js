/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
    1 - Preço do Etanol;
    2 - Preço da Gasolina;
    3 - O tipo do Combustível que esta no seu carro;
    4 - Gasto médio de Combustível por km;
    5 - Distância em km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. 
*/

const tipoCombustivel = 'etanol';
const precoEtanol = 4.50;
const kmPorLitroEtanol = 10;

const precoGasolina = 5.60;
const kmPorLitroGasolina = 12;

const distanciaEmKm = 100;

if(tipoCombustivel === 'gasolina'){
    const totalConsGasolina = (distanciaEmKm / kmPorLitroGasolina) * precoGasolina;
    console.log("Gasolina: R$ " + (totalConsGasolina.toFixed(2)));
}else if(tipoCombustivel === "etanol"){
    const totalConsEtanol = (distanciaEmKm / kmPorLitroEtanol) * precoEtanol;
    console.log("Etanol: R$ " + (totalConsEtanol.toFixed(2)));
}else{
    console.log('Conbustivel Invalido');
}