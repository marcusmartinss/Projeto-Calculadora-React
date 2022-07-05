const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText,
        this.currentOperationText = currentOperationText
        // valores que sao impressos na tela
        this.currentOperation = ""
        // valores que estao sendo digitados no momento
    }

    // adiciona os digitos na tela da calculadora
    addDigit(digit) {
        // checagem se a operacao ja tem um ponto
        if ( digit === "." && this.currentOperationText.innerText.includes(".") ) {
            return;
        }

        this.currentOperation = digit
        this.updateScreen()
    }

    // processa todas operacoes da calculadora
    processOperation(operation) {

        // checagem se operacao atual esta vazia
        if (this.currentOperationText.innerText === "" && operation !== "C") {
            if (this.previousOperationText.innerText !== "") {
                // muda a operacao
                this.changeOperation(operation)
            }
            return
            // so vai mudar a operacao quando ja existir uma
            // operacao anterior nao nula
        }

        // atibuindo valor atual e anterior
        let operationValue
        const previous = +this.previousOperationText.innerText.split(" ")[0]
        // split separa o valor e a operacao por um espaco
        // o array na posicao 0 retorna o primeiro elemento
        // que e o operationValue
        const current = +this.currentOperationText.innerText

        switch ( operation ) {
            case "+":
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "-":
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "*":
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "/":
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "DEL":
                this.processDelOperation()
                break;
            case "CE":
                this.processClearCurrentOperation()
                break;
            case "C":
                this.processClearAllOperation()
                break;
            case "=":
                this.processEqualOperator()
            default:
                break;
        }
    }

    // muda a operacao matermatica
    changeOperation(operation) {
        const mathOperations = ["+", "-", "*", "/"]

        if (!mathOperations.includes(operation)) {
            return
        }

        if (this.currentOperationText.innerText) {
            
        }

        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation
        // remove o ultimo caracter do innerText,
        // que seria da operação, e adicionaria a nova
    }

    // muda os valores da tela da calculadora
    updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
    ) {

        if (operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation
        } else {
            // checagem se o valor e zero
            // se for, so e adicionado o valor atual
            if (previous === 0) {
                operationValue = current
            }

            // adiciona valor atual ao anterior
            this.previousOperationText.innerText = `${operationValue} ${operation}` 
            this.currentOperationText.innerText = ""
        }
    }

    // limpa a operacao atual
    processClearCurrentOperation() {
        this.currentOperationText.innerText = ""
    }

    // limpa todas operacoes
    processClearAllOperation() {
        this.currentOperationText.innerText = ""
        this.previousOperationText.innerText = ""
    }

    // deleta o ultimo digito
    processDelOperation() {
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1)
    }

    // processa a operacao de igual
    processEqualOperator() {
        const operation = previousOperationText.innerText.split(" ")[1]
        this.processOperation(operation)
    }
}
