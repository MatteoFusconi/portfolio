// Add event listeners to all expand buttons

document.querySelectorAll('.expand-button').forEach(button => {
    button.addEventListener('click', async () => {
      const card = button.closest('.card');
      const cardDetails = card.querySelector('.card-details');
      const icon = button.querySelector('i');
      const isVisible = cardDetails.style.display === 'block';
      
      if (!isVisible && !cardDetails.innerHTML) {
          // Load and parse the Markdown file
          const mdFile = card.getAttribute('data-md-file');
          const markdownContent = await fetchMarkdown(mdFile);
          cardDetails.innerHTML = marked.parse(markdownContent); // Parse Markdown to HTML
        }
        
        // Toggle visibility
        cardDetails.style.display = isVisible ? 'none' : 'block';
        
        // Toggle button icon
        icon.classList.toggle('fa-chevron-down', isVisible);
        icon.classList.toggle('fa-chevron-up', !isVisible);
    });
});

// Function to fetch Markdown content
async function fetchMarkdown(mdFile) {
    try {
        const response = await fetch(mdFile);
        if (!response.ok) throw new Error(`Failed to load ${mdFile}`);
        return await response.text();
    } catch (error) {
      console.error(error);
      return "Error loading content.";
    }
  }
  