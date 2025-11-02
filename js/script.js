// Minimal JavaScript for any interactive features

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const menuClose = document.querySelector('.menu-close');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });
  }

  if (menuClose && mobileMenu) {
    menuClose.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    });
  }

  // Close menu when clicking outside
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Close menu when clicking on menu items
  const menuItems = document.querySelectorAll('.mobile-menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add hover effects for case cards
  const caseCards = document.querySelectorAll('.case-card');
  caseCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.transition = 'transform 0.2s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Function to copy email to clipboard
  function copyEmailToClipboard() {
    const email = 'parveenmakwana02@gmail.com';
    
    // Use the Clipboard API if available
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(function() {
        showCopyFeedback();
      }).catch(function(err) {
        console.error('Failed to copy: ', err);
        fallbackCopyTextToClipboard(email);
      });
    } else {
      // Fallback for older browsers
      fallbackCopyTextToClipboard(email);
    }
  }

  // Fallback copy function for older browsers
  function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        showCopyFeedback();
      }
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
    
    document.body.removeChild(textArea);
  }

  // Show feedback when email is copied
  function showCopyFeedback() {
    // Create or get feedback element
    let feedback = document.getElementById('email-copy-feedback');
    if (!feedback) {
      feedback = document.createElement('div');
      feedback.id = 'email-copy-feedback';
      feedback.style.cssText = `
        position: fixed;
        top: 100px;
        right: 70px;
        background-color: #2a2a2a;
        color: #f5f5f0;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        z-index: 10000;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s ease;
        pointer-events: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      `;
      document.body.appendChild(feedback);
    }
    
    feedback.textContent = 'Email copied to clipboard!';
    
    // Show feedback
    setTimeout(() => {
      feedback.style.opacity = '1';
      feedback.style.transform = 'translateY(0)';
    }, 10);
    
    // Hide feedback after 2 seconds
    setTimeout(() => {
      feedback.style.opacity = '0';
      feedback.style.transform = 'translateY(-10px)';
    }, 2000);
  }

  // Add click handler to email links to copy email
  const emailLinks = document.querySelectorAll('.email-link, a[href^="mailto:"]');
  emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Copy email to clipboard
      copyEmailToClipboard();
      // Let the default mailto action proceed
    });
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Ignore if user is typing in an input field, textarea, or contenteditable element
    const isInputFocused = document.activeElement.tagName === 'INPUT' || 
                           document.activeElement.tagName === 'TEXTAREA' ||
                           document.activeElement.isContentEditable;
    
    if (isInputFocused) {
      return;
    }

    // Check if modifier keys are pressed (Cmd/Ctrl/Shift/Alt)
    const hasModifier = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;

    // Convert key to lowercase for case-insensitive matching
    const key = e.key.toLowerCase();

    switch(key) {
      case 'c':
        // Copy email to clipboard
        e.preventDefault();
        copyEmailToClipboard();
        break;

      case 'l':
        // Go to LinkedIn
        e.preventDefault();
        window.open('https://www.linkedin.com/in/parveenkumar--/', '_blank');
        break;

      case 'g':
        // Go to GitHub
        e.preventDefault();
        window.open('https://github.com/parveenengg', '_blank');
        break;

      case 'i':
        // Open Instagram
        e.preventDefault();
        window.open('https://www.instagram.com/iamparveenrabari/', '_blank');
        break;

      case 'y':
        // Go to YouTube
        e.preventDefault();
        window.open('https://www.youtube.com/@Parveen_Makwana', '_blank');
        break;

      case 'm':
        // Open email client
        e.preventDefault();
        window.location.href = 'mailto:parveenmakwana02@gmail.com';
        break;

      case 'r':
        // Only open Resume if no modifier keys are pressed (allow Cmd+R/Ctrl+R for reload)
        if (!hasModifier) {
          e.preventDefault();
          const resumeLink = document.querySelector('.resume-link');
          if (resumeLink && resumeLink.href) {
            window.open(resumeLink.href, '_blank');
          }
        }
        // If modifier is pressed, let browser handle it (for reload, etc.)
        break;
    }
  });

  // Profile Image Modal
  const profileImage = document.querySelector('.profile-image');
  if (profileImage) {
    // Create modal structure
    const modal = document.createElement('div');
    modal.className = 'profile-modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'profile-modal-content';
    
    const modalImage = document.createElement('img');
    modalImage.className = 'profile-modal-image';
    modalImage.src = profileImage.src;
    modalImage.alt = profileImage.alt;
    
    const closeButton = document.createElement('button');
    closeButton.className = 'profile-modal-close';
    closeButton.setAttribute('aria-label', 'Close modal');
    closeButton.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;
    
    modalContent.appendChild(modalImage);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Function to check image size and position close button
    function checkImageSize() {
      const imageRect = modalImage.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Check if image is very large (takes up more than 80% of viewport in either dimension)
      const isLarge = imageRect.width > viewportWidth * 0.8 || 
                     imageRect.height > viewportHeight * 0.8;
      
      if (isLarge) {
        // Position close button on top right section of the image
        modalContent.classList.add('large-image');
      } else {
        // Position close button at top right corner of page
        modalContent.classList.remove('large-image');
      }
    }
    
    // Open modal on image click
    profileImage.addEventListener('click', function() {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Wait for image to load, then check size
      if (modalImage.complete) {
        // Image already loaded
        setTimeout(checkImageSize, 50);
      } else {
        modalImage.onload = function() {
          setTimeout(checkImageSize, 50);
        };
      }
      
      // Also check on window resize
      window.addEventListener('resize', checkImageSize);
    });
    
    // Close modal functions
    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      window.removeEventListener('resize', checkImageSize);
    }
    
    closeButton.addEventListener('click', function(e) {
      e.stopPropagation();
      closeModal();
    });
    
    // Close on background click (outside of image)
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
    
    // Prevent closing when clicking on the image itself
    modalImage.addEventListener('click', function(e) {
      e.stopPropagation();
    });
    
    modalContent.addEventListener('click', function(e) {
      if (e.target === modalContent) {
        closeModal();
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }
});

