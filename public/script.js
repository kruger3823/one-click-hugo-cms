let currentPage = 1;
const totalPages = 8;

function showPage(pageNum) {
  // Hide all pages
  const pages = document.querySelectorAll('.story-page');
  pages.forEach(page => page.classList.remove('active'));

  // Show current page
  const activePage = document.querySelector(`[data-page="${pageNum}"]`);
  if (activePage) {
    activePage.classList.add('active');
  }

  // Update page counter
  document.getElementById('currentPage').textContent = pageNum;

  // Update button states
  document.getElementById('prevBtn').disabled = pageNum === 1;
  document.getElementById('nextBtn').disabled = pageNum === totalPages;

  // Scroll to top
  document.querySelector('.story-container').scrollIntoView({ behavior: 'smooth' });
}

function changePage(direction) {
  const newPage = currentPage + direction;
  if (newPage >= 1 && newPage <= totalPages) {
    currentPage = newPage;
    showPage(currentPage);
  }
}

// Keyboard navigation
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    changePage(-1);
  } else if (event.key === 'ArrowRight') {
    changePage(1);
  }
});

// Initialize
showPage(currentPage);
