function showSection(id) {
  const sections = document.querySelectorAll('.universe-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  }
}

// Show Elite section by default on load
window.addEventListener('DOMContentLoaded', () => {
  showSection('elite');
});
