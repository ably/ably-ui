import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  ReactNode,
  TouchEvent,
} from "react";
import Icon from "./Icon";

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

const SLIDE_TRANSITION_LENGTH = 300;

const SlideIndicator = ({
  numSlides,
  activeIndex,
  interval,
  intervalIndicator,
  isInline,
}: SliderIndicatorProps) => {
  return (
    <ul
      className={`flex gap-1 left-1/2 ${
        isInline ? "bottom-0" : "absolute bottom-0 transform -translate-x-1/2"
      }`}
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
              className={`ui-slider-marker ${
                i === activeIndex ? "text-active-orange" : "text-cool-black"
              }`}
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

const setupSlides = (children: ReactNode[], activeIndex: number) => [
  children[activeIndex === 0 ? children.length - 1 : activeIndex - 1],
  children[activeIndex],
  children[activeIndex === children.length - 1 ? 0 : activeIndex + 1],
];

const Slider = ({ children, options }: SliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [slides, setSlides] = useState<ReactNode[]>(
    setupSlides(children, activeIndex),
  );
  const [translationCoefficient, setTranslationCoefficient] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [slideLock, setSlideLock] = useState(false);

  const isInline = options?.controlPosition === "inline";

  const next = useCallback(() => {
    if (!slideLock) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
      setTranslationCoefficient(1);
      setSlideLock(true);
    }
  }, [slideLock, children.length]);

  const prev = useCallback(() => {
    if (!slideLock) {
      setActiveIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : children.length - 1,
      );
      setTranslationCoefficient(-1);
      setSlideLock(true);
    }
  }, [slideLock, children.length]);

  const resetInterval = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
      setTranslationCoefficient(1);
      setSlideLock(true);
    }, options?.interval ?? 10000);
  }, [children.length, options?.interval]);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
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
  }, [children.length, options?.interval, resetInterval]);

  useEffect(() => {
    setTimeout(() => {
      setSlides(setupSlides(children, activeIndex));
      setTranslationCoefficient(0);
      setSlideLock(false);
    }, SLIDE_TRANSITION_LENGTH);
  }, [activeIndex, children]);

  return (
    <div
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-y-visible overflow-x-clip w-full py-10">
        <div
          className={`flex items-center ${
            translationCoefficient !== 0
              ? `transition-transform ease-in-out duration-${SLIDE_TRANSITION_LENGTH}`
              : ""
          } `}
          style={{
            transform: `translateX(-${(translationCoefficient + 1) * 100}%)`,
          }}
        >
          {slides.map((child, index) => (
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
        className={`flex items-center pointer-events-none ${
          isInline
            ? "ui-standard-container justify-center gap-6 -mt-4"
            : "sm:flex sm:absolute inset-0 justify-between"
        }`}
      >
        <button
          className={`${
            isInline ? "w-8 h-8" : "hidden sm:flex w-12 h-12"
          } pointer-events-auto rounded border border-mid-grey hover:border-active-orange flex justify-center items-center ui-icon-cta ui-icon-cta-left`}
          onClick={prev}
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
          interval={options?.interval ?? 10000}
          intervalIndicator={options?.intervalIndicator}
          isInline={isInline}
        />

        <button
          className={`${
            isInline ? "w-8 h-8" : "hidden sm:flex w-12 h-12"
          } pointer-events-auto rounded border border-mid-grey hover:border-active-orange justify-center items-center ui-icon-cta ui-icon-cta-right`}
          onClick={next}
        >
          <div className="ui-icon-cta-holder flex w-12">
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
