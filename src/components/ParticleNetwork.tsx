import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const particlesRef = useRef<Particle[]>([]);

  const spawnParticles = useCallback((x: number, y: number) => {
    for (let i = 0; i < 5; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random();
      
      particlesRef.current.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 0.5, // Минимальный размер
        opacity: 0, // Невидимые
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (particlesRef.current.length === 0) {
        initParticles();
      }
    };

    const initParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5),
          vy: (Math.random() - 0.5),
          size: 0.5, // Минимальный размер
          opacity: 0, // Точки невидимы
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.isActive = true;
    };

    const handleClick = (e: MouseEvent) => spawnParticles(e.clientX, e.clientY);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const connectionDist = 170;

      // --- ДОБАВЛЯЕМ СВЕЧЕНИЕ КУРСОРУ ---
      if (mouseRef.current.isActive) {
        const gradient = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 250
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)'); // Цвет в центре
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');    // Угасание
        
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 250, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

        // Линии между точками
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / connectionDist) * 0.3;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Связь с мышью
        if (mouseRef.current.isActive) {
          const mdx = mouseRef.current.x - p1.x;
          const mdy = mouseRef.current.y - p1.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 250) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - mDist / 250) * 0.5})`;
            ctx.stroke();
          }
        }

        // Рисуем точку (почти прозрачную и очень маленькую)
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p1.opacity})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [spawnParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default ParticleNetwork;