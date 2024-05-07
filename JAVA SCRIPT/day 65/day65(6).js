document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email === "GOA@gmail.com" && password === "js123") {
      console.log("You have permission.");
    } else {
      console.log("You don't have permission.");
    }
  })