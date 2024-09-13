
function selecionarPrato(botao){
    
    const selecionadoAntes = document.querySelector(".box1 .selecionado")

    if(selecionadoAntes !== null){
        selecionadoAntes.classList.remove("selecionado")
    }

    botao.classList.add("selecionado");
    verificarSelecao();
}

function selecionarBebida(botao){

    selecionadoAntes = document.querySelector(".box2 .selecionado")
    if(selecionadoAntes !==null){

        selecionadoAntes.classList.remove("selecionado")
    }

    botao.classList.add("selecionado")
    verificarSelecao();
}

function selecionarDoce(botao){
    
    selecionadoAntes = document.querySelector(".box3 .selecionado");
    
    if(selecionadoAntes !==null){
        selecionadoAntes.classList.remove("selecionado");
    }

    botao.classList.add("selecionado");
    verificarSelecao();
}

function verificarSelecao(){

    const pratoSelecionado = 
    document.querySelector(".box1 .selecionado");
    const bebidaSelecionada = 
    document.querySelector(".box2 .selecionado");
    const doceSelecionado = 
    document.querySelector(".box3 .selecionado");

    const botaoNormal = document.querySelector(".botaoRodape");
    const botaoEscondido = document.querySelector(".escondido");

    if(pratoSelecionado && bebidaSelecionada && doceSelecionado){

        botaoNormal.style.display = "none";
        botaoEscondido.style.display = "block";
    }
}

function abrirPopup(){

    const pratoSelecionado = 
    document.querySelector(".box1 .selecionado .nomePrato").innerText;
    const bebidaSelecionada = 
    document.querySelector(".box2 .selecionado .nomeBebida").innerText;
    const doceSelecionado = 
    document.querySelector(".box3 .selecionado .nomeDoce").innerText;

    const precoPrato = 
    parseFloat(document.querySelector(".box1 .selecionado .precoPrato").innerText);
    const precoBebida = 
    parseFloat(document.querySelector(".box2 .selecionado .precoBebida").innerText);
    const precoDoce = 
    parseFloat(document.querySelector(".box3 .selecionado .precoDoce").innerText);

    const total=(precoPrato + precoBebida + precoDoce).toFixed(2);


    document.querySelector(".PopUp .nomePreco").innerHTML = `
    <p class="detalhes">${pratoSelecionado}: ${precoPrato.toFixed(2)}</p>
    <p class="detalhes">${bebidaSelecionada}: ${precoBebida.toFixed(2)}</p>
    <p class="detalhes">${doceSelecionado}: ${precoDoce.toFixed(2)}</p>
    <h1 class="TOTAL"> TOTAL: ${total} </h1>
`;
    const popup = document.querySelector(".PopUp");
    popup.classList.remove("none");
}


function fecharPopup(){

    const popup = document.querySelector(".PopUp");
    popup.classList.add("none");
}

function Whatsapp(){

    const pratoSelecionado = document.querySelector(".box1 .selecionado .nomePrato").innerText;
    const bebidaSelecionada = document.querySelector(".box2 .selecionado .nomeBebida").innerText;
    const doceSelecionado = document.querySelector(".box3 .selecionado .nomeDoce").innerText;

    const precoPrato = parseFloat(document.querySelector(".box1 .selecionado .precoPrato").innerText);
    const precoBebida = parseFloat(document.querySelector(".box2 .selecionado .precoBebida").innerText);
    const precoDoce = parseFloat(document.querySelector(".box3 .selecionado .precoDoce").innerText);

    const total = (precoPrato + precoBebida + precoDoce).toFixed(2);

    const mensagem = `Olá, gostaria de fazer o pedido:
- Prato: ${pratoSelecionado}
- Bebida: ${bebidaSelecionada}
- Sobremesa: ${doceSelecionado}
Total: R$ ${total}`;

    const mensagemCodificada = encodeURIComponent(mensagem);

    const numeroWhatsApp = "5511952182378"; 
    const url = `https://wa.me//${numeroWhatsApp}?text=${mensagemCodificada}`;

    window.open(url, '_blank');
}