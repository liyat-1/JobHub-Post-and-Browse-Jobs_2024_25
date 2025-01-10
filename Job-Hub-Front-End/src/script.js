// Check if a JWT token exists in sessionStorage (i.e., user is logged in)
if (sessionStorage.getItem("jwt")) {
  // Select the login link and change the text to "Log out"
  loginAnchor = document.querySelector("#login-link").childNodes[0];
  loginAnchor.text = "Log out";

  // Add an event listener to the login/logout anchor tag
  loginAnchor.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default link action
    logOut(); // Call the logOut function when clicked
  });
}

// Function to validate the feedback form input
function validateFeedback() {
  // Check if the name field is empty
  if (document.feedbackForm.name.value == "") {
    alert("Name must be filled out"); // Alert the user if name is missing
    document.feedbackForm.name.focus(); // Focus on the name field
    return false; // Return false to prevent form submission
  }

  // Check if the feedback field is empty
  if (document.forms.feedbackForm.fback.value == "") {
    alert("Please provide some feedback"); // Alert the user if feedback is missing
    document.feedbackForm.fback.focus(); // Focus on the feedback field
    return false; // Return false to prevent form submission
  }

  return true; // Return true if all validations pass
}

// Function to log out the user
function logOut() {
  // Remove JWT and currentUser data from sessionStorage
  sessionStorage.removeItem("jwt");
  sessionStorage.removeItem("currentUser");

  // Redirect the user to the home page
  location.href = "home.html";
}
