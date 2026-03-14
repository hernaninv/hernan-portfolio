"use client";

import { useState, useEffect, useRef } from "react";

export default function TypingText({
  text,
  start,
  speed = 40,
  onDone,
  className,
}: {
  text: string;
  start: boolean;
  speed?: number;
  onDone?: () => void;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    // One-way latch: once started, re-setting start=false has no effect
    if (!start || startedRef.current) return;
    startedRef.current = true;
    setTyping(true);

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(interval);
        setTyping(false);
        onDone?.();
      }
    }, speed);

    // Cleanup: clear interval on unmount to prevent state updates on dead component
    return () => clearInterval(interval);
  }, [start, text, speed, onDone]);

  return (
    <span className={className}>
      {displayed}
      {typing && <span className="cursor-blink" aria-hidden="true">|</span>}
    </span>
  );
}
