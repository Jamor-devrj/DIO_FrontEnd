

class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome} `);        
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome} `);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}
const jaime = new Pessoa('Jaime', 43);
const jeffeson = new Pessoa('Jeffeson', 34);

compararPessoas(jaime, jeffeson);


/*
const jaime = new Pessoa('Jaime', 43);
const karla = new Pessoa('Karla', 57);

console.log(jaime);
console.log(karla);

const jaime = new Pessoa();
jaime.nome = 'Jaime Moraes';
jaime.idade = 43;

const karla = new Pessoa();
karla.nome = 'Karla Profice';
karla.idade = 57;

jaime.descrever();
karla.descrever();*/
