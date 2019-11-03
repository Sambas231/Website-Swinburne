var firstName = document.querySelector("input[name='first-name']");
var lastName = document.querySelector("input[name='last-name']");
var email = document.querySelector("input[name='Email']");
var phoneNumber = document.querySelector("input[name='Phone-num']");
var product = document.querySelector("select[name='Product']");
var rentalDuration = document.querySelector("input[name='Rental-duration']");
var street = document.querySelector("input[name='street-address']");
var city = document.querySelector("input[name='city']");
var state = document.querySelector("#select");
var postcode = document.querySelector("input[name='postcode']");


function validateForm() {
  var message = "";

  // Validate First Name
  if (!validateName(firstName)) {
    message += "Please enter a valid First Name\n";
  }

  // Validate Last Name
  if (!validateName(lastName)) {
    message += "Please enter a valid Last Name\n";
  }

  // Validate Email
  if (!validateEmail()) {
    message += "Please enter a valid Email Address\n";
  }

  // Validate Phone Number
  if (!validatePhoneNumber()) {
    message += "Please enter a valid Phone Number (In this Format: xxx-xxxxxx)\n";
  }

  // Validate Products
  if (!validate(product)) {
    message += "Please select one of the available products\n";
  }

  // Validate Rental Duration
  if (!validate(rentalDuration)) {
    message += "Please state the Rental Duration\n";
  }

  // Validate Street
  if (!validate(street)) {
    message += "Please state Your Street\n";
  }

  // Validate City
  if (!validate(city)) {
    message += "Please states Your City\n";
  }

  // Validate State
  if (!validate(state)) {
    message += "Please insert Your State\n";
  }

  // Validate Postcode
  if (!validatePostCode()) {
    message += "Please insert Your Postcode";
  }


  alert(message);
}

function validateName(name) {
  var pattern = "^[a-zA-Z]+$";
  if (name.value == "") {
    return false;
  } else if (!name.value.match(pattern)) {
    return false;
  }
  return true;
}

function validateEmail() {
  if (email.value == "") {
    return false;
  } else if (email.value.indexOf("@") < 0) {
    return false;
  }
  return true;
}

function validatePhoneNumber() {
  var pattern = "[0-9]{3}-[0-9]{6}";
  if (phoneNumber.value == "") {
    return false;
  } else if (!phoneNumber.value.match(pattern)) {
    return false;
  }
  return true;
}

function validate(input) {
  if (input.value == "") {
    return false;
  }
  return true;
}

function validatePostCode() {
  var pattern = "[0-9]{5}";

  if (postcode.value == "") {
    return false;
  } else if (!postcode.value.match(pattern)) {
    return false;
  }

  return true;
}
