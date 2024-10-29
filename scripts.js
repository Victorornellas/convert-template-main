//cotalçao de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amout para receber somente numeros   
amount.addEventListener("input", () => {
const hasCharacterRegex = /\D+/g
amount.value = amount.value.replace(hasCharacterRegex, "")
})

// Capturando o evento de submit (enviar) do formulario
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
            
    }

}   

//Função para converter a moeda
function convertCurrency(amount, price, symbol){
    try {
        // Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${price}`
        
        //Calcula o total
        let total = amount * price

        if (isNaN(total)) {
            return alert ("Por favor, digite o valor correto")
        }

        // Formatar o valor total
        total = formatCurrencyBRL(total).replace("R$", "")

        // Exibe o resultado total
        result.textContent = `${total} Reais`

        // Aplica a classe que exibe o footer 
     footer.classList.add("show-result")
    } catch  {
        // Remove a classe do footer removendo da tela
        footer.classList.remove("show-result")

        
        console.log(error)
        alert("não foi possível converter. Tente novamente.")
    }
}

// Formata a moeda em Real brasileiro
function formatCurrencyBRL(value){
    // Converte para numero para utilizar o tolocalstring para formatar no padrao BRL
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        
        currency: "BRL"
    })
}