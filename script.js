function selecionarPrato (prato) {
    const selecaoPrato = document.querySelector (".pratos .borda");
    if ( selecaoPrato !== null) {
        selecaoPrato.classList.remove ("borda");
    }
    prato.classList.toggle ("borda");
}

function selecionarBebida (bebida) {
    const selecaoBebida = document.querySelector (".bebidas .borda");
    if ( selecaoBebida !== null) {
        selecaoBebida.classList.remove ("borda");
    }
    bebida.classList.toggle ("borda");
}

function selecionarSobremesa (sobremesa) {
    const selecaoSobremesa = document.querySelector (".sobremesas .borda");
    if ( selecaoSobremesa !== null) {
        selecaoSobremesa.classList.remove ("borda");
    }
    sobremesa.classList.toggle ("borda");
}


function finalizar () {
    const pedido = document.querySelector (".botao");
    pedido.classList.add ("botaofinal");
    pedido.classList.remove ("botao"); 


    const text = document.querySelector (".texto");
    text.classList.add ("texto2");
    text.classList.remove ("texto")
    text.innerHTML = "Fechar pedido";
}