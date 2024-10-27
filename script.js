// Данные для проверки логина и пароля
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" },
    { username: "user4", password: "password4" },
    { username: "user5", password: "password5" }
  ];
  
  // Функция проверки логина и пароля
  function checkLogin() {
    const usernameInput = document.getElementById("login-username").value;
    const passwordInput = document.getElementById("login-password").value;
    const errorMessage = document.getElementById("login-error-message");
  
    // Проверка соответствия логина и пароля
    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);
  
    if (user) {
      errorMessage.textContent = "Login successful!";
      errorMessage.style.color = "green";
      window.location.href = "index2.html"; // Перенаправление на страницу 2
    } else {
      errorMessage.textContent = "Invalid username or password.";
    }
  }
  
  // Функция для регистрации нового пользователя
  function registerUser() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const errorMessage = document.getElementById("register-error-message");
  
    if (username && password) {
      users.push({ username, password });
      errorMessage.textContent = "Registration successful!";
      errorMessage.style.color = "green";
    } else {
      errorMessage.textContent = "Please enter a username and password.";
    }
  }
  
  // Функция для переключения вкладок
  function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Открытие вкладки входа по умолчанию
  document.getElementById("defaultTab").click();
  