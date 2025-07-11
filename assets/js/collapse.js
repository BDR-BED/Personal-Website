document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const arrow = button.querySelector('.arrow');

      content.classList.toggle('show');
      arrow.classList.toggle('rotate');
    });
  });