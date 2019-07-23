let palavras = {frutas:['BANANA', 'MURICI','CACAU', 'CEREJA', 'UVA', 'MAÇA'], dica: 'fruta'};
let palavraSeparada = [];
let botaoComecar = document.querySelector("#botao_comecar");
let dicaH3 = document.querySelector("h3");
let digitoLetra = document.querySelector("#digito_letra");
let botaoOk = document.querySelector("#botao_ok");
let paragrafos = document.querySelectorAll(".letra");

for(let i=0; i<7; i++){
    paragrafos[i].innerHTML="";
    paragrafos[i].style.display="none";
}

function sortearPalavra(){
    let tamanhoPalavra = palavras.frutas.length;
    let sorteio = Math.floor(Math.random()*tamanhoPalavra);
    let palavraSorteada = palavras.frutas[sorteio];
    return palavraSorteada;
}

function separarPalavra(){
    palavraSeparada = [];
    sortearPalavra();
    palavraSeparada = sortearPalavra().split("");
    console.log(palavraSeparada);
    return palavraSeparada;
}

function tracos(t){
    for(let i=0; i<7; i++){
        paragrafos[i].innerHTML="";
        paragrafos[i].style.display="none";
    }

    for (let i=0; i<t; i++){
        paragrafos[i].style.display="inline-block";
        paragrafos[i].innerHTML="__";
    }
}

function ok(){
    for (let i in palavraSeparada){
        if(digitoLetra.value.toUpperCase() == palavraSeparada[i]){
        paragrafos[i].innerHTML = palavraSeparada[i];
        }
    }
}

function comecar(){
    sortearPalavra();
    separarPalavra();
    let traco = palavraSeparada.length;
    tracos(traco); 
    dicaH3.innerHTML="Dica: " + palavras.dica;
    
}

botaoComecar.onclick = comecar;
botaoOk.onclick = ok;

console.log(digitoLetra);

console.log(digitoLetra.value);

