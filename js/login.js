// Form Validation and Redirect

function checkStuff() {
    var username = document.form1.username;
    var password = document.form1.password;
    var msg = document.getElementById('msg');
  
    if (username.value == "") {
      msg.style.display = 'block';
      msg.innerHTML = "Please enter your username";
      username.focus();
      return false;
    } else {
      msg.innerHTML = "";
    }
  
    if (password.value == "") {
      msg.innerHTML = "Please enter your password";
      password.focus();
      return false;
    } else {
      msg.innerHTML = "Invalid username or password";
    }
  
    // Check if username and password match specific values
    if (username.value === "Alghaniyu" && password.value === "31052007") {
      // Redirect to a specific URL
      window.location.href = "https://alghaniyuquran.github.io/AlghaniyuQuran/Murajaah.html";
      return false; // prevent the form from submitting (optional)
    } else {
      // Display an error message if login fails
      msg.innerHTML = "Invalid username or password";
      return false;
    }
  }
  
  // Toggle Password Visibility
  var pwd = document.getElementById('pwd');
  var eye = document.getElementById('eye');
  
  eye.addEventListener('click', togglePass);
  
  function togglePass() {
    eye.classList.toggle('active');
    (pwd.type == 'password') ? pwd.type = 'text' : pwd.type = 'password';
  }
  