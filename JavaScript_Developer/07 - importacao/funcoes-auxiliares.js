
const entradas = [2506, 29, 50, 10, 3520, 1045];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };