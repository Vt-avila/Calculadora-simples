let numeroAtual = ""
let numeroAnterior = ""
let resultado = ""
let operador = ""
let calculo = ""

function adicionarNumero(valor) {
    numeroAtual += valor;
    atualizarDisplay(numeroAtual);
}

function adicionarOperador(op) {
    if (numeroAtual === "") return; // impedir adicionar operador sem número
    if (numeroAnterior !== "") {
        calcular();
    }
    calculo = numeroAtual + op;
    operador = op;
    numeroAnterior = numeroAtual;
    numeroAtual = "";
    atualizarDisplay(operador)
}

function calcular() {
    const numero1 = parseFloat(numeroAnterior);
    const numero2 = parseFloat(numeroAtual);

    if (isNaN(numero1) || isNaN(numero2)) return;


    switch (operador) {
        case "/":
            if (numero2 === 0) return;
            resultado = numero1 / numero2;
            break;
        case "X":
            resultado = numero1 * numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "+":
            resultado = numero1 + numero2;
            break;
        case "%":
            resultado = numero1 / 100 * numero2;
            break;
        default:
            return;
    };
    calculo = numeroAnterior + operador + numeroAtual + "=";
    atualizarCalculo(calculo);
    atualizarDisplay(resultado);
    numeroAtual = resultado.toString();
    numeroAnterior = "";
    operador = "";

}

function clean() {
    numeroAtual = "";
    numeroAnterior = "";
    calculo = "";
    resultado = "";
    atualizarDisplay("");
    atualizarCalculo("");
}


function atualizarCalculo(calculo){
    document.getElementById("calculo").value = calculo;
}

function atualizarDisplay(valor) {
    document.getElementById("display").value = valor;
}
