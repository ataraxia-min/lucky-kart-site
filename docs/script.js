// Progressive enhancement: all content and navigation work without JavaScript.
const navigationLinks = document.querySelectorAll('.site-header nav a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navigationLinks) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-10% 0px -65% 0px' });
  for (const link of navigationLinks) {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  }
}
