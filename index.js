// Select Tanya's and John's carousel containers
const tanyaCarousel = document.getElementById('tanya-carousel');
const johnCarousel = document.getElementById('john-carousel');

// Select Tanya's next button
const tanyaNextBtn = document.getElementById('tanya-next-btn');

// Select John's back and next buttons
const johnBackBtn = document.getElementById('john-back-btn');
const johnNextBtn = document.getElementById('john-next-btn');

// Add event listener to Tanya's next button to switch to John's carousel
tanyaNextBtn.addEventListener('click', () => {
  tanyaCarousel.style.display = 'none';
  johnCarousel.style.display = 'flex';
});

// Add event listeners to John's back and next buttons to switch back to Tanya's carousel
const switchToTanya = () => {
  johnCarousel.style.display = 'none';
  tanyaCarousel.style.display = 'flex';
};

johnBackBtn.addEventListener('click', switchToTanya);
johnNextBtn.addEventListener('click', switchToTanya);
