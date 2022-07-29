import React from "react";
import T from "prop-types";

import SignOutLink from "../SignOutLink/component.jsx";
import MeganavSearchSuggestions from "../MeganavSearchSuggestions/component.jsx";
import Icon from "../Icon/component.jsx";

import MeganavData from "../Meganav/component.json";
import MeganavControlMobileDropdown from "../MeganavControlMobileDropdown/component.jsx";
import MeganavControlMobilePanelClose from "../MeganavControlMobilePanelClose/component.jsx";
import MeganavControlMobilePanelOpen from "../MeganavControlMobilePanelOpen/component.jsx";

const MeganavItemsMobile = ({ panels, paths, sessionState, theme, loginLink, absUrl }) => {
  const classNames = `ui-meganav-link ${theme.textColor}`;

  return (
    <ul className="flex md:hidden" data-id="meganav-items-mobile">
      <li>
        {sessionState.signedIn && sessionState.logOut ? (
          <SignOutLink absUrl={absUrl} {...sessionState.logOut}>
            {({ text, href, onClick }) => (
              <a onClick={onClick} href={absUrl(href)} className={classNames} data-id="meganav-link">
                {text}
              </a>
            )}
          </SignOutLink>
        ) : (
          <a href={absUrl(loginLink)} className={classNames} data-id="meganav-link">
            Login
          </a>
        )}
      </li>

      <li className="ui-meganav-item">
        <MeganavControlMobileDropdown theme={theme} />

        <div className="ui-meganav-mobile-dropdown invisible" id="meganav-mobile-dropdown" data-id="meganav-mobile-dropdown">
          <div className="pt-24 pb-16 ui-grid-px bg-white">
            <form className="mb-16" action={absUrl("/search")} method="get">
              <div className="relative w-full">
                <Icon name="icon-gui-search" color="text-cool-black" size="1.5rem" additionalCSS="absolute top-12 left-16 hover:text-gui-hover" />
                <input type="search" name="q" className="ui-input pl-48 h-48" placeholder="Search" data-id="meganav-mobile-search-input" />
              </div>
            </form>

            <div className="max-h-0 overflow-hidden transition-all" data-id="meganav-mobile-search-suggestions">
              <MeganavSearchSuggestions absUrl={absUrl} displaySupportLink={false} />
            </div>

            <ul className="mb-16">
              {MeganavData.panels.map((panel) => {
                const PanelComponent = panels[panel.component];

                return (
                  <li className="ui-meganav-mobile-item" key={`${panel.id}-mobile`}>
                    <MeganavControlMobilePanelOpen ariaControls={`${panel.id}-mobile`}>{panel.label}</MeganavControlMobilePanelOpen>

                    <div className="ui-meganav-panel-mobile hidden" id={`${panel.id}-mobile`} data-scroll-lock-scrollable>
                      <MeganavControlMobilePanelClose ariaControls={`${panel.id}-mobile`} />
                      <PanelComponent paths={paths} absUrl={absUrl} />
                    </div>
                  </li>
                );
              })}
              <li>
                <a href={absUrl("/pricing")} className="ui-meganav-mobile-link">
                  Pricing
                </a>
              </li>
            </ul>

            <hr className="ui-meganav-hr mb-20" />

            <div className="flex justify-between items-center mb-16">
              <a
                href={absUrl("/contact")}
                className="text-menu2 font-medium block ml-0 mr-8 lg:mx-12 p-0 hover:text-gui-hover focus:text-gui-focus focus:outline-none"
              >
                Contact us
              </a>
              {sessionState.signedIn && sessionState.account ? (
                <a href={absUrl(sessionState.account.links.dashboard.href)} className="ui-btn-secondary">
                  Dashboard
                </a>
              ) : (
                <a href={absUrl("/sign-up")} className="ui-btn">
                  Sign up free
                </a>
              )}
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

MeganavItemsMobile.propTypes = {
  panels: T.object,
  paths: T.shape({
    iconSprites: T.string,
  }),
  sessionState: T.object,
  theme: T.object,
  loginLink: T.string,
  absUrl: T.func,
};

export default React.memo(MeganavItemsMobile, (oldState, newState) => {
  const { pathsOld, themeOld } = oldState;
  const { pathsNew, themeNew } = newState;

  if (pathsOld === pathsNew && themeOld === themeNew && Object.keys(newState.sessionState || {}).length === 0) {
    return true;
  } else {
    return false;
  }
});
