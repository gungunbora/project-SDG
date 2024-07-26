document.addEventListener("DOMContentLoaded", function() {
    const startupOption = document.getElementById("startup-option");
    const investorOption = document.getElementById("investor-option");
    const startupForm = document.getElementById("startup-form");
    const investorForm = document.getElementById("investor-form");
    const signUpBox = document.getElementById("sign-up-box");

    startupOption.addEventListener("click", function() {
        startupForm.classList.remove("hidden");
        investorForm.classList.add("hidden");
        signUpBox.classList.add("hidden");
    });

    investorOption.addEventListener("click", function() {
        investorForm.classList.remove("hidden");
        startupForm.classList.add("hidden");
        signUpBox.classList.add("hidden");
    });
});