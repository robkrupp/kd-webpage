
//----------------------------------------
// Form Validator
//----------------------------------------

// Code for validating the form
// Visit http://www.javascript-coder.com/html-form/javascript-form-validation.phtml
// for details
var frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("name","req","Please provide your name"); 
frmvalidator.addValidation("email","req","Please provide your email"); 
frmvalidator.addValidation("email","email","Please enter a valid email address"); 


//----------------------------------------
// Button Disabler
//----------------------------------------
// function DisableButton() {
// 	var submitButton = document.getElementsByClassName("diabled-btn");
//     if (submitButton != null) {
//         submitButton.setAttribute('disabled', 'disabled');
//     }
// }

