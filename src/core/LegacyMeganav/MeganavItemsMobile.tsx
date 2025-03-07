import React from "react";

import SignOutLink from "./SignOutLink";
import MeganavSearchSuggestions from "./MeganavSearchSuggestions";
import Icon from "../Icon";
import MeganavData from "./component.json";
import MeganavControlMobileDropdown from "./MeganavControlMobileDropdown";
import MeganavControlMobilePanelClose from "./MeganavControlMobilePanelClose";
import MeganavControlMobilePanelOpen from "./MeganavControlMobilePanelOpen";
import MeganavSearchAutocomplete from "./MeganavSearchAutocomplete";
import {
  AbsUrl,
  MeganavPanels,
  MeganavPaths,
  MeganavSessionState,
  MeganavTheme,
} from "./LegacyMeganav";

type MeganavItemsMobileProps = {
  panels: MeganavPanels;
  paths?: MeganavPaths;
  sessionState?: MeganavSessionState;
  theme: MeganavTheme;
  loginLink: string;
  absUrl: AbsUrl;
  statusUrl: string;
  searchDataId?: string;
};

const MeganavItemsMobile = ({
  panels,
  paths,
  sessionState,
  theme,
  loginLink,
  absUrl,
  statusUrl,
  searchDataId,
}: MeganavItemsMobileProps) => {
  const classNames = `ui-meganav-link ${theme.textColor}`;

  return (
    <ul className="flex md:hidden items-center" data-id="meganav-items-mobile">
      <li>
        {sessionState?.signedIn && sessionState?.logOut ? (
          <SignOutLink absUrl={absUrl} {...sessionState.logOut}>
            {({ text, href, onClick }) => (
              <a
                onClick={onClick}
                href={absUrl(href)}
                className={classNames}
                data-id="meganav-link"
              >
                {text}
              </a>
            )}
          </SignOutLink>
        ) : (
          <a
            href={absUrl(loginLink)}
            className={classNames}
            data-id="meganav-link"
          >
            Login
          </a>
        )}
      </li>

      <li className="ui-meganav-item">
        <MeganavControlMobileDropdown theme={theme} />

        <div
          className="ui-meganav-mobile-dropdown invisible"
          id="meganav-mobile-dropdown"
          data-id="meganav-mobile-dropdown"
        >
          <div className="pt-24 pb-16 ui-grid-px bg-white">
            <form className="mb-16" action={absUrl("/search")} method="get">
              <div className="relative w-full">
                <Icon
                  name="icon-gui-magnifying-glass-outline"
                  color="text-cool-black"
                  size="1.5rem"
                  additionalCSS="absolute top-12 left-16 hover:text-gui-hover"
                />
                <button
                  type="button"
                  className="absolute top-12 right-16 p-0 focus:outline-none focus-visible:outline-gui-focus m-0 md:hidden invisible"
                  data-id="meganav-search-input-clear"
                >
                  <Icon
                    name="icon-gui-x-circle-solid"
                    color="text-dark-grey"
                    size="1.5rem"
                    additionalCSS=""
                  />
                </button>
                <input
                  type="search"
                  name="q"
                  className="ui-input px-48 h-48"
                  style={{ maxWidth: "none" }}
                  placeholder="Search"
                  autoComplete="off"
                  data-id={searchDataId ?? "meganav-mobile-search-input"}
                />

                <MeganavSearchAutocomplete />
              </div>
            </form>

            <div
              className="max-h-0 overflow-hidden transition-all"
              data-id="meganav-mobile-search-suggestions"
            >
              <MeganavSearchSuggestions
                absUrl={absUrl}
                displaySupportLink={false}
              />
            </div>

            <ul className="mb-16" data-id="meganav-mobile-panel-controls">
              {MeganavData.panels.map((panel) => {
                const PanelComponent = panels[panel.component];
                const displayHr = [
                  "company-panel",
                  "developers-panel",
                ].includes(panel.id);

                return (
                  <li
                    className="ui-meganav-mobile-item"
                    key={`${panel.id}-mobile`}
                  >
                    <MeganavControlMobilePanelOpen
                      ariaControls={`${panel.id}-mobile`}
                    >
                      {panel.label}
                    </MeganavControlMobilePanelOpen>

                    <div
                      className="ui-meganav-panel-mobile hidden"
                      id={`${panel.id}-mobile`}
                      data-scroll-lock-scrollable
                    >
                      <MeganavControlMobilePanelClose
                        ariaControls={`${panel.id}-mobile`}
                        displayHr={displayHr}
                      />
                      <PanelComponent
                        paths={paths}
                        absUrl={absUrl}
                        statusUrl={statusUrl}
                      />
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
              {sessionState?.signedIn && sessionState?.account ? (
                <a
                  href={absUrl(sessionState.account.links.dashboard.href)}
                  className="ui-btn-secondary"
                >
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

export default React.memo(MeganavItemsMobile, (oldState, newState) => {
  const { paths: pathsOld, theme: themeOld } = oldState;
  const { paths: pathsNew, theme: themeNew } = newState;

  return (
    pathsOld === pathsNew &&
    themeOld === themeNew &&
    Object.keys(newState.sessionState || {}).length === 0
  );
});
