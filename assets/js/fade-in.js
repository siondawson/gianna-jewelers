document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
  
    function checkVisibility() {
      const triggerBottom = window.innerHeight * 0.9; // Adjust as needed
  
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
  
        if (elementTop < triggerBottom) {
          element.classList.add('in-view');
        }
      });
    }
  
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
  
    // Initial check
    checkVisibility();
  });
  