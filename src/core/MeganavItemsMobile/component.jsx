import React from "react";
import T from "prop-types";

import SignOutLink from "../SignOutLink/component.jsx";

import MeganavData from "../Meganav/component.json";
import MeganavControlMobileDropdown from "../MeganavControlMobileDropdown/component.jsx";
import MeganavControlMobilePanelClose from "../MeganavControlMobilePanelClose/component.jsx";
import MeganavControlMobilePanelOpen from "../MeganavControlMobilePanelOpen/component.jsx";

const MeganavItemsMobile = ({ panels, paths, sessionState, theme }) => {
  const classNames = `ui-meganav-link ${theme.textColor}`;

  return (
    <ul className="flex md:hidden">
      <li>
        {sessionState.signedIn && sessionState.logOut ? (
          <SignOutLink {...sessionState.logOut}>
            {({ text, href, onClick }) => (
              <a onClick={onClick} href={href} className={classNames}>
                {text}
              </a>
            )}
          </SignOutLink>
        ) : (
          <a href="/login" className={classNames}>
            Login
          </a>
        )}
      </li>

      <li className="ui-meganav-item">
        <MeganavControlMobileDropdown theme={theme} iconSpritesPath={paths.iconSprites} />

        <div className="ui-meganav-mobile-dropdown invisible" id="meganav-mobile-dropdown" data-id="meganav-mobile-dropdown">
          <div className="py-16 ui-grid-px bg-white">
            <ul className="mb-16">
              {MeganavData.panels.map((panel) => {
                const PanelComponent = panels[panel.component];

                return (
                  <li className="ui-meganav-mobile-item" key={`${panel.id}-mobile`}>
                    <MeganavControlMobilePanelOpen iconSpritesPath={paths.iconSprites} ariaControls={`${panel.id}-mobile`}>
                      {panel.label}
                    </MeganavControlMobilePanelOpen>

                    <div className="ui-meganav-panel-mobile hidden" id={`${panel.id}-mobile`}>
                      <MeganavControlMobilePanelClose iconSpritesPath={paths.iconSprites} ariaControls={`${panel.id}-mobile`} />
                      <PanelComponent paths={paths} />
                    </div>
                  </li>
                );
              })}
              <li>
                <a href="/pricing" className="ui-meganav-mobile-link">
                  Pricing
                </a>
              </li>
            </ul>

            <hr className="ui-meganav-hr mb-20" />

            <div className="flex justify-between items-center mb-16">
              <a href="/contact" className="text-menu2 font-medium block ml-0 mr-8 lg:mx-12 p-0 hover:text-gui-hover focus:text-gui-focus focus:outline-none">
                Contact us
              </a>
              {sessionState.signedIn && sessionState.account ? (
                <a href={sessionState.account.links.dashboard.href} className="ui-btn-secondary">
                  Dashboard
                </a>
              ) : (
                <a href="/sign-up" className="ui-btn">
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
};

export default MeganavItemsMobile;
