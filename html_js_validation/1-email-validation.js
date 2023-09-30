// Retrieve the form and email field elements
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const errorElement = document.getElementById("error");

// Attach an event listener to the form submission
emailForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve the entered email value
  const emailValue = emailInput.value;

  // Validate the email format
  if (!validateEmail(emailValue)) {
    // Email format is incorrect, display error message
    errorElement.textContent = "Please enter a valid email address.";
  } else {
    // Email format is correct, allow form submission
    emailForm.submit();
  }

  // Function to validate the email format
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});