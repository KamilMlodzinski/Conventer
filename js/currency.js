{


    const calculateResult = (amount, currency) => {

        const EURrate = 4.68;
        const CHFrate = 4.67;
        const GBRrate = 5.30;
        const CZKrate = 0.19;
        const NOKrate = 0.43;

        switch (currency) {
            case "EUR":
                return amount / EURrate;

            case "CHF":
                return amount / CHFrate;

            case "GBR":
                return amount / GBRrate;

            case "CZK":
                return amount / CZKrate;

            case "NOK":
                return amount / NOKrate;

        }

    };

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`
    }

    const onFormSubmit = (event) => {
        event.preventDefault();


        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        

        const amount = amountElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(amount, currency);

        updateResultText(result, currency);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

};



