import React, { useEffect, useState, useRef } from "react";
import DOMPurify from "dompurify";
import { getRemoteDataStore } from "./remote-data-store.js";
import ConnectStateWrapper from "./ConnectStateWrapper";
import Icon from "./Icon";
import { ColorClass } from "./styles/colors/types";
import { IconName } from "./Icon/types";

type FlashPropsType = "error" | "success" | "notice" | "info" | "alert";

type FlashProps = {
  id: string;
  removed: boolean;
  type: FlashPropsType;
  content: string;
  removeFlash: (id: string) => void;
};

type FlashesProps = {
  flashes: { items: FlashProps[] };
};

type BackendFlashesProps = {
  flashes: string[][];
};

const REDUCER_KEY = "flashes";
const FLASH_DATA_ID = "ui-flashes";

const initialState = { items: [] };

const reducerFlashes = {
  [REDUCER_KEY]: (
    state: {
      items: FlashProps[];
    } = initialState,
    action: { type: string; payload: FlashProps | FlashProps[] },
  ) => {
    switch (action.type) {
      case "flash/push": {
        const flashes = Array.isArray(action.payload)
          ? action.payload
          : [action.payload];
        return { items: [...state.items, ...flashes] };
      }
      default:
        return state;
    }
  },
};

// Not cool but redux isn't a long term plan here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectFlashes = (store: any): { items: FlashProps[] } =>
  store.getState()[REDUCER_KEY];

const FLASH_BG_COLOR = {
  error: "bg-gui-error",
  success: "bg-zingy-green",
  notice: "bg-electric-cyan",
  info: "bg-electric-cyan",
  alert: "bg-active-orange",
};

const FLASH_TEXT_COLOR = {
  error: "text-white",
  success: "text-cool-black",
  notice: "text-cool-black",
  info: "text-cool-black",
  alert: "text-white",
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
  }, []);
};

const Flash = ({ id, type, content, removeFlash }: FlashProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [closed, setClosed] = useState(false);
  const [flashHeight, setFlashHeight] = useState(0);
  const [triggerEntryAnimation, setTriggerEntryAnimation] = useState(false);

  const closeFlash = () => {
    if (ref.current) {
      setFlashHeight(ref.current.getBoundingClientRect().height);
    }

    setClosed(true);

    setTimeout(() => {
      id && removeFlash(id);
    }, 100);
  };

  useEffect(() => setTriggerEntryAnimation(true), []);
  useAutoHide(type, closeFlash);

  const animateEntry = triggerEntryAnimation && !closed;

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
    ALLOWED_ATTR: ["href", "data-method", "rel"],
  });

  const withIcons: Record<FlashPropsType, IconName | ""> = {
    notice: "icon-gui-ably-badge",
    success: "icon-gui-tick",
    error: "icon-gui-warning",
    alert: "icon-gui-warning",
    info: "",
  };

  const iconColor: Record<FlashPropsType, ColorClass | ""> = {
    notice: "text-cool-black",
    success: "text-cool-black",
    error: "text-white",
    alert: "text-white",
    info: "",
  };

  return (
    <div
      className={`ui-flash-message ui-grid-px ${
        animateEntry ? "ui-flash-message-enter" : ""
      }`}
      style={style}
      ref={ref}
      data-id="ui-flash"
    >
      <div
        className={`${FLASH_BG_COLOR[type]} p-32 flex align-center rounded shadow-container-subtle`}
      >
        {withIcons[type] && iconColor[type] && (
          <Icon
            name={withIcons[type]}
            color={iconColor[type]}
            size="1.5rem"
            additionalCSS="mr-16 self-baseline"
          />
        )}
        <p
          className={`ui-text-p1 mr-16 ${FLASH_TEXT_COLOR[type]}`}
          dangerouslySetInnerHTML={{ __html: safeContent }}
        />
        <button
          type="button"
          className="p-0 ml-auto self-start focus:outline-none"
          onClick={closeFlash}
        >
          {iconColor[type] && (
            <Icon
              name="icon-gui-close"
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

const Flashes = ({ flashes }: FlashesProps) => {
  const [flashesWithIds, setFlashesWithIds] = useState<FlashProps[]>([]);

  const removeFlash = (flashId: string) =>
    setFlashesWithIds((items) => items.filter((item) => item.id !== flashId));

  useEffect(() => {
    setFlashesWithIds((state) => {
      return [
        ...state,
        ...(flashes?.items ?? []).map((flash) => ({
          ...flash,
          id: Math.random().toString(36).slice(2),
          removed: false,
        })),
      ];
    });
  }, [flashes]);

  return (
    <div className="ui-flash" data-id={FLASH_DATA_ID}>
      {flashesWithIds
        .filter((item) => !item.removed)
        .map((flash) => (
          <Flash key={flash.id} {...flash} removeFlash={removeFlash} />
        ))}
    </div>
  );
};

const BackendFlashes = ({ flashes }: BackendFlashesProps) => {
  useEffect(() => {
    const transformedFlashes =
      flashes.map((flash) => {
        const [type, content] = flash;
        return { type, content };
      }) || [];

    if (transformedFlashes.length > 0) {
      const store = getRemoteDataStore();

      store.dispatch({
        type: "flash/push",
        payload: transformedFlashes,
      });
    }
  }, []);

  const WrappedFlashes = ConnectStateWrapper(Flashes, {
    flashes: selectFlashes,
  });

  return <WrappedFlashes />;
};

export { reducerFlashes, FLASH_DATA_ID, Flashes };
export default BackendFlashes;
