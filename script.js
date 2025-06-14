function mostrarHora(){
    let data = new Date();
    console.log(data);
}
mostrarHora();

function CalcularAreaRetangulo (Largura, Altura ){
    let area = Largura * Altura;
    console.log(area);
}
CalcularAreaRetangulo(3, 4);

function ehPar (numero){
    if (numero % 2 === 0){
        return `O $(numero) é par`;
    } 
    else return `O $(numero) não é par`;
}
ehPar(7);

function avaliarAluno (nome, nota1, nota2, nota3){
    console.log(nome);
    let media = (nota1 + nota2 + nota3)/3;
    console.log(media);
}
avaliarAluno("breno", 2, 3, 4);

function conversorTemperatura (celcius){
    let fahreheit = (celcius * 1.8) + 32;
    console.log(fahreheit);
}
conversorTemperatura(32);

function gerarSenhaAleatoria (length){
    function creatRandomString(length){
    let senha = "";
    for (let i = 0; i<length; i++){
        senha += RandomCaractere(n);
    }
    return senha;
    function RandomCaractere(){
        const caractere = '123456789@ABCDEFGHIJKLMNOPQRSTUVWXYZ[/]abcdefghijklmnopqrstuvwxyz';
        const n = Math.trunc(Math.random()*66);
        return caractere[n];
    }
    return createRandomString(length);
}
}
console.log(gerarSenhaAleatoria(8));
