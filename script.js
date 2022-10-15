let escolha1;
function selecionarPrato (prato) {
    const selecaoPrato = document.querySelector (".pratos .borda");
    if ( selecaoPrato !== null) {
        selecaoPrato.classList.remove ("borda");
    }
    prato.classList.toggle ("borda");
    escolha1 = prato.innerHTML;
    finalizar (); 
}
let escolha2; 
function selecionarBebida (bebida) {
    const selecaoBebida = document.querySelector (".bebidas .borda");
    if ( selecaoBebida !== null) {
        selecaoBebida.classList.remove ("borda");
    }
    bebida.classList.toggle ("borda");
    escolha2 = bebida.innerHTML; 
    finalizar (); 
}
let escolha3;
function selecionarSobremesa (sobremesa) {
    const selecaoSobremesa = document.querySelector (".sobremesas .borda");
    if ( selecaoSobremesa !== null) {
        selecaoSobremesa.classList.remove ("borda");
    }
    sobremesa.classList.toggle ("borda");
    escolha3 = sobremesa.innerHTML; 
    finalizar (); 
}


function finalizar () {
    const fecharPedido = document.querySelector (".fechar")
    const concluido = document.querySelector (".botao");
    if (escolha1 != undefined) {
        if (escolha2 != undefined) {
            if (escolha3 != undefined) {
                fecharPedido.classList.remove ("escondido");
                concluido.classList.add ("escondido");
            }
        }
    }
}
function pedir () {
    const finalizarPedido = document.querySelector (".finalizar-pedido");
    finalizarPedido.classList.remove ("escondido"); 

    escolha1.innerHTML = `${escolha1 (".nome")} + ${escolha1(".valor")}`
    escolha2.innerHTML = "boa tade"; 
    escolha3.innerHTML = "tudo bom"; 
}