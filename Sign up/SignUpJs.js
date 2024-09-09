function verifyForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var age = document.getElementById("age").value.trim();
  
    if (!name || !email || !age) {
      document.getElementById("error-msg").style.display = "block";
      return false;
    }
    alert(
      "Dear " + name + 
      ",\nThank you for signing up! The recommended results\n will be shown in a while!"
    );
    return true;
  }
  