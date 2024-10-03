/* 
1)  Faça um programa que que calcule e imprima o salario a ser transferido para um funcionario.
   > Para realizar o caculo receba o valor bruto do salário e o adicional dos benefícios 
   > O salário a ser transferido e calculado da seguinte maneira:
   
   valor bruto do salario - percentual de impostos mediante a faixa salarial + adcional dos benefícios.

   Para calcular o percentual de imposto segue as aliquotas:

        De R$ 0.00 a R$ 1100.00 = 5.00%
        De R$ 1100.01 a R$ 2500.00 = 10.00%
        Maior que R$ 2500.00 = 15.00%   

        Exemplo:
            Entrada:
                2000
                250
            Saída:
                2050.00
*/

const { gets, print } = require('./funcoes-auxiliares3');

const salarioBruto = gets();
const benefícios = gets();

//-----------------------Minha Solução-------------------------------------

let salarioLiquido;

if(salarioBruto <= 1100.00){
    salarioLiquido = salarioBruto * (1 - 0.05) + benefícios;
}else if(salarioBruto >= 1100.01 && salarioBruto <= 2500.00){
    salarioLiquido = salarioBruto * (1 - 0.1) + benefícios;
}else{
    salarioLiquido = salarioBruto * (1 - 0.15) + benefícios;    
}

print(salarioLiquido.toFixed(2))


//-------------------------Solução do curso-----------------------------------



function calcularPorcentagem(valor, percentual){
    return valor * (percentual / 100);
    // (valor = 2000) * (portentual = 10 / 100) = 200
}

function pegarAliquota(salario){
    if(salario >= 0 && salario <= 1100.00){
        return 5.00;
    }else if(salario >= 1100.01 && salario <= 2500.00){
        return 10.00;
    }else{
        return 15.00;         
    }
}

const aliquotaImposto = pegarAliquota(salarioBruto);
const valorImposto = calcularPorcentagem(salarioBruto, aliquotaImposto)

const valorTransferir = salarioBruto - valorImposto + benefícios;

print(valorTransferir)
