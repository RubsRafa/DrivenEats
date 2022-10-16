let nome1;
let valor1; 

function selecionarPrato (prato) {
    const selecaoPrato = document.querySelector (".pratos .borda");
    if ( selecaoPrato !== null) {
        selecaoPrato.classList.remove ("borda");
    }
    prato.classList.toggle ("borda");
    nome1 = prato.querySelector (".nome").innerHTML;
    valor1 = prato.querySelector (".preco .valor").innerHTML;
    finalizar (); 
}

let nome2;
let valor2;  

function selecionarBebida (bebida) {
    const selecaoBebida = document.querySelector (".bebidas .borda");
    if ( selecaoBebida !== null) {
        selecaoBebida.classList.remove ("borda");
    }
    bebida.classList.toggle ("borda");
    nome2 = bebida.querySelector(".nome").innerHTML;
    valor2 = bebida.querySelector (".preco .valor").innerHTML; 
    finalizar (); 
}

let nome3;
let valor3; 

function selecionarSobremesa (sobremesa) {
    const selecaoSobremesa = document.querySelector (".sobremesas .borda");
    if ( selecaoSobremesa !== null) {
        selecaoSobremesa.classList.remove ("borda");
    }
    sobremesa.classList.toggle ("borda");
    nome3 = sobremesa.querySelector(".nome").innerHTML;
    valor3 = sobremesa.querySelector (".preco .valor").innerHTML;
    finalizar (); 
}


function finalizar () {
    const fecharPedido = document.querySelector (".fechar")
    const concluido = document.querySelector (".botao");
    if (nome1 != undefined) {
        if (nome2 != undefined) {
            if (nome3 != undefined) {
                fecharPedido.classList.remove ("escondido");
                concluido.classList.add ("escondido");
            }
        }
    }
}

let soma; 

function pedir () {
    const botarFundo = document.querySelector (".fundofinalizar");
    botarFundo.classList.remove ("escondido");

    const finalizarPedido = document.querySelector (".finalizar-pedido");
    finalizarPedido.classList.remove ("escondido"); 

    const pratoNome = document.querySelector (".pedido-Prato");
    const bebidaNome = document.querySelector(".pedido-Bebida");
    const sobremesaNome = document.querySelector (".pedido-Sobremesa");
    
    pratoNome.innerHTML = `${nome1}`;
    bebidaNome.innerHTML = `${nome2}`;
    sobremesaNome.innerHTML = `${nome3}`;

    const pratoValor = document.querySelector(".preco-Prato");
    const bebidaValor = document.querySelector(".preco-Bebida");
    const sobremesaValor = document.querySelector(".preco-Sobremesa");

    pratoValor.innerHTML = `${valor1}`;
    bebidaValor.innerHTML = `${valor2}`;
    sobremesaValor.innerHTML = `${valor3}`;
    

    soma = Number(valor1.replace(",", ".")) + Number(valor2.replace(",", ".")) + Number(valor3.replace(",", "."));
    const total = document.querySelector (".totalvalor");
    total.innerHTML = soma.toFixed(2).replace (".", ","); 
    
}


function wpp () {
    const nome = prompt ("Qual é o seu nome?");
    const endereco = prompt ("Qual é o seu endereço?")
    const mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${nome1}
    - Bebida: ${nome2}
    - Sobremesa: ${nome3}
    Total: R$ ${soma.toFixed(2).replace(".", ",")}
    
    Nome: ${nome}
    Endereço: ${endereco}`);

     if (nome !== undefined){
        if (endereco !== undefined){
            window.open (`https://api.whatsapp.com/send/?phone=5531975914096&text=${mensagem}`);
        }
     } 

    
}

function cancelar () {
    const esconder = document.querySelector (".finalizar-pedido")
    esconder.classList.add ("escondido");
    const botarFundo = document.querySelector (".fundofinalizar");
    botarFundo.classList.add ("escondido");
}