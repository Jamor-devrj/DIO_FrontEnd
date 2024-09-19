
const jaime = {
    nome: 'Jaime Moraes da Silva',
    idade: 43,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};



pessoa.descrever();

console.log();
console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.altura = 1.65;
console.log(pessoa);
delete pessoa.idade;

pessoa.nome = 'Karla';
pessoa.idade = 56;

pessoa.descrever();

pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`)
}

pessoa.descrever();
