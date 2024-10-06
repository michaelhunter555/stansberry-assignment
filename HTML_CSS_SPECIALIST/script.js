//e-mail validation check
const validateEmail = (email) => {
  return /^\S+@\S+\.\S+$/.test(email);
};

/**
 * @name - handleFormSubmit
 * @param {*} event
 * @description - handles form event with e-mail validation and redirect to thankyou.html
 */
const handleFormSubmit = (event) => {
  event.preventDefault();
  //retrieve e-mail input
  let value = event.target.querySelector('input[type="email"]').value;
  //validate e-mail
  const emailIsValid = validateEmail(value);
  //redirect to thank you page if email is valid
  if (emailIsValid) {
    window.location.href = "/HTML_CSS_SPECIALIST/thankyou.html";
    //clear form
    event.target.reset();
  } else {
    //alert user their e-mail is invalid
    alert("Your email is not valid. Please enter a valid email format.");
  }
};
