function calculateLoan() {
    loanAmontValue = document.getElementById("loan-amount").value

    interestRateValue = document.getElementById("interest-rate").value

    MonsthsTopPayValue = document.getElementById("months-to-pay").value

    interest =(loanAmontValue * (interestRateValue * 0.01)) / MonsthsTopPayValue

    monthlyPayment = (loanAmontValue / MonsthsTopPayValue + interest).toFixed(2);

    document.getElementById(
        "payment"
        ).innerHTML = `Monthly Payment: ${monthlyPayment}`;
}