document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const signupMessage = document.getElementById("signupMessage");

  signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const userId = document.getElementById("userid").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const accountType = document.getElementById("accountType").value;

      // Check if passwords match
      if (password !== confirmPassword) {
          signupMessage.textContent = "Passwords do not match.";
          signupMessage.style.color = "red";
          return;
      }

      // All fields are required by default due to the 'required' attribute in HTML

      const newUser = {
          userId: userId,
          password: password,
          accountType: accountType,
      };

      let users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some(user => user.userId === userId);

      if (userExists) {
          signupMessage.textContent = "User ID already exists. Please choose another.";
          signupMessage.style.color = "red";
          return;
      }

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      signupForm.reset();
      signupMessage.textContent = "Account created successfully! You can now log in.";
      signupMessage.style.color = "green";
  });
});