// Retrieve the form and password field elements
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const errorElement = document.getElementById("error");

// Attach an event listener to the form submission
passwordForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve the entered password value
  const passwordValue = passwordInput.value;

  // Validate the password strength
  if (!validatePassword(passwordValue)) {
    // Password does not meet the criteria, display error message
    errorElement.textContent = "Invalid password. Please ensure it meets the criteria.";
  } else {
    // Password meets the criteria, allow form submission
    passwordForm.submit();
  }
});

// Function to validate the password strength
function validatePassword(password) {
  // Regular expressions for password criteria
  const lengthRegex = /.{8,}/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numericRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*]/;

  // Check if the password meets all criteria
  if (
    lengthRegex.test(password) &&
    uppercaseRegex.test(password) &&
    lowercaseRegex.test(password) &&
    numericRegex.test(password) &&
    specialCharRegex.test(password)
  ) {
    return true; // Password meets the criteria
  } else {
    return false; // Password does not meet the criteria
  }
}