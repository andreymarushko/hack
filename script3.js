// Функция выхода из профиля
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('registrationDate');
    localStorage.removeItem('completedChallenges');
    alert("Вы вышли из профиля.");
    location.reload(); // Перезагрузка страницы для возврата на страницу авторизации
}
// Установка даты регистрации при первой загрузке
const registrationDate = localStorage.getItem('registrationDate') || new Date().toLocaleDateString();
localStorage.setItem('registrationDate', registrationDate);
document.getElementById('registration-date').innerText = registrationDate;

