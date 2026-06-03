"use client";

import MuxPlayer from "@mux/mux-player-react/lazy";

type LandingVideoCardProps = {
  playbackId: string;
  posterTime: number;
  title: string;
};

export function LandingVideoCard({ playbackId, posterTime, title }: LandingVideoCardProps) {
  const titleId = `landing-video-title-${playbackId}`;
  const poster = `https://image.mux.com/${playbackId}/thumbnail.jpg?time=${posterTime}`;

  return (
    <div
      aria-labelledby={titleId}
      className="relative h-full min-h-[180px] overflow-hidden bg-[#222837]/70 transition-transform duration-500 group-hover:-translate-y-0.5"
    >
      <h3 id={titleId} className="sr-only">
        {title}
      </h3>
      <MuxPlayer
        playbackId={playbackId}
        poster={poster}
        metadata={{
          video_title: title
        }}
        streamType="on-demand"
        loading="viewport"
        preload="metadata"
        title={title}
        accentColor="#5cc2b9"
        primaryColor="#e7ecff"
        secondaryColor="#222837"
        className="block aspect-video h-full w-full bg-[#121826]"
        style={{
          "--media-object-fit": "cover",
          "--controls-backdrop-color": "rgba(18, 24, 38, 0.72)"
        }}
      />
    </div>
  );
}
