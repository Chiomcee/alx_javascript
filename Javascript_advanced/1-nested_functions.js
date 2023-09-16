#!/usr/bin/node

// Create a variable named globalVariable
const globalVariable = 'Welcome';

// Create a function named outer
function outer() {
  // Alert the content of the variable globalVariable
  alert(globalVariable);

  // Create a variable named course
  const course = 'Holberton';

  // Create a function named inner
  function inner() {
    // Alert the content of the variable globalVariable and course (concatenated)
    alert(`${globalVariable} ${course}`);

    // Create a variable named exclamation
    const exclamation = '!';

    // Create a function named inception
    function inception() {
      // Alert the content of the variable globalVariable, course, and exclamation (concatenated)
      alert(`${globalVariable} ${course}${exclamation}`);
    }

    // Call the function inception
    inception();
  }

  // Call the function inner
  inner();
}

// Call the function outer
outer();
