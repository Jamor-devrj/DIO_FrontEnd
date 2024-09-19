/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
function calcularFormaPagamento(precoEtiqueta, formaPagamento){
    if (formaPagamento === 1){
     return precoEtiqueta - (precoEtiqueta * 0.1);
    }else if (formaPagamento === 2){
     return precoEtiqueta - (precoEtiqueta * 0.15);
    }else if (formaPagamento === 3){
     return precoEtiqueta;
    }else{
     return precoEtiqueta + (precoEtiqueta * 0.1);
    }
}
console.log(calcularFormaPagamento(100, 3));

/*--------------------------------------------------------------------*/


function aplicarDesconto(valor, desconto){
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros){
    return valor + (valor * (juros / 100));
}

const precoEtiqueta = 100;
const formaPagamento = 6 ;

if (formaPagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10));
}else if (formaPagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15));
}else if (formaPagamento === 3){
    console.log(precoEtiqueta);
}else{
    console.log(aplicarJuros(precoEtiqueta, 10));
}