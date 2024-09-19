/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
    1 - Preço do Combustível;
    2 - Gasto médio de Combustível por km;
    3 - Distância em km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoCombustivel = 5.79;
const gastoMedioKmlt = 12;
const distanciaEmKm = 1580;

let totalGasto = (distanciaEmKm / gastoMedioKmlt) * 5.79;

console.log(totalGasto.toFixed(2));