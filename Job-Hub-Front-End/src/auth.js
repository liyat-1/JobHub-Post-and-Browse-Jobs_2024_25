import Request from "./defaultFetch.mjs";

const request = new Request();

// Attach event listener to register form if it exists
if (document.querySelector("#registerForm")) {
  document.querySelector("#registerForm").addEventListener("submit", register);
}
// Attach event listener to login form if it exists
if (document.querySelector("#loginForm")) {
  document.querySelector("#loginForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission
    login();
  });
}

// Function to handle registration form submission
async function register(e) {
  e.preventDefault();

  const username = document.registerForm.username.value.trim();
  const email = document.registerForm.email.value.trim();
  const password = document.registerForm.password.value.trim();
  const confirmPassword = document.registerForm.confirmPassword.value.trim();

  // FORM INPUT VALIDATION
  if (!(username && email && password && confirmPassword)) {
    alert("All inputs must be filled");
  }

  if (username.indexOf(" ") != -1) {
    alert("username must be one word(no space)");
    document.registerForm.username.focus();
    return false;
  }
  if (password.length < 5) {
    alert("password must be longer than 4 letters");
    document.registerForm.password.focus();
    return false;
  }
  if (password !== confirmPassword) {
    alert("password and confirm password should match");
    document.registerForm.confirmPassword.focus();
    return false;
  }

  const response = await request.Post("users/", {
    username: username,
    password: password,
    email: email,
  });
  if (!response.ok) {
    const data = await response.json();
    alert(data.message); // Show the error message from the backend
  } else {
    const data = await response.json();
    console.log(data); // Log success data
    // After successful registration, log in the user
  }
  //LOG IN REGISTERED USER
  login(username, password);
}

// Function to handle login form submission
async function login(name = null, pass = null) {
  const username = name ?? document.loginForm.username.value.trim();
  const password = pass ?? document.loginForm.password.value.trim();

  const response = await request.Post("login", {
    username: username,
    password: password,
  });
  if (!response.ok) {
    const data = await response.json();
    alert(data.message + ": Invalid username/password");
    console.log(data);
    location.reload(); // Reload page if login fails
  } else {
    const { access_token } = await response.json();
    sessionStorage.setItem("jwt", access_token);
    sessionStorage.setItem("currentUser", username);
    console.log("object");
    // Redirect to the home page or the previous page
    location.href = document.referrer == "" ? "home.html" : document.referrer;
  }
}
