"use client";
import { useState } from "react";
import Image from "next/image";

const IMGS = [
  { src: "/images/1.webp", alt: "LM-280 ম্যাসাজ গান ও সব হেড" },
  { src: "/images/2.webp", alt: "৫ বলের হেড সামনে থেকে" },
  { src: "/images/3.webp", alt: "হাতে ধরা ম্যাসাজ গান" },
];

export default function Gallery({ tag }: { tag: string }) {
  const [i, setI] = useState(0);
  return (
    <div>
      <div className="gal-main">
        <span className="gal-tag">{tag}</span>
        <Image src={IMGS[i].src} alt={IMGS[i].alt} width={640} height={640} priority />
      </div>
      <div className="thumbs">
        {IMGS.map((img, n) => (
          <button key={img.src} className={n === i ? "on" : ""} onClick={() => setI(n)} aria-label={img.alt}>
            <Image src={img.src} alt="" width={64} height={64} />
          </button>
        ))}
      </div>
    </div>
  );
}
