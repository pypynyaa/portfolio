import { useEffect, useState } from 'react';

/**
 * Хук для определения, нужно ли уменьшить анимации
 * Проверяет:
 * 1. prefers-reduced-motion медиа-запрос (полное отключение)
 * 2. Мобильное устройство (ширина экрана < 768px) - упрощение анимаций
 * 3. User Agent для определения браузеров с плохой производительностью
 * 
 * Возвращает объект с двумя флагами:
 * - shouldReduceMotion: полное отключение (для prefers-reduced-motion)
 * - shouldSimplifyMotion: упрощение анимаций (для мобильных)
 */
export function useReducedMotion() {
  const [motionState, setMotionState] = useState(() => {
    if (typeof window === 'undefined') return { shouldReduceMotion: false, shouldSimplifyMotion: false };
    
    // Проверка prefers-reduced-motion - полное отключение
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Проверка мобильного устройства - упрощение анимаций
    const isMobile = window.innerWidth < 768;
    
    // Проверка User Agent для браузеров с известными проблемами производительности
    const ua = navigator.userAgent.toLowerCase();
    const isTelegramBrowser = ua.includes('telegram') || ua.includes('webview');
    const isWeChat = ua.includes('micromessenger');
    const isMobileBrowser = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
    
    const shouldSimplifyMotion = isMobile || isTelegramBrowser || isWeChat || (isMobileBrowser && isMobile);
    
    return {
      shouldReduceMotion: prefersReducedMotion,
      shouldSimplifyMotion: shouldSimplifyMotion && !prefersReducedMotion, // Не упрощаем если уже полностью отключено
    };
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Слушаем изменения размера окна
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      const ua = navigator.userAgent.toLowerCase();
      const isTelegramBrowser = ua.includes('telegram') || ua.includes('webview');
      const isWeChat = ua.includes('micromessenger');
      const isMobileBrowser = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
      
      const shouldSimplifyMotion = isMobile || isTelegramBrowser || isWeChat || (isMobileBrowser && isMobile);
      
      setMotionState({
        shouldReduceMotion: prefersReducedMotion,
        shouldSimplifyMotion: shouldSimplifyMotion && !prefersReducedMotion,
      });
    };

    // Слушаем изменения prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMediaChange = (e: MediaQueryListEvent) => {
      const isMobile = window.innerWidth < 768;
      
      const ua = navigator.userAgent.toLowerCase();
      const isTelegramBrowser = ua.includes('telegram') || ua.includes('webview');
      const isWeChat = ua.includes('micromessenger');
      const isMobileBrowser = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
      
      const shouldSimplifyMotion = isMobile || isTelegramBrowser || isWeChat || (isMobileBrowser && isMobile);
      
      setMotionState({
        shouldReduceMotion: e.matches,
        shouldSimplifyMotion: shouldSimplifyMotion && !e.matches,
      });
    };

    window.addEventListener('resize', handleResize);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  // Возвращаем true только для полного отключения (prefers-reduced-motion)
  // Для мобильных возвращаем false, чтобы использовать упрощенные анимации
  return motionState.shouldReduceMotion;
}
