if (sessionStorage.getItem("jwt")) {
  loginAnchor = document.querySelector("#login-link").childNodes[0];
  loginAnchor.text = "Log out";
  loginAnchor.addEventListener("click", (e) => {
    e.preventDefault();
    logOut();
  });
}

function validateFeedback() {
  if (document.feedbackForm.name.value == "") {
    alert("Name must be filled out");
    document.feedbackForm.name.focus();
    return false;
  }
  if (document.forms.feedbackForm.fback.value == "") {
    alert("Please provide some feedback");
    document.feedbackForm.fback.focus();
    return false;
  }
  return true;
}

function logOut() {
  sessionStorage.removeItem("jwt");
  sessionStorage.removeItem("currentUser");
  location.href = "home.html";
}
