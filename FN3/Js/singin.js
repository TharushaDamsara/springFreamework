document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }
  //
  // fetch("http://localhost:8080/EMS_Web_exploded/signin", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     email: email,
  //     password: password,
  //   }),
  // })
  //   .then(async (res) => {
  //     const data = await res.json();
  //
  //     if (res.ok) {
  //       console.log("Login Success:", data);
  //       alert("Login successful for " + email);
  //
  //       // Save email and message in session storage
  //       sessionStorage.setItem("loggedUserEmail", email);
  //       sessionStorage.setItem("loginMessage", data.message);
  //
  //       // Redirect to dashboard or another page
  //       window.location.href = "dashboard.html";
  //     } else {
  //       alert("Login failed: " + (data.message || "Unknown error"));
  //       console.error("Login failed:", data);
  //     }
  //   })
  //   .catch((err) => {
  //     console.error("Network or server error:", err);
  //     alert("An error occurred while trying to login. Please try again.");
  //   });
});
