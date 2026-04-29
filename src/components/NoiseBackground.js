"use client";

export default function NoiseBackground() {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none noise-bg mix-blend-overlay" />
  );
}
