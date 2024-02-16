/*
torrar()

function torrar(){
    console.log("torrando pão")
    injetarPao()
}

function injetarPao(){
    console.log("preparando para injetar o pão")
    console.log("finalizando")
}
*/

//---Escopo de variáveis e múltiplos parâmetros---//
torrar("pão de forma", 15.00, "Karla")
torrar("pão integral", 10.00, "Jaime")
torrar("pão doce", 10.00)


function torrar(pao, valor, nome = "Cliente"){
    console.log("torrada feita com " + pao
     + " é um pedido de " + nome
     + ". O valor total é R$ " + valor)  
}

