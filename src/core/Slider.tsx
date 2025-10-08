import React, { ReactNode, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import Icon from "./Icon";
import cn from "./utils/cn";

interface SliderProps {
  children: ReactNode[];
  options?: {
    interval?: number;
    controlPosition?: "inline" | "floating";
    intervalIndicator?: boolean;
  };
}

interface SliderIndicatorProps {
  numSlides: number;
  activeIndex: number;
  interval: number;
  intervalIndicator?: boolean;
  isInline?: boolean;
}

const SlideIndicator = ({
  numSlides,
  activeIndex,
  interval,
  intervalIndicator,
  isInline,
}: SliderIndicatorProps) => {
  return (
    <ul
      className={cn(
        "flex gap-1 left-1/2",
        isInline ? "bottom-0" : "absolute bottom-0 transform -translate-x-1/2",
      )}
    >
      {Array.from({ length: numSlides }, (_, i) =>
        intervalIndicator ? (
          <li
            key={i}
            className="relative w-10 h-1 mx-px rounded-full bg-neutral-500"
          >
            {i === activeIndex && (
              <span
                className="absolute inset-0 rounded-full bg-active-orange"
                style={{
                  animation: `fillAnimation ${interval}ms linear`,
                }}
              ></span>
            )}
          </li>
        ) : (
          <li key={i}>
            <span
              className={cn(
                "ui-slider-marker",
                i === activeIndex ? "text-active-orange" : "text-cool-black",
              )}
              data-id="slider-marker"
            >
              &#x2b24;
            </span>
          </li>
        ),
      )}
    </ul>
  );
};

const Slider = ({ children, options }: SliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const interval = options?.interval ?? 10000;
  const isInline = options?.controlPosition === "inline";

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: interval, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden w-full py-10" ref={emblaRef}>
        <div className="flex">
          {children.map((child, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex justify-center sm:px-[3.75rem]"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "flex items-center pointer-events-none",
          isInline
            ? "ui-standard-container justify-center gap-6 -mt-4"
            : "sm:flex sm:absolute inset-0 justify-between",
        )}
      >
        <button
          className={cn(
            isInline ? "w-8 h-8" : "hidden sm:flex w-12 h-12",
            "pointer-events-auto rounded border border-mid-grey hover:border-active-orange flex justify-center items-center ui-icon-cta ui-icon-cta-left",
          )}
          onClick={scrollPrev}
        >
          <div className="ui-icon-cta-holder flex w-12">
            <div className="w-full h-full flex-shrink-0 flex items-center justify-center">
              <Icon name="icon-gui-arrow-long-left-outline" size="1.5rem" />
            </div>
            <div className="w-full h-full flex-shrink-0 flex items-center justify-center">
              <Icon name="icon-gui-arrow-long-left-outline" size="1.5rem" />
            </div>
          </div>
        </button>

        <SlideIndicator
          numSlides={children.length}
          activeIndex={activeIndex}
          interval={interval}
          intervalIndicator={options?.intervalIndicator}
          isInline={isInline}
        />

        <button
          className={cn(
            isInline ? "w-8 h-8" : "hidden sm:flex w-12 h-12",
            "pointer-events-auto rounded border border-mid-grey hover:border-active-orange justify-center items-center ui-icon-cta ui-icon-cta-right",
          )}
          onClick={scrollNext}
        >
          <div
            className={cn(
              "ui-icon-cta-holder flex w-12",
              isInline ? "-ml-3.5" : "",
            )}
          >
            <div className="w-full h-full flex-shrink-0 flex items-center justify-center">
              <Icon name="icon-gui-arrow-long-right-outline" size="1.5rem" />
            </div>
            <div className="w-full h-full flex-shrink-0 flex items-center justify-center">
              <Icon name="icon-gui-arrow-long-right-outline" size="1.5rem" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Slider;
