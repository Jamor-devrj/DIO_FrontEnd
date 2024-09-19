/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

const nota1 = 4;
const nota2 = 3;
const nota3 = 5;
const media = (nota1 + nota2 + nota3) / 3;

console.log(media);

if (media > 7){
    console.log('Média acima de 7, passou de semestre');
}else if (media >= 5 && media <= 7){
    console.log('Media entre 5 e 7, recuperação');
}else{
    console.log('Media menor que 5, reprovação');
}
