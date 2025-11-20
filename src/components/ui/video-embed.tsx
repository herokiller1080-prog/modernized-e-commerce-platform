"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoEmbedProps {
  videoId: string;
  title: string;
  thumbnailUrl?: string;
  className?: string;
}

export default function VideoEmbed({
  videoId,
  title,
  thumbnailUrl,
  className,
}: VideoEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [isThumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handlePlayClick = () => setIsPlaying(true);
  const handleIframeLoad = () => setIsIframeLoaded(true);

  const handleError = () => {
    setHasError(true);
  };

  const effectiveThumbnailUrl =
    thumbnailUrl || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const showInitialPlaceholder = !isIntersecting;
  const showLoadingSkeleton = isIntersecting && !hasError && ((!isPlaying && !isThumbnailLoaded) || (isPlaying && !isIframeLoaded));

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full aspect-video overflow-hidden rounded-t-sm bg-background",
        className
      )}
    >
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: 'var(--color-background-pattern)' }}
      />
      
      {showInitialPlaceholder && (
        <div className="h-full w-full bg-secondary/10" />
      )}

      {isIntersecting && !hasError && (
        <>
          {!isPlaying && (
            <>
              <Image
                src={effectiveThumbnailUrl}
                alt={`Thumbnail for ${title}`}
                layout="fill"
                objectFit="cover"
                className={cn(
                  "z-10 transition-opacity duration-500",
                  isThumbnailLoaded ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => setThumbnailLoaded(true)}
                onError={() => { setThumbnailLoaded(true); /* Treat error as loaded to show play button */ }}
                unoptimized
              />
              <button
                onClick={handlePlayClick}
                aria-label={`Play video: ${title}`}
                className="absolute inset-0 z-20 flex items-center justify-center group"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground/90 text-background transition-all duration-300 transform group-hover:scale-110 group-hover:bg-foreground">
                  <Play className="h-8 w-8" fill="currentColor" />
                </div>
              </button>
            </>
          )}

          {isPlaying && (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={cn(
                "absolute inset-0 h-full w-full z-20 transition-opacity duration-300",
                isIframeLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={handleIframeLoad}
              onError={handleError}
            />
          )}

          {showLoadingSkeleton && (
            <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-r from-background via-secondary/20 to-background animate-pulse" />
          )}
        </>
      )}

      {hasError && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-background p-4 text-center">
          <AlertTriangle className="h-10 w-10 text-secondary mb-2" />
          <p className="font-display text-secondary">Video not available</p>
        </div>
      )}
    </div>
  );
}