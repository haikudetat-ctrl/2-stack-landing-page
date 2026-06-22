"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), {
  ssr: false,
  loading: () => <div className="aspect-video w-full animate-pulse bg-white/[.04]" aria-label="Loading video player" />
});

const playbackId = "jkDpjbpRJySiwb4zgZ00slhTbtfsdPmfirX202dmvCgcw";
const poster = `https://image.mux.com/${playbackId}/thumbnail.jpg?time=6&width=1400&fit_mode=preserve`;

export function ClopenVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return isPlaying ? (
    <MuxPlayer
      playbackId={playbackId}
      metadata={{ video_title: "Clopen Overview" }}
      streamType="on-demand"
      accentColor="#D97736"
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
      className="group relative block aspect-video w-full overflow-hidden bg-[#121212] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4A261] focus-visible:ring-inset"
      aria-label="Play the Clopen overview video"
    >
      <Image
        src={poster}
        alt="Clopen overview video preview"
        fill
        sizes="(min-width: 768px) 55vw, 100vw"
        className="object-cover"
      />
      <span className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" aria-hidden="true" />
      <span
        className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/55 text-white shadow-2xl backdrop-blur-md transition group-hover:scale-105 group-hover:bg-[#D97736]"
        aria-hidden="true"
      >
        <span className="ml-1 text-2xl">▶</span>
      </span>
    </button>
  );
}
