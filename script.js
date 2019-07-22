let palavras = {frutas:['BANANA', 'MURICI','CACAU', 'CEREJA', 'UVA', 'MAÇA'], dica: 'fruta'};
let palavraSeparada = [];
let botaoComecar = document.querySelector("#botao_comecar");
let dicaH3 = document.querySelector("h3");
let digitoLetra = document.querySelector("#digito_letra");
let botaoOk = document.querySelector("#botao_ok");
let paragrafos = document.querySelectorAll(".letra");

let morto = [
    'cabeca.png',
    'corpo.png',
    'braco1.png',
    'braco2.png',
    'perna1.png',
    'perna2.png',
    'olho1.png',
    'olho2.png',
    'boca.png',
    'morto.png'
]

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
    // let numLetra;
    // let subs;
    // let letra = digitoLetra.value;
    // // let pesquisa = palavraSeparada.match(letra);
    // numLetra = palavraSeparada.search(letra);
    // cont=0
    // while(cont <= palavraSeparada.length ){
    //     subs = document.querySelector("num0").id = "num"+cony;
    //     palavraSeparada = palavraSeparada.replace(letra, "0");
    //     paragrafos[letra];
    //     cont+=1;
    // }
    for (let i=0; i<palavraSeparada.length; i++){
        paragrafos[i].style.display="inline-block";
        paragrafos[i].innerHTML=palavraSeparada[i];
    }
    // if(digitoLetra.value == palavraSeparada[0]){
    //     palavraSeparada = palavraSeparada.replace(0, "0");
    //     completarLacunas = paragrafos.replace("-",digitoLetra.value);
    //     paragrafos[0].innerHTML = digitoLetra.value;
    // }
    // else if (digitoLetra.value == palavraSeparada[1]){
    //     palavraSeparada = palavraSeparada.replace(1, "0");
    //     completarLacunas = paragrafos.replace("-",digitoLetra.value);
    //     paragrafos[1].innerHTML = digitoLetra.value;
    // }
}

function comecar(){
    sortearPalavra();
    separarPalavra();
    let traco = palavraSeparada.length;
    tracos(traco); 
    dicaH3.innerHTML="Dica: " + palavras.dica;
    
}

function completarLacunas(){
    while(digitoLetra.value == paragrafos){
        completarLacunas = paragrafos.replace("-",digitoLetra.value)
    }
}

// function forca(){
//     while
// }

botaoComecar.onclick = comecar;
botaoOk.onclick = ok;