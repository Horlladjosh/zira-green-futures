"use client";
import { useEffect, useRef, useState } from "react";

export default function Counter() {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(50000);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1800, 1);
        setValue(Math.round(50000 * (1 - (1 - progress) ** 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, []);
  return <span ref={ref} aria-label="50,000"><span aria-hidden="true">{value.toLocaleString("en-US")}</span></span>;
}
