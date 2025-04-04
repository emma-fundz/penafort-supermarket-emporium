
/**
 * Main JavaScript File for Penafort Supermarket
 */
document.addEventListener('DOMContentLoaded', function() {
  // Init AOS animation library
  AOS.init({
    duration: 1000,
    once: true,
    mirror: false,
    offset: 50
  });

  // Initialize Swiper for testimonials
  const testimonialSwiper = new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    }
  });

  // Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('header-scrolled');
      if (window.innerWidth > 991) {
        document.querySelector('.mobile-search').style.display = 'none';
      }
    } else {
      header.classList.remove('header-scrolled');
      if (window.innerWidth <= 991) {
        document.querySelector('.mobile-search').style.display = 'block';
      }
    }
  });

  // Show or hide back-to-top button
  const backToTopBtn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  // Scroll to top when back-to-top button is clicked
  backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Quantity selector in quick view modal
  const minusBtn = document.querySelector('.minus-btn');
  const plusBtn = document.querySelector('.plus-btn');
  const quantityInput = document.querySelector('.quantity-input');

  if (minusBtn && plusBtn && quantityInput) {
    minusBtn.addEventListener('click', function() {
      let quantity = parseInt(quantityInput.value);
      if (quantity > 1) {
        quantityInput.value = quantity - 1;
      }
    });

    plusBtn.addEventListener('click', function() {
      let quantity = parseInt(quantityInput.value);
      quantityInput.value = quantity + 1;
    });
  }

  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email) {
        // Show success message (in a real project, this would be an AJAX call)
        showNotification('Thank you for subscribing!', 'success');
        emailInput.value = '';
      } else {
        showNotification('Please enter a valid email address.', 'error');
      }
    });
  }

  // Footer newsletter form submission
  const footerNewsletterForm = document.querySelector('.footer-newsletter-form');
  if (footerNewsletterForm) {
    footerNewsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email) {
        // Show success message (in a real project, this would be an AJAX call)
        showNotification('Thank you for subscribing!', 'success');
        emailInput.value = '';
      } else {
        showNotification('Please enter a valid email address.', 'error');
      }
    });
  }

  // Add to cart functionality
  const addToCartBtns = document.querySelectorAll('.add-to-cart');
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get product information (in a real project, you would collect more data)
      const productCard = this.closest('.product-card');
      const productName = productCard.querySelector('h4 a').textContent;
      
      // Update cart count (for demo purposes)
      const cartBadge = document.querySelector('.cart-badge');
      cartBadge.textContent = parseInt(cartBadge.textContent) + 1;
      
      // Show success message
      showNotification(`${productName} added to cart!`, 'success');
      
      // Animate the cart icon
      const cartIcon = document.querySelector('.icon-link .fa-shopping-cart');
      cartIcon.classList.add('fa-bounce');
      setTimeout(() => {
        cartIcon.classList.remove('fa-bounce');
      }, 1000);
    });
  });

  // Set active link in navigation based on current page
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation || 
        (currentLocation === '/' && link.getAttribute('href') === 'index.html') ||
        (link.getAttribute('href') !== 'index.html' && currentLocation.includes(link.getAttribute('href')))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Function to show notification
  function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="notification-icon fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
      </div>
      <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add styles
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8';
    notification.style.color = '#fff';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 3px 10px rgba(0,0,0,0.15)';
    notification.style.display = 'flex';
    notification.style.justifyContent = 'space-between';
    notification.style.alignItems = 'center';
    notification.style.minWidth = '300px';
    notification.style.zIndex = '9999';
    notification.style.transform = 'translateY(100px)';
    notification.style.opacity = '0';
    notification.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
      notification.style.transform = 'translateY(100px)';
      notification.style.opacity = '0';
      setTimeout(() => {
        notification.remove();
      }, 300);
    });
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateY(0)';
      notification.style.opacity = '1';
    }, 10);
    
    // Auto close after 5 seconds
    setTimeout(() => {
      if (document.body.contains(notification)) {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        setTimeout(() => {
          if (document.body.contains(notification)) {
            notification.remove();
          }
        }, 300);
      }
    }, 5000);
  }

  // Product hover effect enhancer
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.querySelector('.product-tumb img').style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.querySelector('.product-tumb img').style.transform = 'scale(1)';
    });
  });

  // Add smooth scrolling for all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      if (href !== '#' && href.startsWith('#')) {
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
