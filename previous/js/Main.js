const calc = new Calculator(previousOperationText, currentOperationText)

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // para cada botao, no evento "click" sera executado isto
        // recebento parametro "e" como o evento
        const value = e.target.innerText
        // value recebe o texto dentro da tag
        // do objeto botao clicado

        if ( +value >= 0 || value === "." ) {
            // o operador "+" transforma value no tipo number
            // o if else separa valores para numeros e as operacoes
            calc.addDigit(value)
        } else {
            calc.processOperation(value)
        }
    })
})