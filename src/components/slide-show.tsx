"use client";

// @ts-ignore — package ships without bundled types
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useCallback, useRef } from "react";

// Re-export Maximize2 so Turbopack registers its module factory even if cached chunks request it
export { Maximize2 };

import "@splidejs/react-splide/css";

/**
 * Full-bleed screenshot at its natural aspect ratio. The carousel's `autoHeight`
 * resizes the track to the active slide, so shorter images don't inherit dead
 * space from a taller sibling — no matte or uniform frame needed.
 */
const Frame = ({
  image,
  priority,
  onImageLoad,
}: {
  image: string;
  priority?: boolean;
  onImageLoad?: () => void;
}) => (
  <div className="relative block w-full overflow-hidden rounded-xl border border-border">
    <Image
      src={image}
      alt="Project screenshot"
      width={1920}
      height={1080}
      priority={priority}
      unoptimized
      onLoad={onImageLoad}
      sizes="(max-width: 768px) 100vw, 850px"
      className="block h-auto w-full select-none"
    />
  </div>
);

const SlideShow = ({ images }: { images: string[] }) => {
  const multiple = images && images.length > 1;
  const splideRef = useRef<any>(null);

  if (!images || images.length === 0) return null;

  // Next/Image loads asynchronously, so the slide's real height isn't known when
  // Splide first measures it. Re-trigger autoHeight once each image is decoded.
  const remeasure = useCallback(() => {
    splideRef.current?.splide?.emit("resize");
  }, []);

  return (
    <>
      {multiple ? (
        <Splide
          ref={splideRef}
          className="portfolio-slider my-2"
          hasTrack={false}
          options={{
            type: "loop",
            autoplay: true,
            interval: 4500,
            speed: 600,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            perPage: 1,
            perMove: 1,
            autoHeight: true,
            pauseOnHover: true,
            pauseOnFocus: true,
            arrows: true,
            pagination: true,
            gap: "1rem",
          }}
        >
          <SplideTrack>
            {images.map((image, idx) => (
              <SplideSlide key={image}>
                <Frame
                  image={image}
                  priority={idx === 0}
                  onImageLoad={remeasure}
                />
              </SplideSlide>
            ))}
          </SplideTrack>

          <div className="splide__arrows">
            <button
              type="button"
              className="splide__arrow splide__arrow--prev"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={2} />
            </button>
            <button
              type="button"
              className="splide__arrow splide__arrow--next"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>

          <ul className="splide__pagination" />
        </Splide>
      ) : (
        <div className="my-2">
          <Frame image={images[0]} priority />
        </div>
      )}
    </>
  );
};

export default SlideShow;
