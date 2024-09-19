
const { gets, print } = require('./funcoes-auxiliares');

const quantidadeAlunos = gets();
let maiorValoEncontrado = 0;

for (let i = 0; i < quantidadeAlunos; i++) {
    const numerosSorteado = quantidadeAlunos;
    if (numerosSorteado > maiorValoEncontrado) {
        maiorValoEncontrado = numerosSorteado;
    }
}

print(maiorValoEncontrado);
