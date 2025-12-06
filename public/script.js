// Scroll-based page tracking
const scrollIndicator = document.getElementById('scrollIndicator');

// Hide scroll indicator after first scroll
window.addEventListener('scroll', function hideScrollIndicator() {
  if (window.scrollY > 100) {
    if (scrollIndicator) {
      scrollIndicator.style.opacity = '0';
      scrollIndicator.style.pointerEvents = 'none';
    }
    window.removeEventListener('scroll', hideScrollIndicator);
  }
});

// Track which page is in view (optional - for future enhancements)
const pages = document.querySelectorAll('.story-page');
window.addEventListener('scroll', function() {
  let currentViewPage = 1;
  
  pages.forEach((page, index) => {
    const rect = page.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2) {
      currentViewPage = index + 1;
    }
  });
  
  // You can use currentViewPage for analytics or other features
});
