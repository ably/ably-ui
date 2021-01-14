import React, { useEffect, useState, useRef } from "react";
import T from "prop-types";

import fetchSessionData from "../fetch-session-data";

import MeganavScripts from "./component.js";

import Logo from "../Logo/component.jsx";
import MeganavItemControl from "../MeganavItemControl/component.jsx";
import MobileMenuControl from "../MobileMenuControl/component.jsx";
import PanelCloseControl from "../PanelCloseControl/component.jsx";
import PanelOpenControl from "../PanelOpenControl/component.jsx";

import PlatformPanel from "../PlatformPanel/component.jsx";
import UseCasesPanel from "../UseCasesPanel/component.jsx";
import WhyAblyPanel from "../WhyAblyPanel/component.jsx";
import DevelopersPanel from "../DevelopersPanel/component.jsx";

import MeganavData from "./component.json";

const PathsT = T.shape({
  logo: T.string,
  iconSprites: T.string,
  ablyStack: T.string,
  blogThumb1: T.string,
  blogThumb2: T.string,
  blogThumb3: T.string,
});

const panels = [
  { label: "Platform", id: "platform-panel", component: PlatformPanel },
  { label: "Use Cases", id: "use-cases-panel", component: UseCasesPanel },
  { label: "Why Ably", id: "why-ably-panel", component: WhyAblyPanel },
  { label: "Developers", id: "developers-panel", component: DevelopersPanel },
];

const DesktopNavItems = ({ paths, theme }) => (
  <ul className="hidden md:flex">
    {panels.map((panel) => (
      <li className="ui-meganav-item" key={panel.id}>
        <MeganavItemControl theme={theme} iconSpritesPath={paths.iconSprites} ariaControls={panel.id}>
          {panel.label}
        </MeganavItemControl>

        <div className="ui-meganav-dropdown" id={panel.id}>
          <panel.component paths={paths} />
        </div>
      </li>
    ))}

    <li className="ui-meganav-item">
      <a href="/pricing" data-id="meganav-nav-item" className={`ui-meganav-nav-item h-64 items-center flex ${theme.textColor}`}>
        Pricing
      </a>
    </li>
  </ul>
);

DesktopNavItems.propTypes = {
  paths: PathsT,
  theme: T.object,
};

const truncate = (text, cutOff = 20) => (text.length > cutOff ? `${text.substring(0, cutOff)}...` : text);

const LogOutLink = ({ token, href, text, children }) => {
  const formRef = useRef(null);

  const onClick = (e) => {
    formRef.current.submit();
    e.preventDefault();
  };

  return (
    <>
      <form ref={formRef} method="post" action={href} className="hidden">
        <input name="_method" value="delete" type="hidden" />
        <input name="authenticity_token" value={token} type="hidden" />
      </form>

      {children({ href, text, onClick })}
    </>
  );
};

LogOutLink.propTypes = {
  token: T.string,
  href: T.string,
  text: T.string,
  children: T.func,
};

