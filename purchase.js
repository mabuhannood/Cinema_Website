var orderInfo = JSON.parse(localStorage.getItem("timeObject"));
var movieInfo = localStorage.getItem("movie");
var genAdm = document.querySelector("#genAdmission").value;
var otherAdm = document.querySelector("#otherAdmission").value;
var paySelected = ""
var creditCardNumber = document.querySelector("#cardNumber").value;
var ccvNumber = document.querySelector("#ccvNumber").value;
var totalOrder = document.querySelector("#orderSummary").innerHTML;


genAdmCalculator = (event) => {
    if (checkNumber(event.key) === true) {
        genAdm = document.querySelector("#genAdmission").value;
    }
    else {
        document.querySelector("#genAdmission").value = genAdm
    }
    resultOutput();
}

otherAdmCalculator = (event) => {
    if (checkNumber(event.key) === true) {
        otherAdm = document.querySelector("#otherAdmission").value;
    }
    else {
        document.querySelector("#otherAdmission").value = otherAdm
    }
    resultOutput();
}

checkNumber = (x) => {
    if (x.toLowerCase() == "backspace" || isNaN(x) === false) {
        return true
    }
}

resultOutput = () => {
    var tempgenAdm = checkInside(parseInt(genAdm))
    var genAdmTotal = (checkInside(parseInt(genAdm)) * 5).toFixed(2);
    var tempotherAdm = checkInside(parseInt(otherAdm))
    var otherAdmTotal = (checkInside(parseInt(otherAdm)) * 3).toFixed(2);
    var subTotal = (parseFloat(genAdmTotal) + parseFloat(otherAdmTotal)).toFixed(2)
    var tax = (parseFloat(subTotal * 0.13)).toFixed(2)
    var total = (parseFloat(subTotal) + parseFloat(tax)).toFixed(2)
    totalOrder = `<img class="img-poster" src="assets/poster1-main page.jpg" />
        <p>Showtime Summary</p>
        <p>Movie Title: ${movieInfo}</p>
        <p>Date of the Movie: ${orderInfo["selectedDate"]}</p>
        <p>Time of the Movie: ${orderInfo["selectedTime"]}</p>
        <p>Order Summary</p>
        <p>General Admission ${tempgenAdm} x $5.00: $${genAdmTotal}</p>
        <p>Student and Senior Admission ${tempotherAdm} x $3.00: $${otherAdmTotal}</p>
        <p>Subtotal: $${subTotal}</p>
        <p>Tax: $${tax}</p>
        <p>Total: $${total}</p>
        `
    document.querySelector("#orderSummary").innerHTML = totalOrder
}

checkInside = (x) => {
    if (isNaN(x) === true) {
        return 0;
    }
    else {
        return x;
    }

}

const checkPayType = () => {
    const paySelectedType = document.querySelectorAll('input[name="pay"]');
    for (let x of paySelectedType) {
        if (x.checked) {
            paySelected = x.value
            if (paySelected == "paypal"){
                document.querySelector("#paypalInfo").style.display = "block"
                document.querySelector("#creditInfo").style.display = "none"
            }
            else {
                document.querySelector("#paypalInfo").style.display = "none"
                document.querySelector("#creditInfo").style.display = "block"
            }
            break;
        }
    }

}

const payTicket = () => {
    if (genAdm == "" && otherAdm == "") {
        document.querySelector("#warning").innerText = "You have not bought any tickets"
        return
    }
    if (paySelected == "") {
        document.querySelector("#warning").innerText = "Please select approproriate payment method"
        return
    }
    else {
        if (paySelected == "paypal") {
            const name = document.querySelector("#name").value;
            if (name == "") {
                document.querySelector("#warning").innerText = "Please type in your name"
                return
            }
            const email = document.querySelector("#email").value;
            if (email == "") {
                document.querySelector("#warning").innerText = "Please type in your email"
                return
            }
        }
        else {
            const creditcard = document.querySelector("#cardNumber").value;
            if (creditcard.length != 16) {
                document.querySelector("#warning").innerText = "Your credit card number must have 16 digits"
                return
            }
            const ccv = document.querySelector("#ccvNumber").value;
            if (ccv.length != 3) {
                document.querySelector("#warning").innerText = "Your CCV must have 3 digits"
                return
            }
        }
    }
    document.querySelector("#warning").innerText = ""
    document.querySelector("form").reset();
    window.location.href = "index.html";

}

const cardNumberCheck = (event) => {
    if (checkNumber(event.key) === true) {
        const temp = creditCardNumber;
        creditCardNumber = document.querySelector("#cardNumber").value;
        if (creditCardNumber.length > 16) {
            creditCardNumber = temp;
            document.querySelector("#cardNumber").value = creditCardNumber
        }
    }
    else {
        document.querySelector("#cardNumber").value = creditCardNumber
    }
}

const ccvNumberCheck = (event) => {
    if (checkNumber(event.key) === true) {
        const temp = ccvNumber;
        ccvNumber = document.querySelector("#ccvNumber").value;
        if (ccvNumber.length > 3) {
            ccvNumber = temp;
            document.querySelector("#ccvNumber").value = ccvNumber
        }
    }
    else {
        document.querySelector("#ccvNumber").value = ccvNumber
    }

}

document.querySelector("#genAdmission").addEventListener("keyup", genAdmCalculator)
document.querySelector("#otherAdmission").addEventListener("keyup", otherAdmCalculator)
document.querySelector("#cardNumber").addEventListener("keyup", cardNumberCheck)
document.querySelector("#ccvNumber").addEventListener("keyup", ccvNumberCheck)
document.querySelector("#pay").addEventListener("click", payTicket)
resultOutput()