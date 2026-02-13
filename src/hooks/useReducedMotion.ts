import { useEffect, useState } from 'react';

/**
 * Хук для определения, нужно ли уменьшить анимации
 * Проверяет:
 * 1. Мобильное устройство (ширина экрана < 768px)
 * 2. prefers-reduced-motion медиа-запрос
 * 3. User Agent для определения браузеров с плохой производительностью
 */
export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    
    // Проверка prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return true;
    
    // Проверка мобильного устройства
    const isMobile = window.innerWidth < 768;
    if (isMobile) return true;
    
    // Проверка User Agent для браузеров с известными проблемами производительности
    const ua = navigator.userAgent.toLowerCase();
    const isTelegramBrowser = ua.includes('telegram') || ua.includes('webview');
    const isWeChat = ua.includes('micromessenger');
    const isMobileBrowser = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
    
    if (isTelegramBrowser || isWeChat || (isMobileBrowser && isMobile)) {
      return true;
    }
    
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Слушаем изменения размера окна
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setShouldReduceMotion(isMobile || prefersReducedMotion);
    };

    // Слушаем изменения prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMediaChange = (e: MediaQueryListEvent) => {
      const isMobile = window.innerWidth < 768;
      setShouldReduceMotion(e.matches || isMobile);
    };

    window.addEventListener('resize', handleResize);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  return shouldReduceMotion;
}