const SignedInNavItems = ({ sessionState, paths, theme }) => {
  const links = Object.keys(sessionState.account.links).map((key) => sessionState.account.links[key]);
  const accountNameTruncated = truncate(sessionState.accountName);
  const preferredEmailTruncated = truncate(sessionState.preferredEmail);

  return (
    <ul className="hidden md:flex items-center">
      <li className="ui-meganav-item relative" data-id="meganav-nav-item">
        <MeganavItemControl iconSpritesPath={paths.iconSprites} ariaControls="account-panel" theme={theme}>
          {accountNameTruncated}
        </MeganavItemControl>

        <div className="ui-meganav-account-panel" id="account-panel">
          <p className="ui-meganav-overline mt-24 mx-16">Your account</p>
          <ul className="mb-16 mx-16">
            {links.map((item) => (
              <li key={item.href}>
                <a className="ui-meganav-account-panel-link" href={item.href}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          <p className="ui-meganav-overline mx-16">{preferredEmailTruncated}</p>
          <ul className="mb-8 mx-16">
            <li>
              <a href={sessionState.mySettings.href} className="ui-meganav-account-panel-link">
                {sessionState.mySettings.text}
              </a>
            </li>
          </ul>

          <hr className="ui-meganav-hr mb-16" />

          {sessionState.logOut && (
            <div className="mb-16 px-16">
              <LogOutLink {...sessionState.logOut}>
                {({ text, href, onClick }) => (
                  <a onClick={onClick} href={href} className="ui-meganav-account-panel-link">
                    {text}
                  </a>
                )}
              </LogOutLink>
            </div>
          )}
        </div>
      </li>

      {sessionState.account && (
        <li className="ml-16">
          <a href={sessionState.account.links.dashboard.href} className="ui-btn-secondary px-16">
            Dashboard
          </a>
        </li>
      )}
    </ul>
  );
};

SignedInNavItems.propTypes = {
  sessionState: T.object,
  paths: PathsT,
  theme: T.object,
};

const SignedOutNavItems = ({ theme }) => (
  <ul className="hidden md:flex items-center">
    <li>
      <a href="/contact" className={`ui-meganav-nav-item ${theme.textColor}`}>
        Contact us
      </a>
    </li>
    <li>
      <a href="/login" className={`ui-meganav-nav-item ${theme.textColor}`}>
        Login
      </a>
    </li>
    <li className="ml-16">
      <a href="/sign-up" className={`ui-btn px-16 ${theme.buttonBackgroundColor} ${theme.buttonTextColor}`}>
        Sign up free
      </a>
    </li>
  </ul>
);

SignedOutNavItems.propTypes = {
  theme: T.object,
};

const MobileNavItems = ({ paths, sessionState, theme }) => {
  const classNames = `ui-meganav-nav-item ${theme.textColor}`;

  return (
    <ul className="flex md:hidden">
      <li>
        {sessionState.signedIn && sessionState.logOut ? (
          <LogOutLink {...sessionState.logOut}>
            {({ text, href, onClick }) => (
              <a onClick={onClick} href={href} className={classNames}>
                {text}
              </a>
            )}
          </LogOutLink>
        ) : (
          <a href="/login" className={classNames}>
            Login
          </a>
        )}
      </li>

      <li className="ui-meganav-item">
        <MobileMenuControl theme={theme} iconSpritesPath={paths.iconSprites} ariaControls="mobile-dropdown" />

        <div className="ui-meganav-mobile-dropdown" id="mobile-dropdown">
          <div className="py-16 ui-grid-px bg-white">
            <ul className="mb-16">
              {panels.map((panel) => (
                <li className="ui-meganav-mobile-item" key={`${panel.id}-mobile`}>
                  <PanelOpenControl iconSpritesPath={paths.iconSprites} ariaControls={`${panel.id}-mobile`}>
                    {panel.label}
                  </PanelOpenControl>

                  <div className="ui-meganav-mobile-panel" id={`${panel.id}-mobile`}>
                    <PanelCloseControl iconSpritesPath={paths.iconSprites} ariaControls={`${panel.id}-mobile`} />
                    <panel.component paths={paths} />
                  </div>
                </li>
              ))}
              <li>
                <a href="/pricing" className="ui-meganav-mobile-link">
                  Pricing
                </a>
              </li>
            </ul>

            <hr className="ui-meganav-hr mb-20" />

            <div className="flex justify-between items-center mb-16">
              <a
                href="/contact"
                className="text-menu2 font-medium block ml-0 mr-8 lg:mx-12 py-0 px-0 hover:text-gui-hover focus:text-gui-focus focus:outline-none"
              >
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

MobileNavItems.propTypes = {
  paths: PathsT,
  sessionState: T.object,
  theme: T.object,
};

const SignIn = ({ sessionState, paths, theme }) =>
  sessionState.signedIn ? <SignedInNavItems sessionState={sessionState} paths={paths} theme={theme} /> : <SignedOutNavItems theme={theme} />;

const SignInPlaceholder = () => <div />;

export default function Meganav({ paths, themeName = "white" }) {
  const [sessionState, setSessionState] = useState(null);

  useEffect(() => {
    fetchSessionData(setSessionState);
  }, []);

  useEffect(() => {
    const teardown = MeganavScripts({ themeName });
    return () => teardown();
  }, [sessionState?.signedIn]);

  const theme = MeganavData.themes[themeName];

  return (
    <nav className={`ui-meganav-wrapper ${theme.backgroundColor} ${theme.barShadow}`} data-id="meganav" aria-label="Main">
      <div className="ui-meganav ui-grid-px">
        <Logo theme={theme} />
        <DesktopNavItems paths={paths} theme={theme} />
        {sessionState ? <SignIn sessionState={sessionState} paths={paths} theme={theme} /> : <SignInPlaceholder />}
        <MobileNavItems sessionState={sessionState || {}} paths={paths} theme={theme} />
      </div>
    </nav>
  );
}

Meganav.propTypes = {
  paths: PathsT,
  theme: T.oneOf(["white", "black", "transparentToWhite"]),
};
