/** Scroll halus ke elemen, kecuali pengguna meminta animasi dikurangi. */
export function scrollToElement(element) {
  if (!element || typeof element.scrollIntoView !== 'function') return;
  const reduceMotion =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
}
