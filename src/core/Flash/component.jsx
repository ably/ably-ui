import React, { useEffect, useState, useRef } from "react";
import DOMPurify from "dompurify";
import T from "prop-types";
import { nanoid } from "nanoid/non-secure";

import { getRemoteDataStore } from "../remote-data-store";
import ConnectStateWrapper from "../ConnectStateWrapper/component.jsx";
import Icon from "../Icon/component.jsx";

const REDUCER_KEY = "flashes";
const FLASH_DATA_ID = "ui-flashes";

const initialState = { items: [] };

const reducerFlashes = {
  [REDUCER_KEY]: (state = initialState, action) => {
    switch (action.type) {
      case "flash/push": {
        const flashes = Array.isArray(action.payload) ? action.payload : [action.payload];
        return { items: [...state.items, ...flashes] };
      }
      default:
        return state;
    }
  },
};

const selectFlashes = (store) => store.getState()[REDUCER_KEY];

const FlashT = {
  type: T.oneOf(["error", "success", "notice", "info", "alert"]),
  content: T.string,
};

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

const useAutoHide = (type, closeFlash) => {
  const timeoutId = useRef(null);

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

const Flash = ({ id, type, content, removeFlash }) => {
  const ref = useRef(null);
  const [closed, setClosed] = useState(false);
  const [flashHeight, setFlashHeight] = useState(0);
  const [triggerEntryAnimation, setTriggerEntryAnimation] = useState(false);

  const closeFlash = () => {
    if (ref.current) {
      setFlashHeight(ref.current.getBoundingClientRect().height);
    }

    setClosed(true);

    setTimeout(() => {
      removeFlash(id);
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

  const withIcons = {
    notice: "icon-gui-ably-badge",
    success: "icon-gui-tick",
    error: "icon-gui-warning",
    alert: "icon-gui-warning",
  };

  const iconColor = {
    notice: "text-cool-black",
    success: "text-cool-black",
    error: "text-white",
    alert: "text-white",
  };

  return (
    <div className={`ui-flash-message ui-grid-px ${animateEntry ? "ui-flash-message-enter" : ""}`} style={style} ref={ref} data-id="ui-flash">
      <div className={`${FLASH_BG_COLOR[type]} p-32 flex align-center rounded shadow-container-subtle`}>
        {withIcons[type] && <Icon name={withIcons[type]} color={iconColor[type]} size="1.5rem" additionalCSS="mr-16 self-baseline" />}
        <p className={`ui-flash-text ${FLASH_TEXT_COLOR[type]}`} dangerouslySetInnerHTML={{ __html: safeContent }} />
        <button type="button" className="p-0 ml-auto self-start focus:outline-none" onClick={closeFlash}>
          <Icon name="icon-gui-close" color={iconColor[type]} size="1.5rem" additionalCSS="transition-colors" />
        </button>
      </div>
    </div>
  );
};

Flash.propTypes = {
  ...FlashT,
};

const Flashes = ({ flashes }) => {
  const [flashesWithIds, setFlashesWithIds] = useState([]);

  const removeFlash = (flashId) => setFlashesWithIds((items) => items.filter((item) => item.id !== flashId));

  useEffect(() => {
    setFlashesWithIds((state) => {
      return [...state, ...(flashes?.items || []).map((flash) => ({ ...flash, id: nanoid(), removed: false }))];
    });
  }, [flashes]);

  return (
    <div className="ui-flash" data-id={FLASH_DATA_ID}>
      {flashesWithIds
        .filter((item) => !item.removed)
        .map((flash) => (
          <Flash removeFlash={removeFlash} key={flash.id} {...flash} />
        ))}
    </div>
  );
};

Flashes.propTypes = {
  flashes: T.shape({ items: T.arrayOf(T.shape(FlashT)) }),
};

const BackendFlashes = ({ flashes }) => {
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

  const WrappedFlashes = ConnectStateWrapper(Flashes, { flashes: selectFlashes });

  return <WrappedFlashes />;
};

BackendFlashes.propTypes = {
  flashes: T.arrayOf(T.arrayOf(T.string)),
};

export { reducerFlashes, FLASH_DATA_ID, Flashes };
export default BackendFlashes;
