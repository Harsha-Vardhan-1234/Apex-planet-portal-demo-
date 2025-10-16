// Show/Hide Password
function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// Login Validation
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Login successful (frontend demo only)");
});

// Registration Validation
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!username || !email || !password || !confirmPassword) {
    alert("All fields are required!");
    return;
  }

  if (!email.includes("@")) {
    alert("Enter a valid email address.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  alert("Registration successful (frontend demo only)");
  window.location.href = "login.html";
});
