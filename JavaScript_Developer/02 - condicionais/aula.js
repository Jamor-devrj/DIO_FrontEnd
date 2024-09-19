
const numero = 2;
const numeroPar = (numero % 2) === 0;

if (numero === 0){
    console.log('Numero invalido');
}else if (numeroPar){
    console.log('Par');
}else {
    console.log('Impar');
}