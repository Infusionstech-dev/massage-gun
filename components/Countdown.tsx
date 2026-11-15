"use client";
import { useEffect, useState } from "react";
import { bn } from "@/lib/data";

// Counts down to midnight; resets daily.
function left() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(24, 0, 0, 0);
  return Math.floor((end.getTime() - now.getTime()) / 1000);
}

export default function Countdown() {
  const [s, setS] = useState<number | null>(null);
  useEffect(() => {
    setS(left());
    const t = setInterval(() => setS(left()), 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (x: number) => (s === null ? "--" : bn(x).padStart(2, "০"));
  const v = s ?? 0;
  return (
    <div className="timer">
      <div><span>{pad(Math.floor(v / 3600))}</span><small>ঘণ্টা</small></div>
      <div><span>{pad(Math.floor((v % 3600) / 60))}</span><small>মিনিট</small></div>
      <div><span>{pad(v % 60)}</span><small>সেকেন্ড</small></div>
    </div>
  );
}
