// Add event listeners to all expand buttons
document.querySelectorAll('.expand-button').forEach(button => {
    button.addEventListener('click', () => {
      const cardDetails = button.parentElement.nextElementSibling;
      const isVisible = cardDetails.style.display === 'block';
  
      // Toggle visibility
      cardDetails.style.display = isVisible ? 'none' : 'block';
  
      // Toggle button text
      button.textContent = isVisible ? '⬇' : '⬆';
    });
  });
  