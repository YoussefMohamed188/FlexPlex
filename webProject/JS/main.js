document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById("login-btn");
    const signUpButton = document.getElementById("signUp-btn");

    //login button
    loginButton.addEventListener('click',function(){
        window.location.href = "LoginPage.html";
    });

    //signUpButton
    signUpButton.addEventListener('click', function(){
        window.location.href = "signUp.html";
    });


});


// const toggleBtn = document.getElementById("modeToggle");
// let mode = 'dark';

// window.addEventListener("load", () => {
//     // Remove any light mode class
//     document.body.classList.remove("light-mode");
//     // Set dark mode in localStorage
//     localStorage.setItem("mode", "dark");
// });

// Remove or comment out the toggle button event listener to prevent switching
// toggleBtn.addEventListener("click", () => {
//   document.body.classList.toggle("light-mode");
//   if (document.body.classList.contains("light-mode")) {
//       localStorage.setItem("mode", "light");
//   } else {
//       localStorage.setItem("mode", "dark");
//   }
// });
const movieInput = document.getElementById("movieSearch");

movieInput.addEventListener("change", () => {
  const value = movieInput.value.toLowerCase();

  const links = {
    "bad boys": "./Bad_Boys.html",
    "i am legend": "./i_am_legend.html",
    "bloodshot": "./Blood_Shot.html",
    "interceptor": "./Interceptor.html",
  };

  if (links[value]) {
    window.location.href = links[value];
    movieInput.value = "";
  } else {
    alert("Movie not found");
    movieInput.value = "";
  }
});

// Also clear on escape key press
movieInput.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    movieInput.value = "";
  }
});

// Clear when clicking the search bar again
movieInput.addEventListener("focus", () => {
  movieInput.value = "";
});