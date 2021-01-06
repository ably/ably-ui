import "./component.css";

// The below javascript is not required for the meganav to function but will add behaviours that users expect, help with managing focus and aria attributes

const HOVER_CLASS = "ui-meganav-item-hover";

const queryId = (val, append = "") =>
  document.querySelector(`[data-id=${val}]${append}`);

const queryIdAll = (val, append = "") =>
  document.querySelectorAll(`[data-id=${val}]${append}`);

const hoverEnabled = () =>
  window.matchMedia(
    "(hover: hover) and (pointer: fine) and (min-width: 1040px)"
  );

const focusOutsideNodeTree = (nodeList) =>
  !Array.from(nodeList).some((btn) =>
    btn.parentNode.contains(document.activeElement)
  );

export default function Meganav() {
  const meganav = queryId("meganav");
  const mobileMenu = queryId("meganav-mobile-menu");
  const itemControls = queryIdAll("meganav-item-control");
  const mobilePanelOpen = queryIdAll("meganav-mobile-panel-open");
  const mobilePanelClose = queryIdAll("meganav-mobile-panel-close");
  const otherControls = [
    [mobileMenu],
    mobilePanelOpen,
    mobilePanelClose,
    itemControls,
  ];

  const closeAndCleanUp = () => {
    // Clear focus to force close the nav
    document.activeElement.blur();

    otherControls
      .map((control) => Array.from(control))
      .flat()
      .forEach((btn) => btn.setAttribute("aria-expanded", false));

    itemControls.forEach((btn) => btn.parentNode.classList.remove(HOVER_CLASS));
  };

  const itemControlsEvents = () => {
    // Open meganav on hover, but only under conditions where hover is "likely".
    // Panels opening on focus is done using CSS only.
    const mouseenterHandler = (btn) => () => {
      if (focusOutsideNodeTree(itemControls) && hoverEnabled()) {
        btn.parentNode.classList.add(HOVER_CLASS);
        btn.setAttribute("aria-expanded", true);
      }
    };

    const mouseleaveHandler = (btn) => () => {
      if (focusOutsideNodeTree(itemControls) && hoverEnabled()) {
        btn.setAttribute("aria-expanded", false);
        btn.parentNode.classList.remove(HOVER_CLASS);
      }
    };

    const focusHandler = (btn) => () => {
      itemControls.forEach((btn) => btn.setAttribute("aria-expanded", false));
      btn.setAttribute("aria-expanded", true);
    };

    const teardown = Array.from(itemControls)
      .map((btn) => {
        const item = btn.parentNode;

        const mouseenterRef = mouseenterHandler(btn);
        const mouseleaveRef = mouseleaveHandler(btn);
        const focusRef = focusHandler(btn);

        item.addEventListener("mouseenter", mouseenterRef);
        item.addEventListener("mouseleave", mouseleaveRef);
        btn.addEventListener("focus", focusRef);

        return [
          { target: item, event: "mouseenter", handler: mouseenterRef },
          { target: item, event: "mouseleave", handler: mouseleaveRef },
          { target: btn, event: "focus", handler: focusRef },
        ];
      })
      .flat();

    return teardown;
  };

  const windowOnBlur = () => {
    // Close when user clicks outside of viewport
    window.addEventListener("onblur", () => closeAndCleanUp());
    return () => (window.onblur = null);
  };

  const mobilePanelOpenClick = () => {
    // Open mobile panels
    const clickHandler = (btn) => () => {
      btn.setAttribute("aria-expanded", true);
      const ariaId = btn.getAttribute("aria-controls");

      queryId(
        "meganav-mobile-panel-close",
        `[aria-controls=${ariaId}]`
      ).setAttribute("aria-expanded", true);
    };

    const teardown = Array.from(mobilePanelOpen).map((btn) => {
      const handler = clickHandler(btn);
      btn.addEventListener("click", handler);
      return { target: btn, event: "click", handler };
    });

    return teardown;
  };

  const mobilePanelCloseClick = () => {
    // Close mobile panels
    const clickHandler = (btn) => () => {
      btn.setAttribute("aria-expanded", false);
      const ariaId = btn.getAttribute("aria-controls");

      queryId(
        "meganav-mobile-panel-open",
        `[aria-controls=${ariaId}]`
      ).setAttribute("aria-expanded", false);

      mobileMenu.focus();
    };

    const teardown = Array.from(mobilePanelClose).map((btn) => {
      const handler = clickHandler(btn);
      btn.addEventListener("click", handler);
      return { target: btn, event: "click", handler };
    });

    return teardown;
  };

  const mobileMenuToggleClick = () => {
    // Mobile menu toggle; clear focus
    const clickHandler = ({ currentTarget }) => {
      const ariaExpanded = currentTarget.getAttribute("aria-expanded");

      if (ariaExpanded === "true") {
        closeAndCleanUp();
      } else {
        currentTarget.setAttribute("aria-expanded", true);
      }
    };

    mobileMenu.addEventListener("click", clickHandler);

    return {
      target: mobileMenu,
      event: "click",
      handler: clickHandler,
    };
  };

  const meganavFocusout = () => {
    const focusoutHandler = () => {
      if (meganav.contains(document.activeElement)) return;
      closeAndCleanUp();
    };

    meganav.addEventListener("focusout", focusoutHandler);

    return {
      target: meganav,
      event: "focusout",
      handler: focusoutHandler,
    };
  };

  const teardowns = [
    itemControlsEvents(),
    windowOnBlur(),
    mobilePanelOpenClick(),
    mobilePanelCloseClick(),
    mobileMenuToggleClick(),
    meganavFocusout(),
  ].flat();

  return () =>
    teardowns.forEach((teardown) => {
      if (typeof teardown === "function") {
        teardown();
      } else {
        const { target, event, handler } = teardown;
        target.removeEventListener(event, handler);
      }
    });
}
