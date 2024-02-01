let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto =  gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e '+numeroLimite);
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if ( chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce acertou o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }    else {
        if ( chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor!');   
        }
        else{
            exibirTextoNaTela('p', 'O numero secreto é maior!');
        }
        tentativas++;
        limparCampo()
    }
}
function gerarNumeroAleatorio() {
         let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
         let quantidadeDeElementosNaLista = listaDeNumeroSorteados.len;
         if(quantidadeDeElementosNaLista== numeroLimite){
            listaDeNumeroSorteados = [];
         }
         if (listaDeNumeroSorteados.includes(numeroEscolhido)){
            return gerarNumeroAleatorio();
         }
         else {
            listaDeNumeroSorteados.push(numeroEscolhido);
            console.log(listaDeNumeroSorteados);
            return numeroEscolhido;
         }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1 ;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}


//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';
//
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';


//
//function olaMundo(){
//    console.log('Ola, mundo!')
//}
//olaMundo();
//
//function olaNome(nome){
//    console.log("olá, "+nome);
//}
//olaNome('Alice');
//
//function calculaDobro(numero){
//    return numero * 2;
//}
//let resultadoDobro = calculaDobro(5);
//console.log (resultadoDobro);
//
//function calculaMedia(a, b, c){
//    return (a + b + c) / 3 ;
//}
//let media = calculaMedia ( 5, 6 ,4);
//    console.log(media);
//
//function retornaMaior(a, b){
//    return a > b ? a : b ;
//}
//let maior = retornaMaior( 10, 15);
//console.log(maior);
//
//function retornarMultiplicado(multiplicado){
//    return multiplicado * multiplicado;
//}
//let resultado =retornarMultiplicado(4);
//console.log(resultado);


//let listaGenerica = [];
//let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
//linguagensDeProgramacao.push( 'Java', 'Ruby' , 'GoLang');
//
//let listaNomes = ['Maria','Jose','Pedro'];
//console.log(listaNomes[0]);
