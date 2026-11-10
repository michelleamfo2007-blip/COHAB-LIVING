"use client";

import { useState } from "react";
import type { GalleryImage } from "@/lib/properties";

export function PropertyGallery({ images, name }: { images: GalleryImage[]; name: string }) {
  const [index, setIndex] = useState(0);
  const current = images[index] ?? images[0];
  if (!current) return null;

  function go(next: number) {
    setIndex((next + images.length) % images.length);
  }

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-ivory">
        <img src={current.src} alt={current.alt} className="absolute inset-0 h-full w-full object-cover" />
        {images.length > 1 ? (
          <div className="absolute bottom-3 right-3 flex gap-2">
            <button type="button" className="rounded-full bg-paper/95 px-3 py-2 text-sm font-semibold text-navy" onClick={() => go(index - 1)} aria-label="Previous photo">
              Prev
            </button>
            <button type="button" className="rounded-full bg-paper/95 px-3 py-2 text-sm font-semibold text-navy" onClick={() => go(index + 1)} aria-label="Next photo">
              Next
            </button>
          </div>
        ) : null}
      </div>
      {images.length > 1 ? (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {images.map((image, imageIndex) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Show photo ${imageIndex + 1} of ${name}`}
              aria-current={imageIndex === index}
              onClick={() => setIndex(imageIndex)}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl ${imageIndex === index ? "ring-2 ring-gold" : "opacity-80"}`}
            >
              <img src={image.src} alt="" className="absolute inset-0 h-full w-full object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
