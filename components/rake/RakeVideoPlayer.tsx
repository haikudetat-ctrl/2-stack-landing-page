"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), {
  ssr: false,
  loading: () => <div className="aspect-video w-full bg-[#0d1c31]" aria-label="Loading video player" />
});

export function RakeVideoPlayer({ playbackId, title }: { playbackId: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const poster = `https://image.mux.com/${playbackId}/thumbnail.jpg?time=4&width=1400&fit_mode=preserve`;

  return isPlaying ? (
    <MuxPlayer
      playbackId={playbackId}
      metadata={{ video_title: title }}
      streamType="on-demand"
      accentColor="#1f67b1"
      poster={poster}
      preload="metadata"
      autoPlay
      playsInline
      className="aspect-video w-full"
    />
  ) : (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      className="group relative block aspect-video w-full overflow-hidden bg-[#0d1c31] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#9ecbff]"
      aria-label={`Play ${title}`}
    >
      <Image src={poster} alt="" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
      <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/10" aria-hidden="true" />
      <span
        className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#1f67b1] text-white"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
          <path d="M7 4.5v15l12-7.5z" />
        </svg>
      </span>
    </button>
  );
}
