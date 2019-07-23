let palavras = {frutas:['BANANA', 'MURICI','CACAU', 'CEREJA', 'UVA', 'MAÇA']};
let palavraSeparada = [];
let botaoComecar = document.querySelector("#botao_comecar");
let dicaH3 = document.querySelector("h3");
let digitoLetra = document.querySelector("#digito_letra");
let botaoOk = document.querySelector("#botao_ok");
let paragrafos = document.querySelectorAll(".letra");
let forca = document.querySelector(".forca");

// posso fazer morto, tendo um contador morto na posiçao contador ++ 

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
        else {
        if(digitoLetra.value  != palavraSeparada[i]){
            corpo();}
        }
    }
    digitoLetra.value = '';
}
let contadorerros = 0;

function corpo(){

    contadorerros+=1;
    if(contadorerros == 1){
        forca.style.backgroundImage = "url(img/cabeca.png)";

    }
    if(contadorerros == 2){
        forca.style.backgroundImage = "url(img/corpo.png)";
        
    }
    if(contadorerros ==3){
        forca.style.backgroundImage = "url(img/braco1.png)";
        
    }
    if(contadorerros==4){
        forca.style.backgroundImage = "url(img/braco2.png)";
    }
    if(contadorerros==5){
        forca.style.backgroundImage = "url(img/perna1.png)";
    }
    if(contadorerros==6){
        forca.style.backgroundImage = "url(img/perna2.png)";
    }
    if(contadorerros==7){
        forca.style.backgroundImage = "url(img/olho1.png)";
    }
    if(contadorerros==8){
        forca.style.backgroundImage = "url(img/olho2.png)";
    }
    if(contadorerros==9){
        forca.style.backgroundImage = "url(img/boca.png)";
        alert('putz, cê morreu irmão')
    }
}

function comecar(){
    sortearPalavra();
    separarPalavra();
    let traco = palavraSeparada.length;
    tracos(traco); 
    
}

botaoComecar.onclick = comecar;

botaoOk.onclick = ok;


