const signin = document.getElementById('sign-in');
const signup = document.getElementById('sign-up'); 
const forgot = document.getElementById('forgot_pass');
const signin1 = document.getElementById('sign-in-forgot');

const form1 = document.getElementById('sign-up_form');
const form2 = document.getElementById('sign-in_form');
const form3 = document.getElementById('forgot-pass_form');

signin.addEventListener("click", () => {
    form2.style.animation = 'move 0.6s ease-in-out';
    form2.style.display = "flex";
    form1.style.display = "none";
});
signup.addEventListener("click", () => {
    form1.style.animation = 'move 0.6s ease-in-out';
    form1.style.display = "flex";
    form2.style.display = "none";
});
forgot.addEventListener("click", () => {
    form3.style.animation = 'move 0.6s ease-in-out';
    form3.style.display = "flex";
    form2.style.display = "none";
});
signin1.addEventListener("click", () => {
    form2.style.animation = 'move 0.6s ease-in-out';
    form2.style.display = "flex";
    form3.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("sign-up_form");
    const inputs = form.querySelectorAll("input, textarea, select");
    const submitButton = document.getElementById("sign-up_btn");

    function checkInputs() {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });
        submitButton.disabled = !allFilled;
        submitButton.style.color = allFilled ? '#3983d6' : '#3e3e3e';
        submitButton.style.background = allFilled ? '#ffffff' : '#c2c2c2';
        submitButton.style.boxShadow = allFilled ? "0 0 15px #3983d6" : "";
    }

    inputs.forEach(input => {
        input.addEventListener("input", checkInputs);
    });

    checkInputs();
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("sign-in_form");
    const inputs = form.querySelectorAll("input, textarea, select");
    const submitButton = document.getElementById("sign-in_btn");

    function checkInputs() {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });
        submitButton.disabled = !allFilled;
        submitButton.style.color = allFilled ? '#13ca91' : '#3e3e3e';
        submitButton.style.background = allFilled ? '#ffffff' : '#c2c2c2';
        submitButton.style.border = allFilled ? '1px solid #000' : '1px solid #000';
        submitButton.style.boxShadow = allFilled ? "0 0 15px #13ca91" : "";
    }

    inputs.forEach(input => {
        input.addEventListener("input", checkInputs);
    });

    checkInputs();
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("forgot-pass_form");
    const inputs = form.querySelectorAll("input, textarea, select");
    const submitButton = document.getElementById("forgot_btn");

    function checkInputs() {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });
        submitButton.disabled = !allFilled;
        submitButton.style.color = allFilled ? '#13ca91' : '#3e3e3e';
        submitButton.style.background = allFilled ? '#ffffff' : '#c2c2c2';
        submitButton.style.boxShadow = allFilled ? "0 0 15px #13ca91" : "";
    }

    inputs.forEach(input => {
        input.addEventListener("input", checkInputs);
    });

    checkInputs();
});