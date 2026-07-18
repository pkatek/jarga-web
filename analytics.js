document.addEventListener('DOMContentLoaded', () => {
  const sendAnalyticsEvent = (action, params = {}) => {
    if (typeof gtag === 'function') {
      gtag('event', action, Object.assign({ event_category: 'conversion' }, params));
    }
  };

  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
      sendAnalyticsEvent('contact_phone_click', {
        event_label: link.href,
        value: 1,
      });
    });
  });

  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
      sendAnalyticsEvent('contact_email_click', {
        event_label: link.href,
        value: 1,
      });
    });
  });

  document.querySelectorAll('a, button').forEach(element => {
    const text = (element.textContent || '').trim().toLowerCase();
    if (text.includes('umów wizytę') || text.includes('umow wizytę') || text.includes('umów wizytę')) {
      element.addEventListener('click', () => {
        sendAnalyticsEvent('book_appointment_click', {
          event_label: text,
          value: 1,
        });
      });
    }
  });

  const priceSearch = document.getElementById('price-search');
  if (priceSearch) {
    let searchTimer;
    priceSearch.addEventListener('input', () => {
      const query = priceSearch.value.trim();
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        if (query.length > 0) {
          sendAnalyticsEvent('cennik_search', {
            search_term: query,
            value: 1,
          });
        }
      }, 500);
    });
  }
});
