// Global utilities for TravelAI Platform
document.addEventListener('DOMContentLoaded', () => {
  // Sidebar toggle for mobile (landing page)
  const ham = document.querySelector('.ham');
  if (ham) {
    ham.addEventListener('click', () => {
      const links = document.querySelector('nav ul');
      if (links) {
        links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
      }
    });
  }
});
