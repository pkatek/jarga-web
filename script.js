document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const reviewTrackWrapper = document.querySelector('.review-track-wrapper');
  const reviewTrack = document.querySelector('.review-track');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  if (reviewTrackWrapper && reviewTrack && prevButton && nextButton) {
    const cards = Array.from(reviewTrack.children);
    const gap = 24;

    const getScrollAmount = () => {
      const cardWidth = cards[0].getBoundingClientRect().width;
      return cardWidth + gap;
    };

    const updateButtons = () => {
      const maxScroll = reviewTrack.scrollWidth - reviewTrackWrapper.clientWidth;
      prevButton.disabled = reviewTrackWrapper.scrollLeft <= 0;
      nextButton.disabled = reviewTrackWrapper.scrollLeft >= Math.round(maxScroll - 1);
    };

    prevButton.addEventListener('click', () => {
      reviewTrackWrapper.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    nextButton.addEventListener('click', () => {
      reviewTrackWrapper.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    reviewTrackWrapper.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);
    updateButtons();
  }
});
