document.addEventListener('DOMContentLoaded', function() {
  initDarkMode();
  initTestimonials();
  initCourseFilter();
  initContactForm();
  initFAQ();
  initPopupForm();
  initScrollAnimations();
  initScrollToTop();
  initMobileMenu();
  initNewsletterForm();
  initCounterAnimation();
  initLazyLoading();
});

// Updated Testimonials with Correct Image Paths
function initTestimonials() {
  const testimonials = [
    {
      text: "This academy has completely transformed my career path...",
      author: "Maria Johnson",
      role: "Frontend Developer",
      image: "assets/images/testimonial-1.jpg"
    },
    {
      text: "I went from knowing nothing about programming...",
      author: "Alex Chen",
      role: "Full Stack Developer",
      image: "assets/images/testimonial-2.jpg"
    },
    {
      text: "The community support here is unmatched...",
      author: "James Wilson",
      role: "UX Designer",
      image: "assets/images/testimonial-3.jpg"
    }
  ];
  // Rest of testimonials code...
}

// Counter Animation Implementation
function initCounterAnimation() {
  const counters = document.querySelectorAll('.number');
  counters.forEach(counter => {
    const target = +counter.innerText;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    
    let current = 0;
    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = current;
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(counter);
  });
}

// Lazy Loading Implementation
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.classList.add('loaded');
    });
  }
}

// Rest of your existing JavaScript below
/* ... [Keep all other existing JS functions from previous file] ... */

