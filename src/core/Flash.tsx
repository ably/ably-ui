import React, {
  useEffect,
  useState,
  useRef,
  createContext,
  useContext,
  useCallback,
  useMemo,
  PropsWithChildren,
} from "react";
import DOMPurify from "dompurify";
import Icon from "./Icon";
import { ColorClass } from "./styles/colors/types";
import { IconName } from "./Icon/types";
import cn from "./utils/cn";

type FlashPropsType = "error" | "success" | "notice" | "info" | "alert";

type FlashProps = {
  id: string;
  removed: boolean;
  type: FlashPropsType;
  content: string;
  removeFlash: (id: string) => void;
};

type BackendFlashesProps = {
  flashes: string[][];
};

const FLASH_DATA_ID = "ui-flashes";

type FlashContextType = {
  flashes: FlashProps[];
  addFlashes: (flashes: Pick<FlashProps, "type" | "content">[]) => void;
  removeFlash: (id: string) => void;
};

const FlashContext = createContext<FlashContextType | undefined>(undefined);

type FlashProviderProps = PropsWithChildren;

const FlashProvider = ({ children }: FlashProviderProps) => {
  const [flashes, setFlashes] = useState<FlashProps[]>([]);

  const removeFlash = useCallback((flashId: string) => {
    setFlashes((prev) => prev.filter((item) => item.id !== flashId));
  }, []);

  const addFlashes = useCallback(
    (newFlashes: Pick<FlashProps, "type" | "content">[]) => {
      setFlashes((prev) => {
        const withIds = newFlashes
          .filter(
            (flash) =>
              !prev.some(
                (existing) =>
                  existing.content === flash.content &&
                  existing.type === flash.type,
              ),
          )
          .map((flash) => ({
            ...flash,
            id: Math.random().toString(36).slice(2),
            removed: false,
            removeFlash,
          }));

        return [...prev, ...withIds];
      });
    },
    [removeFlash],
  );

  const contextValue = useMemo(
    () => ({ flashes, addFlashes, removeFlash }),
    [flashes, addFlashes, removeFlash],
  );

  return (
    <FlashContext.Provider value={contextValue}>
      {children}
    </FlashContext.Provider>
  );
};

const useFlashContext = () => {
  const context = useContext(FlashContext);
  if (context === undefined) {
    throw new Error("useFlashContext must be used within FlashProvider");
  }
  return context;
};

const FLASH_BG_COLOR = {
  error: "bg-gui-error",
  success: "bg-green-400",
  notice: "bg-blue-400",
  info: "bg-blue-400",
  alert: "bg-orange-600",
};

const FLASH_TEXT_COLOR = {
  error: "text-neutral-000",
  success: "text-neutral-1300",
  notice: "text-neutral-1300",
  info: "text-neutral-1300",
  alert: "text-neutral-000",
};

const AUTO_HIDE = ["success", "info", "notice"];
const AUTO_HIDE_TIME = 8000;

const useAutoHide = (type: string, closeFlash: () => void) => {
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (AUTO_HIDE.includes(type)) {
      timeoutId.current = setTimeout(() => {
        closeFlash();
      }, AUTO_HIDE_TIME);
    }

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [type, closeFlash]);
};

const Flash = ({ id, type, content, removeFlash }: FlashProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [closed, setClosed] = useState(false);
  const [flashHeight, setFlashHeight] = useState(0);

  const closeFlash = () => {
    if (ref.current) {
      setFlashHeight(ref.current.getBoundingClientRect().height);
    }

    setClosed(true);

    setTimeout(() => {
      if (id) {
        removeFlash(id);
      }
    }, 100);
  };

  useAutoHide(type, closeFlash);

  const animateEntry = !closed;

  let style;

  if (flashHeight && !closed) {
    style = { height: `${flashHeight}px` };
  } else if (closed) {
    style = { height: 0, marginTop: 0, zIndex: -1 };
  } else {
    style = {};
  }

  const safeContent = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ["a"],
    ALLOWED_ATTR: ["href", "data-method"],
    ALLOWED_URI_REGEXP: /^\/[^/]/,
  });

  const withIcons: Record<FlashPropsType, IconName | ""> = {
    notice: "icon-gui-ably-badge",
    success: "icon-gui-check-outline",
    error: "icon-gui-exclamation-triangle-outline",
    alert: "icon-gui-exclamation-triangle-outline",
    info: "",
  };

  const iconColor: Record<FlashPropsType, ColorClass | ""> = {
    notice: FLASH_TEXT_COLOR.notice as ColorClass,
    success: FLASH_TEXT_COLOR.success as ColorClass,
    error: FLASH_TEXT_COLOR.error as ColorClass,
    alert: FLASH_TEXT_COLOR.alert as ColorClass,
    info: "",
  };

  return (
    <div
      className={cn(
        "ui-flash-message ui-grid-px",
        animateEntry && "ui-flash-message-enter",
      )}
      style={style}
      ref={ref}
      data-id="ui-flash"
      data-testid="ui-flash"
    >
      <div
        className={cn(
          FLASH_BG_COLOR[type],
          "p-8 flex align-center rounded shadow-container-subtle",
        )}
      >
        {withIcons[type] && iconColor[type] && (
          <Icon
            name={withIcons[type]}
            color={iconColor[type]}
            size="1.5rem"
            additionalCSS="mr-4 self-baseline"
          />
        )}
        <p
          className={cn("ui-text-p1 mr-4", FLASH_TEXT_COLOR[type])}
          dangerouslySetInnerHTML={{ __html: safeContent }}
        />
        <button
          type="button"
          className="p-0 ml-auto self-start focus:outline-none"
          onClick={closeFlash}
        >
          {iconColor[type] && (
            <Icon
              name="icon-gui-x-mark-outline"
              color={iconColor[type]}
              size="1.5rem"
              additionalCSS="transition-colors"
            />
          )}
        </button>
      </div>
    </div>
  );
};

const Flashes = () => {
  const { flashes, removeFlash } = useFlashContext();

  return (
    <div className="ui-flash" data-id={FLASH_DATA_ID}>
      {flashes
        .filter((item) => !item.removed)
        .map((flash) => (
          <Flash key={flash.id} {...flash} removeFlash={removeFlash} />
        ))}
    </div>
  );
};

const BackendFlashes = ({ flashes }: BackendFlashesProps) => {
  const context = useContext(FlashContext);

  useEffect(() => {
    if (!context) {
      console.warn("BackendFlashes must be used within FlashProvider");
      return;
    }

    const transformedFlashes = flashes.map((flash) => {
      const [type, content] = flash;
      return { type: type as FlashPropsType, content };
    });

    if (transformedFlashes.length > 0) {
      context.addFlashes(transformedFlashes);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flashes]);

  if (!context) return null;

  return <Flashes />;
};

export { FLASH_DATA_ID, Flashes, FlashProvider, useFlashContext };
export default BackendFlashes;
