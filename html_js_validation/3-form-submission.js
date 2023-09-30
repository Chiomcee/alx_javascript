// Retrieve the form element
const submitForm = document.getElementById("submitForm");

// Attach an event listener to the form submission
submitForm.addEventListener("submit", handleFormSubmit);

// Function to handle the form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve the values entered in the form fields
  const nameValue = document.getElementById("name").value;
  const emailValue = document.getElementById("email").value;
  // Add more form field retrieval as needed

  // Perform JavaScript validation
  if (!nameValue || !emailValue) {
    // Required fields are empty, display error message
    displayErrorMessage("Please fill in all required fields");
  } else {
    // All validations pass, display success message
    displaySuccessMessage("Form submitted successfully!");
    // You can submit the form here if needed
  }
}

// Function to display an error message
function displayErrorMessage(message) {
  // Create or update an error element in the DOM
  let errorElement = document.getElementById("error");
  
  if (!errorElement) {
    errorElement = document.createElement("p");
    errorElement.id = "error";
    errorElement.style.color = "red";
    submitForm.appendChild(errorElement);
  }

  // Display the error message
  errorElement.textContent = message;
}

// Function to display a success message
function displaySuccessMessage(message) {
  // Create or update a success element in the DOM
  let successElement = document.getElementById("success");

  if (!successElement) {
    successElement = document.createElement("p");
    successElement.id = "success";
    successElement.style.color = "green";
    submitForm.appendChild(successElement);
  }

  // Display the success message
  successElement.textContent = message;
}