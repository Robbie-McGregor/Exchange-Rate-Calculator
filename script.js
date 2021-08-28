const currencyEl_one = document.getElementById('currency-one')
const currencyEl_two = document.getElementById('currency-two')
const amountEl_one = document.getElementById('amount-one')
const amountEl_two = document.getElementById('amount-two')
const rate = document.getElementById('rate')
const swap = document.getElementById('swap')
const api = 'bee3ec3a383c842a8643b210'


//Fetch exchange rates and update the DOM
function calculate() {
    const currency_one = currencyEl_one.value
    const currency_two = currencyEl_two.value
    // fetch(`https://v6.exchangerate-api.com/v6/bee3ec3a383c842a8643b210/latest/USD`)
    fetch(`https://v6.exchangerate-api.com/v6/${api}/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const exRate = data.conversion_rates[currency_two]
            rate.innerText = `1 ${currency_one} = ${exRate} ${currency_two}`
            amountEl_two.value = (amountEl_one.value * exRate).toFixed(2)
        })
}


//Event listeners
currencyEl_one.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
swap.addEventListener('click', () => {
    const temp = currencyEl_one.value
    currencyEl_one.value = currencyEl_two.value
    currencyEl_two.value = temp
    calculate()
})


calculate()