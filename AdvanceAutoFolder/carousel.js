document.addEventListener('DOMContentLoaded', () => {
    const slide = document.getElementById('carousel-slide');
    const images = slide.querySelectorAll('img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
  
    let index = 0;
    let startX = 0;
    let isSwiping = false;
  
    const showSlide = () => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    };
  
    const nextSlide = () => {
      index = (index + 1) % images.length;
      showSlide();
    };
  
    const prevSlide = () => {
      index = (index - 1 + images.length) % images.length;
      showSlide();
    };
  
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  
    // Swipe gestures
    slide.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isSwiping = true;
    });
  
    slide.addEventListener('touchmove', (e) => {
      if (!isSwiping) return;
      const diff = e.touches[0].clientX - startX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
        isSwiping = false;
      }
    });
  
    slide.addEventListener('touchend', () => {
      isSwiping = false;
    });
  
    showSlide();
  });
  