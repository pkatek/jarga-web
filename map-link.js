document.addEventListener('DOMContentLoaded', () => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const mapLinks = document.querySelectorAll('a.map-link');

  mapLinks.forEach(link => {
    const appleUrl = link.dataset.apple;
    const googleUrl = link.dataset.google;

    if (isIOS && appleUrl) {
      link.href = appleUrl;
    } else if (googleUrl) {
      link.href = googleUrl;
    }
  });
});
