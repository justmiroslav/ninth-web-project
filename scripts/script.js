const textInput = document.getElementById("textInput");
const numericInput = document.getElementById("numericInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const rangeInput = document.getElementById("rangeInput");
const datePicker = document.getElementById("datePicker");
const radioInputs = document.querySelectorAll('input[name="reuse"]');
const errorText = document.getElementById("error-textInput");
const errorNumeric = document.getElementById("error-numericInput");
const errorEmail = document.getElementById("error-emailInput");
const errorPassword = document.getElementById("error-passwordInput");
const errorConfirmPassword = document.getElementById("error-confirmPasswordInput");
const errorRangeInput = document.getElementById("error-rangeInput");
const errorDatePicker = document.getElementById("error-datePicker");
const errorRadio = document.getElementById("error-radio");
const uppercaseReq = document.getElementById("uppercaseReq");
const lowercaseReq = document.getElementById("lowercaseReq");
const numberReq = document.getElementById("numberReq");
const specialCharReq = document.getElementById("specialCharReq");
const lengthReq = document.getElementById("lengthReq");
const passwordStatus = document.getElementById("passwordStatus");
const submitButton = document.getElementById("submit");
const resultsDiv = document.getElementById("results");

const passwordStrength = {
    1: { text: "Trash", color: "red" },
    2: { text: "Weak", color: "orange" },
    3: { text: "Moderate", color: "yellow" },
    4: { text: "Strong", color: "lime" },
    5: { text: "Amazing", color: "green" },
};

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;

    let requirementsSatisfied = 0;

    if (/(?=.*\d)/.test(password)) {
        requirementsSatisfied++;
        numberReq.style.color = "green";
    } else {
        numberReq.style.color = "initial";
    }

    if (/(?=.*[\p{S}\p{P}])/u.test(password)) {
        requirementsSatisfied++;
        specialCharReq.style.color = "green";
    } else {
        specialCharReq.style.color = "initial";
    }

    if (password.length >= 8) {
        requirementsSatisfied++;
        lengthReq.style.color = "green";
    } else {
        lengthReq.style.color = "initial";
    }

    const hasUppercase = [...password].some((char) => /\p{Lu}/u.test(char));
    if (hasUppercase) {
        requirementsSatisfied++;
        uppercaseReq.style.color = "green";
    } else {
        uppercaseReq.style.color = "initial";
    }

    const hasLowercase = [...password].some((char) => /\p{Ll}/u.test(char));
    if (hasLowercase) {
        requirementsSatisfied++;
        lowercaseReq.style.color = "green";
    } else {
        lowercaseReq.style.color = "initial";
    }

    const strengthInfo = passwordStrength[requirementsSatisfied];

    if (requirementsSatisfied === 0) {
        passwordStatus.innerHTML = "";
    } else {
        passwordStatus.innerHTML = `Password Status: <span style="color:${strengthInfo.color};">${strengthInfo.text}</span>`;
    }
});

submitButton.addEventListener("click", () => {
    let hasError = false;

    if (textInput.value.trim() === "") {
        errorText.textContent = "This field is required";
        hasError = true;
    } else {
        errorText.textContent = "";
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
        errorEmail.textContent = "Enter a valid email address";
        hasError = true;
    } else {
        errorEmail.textContent = "";
    }

    if (numericInput.value.trim() === "") {
        errorNumeric.textContent = "This field is required";
        hasError = true;
    } else {
        errorNumeric.textContent = "";
    }

    if (datePicker.value.trim() === "") {
        errorDatePicker.textContent = "This field is required";
        hasError = true;
    } else {
        errorDatePicker.textContent = "";
    }

    let radioSelected = false;

    for (let i = 0; i < radioInputs.length; i++) {
        if (radioInputs[i].checked) {
            radioSelected = true;
            break;
        }
    }

    if (!radioSelected) {
        errorRadio.textContent = "This field is required";
        hasError = true; 
    } else {
        errorRadio.textContent = "";
    }

    if (passwordInput.value.trim() === "") {
        errorPassword.textContent = "This field is required";
        hasError = true;
    } else {
        errorPassword.textContent = "";
    }

    if (confirmPasswordInput.value !== passwordInput.value) {
        errorConfirmPassword.textContent = "Passwords do not match";
        hasError = true;
    } else {
        errorConfirmPassword.textContent = "";
    }

    if (hasError) {
        return;
    }

    resultsDiv.innerHTML = `
        <p>Name: ${textInput.value}</p>
        <p>Email: ${emailInput.value}</p>
        <p>Number of online accounts: ${numericInput.value}</p>
        <p>Security concern (1-10): ${rangeInput.value}</p>
        <p>Last password update: ${datePicker.value}</p>
        <p>Password reuse: ${document.querySelector('input[name="reuse"]:checked').value}</p>
        <p>Password: *****; ${passwordStatus.textContent}</p>
    `;

    textInput.value = "";
    emailInput.value = "";
    numericInput.value = "";
    rangeInput.value = "";
    datePicker.value = "";
    radioInputs.forEach((radioInput) => {
        radioInput.checked = false;
    });
    passwordInput.value = "";
    confirmPasswordInput.value = "";
    passwordStatus.textContent = "";
    uppercaseReq.style.color = "initial";
    lowercaseReq.style.color = "initial";
    numberReq.style.color = "initial";
    specialCharReq.style.color = "initial";
    lengthReq.style.color = "initial";
});