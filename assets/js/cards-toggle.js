document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-sublinks').forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
      const subLinks = document.getElementById(button.getAttribute('aria-controls'));
      if (subLinks) {
        subLinks.hidden = expanded;
      }
    });
  });
});
