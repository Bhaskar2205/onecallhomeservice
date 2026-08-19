"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

const BEFORE_IMG =
  "https://images.unsplash.com/photo-1509624776920-0fac24a9dfda?q=80&w=1400&auto=format&fit=crop";
const AFTER_IMG =
  "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?q=80&w=1400&auto=format&fit=crop";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
    if (e.key === "Home") setPosition(0);
    if (e.key === "End") setPosition(100);
  };

  return (
    <div className="mx-auto max-w-md sm:max-w-lg">
      <div
        ref={containerRef}
        className="relative aspect-[3/4] w-full select-none arch-clip cursor-ew-resize touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {/* After — full base layer */}
        <Image
          src={AFTER_IMG}
          alt="Freshly painted wall in a warm, even finish"
          fill
          sizes="(min-width: 640px) 480px, 90vw"
          className="object-cover pointer-events-none"
          draggable={false}
        />

        {/* Before — clipped to the left of the handle so it stays pixel-aligned
            with the base layer regardless of container width */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={BEFORE_IMG}
            alt="Worn, peeling wall before painting"
            fill
            sizes="(min-width: 640px) 480px, 90vw"
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* Labels */}
        <span
          className="absolute top-4 left-4 rounded-full bg-espresso/70 backdrop-blur-sm text-ivory text-[11px] tracking-[0.2em] uppercase px-3 py-1.5 pointer-events-none transition-opacity duration-200"
          style={{ opacity: position > 14 ? 1 : 0 }}
        >
          Before
        </span>
        <span
          className="absolute top-4 right-4 rounded-full bg-brass/85 backdrop-blur-sm text-espresso text-[11px] tracking-[0.2em] uppercase px-3 py-1.5 pointer-events-none transition-opacity duration-200"
          style={{ opacity: position < 86 ? 1 : 0 }}
        >
          After
        </span>

        {/* Divider + handle */}
        <div
          className="absolute inset-y-0 w-[2px] bg-ivory/90 pointer-events-none"
          style={{ left: `${position}%` }}
        />
        <div
          role="slider"
          tabIndex={0}
          aria-label="Drag to compare the wall before and after painting"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ivory shadow-lg shadow-ink/30 flex items-center justify-center text-rose focus-visible:ring-2 focus-visible:ring-brass"
          style={{ left: `${position}%` }}
        >
          <MoveHorizontal size={18} strokeWidth={2.25} />
        </div>
      </div>

      <p className="text-center text-xs text-ivory/50 mt-4 tracking-wide">
        Drag the handle, or use ← → on your keyboard
      </p>
    </div>
  );
}
