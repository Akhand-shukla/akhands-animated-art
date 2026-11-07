import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 240;

export default function CinematicCanvas({ scrollProgress }) {
  const canvasRef = useRef(null);
  const framesRef = useRef([]);
  const loadedCountRef = useRef(0);
  const [loadPercentage, setLoadPercentage] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const animFrameId = useRef(null);
  const currentProgressRef = useRef(0);

  // Preload frames in background with priority queue
  useEffect(() => {
    let isCancelled = false;
    framesRef.current = new Array(TOTAL_FRAMES);

    const getFrameUrl = (index) => {
      const pad = String(index + 1).padStart(4, '0');
      return `/sequence/frame_${pad}.webp`;
    };

    // Load first 30 frames with high priority, then the rest
    const loadFrame = (index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = getFrameUrl(index);
        img.onload = () => {
          if (!isCancelled) {
            framesRef.current[index] = img;
            loadedCountRef.current += 1;
            setLoadPercentage(Math.round((loadedCountRef.current / TOTAL_FRAMES) * 100));
            if (index === 0) {
              setIsReady(true);
              drawFrame(0);
            }
          }
          resolve(img);
        };
        img.onerror = () => {
          resolve(null);
        };
      });
    };

    const preloadAll = async () => {
      // 1. Immediately load frame 0 to paint canvas
      await loadFrame(0);

      // 2. Load the first 40 frames sequentially for instant scroll responsiveness
      for (let i = 1; i < Math.min(40, TOTAL_FRAMES); i++) {
        if (isCancelled) return;
        await loadFrame(i);
      }

      // 3. Batch load remaining frames in chunks of 10
      const remaining = [];
      for (let i = 40; i < TOTAL_FRAMES; i++) {
        remaining.push(i);
      }

      const chunkSize = 10;
      for (let i = 0; i < remaining.length; i += chunkSize) {
        if (isCancelled) return;
        const chunk = remaining.slice(i, i + chunkSize);
        await Promise.all(chunk.map((idx) => loadFrame(idx)));
      }
    };

    preloadAll();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Frame Draw Engine (Cover-fit with DPI compensation)
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let img = framesRef.current[frameIndex];
    // Fallback to nearest loaded frame if this specific frame is still loading
    if (!img) {
      for (let offset = 1; offset < 10; offset++) {
        if (framesRef.current[frameIndex - offset]) {
          img = framesRef.current[frameIndex - offset];
          break;
        }
        if (framesRef.current[frameIndex + offset]) {
          img = framesRef.current[frameIndex + offset];
          break;
        }
      }
      if (!img) img = framesRef.current[0];
    }
    if (!img || !img.complete) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const canvasW = canvas.width / dpr;
    const canvasH = canvas.height / dpr;

    // Cover Aspect Calculation
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvasW / canvasH;

    let renderW, renderH, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      renderW = canvasW;
      renderH = canvasW / imgRatio;
      offsetX = 0;
      offsetY = (canvasH - renderH) / 2;
    } else {
      renderH = canvasH;
      renderW = canvasH * imgRatio;
      offsetX = (canvasW - renderW) / 2;
      offsetY = 0;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    ctx.restore();
  };

  // Canvas Resize Handler
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      const frameIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(currentProgressRef.current * (TOTAL_FRAMES - 1)))
      );
      drawFrame(frameIdx);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth 60/120 FPS Lerp Loop
  useEffect(() => {
    let prevFrame = -1;

    const renderLoop = () => {
      const target = Math.min(Math.max(scrollProgress, 0), 1);
      // Smooth damped interpolation
      currentProgressRef.current += (target - currentProgressRef.current) * 0.16;

      const targetFrame = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(currentProgressRef.current * (TOTAL_FRAMES - 1)))
      );

      if (targetFrame !== prevFrame) {
        prevFrame = targetFrame;
        drawFrame(targetFrame);
      }

      animFrameId.current = requestAnimationFrame(renderLoop);
    };

    animFrameId.current = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animFrameId.current);
  }, [scrollProgress]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#070b12]">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover transition-opacity duration-700 block"
        style={{ opacity: isReady ? 1 : 0 }}
      />
      
      {/* Subtle loader indicator if scrolling before full sequence loaded */}
      {loadPercentage < 100 && (
        <div className="pointer-events-none absolute bottom-4 left-6 z-20 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-neutral-400 bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f43f5e] animate-ping" />
          <span>Syncing 4K sequence: {loadPercentage}%</span>
        </div>
      )}
    </div>
  );
}
