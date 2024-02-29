/*class that encapsulates funcionality related to form submission and handling success/error messages*/
/*the object is 'settings'*/ 
/*constuctor inicializes the 'settings', 'form' and 'formButton' properties and extracts the form's action URL if the form element exists*/ 
class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
    }
 
    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }
 /*
 The 'init()' method initializes the form submission handling; adds an event listener to the form button (specified in the settings) to trigger the 'displaySucess()' method when clicked
 */
    init() {
        if (this.form) this.formButton.addEventListener("click", () => this.displaySuccess());
    }
}
/* 'formsubmit' class is created with specific settings, including the form selector ('data-form'), button selector ('data-button'), success message and error message*/ 
/* the 'init()' method is called on the instance to set up form submission handling*/
const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Message sent!</h1>",
    error: "<h1 class='error'>It was not possible to send your message.</h1>",
});
formSubmit.init();

/* adds event listeners to all radio buttons with the name "gender", when the value of a radio button changes, it checks if the value is "other" and if it's checked. If so, it displays an input field with the ID "otherText"; otherwise, it hides it.*/
document.querySelectorAll('input[name="gender"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        if (this.value === 'other' && this.checked) {
            document.getElementById('otherText').style.display = 'inline';
        } else {
            document.getElementById('otherText').style.display = 'none';
        }
    });
});



