// Add event listeners to all expand buttons
document.querySelectorAll('.expand-button').forEach(button => {
    button.addEventListener('click', () => {
      const cardDetails = button.parentElement.nextElementSibling;
      const icon = button.querySelector('i');
      const isVisible = cardDetails.style.display === 'block';
  
      // Toggle visibility
      cardDetails.style.display = isVisible ? 'none' : 'block';
  
      // Toggle button icon
      icon.classList.toggle('fa-chevron-down', isVisible);
      icon.classList.toggle('fa-chevron-up', !isVisible);
    });
  });
