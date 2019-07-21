let palavras = {frutas:['BANANA', 'MURICI', 'CEREJA', 'UVA'], dica: 'fruta'};
let palavraSeparada = [];
let botaoComecar = document.querySelector(".botao_comecar");
let dicaH3 = document.querySelector("h3");
let digitoLetra = document.querySelector(".digito_letra");
let botao_ok = document.querySelector(".botao_ok");


function sortearPalavra(){
    let qtde = palavras.frutas.length-1;
    let sorteio = Math.floor(Math.random()*qtde);
    let palavraSorteada = palavras.frutas[sorteio];
    return palavraSorteada;
}

function separarPalavra(){
    palavraSeparada = sortearPalavra().split("");
    return palavraSeparada;
}

// function tracos(t){
//     let paragrafos = document.querySelectorAll("p").style.display="none";
//     paragrafos.innerHTML = "";
//     for (let i=0; i<t; i++){
//         paragrafos = document.querySelector("#letra"+i).style.display="inline-block";
//     }
// }

function jogar(){
    let traco;
    let repeticaoLetra;
    let letra = digitoLetra.value;
    digitoLetra.value="";
    pesquisa=palavraSeparada.match(letra);
    while(pesquisa!=null){
        repeticaoLetra = palavra.search(letra);
        traco = document.querySelector("p"+repeticaoLetra).value=letra;
    }
}

function comecar(){
    sortearPalavra();
    separarPalavra()
    let sep = palavraSeparada.length;
    tracos(sep);
    dicaH3.innerHTML="Dica: " + palavras.dica;
    let tracos = sortearPalavra().split("__ ");
    console.log(tracos);


}
botaoComecar.onclick = comecar;


