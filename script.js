/* ============================================
   LOVIE'S PORTFOLIO — script.js
   Handles: mobile menu, active nav, form, animations
   ============================================ */

// ── Wait for the DOM to fully load ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     1. MOBILE MENU TOGGLE
     Toggles the nav links open/closed when hamburger is clicked
     ============================================================ */
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      // Toggle the 'open' class on both elements
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');

      // Update aria-expanded for accessibility
      const isOpen = navLinks.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close the menu when any nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      }
    });
  }


  /* ============================================================
     2. ACTIVE NAV LINK
     Highlights the current page's link in the navbar
     ============================================================ */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });


  /* ============================================================
     3. NAVBAR SCROLL SHADOW
     Adds a stronger shadow when user scrolls down
     ============================================================ */
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.10)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    });
  }


  /* ============================================================
     4. SCROLL FADE-IN ANIMATION
     Fades in elements as they enter the viewport
     ============================================================ */

  // Add the 'fade-in-target' class to elements you want animated
  const animatedElements = document.querySelectorAll(
    '.card, .skill-pill, .contact-detail-item, .about-image-wrap, .stat-item'
  );

  // Set initial styles for animation
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  // Use IntersectionObserver to trigger animation when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Small staggered delay for each element
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 80); // 80ms stagger between each element

        // Stop observing once animated
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,     // Trigger when 10% of the element is visible
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));


  /* ============================================================
     5. CONTACT FORM HANDLING
     Validates inputs and shows a success message on submit
     ============================================================ */
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent actual page reload

      // Grab input values
      const name    = document.getElementById('name').value.trim();
      const email   = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // Simple validation: check nothing is empty
      if (!name || !email || !message) {
        showFormError('Please fill in all fields.');
        return;
      }

      // Simple email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFormError('Please enter a valid email address.');
        return;
      }

      // All good — show success state
      contactForm.style.display = 'none';
      const successMsg = document.getElementById('formSuccess');
      if (successMsg) {
        successMsg.classList.add('show');
      }
    });
  }

  // Helper: display an error message under the form
  function showFormError(msg) {
    // Remove any existing error first
    const existing = document.querySelector('.form-error');
    if (existing) existing.remove();

    const err = document.createElement('p');
    err.className = 'form-error';
    err.textContent = msg;
    err.style.cssText = `
      color: #c0392b;
      font-size: 0.85rem;
      margin-top: 0.75rem;
      text-align: center;
    `;
    contactForm.appendChild(err);

    // Auto-remove after 4 seconds
    setTimeout(() => err.remove(), 4000);
  }


  /* ============================================================
     6. BUTTON RIPPLE EFFECT
     Adds a small ripple animation on primary button clicks
     ============================================================ */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      // Create ripple element
      const ripple = document.createElement('span');
      const rect   = this.getBoundingClientRect();
      const size   = Math.max(rect.width, rect.height);

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255,255,255,0.25);
        transform: scale(0);
        animation: ripple 0.5s ease-out forwards;
        top: ${e.clientY - rect.top - size / 2}px;
        left: ${e.clientX - rect.left - size / 2}px;
        pointer-events: none;
      `;

      // Button needs relative positioning for ripple
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      // Remove ripple element after animation
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  // Inject keyframe for ripple into the document
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `
      @keyframes ripple {
        to { transform: scale(2.5); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

}); // End DOMContentLoaded
