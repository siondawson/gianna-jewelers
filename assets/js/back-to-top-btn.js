document.addEventListener('DOMContentLoaded', function() {
    var backToTopBtn = document.getElementById('back-to-top-btn');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });
  
    backToTopBtn.addEventListener('click', function() {
      backToTop();
    });
  
    function backToTop() {
      if (window.scrollTo) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo(0, 0); // For older browsers
      }
    }
  });
  