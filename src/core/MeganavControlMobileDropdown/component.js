import { queryId } from "../dom-query";

const MeganavControlMobileDropdown = ({ clearPanels }) => {
  const control = queryId("meganav-control-mobile-dropdown");
  const dropdown = queryId("meganav-mobile-dropdown");
  const menuIcon = queryId("meganav-control-mobile-dropdown-menu");
  const closeIcon = queryId("meganav-control-mobile-dropdown-menu-close");

  const clickHandler = () => {
    const ariaExpanded = control.getAttribute("aria-expanded");

    if (ariaExpanded === "false") {
      dropdown.classList.replace("invisible", "visible");
      control.setAttribute("aria-expanded", true);
    } else {
      dropdown.classList.replace("visible", "invisible");
      control.setAttribute("aria-expanded", false);
      clearPanels();
    }

    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  };

  control.addEventListener("click", clickHandler);

  return {
    teardown: () => control.removeEventListener("click", clickHandler),
    clear: () => {
      dropdown.classList.replace("visible", "invisible");
      control.setAttribute("aria-expanded", false);
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    },
  };
};

export default MeganavControlMobileDropdown;
