let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EURrate = 4.68;
let CHFrate = 4.67;
let GBRrate = 5.30;
let CZKrate = 0.19;
let NOKrate = 0.43;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result = resultElement.value;

    switch (currency) {
        case "EUR":
            result = amount / EURrate;
            break;
        case "CHF":
            result = amount / CHFrate;
            break;
        case "GBR":
            result = amount / GBRrate;
            break;
        case "CZK":
            result = amount / CZKrate;
            break;
        case "NOK":
            result = amount / NOKrate;
            break;
        
    }
    resultElement.innerText = `${result.toFixed(2)} ${currency}`
});

