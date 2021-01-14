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
  ).matches;

const dropDownsHaveFocus = (nodeList) =>
  Array.from(nodeList).some(
    (btn) =>
      document.activeElement !== btn &&
      btn.parentNode.contains(document.activeElement)
  );

const itemControlsFocused = (itemControls) =>
  Array.from(itemControls).some((btn) => document.activeElement === btn);

export default function Meganav() {
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
      .forEach((btn) => {
        btn.setAttribute("aria-expanded", false);
      });

    itemControls.forEach((btn) => btn.parentNode.classList.remove(HOVER_CLASS));
  };

  const itemControlsEvents = () => {
    // Open meganav on hover, but only under conditions where hover is "likely" and panels don't have focus.
    // Panels opening on focus is done using CSS only, but we update aria attributes here.
    const mouseenterHandler = (btn) => () => {
      if (
        !dropDownsHaveFocus(itemControls) &&
        !itemControlsFocused(itemControls) &&
        hoverEnabled()
      ) {
        btn.parentNode.classList.add(HOVER_CLASS);
        btn.setAttribute("aria-expanded", true);
      }
    };

    const mouseleaveHandler = (btn) => () => {
      if (
        !dropDownsHaveFocus(itemControls) &&
        !itemControlsFocused(itemControls) &&
        hoverEnabled()
      ) {
        btn.parentNode.classList.remove(HOVER_CLASS);
        btn.setAttribute("aria-expanded", false);
      }
    };

    const focusHandler = (btn) => () => {
      itemControls.forEach((btn) => {
        btn.parentNode.classList.remove(HOVER_CLASS);
        btn.setAttribute("aria-expanded", false);
      });
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

  // Close menu when user clicks outside of viewport
  const windowOnBlur = () => {
    window.onblur = () => closeAndCleanUp();
    return () => (window.onblur = null);
  };

  const mobilePanelOpenClick = () => {
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

  // Mobile menu toggle
  const mobileMenuToggleClick = () => {
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

  // Close menu when click/tap outside of nav
  const documentClick = () => {
    // Fetch li's that contain buttons and check if the click happens within the panel they hold,
    // as well as the mobile menu button - if not, close the nav
    const clickHandler = (e) => {
      if (
        Array.from(itemControls).some((btn) =>
          btn.parentNode.contains(e.target)
        ) ||
        Array.from(mobilePanelOpen).some((btn) =>
          btn.parentNode.contains(e.target)
        ) ||
        e.target === mobileMenu
      )
        return;
      console.log("here");
      closeAndCleanUp();
    };

    document.addEventListener("click", clickHandler);

    return {
      target: document,
      event: "focusin",
      handler: clickHandler,
    };
  };

  const teardowns = [
    itemControlsEvents(),
    windowOnBlur(),
    mobilePanelOpenClick(),
    mobilePanelCloseClick(),
    mobileMenuToggleClick(),
    documentClick(),
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
