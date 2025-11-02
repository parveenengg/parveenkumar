// Custom Cursor Implementation
(function() {
  'use strict';

  // Check if device supports hover (desktop)
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let cursor = null;
    let cursorX = 0;
    let cursorY = 0;
    let mouseX = 0;
    let mouseY = 0;

    // Create cursor element
    function createCursor() {
      cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      document.body.appendChild(cursor);
    }

    // Update cursor position
    function updateCursor() {
      // Smooth follow animation with easing for sphere effect
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      
      requestAnimationFrame(updateCursor);
    }

    // Track mouse position
    function handleMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    // Handle hover states
    function handleMouseEnter() {
      if (cursor) cursor.classList.add('hover');
    }

    function handleMouseLeave() {
      if (cursor) cursor.classList.remove('hover');
    }

    // Initialize on DOM ready
    function init() {
      createCursor();
      
      document.addEventListener('mousemove', handleMouseMove);
      
      // Function to attach hover effects to elements
      function attachHoverEffects() {
        const interactiveElements = document.querySelectorAll(
          'a, button, input, textarea, select, [role="button"], .case-card, .profile-image, .all-button'
        );
        
        interactiveElements.forEach(el => {
          // Remove existing listeners to avoid duplicates
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
          // Add new listeners
          el.addEventListener('mouseenter', handleMouseEnter);
          el.addEventListener('mouseleave', handleMouseLeave);
        });
      }
      
      // Attach hover effects initially
      attachHoverEffects();
      
      // Reattach hover effects when DOM changes (for dynamic content)
      const observer = new MutationObserver(() => {
        attachHoverEffects();
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      
      // Start animation loop
      updateCursor();
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }
})();

