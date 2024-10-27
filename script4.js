document.querySelectorAll('#calendar div').forEach(day => {
    day.addEventListener('click', function() {
      const selectedDate = this.getAttribute('data-date');
      document.querySelectorAll('.event').forEach(event => {
        if (event.getAttribute('data-date') === selectedDate) {
          event.classList.remove('hidden');
        } else {
          event.classList.add('hidden');
        }
      });
    });
  });

  // Функция для показа всех событий
  function showAllEvents() {
    document.querySelectorAll('.event').forEach(event => event.classList.remove('hidden'));
  }

  // Функция для фильтрации по типу события
  function filterByType(type) {
    showAllEvents(); // Показать все, затем отфильтровать
    document.querySelectorAll('.event').forEach(event => {
      if (type === 'all') {
        event.classList.remove('hidden');
      } else if (event.getAttribute('data-type') !== type) {
        event.classList.add('hidden');
      }
    });
  }