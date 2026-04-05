"use client";
import { useEffect, useRef, useState } from "react";

const IFRAME_WIDTH = 1280;
const IFRAME_HEIGHT = 720;
const SCROLLBAR_WIDTH = 20;

export default function IframePreview({ src }: { src: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (wrapperRef.current) {
        setScale(wrapperRef.current.offsetWidth / IFRAME_WIDTH);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full aspect-video overflow-hidden">
      <iframe
        src={src}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms"
        scrolling="no"
        style={{
          width: IFRAME_WIDTH + SCROLLBAR_WIDTH,
          height: IFRAME_HEIGHT,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
          border: "none",
          overflow: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}
