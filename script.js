const burgerBtn = document.getElementById('burgerBtn');
const fullscreenNav = document.getElementById('fullscreenNav');

if (burgerBtn && fullscreenNav) {
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    fullscreenNav.classList.toggle('active');
    document.body.classList.toggle('nav-open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      burgerBtn.classList.remove('active');
      fullscreenNav.classList.remove('active');
      document.body.classList.remove('nav-open');
    });
  });
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const galleryItems = document.querySelectorAll('.gallery-item');

if (lightbox && galleryItems.length) {
  galleryItems.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
      document.body.classList.add('nav-open');
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.classList.remove('nav-open');
  };

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

const videoModal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const videoModalClose = document.getElementById('videoModalClose');
const videoCards = document.querySelectorAll('.video-card');

if (videoModal && videoCards.length) {
  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-video');
      if (!src) return;
      videoPlayer.src = src;
      videoModal.classList.add('active');
      document.body.classList.add('nav-open');
      videoPlayer.play();
    });
  });

  const closeVideoModal = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoModal.classList.remove('active');
    document.body.classList.remove('nav-open');
  };

  videoModalClose.addEventListener('click', closeVideoModal);
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideoModal();
  });
}