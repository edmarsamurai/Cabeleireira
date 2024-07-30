// scripts.js

document.getElementById('menu-icon').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('nav').classList.toggle('open');
  });
  


  // scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    const close = document.querySelector('.lightbox .close');
    const next = document.querySelector('.lightbox-controls .next');
    const prev = document.querySelector('.lightbox-controls .prev');
    let currentImageIndex;
  
    gallery.forEach((img, index) => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxContent.src = img.src;
        currentImageIndex = index;
      });
    });
  
    close.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  
    next.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % gallery.length;
      lightboxContent.src = gallery[currentImageIndex].src;
    });
  
    prev.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + gallery.length) % gallery.length;
      lightboxContent.src = gallery[currentImageIndex].src;
    });
  });
  

 