document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

 
    const userId = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    const users = JSON.parse(localStorage.getItem("users")) || [];

   
    const loggedInUser = users.find(user => user.userId === userId && user.password === password);

    if (loggedInUser) {
     
      localStorage.setItem("loggedIn", JSON.stringify(loggedInUser));  
      window.location.href = "index.html"; 
    } else {
      
      loginMessage.textContent = "Incorrect User ID or password.";
      loginMessage.style.color = "red";
    }
  });
});

  