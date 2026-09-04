document.addEventListener('DOMContentLoaded', () => {
  const isAppleDevice = /Macintosh|MacIntel|iPad|iPhone|iPod/.test(
    `${navigator.userAgent} ${navigator.platform}`
  );
  const mapLinks = document.querySelectorAll('a.map-link');

  mapLinks.forEach(link => {
    const appleUrl = link.dataset.apple;
    const googleUrl = link.dataset.google;

    if (isAppleDevice && appleUrl) {
      link.href = appleUrl;
    } else if (googleUrl) {
      link.href = googleUrl;
    }
  });
});
