import "./component.css";

export default function Meganav() {
  const meganav = document.querySelector('[data-id="meganav"]');
  const mobileMenuBtn = document.querySelector(
    '[data-id="meganav-mobile-menu-btn"]'
  );
  const navBtn = document.querySelectorAll('[data-id="meganav-nav-item"]');
  const mobilePanelBtn = document.querySelectorAll(
    '[data-id="meganav-mobile-panel-btn"]'
  );
  const mobilePanelClose = document.querySelectorAll(
    '[data-id="meganav-mobile-panel-close"]'
  );

  navBtn.forEach((btn) => {
    const item = btn.parentNode;

    item.addEventListener("mouseenter", () => {
      navBtn.forEach((btn) => btn.setAttribute("aria-expanded", false));
      btn.setAttribute("aria-expanded", true);
    });

    item.addEventListener("mouseleave", () =>
      btn.setAttribute("aria-expanded", false)
    );
  });

  document.addEventListener("click", ({ target }) => {
    if (
      meganav.contains(target) &&
      (target.type === "button" || target.type === "search")
    ) {
      return;
    }

    document.activeElement.blur();

    mobileMenuBtn.setAttribute("aria-expanded", false);
    mobilePanelBtn.forEach((btn) => btn.setAttribute("aria-expanded", false));
    mobilePanelClose.forEach((btn) => btn.setAttribute("aria-expanded", false));
  });

  window.onblur = () => {
    mobileMenuBtn.setAttribute("aria-expanded", false);
    mobilePanelBtn.forEach((btn) => btn.setAttribute("aria-expanded", false));
    mobilePanelClose.forEach((btn) => btn.setAttribute("aria-expanded", false));
  };

  mobilePanelBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.setAttribute("aria-expanded", true);
      const ariaId = btn.getAttribute("aria-controls");
      meganav
        .querySelector(
          `[data-id="meganav-mobile-panel-close"][aria-controls=${ariaId}]`
        )
        .setAttribute("aria-expanded", true);
    });
  });

  mobilePanelClose.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.setAttribute("aria-expanded", false);
      const ariaId = btn.getAttribute("aria-controls");
      meganav
        .querySelector(
          `[data-id="meganav-mobile-panel-btn"][aria-controls=${ariaId}]`
        )
        .setAttribute("aria-expanded", false);
      mobileMenuBtn.focus();
    });
  });

  mobileMenuBtn.addEventListener("click", ({ currentTarget }) => {
    const ariaExpanded = currentTarget.getAttribute("aria-expanded");

    if (ariaExpanded === "true") {
      document.activeElement.blur();
    }

    currentTarget.setAttribute(
      "aria-expanded",
      ariaExpanded === "true" ? false : true
    );
  });
}
