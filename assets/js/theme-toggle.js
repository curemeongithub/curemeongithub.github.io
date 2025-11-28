document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = toggleButton.querySelector('span');

  // Check for saved preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.textContent = '☀️'; // Sun icon for light mode switch
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      icon.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      icon.textContent = '🌙'; // Moon icon for dark mode switch
    }
  });
});
