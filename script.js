let palavras = {frutas:['BANANA', 'MURICI', 'CEREJA', 'UVA'], dica: 'fruta'};
let palavraSeparada = [];
let botaoComecar = document.querySelector("#botao_comecar");
let dicaH3 = document.querySelector("h3");
let digitoLetra = document.querySelector("#digito_letra");
let botao_ok = document.querySelector("#botao_ok");
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
    let repeticaoLetra;
    let letra = digitoLetra.value;
    let pesquisa = palavraSeparada.match(letra);
    while(pesquisa!=null){
        repeticaoLetra = palavra.search(letra);
        traco = document.querySelector("p"+repeticaoLetra).value=letra;
    }
}

function comecar(){
    sortearPalavra();
    separarPalavra();
    let traco = palavraSeparada.length;
    tracos(traco);
    console.log(traco);  
    dicaH3.innerHTML="Dica: " + palavras.dica;
    
}
botaoComecar.onclick = comecar;


