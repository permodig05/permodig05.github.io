function login() {
    // Retrieve the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if the username and password are correct
    if (username == "admin" && password == "password123") {
      window.location.href = "admin.html";
    } else {
      alert("Incorrect username or password");
    }
  }