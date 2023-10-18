export const PLATFORM_PANEL = "#products-panel";
export const PLATFORM_PANEL_OPEN_CONTROL =
  "[data-id='meganav-control'][aria-controls='products-panel']";

export const COMPANY = "#company-panel";
export const COMPANY_OPEN_CONTROL =
  "[data-id='meganav-control'][aria-controls='company-panel']";

export const USE_CASES_PANEL = "#use-cases-panel";
export const USE_CASES_PANEL_OPEN_CONTROL =
  "[data-id='meganav-control'][aria-controls='use-cases-panel']";

export const DEVELOPERS_PANEL = "#developers-panel";
export const DEVELOPERS_PANEL_OPEN_CONTROL =
  "[data-id='meganav-control'][aria-controls='developers-panel']";

export const MOBILE_DROPDOWN = "#meganav-mobile-dropdown";
export const MOBILE_DROPDOWN_CONTROL =
  "[data-id='meganav-control-mobile-dropdown']";

export const MOBILE_PLATFORM_PANEL = "#products-panel-mobile";
export const MOBILE_PLATFORM_PANEL_OPEN_CONTROL =
  "[data-id='meganav-control-mobile-panel-open'][aria-controls='products-panel-mobile']";
export const MOBILE_PLATFORM_PANEL_CLOSE_CONTROL =
  "[data-id='meganav-control-mobile-panel-close'][aria-controls='products-panel-mobile']";

export const SEARCH_PANEL = "#panel-search";
export const SEARCH_PANEL_OPEN_CONTROL =
  "[data-id='meganav-control'][aria-controls='panel-search']";
export const SEARCH_PANEL_INPUT = "[data-id='meganav-search-input']";
export const SEARCH_PANEL_MOBILE_INPUT =
  "[data-id='meganav-mobile-search-input']";
export const SEARCH_PANEL_MOBILE_CLEAR =
  "[data-id='meganav-search-input-clear']";

export const OUTSIDE_MEGANAV = "body";

export const NOTICE = "[data-id='ui-notice']";

export const mockContent = (document) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("mt-64", "max-w-screen-lg");
  let content;
  Array.from({ length: 100 }, () => {
    content +=
      "Quis et est veniam sit minim culpa minim esse Lorem est est cupidatat.";
  });
  wrapper.innerText = content;
  return wrapper;
};
