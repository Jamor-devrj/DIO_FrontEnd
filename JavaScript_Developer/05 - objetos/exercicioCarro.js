class Carro{
    marca;
    cor;
    gastoMedioKmRodado;

    constructor(marca, cor, gastoMedioKmRodado){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKmRodado = gastoMedioKmRodado;
    }

    calcularGastoPecurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioKmRodado * precoCombustivel;
    }    
}

const uno = new Carro('Fiat', 'Prata', 1/12);
console.log(uno.calcularGastoPecurso(70, 5).toFixed(2));

const palio = new Carro('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoPecurso(70, 5).toFixed(2));