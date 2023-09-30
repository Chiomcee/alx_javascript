// Retrieve the form, dropdown menu, and input container elements
const dynamicForm = document.getElementById("dynamicForm");
const numFieldsSelect = document.getElementById("numFields");
const inputContainer = document.getElementById("inputContainer");

// Attach an event listener to the numFieldsSelect to detect changes
numFieldsSelect.addEventListener("change", generateInputFields);

// Function to generate the specified number of text input fields dynamically
function generateInputFields() {
  // Clear the inputContainer
  inputContainer.innerHTML = "";

  // Retrieve the selected value from the dropdown menu
  const numFields = parseInt(numFieldsSelect.value);

  // Create and append the desired number of text input fields
  for (let i = 1; i <= numFields; i++) {
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = "field" + i;
    inputContainer.appendChild(inputField);
  }
}

// Attach an event listener to the form submission
dynamicForm.addEventListener("submit", validateForm);

// Function to validate the form before submission
function validateForm(event) {
  // Retrieve the values entered in the dynamically generated text input fields
  const inputFields = inputContainer.getElementsByTagName("input");

  // Check if any of the fields are empty
  for (let i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value.trim() === "") {
      event.preventDefault(); // Prevent form submission
      alert("Please fill in all fields");
      return;
    }
  }

  // All fields are filled, allow form submission
}

// Initial generation of input fields based on the selected value
generateInputFields();