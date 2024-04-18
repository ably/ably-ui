import React, { useState, useEffect, useRef, ReactNode } from "react";
import Icon from "./Icon";
import "./Slider/component.css";

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
      className={`flex gap-4 left-1/2 ${
        isInline ? "bottom-0" : "absolute -bottom-40 transform -translate-x-1/2"
      }`}
    >
      {Array.from({ length: numSlides }, (_, i) =>
        intervalIndicator ? (
          <li
            key={i}
            className="relative w-40 h-4 mx-1 rounded-full bg-neutral-500"
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
              className={`ui-slider-marker ${
                i === activeIndex ? "text-active-orange" : "text-cool-black"
              }`}
              data-id="slider-marker"
            >
              &#x2b24;
            </span>
          </li>
        )
      )}
    </ul>
  );
};

const Slider = ({ children, options }: SliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const isInline = options?.controlPosition === "inline";

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
    resetInterval();
  };

  const prev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : children.length - 1
    );
    resetInterval();
  };

  const resetInterval = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, options?.interval ?? 10000);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      next();
    }
    if (touchStartX - touchEndX < -50) {
      prev();
    }
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [children.length, options?.interval]);

  return (
    <div
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden w-full py-40">
        <div
          className="flex items-center transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex justify-center sm:px-60 transition-opacity ease-in delay-500 duration-500"
              style={{
                opacity: activeIndex === index ? 1 : 0.1,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`flex items-center pointer-events-none ${
          isInline
            ? "ui-standard-container justify-center gap-24"
            : "sm:flex sm:absolute inset-0 justify-between"
        }`}
      >
        <button
          className={`${
            isInline ? "w-32 h-32" : "hidden sm:flex w-48 h-48"
          } pointer-events-auto rounded border border-mid-grey hover:border-active-orange flex justify-center items-center ui-icon-cta ui-icon-cta-left`}
          onClick={prev}
        >
          <div className="ui-icon-cta-holder flex gap-4">
            <div className="w-full h-full flex-shrink-0 flex items-center justify-center">
              <Icon name="icon-gui-arrow-left" size="1.5rem" />
            </div>
            <div className="w-full h-full flex-shrink-0 flex items-center justify-center">
              <Icon name="icon-gui-arrow-left" size="1.5rem" />
            </div>
          </div>
        </button>

        <SlideIndicator
          numSlides={children.length}
          activeIndex={activeIndex}
          interval={options?.interval ?? 10000}
          intervalIndicator={options?.intervalIndicator}
          isInline={isInline}
        />

        <button
          className={`${
            isInline ? "w-32 h-32" : "hidden sm:flex w-48 h-48"
          } pointer-events-auto rounded border border-mid-grey hover:border-active-orange justify-center items-center ui-icon-cta ui-icon-cta-right`}
          onClick={next}
        >
          <div className="ui-icon-cta-holder flex gap-4">
            <div className="w-full h-full flex-shrink-0 flex items-center justify-center">
              <Icon name="icon-gui-arrow-right" size="1.5rem" />
            </div>
            <div className="w-full h-full flex-shrink-0 flex items-center justify-center">
              <Icon name="icon-gui-arrow-right" size="1.5rem" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Slider;
