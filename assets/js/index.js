const signin = document.getElementById('sign-in');
const signup = document.getElementById('sign-up'); 
const forgot = document.getElementById('forgot_pass');
const signin1 = document.getElementById('sign-in-forgot');

const form1 = document.getElementById('sign-up_form');
const form2 = document.getElementById('sign-in_form');
const form3 = document.getElementById('forgot-pass_form');

signin.addEventListener("click", () => {
    form2.style.display = "flex";
    form1.style.display = "none";
});
signup.addEventListener("click", () => {
    form1.style.display = "flex";
    form2.style.display = "none";
});
forgot.addEventListener("click", () => {
    form3.style.display = "flex";
    form2.style.display = "none";
});
signin1.addEventListener("click", () => {
    form2.style.display = "flex";
    form3.style.display = "none";
});