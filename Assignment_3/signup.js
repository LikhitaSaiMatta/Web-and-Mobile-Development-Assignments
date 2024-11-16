
document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const username = document.getElementById("userid").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const accountType = document.getElementById("accountType").value;

        if (password !== confirmPassword) {
            document.getElementById("signupMessage").textContent = "Passwords do not match";
            return;
        }

        const response = await fetch("http://localhost:3000/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password, accountType }),
        });

        if (response.ok) {
            document.getElementById("signupMessage").textContent = "Signup successful!";
            signupForm.reset();
        } else {
            const error = await response.json();
            document.getElementById("signupMessage").textContent = error.message || "Signup failed";
        }
    });
});
