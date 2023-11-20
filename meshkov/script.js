document.addEventListener('DOMContentLoaded', function () {
    // Получаем все ссылки в навигационном меню
    const navLinks = document.querySelectorAll('nav a');
  
    // Добавляем обработчик события для каждой ссылки
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
  
    // Функция для плавного скролла
    function smoothScroll(event) {
      event.preventDefault();
  
      // Получаем целевой элемент (раздел, на который мы хотим прокрутиться)
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      // Прокручиваем до целевого элемента с использованием ScrollIntoView
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    const scrollToTopButton = document.getElementById('scrollToTop');

    // Отображаем или скрываем стрелочку при прокрутке
    window.addEventListener('scroll', function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    });
  
    // Добавляем обработчик события для стрелочки
    scrollToTopButton.addEventListener('click', function (event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
