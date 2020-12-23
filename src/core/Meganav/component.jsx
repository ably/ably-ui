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

const DesktopNavItems = ({ paths }) => (
  <ul className="hidden lg:flex">
    {panels.map((panel) => (
      <li className="c-meganav-item" key={panel.id}>
        <MeganavItemControl iconSpritesPath={paths.iconSprites} ariaControls={panel.id}>
          {panel.label}
        </MeganavItemControl>

        <div className="c-meganav-dropdown" id={panel.id}>
          <panel.component paths={paths} />
        </div>
      </li>
    ))}

    <li className="c-meganav-item">
      <a href="/pricing" className="c-meganav-nav-item h-64 items-center flex">
        Pricing
      </a>
    </li>
  </ul>
);

DesktopNavItems.propTypes = {
  paths: PathsT,
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

const SignedInNavItems = ({ sessionState, paths }) => {
  const links = Object.keys(sessionState.account.links).map((key) => sessionState.account.links[key]);
  const accountNameTruncated = truncate(sessionState.accountName);
  const preferredEmailTruncated = truncate(sessionState.preferredEmail);

  return (
    <ul className="hidden lg:flex items-center">
      <li className="c-meganav-item relative">
        <MeganavItemControl iconSpritesPath={paths.iconSprites} ariaControls="account-panel">
          {accountNameTruncated}
        </MeganavItemControl>

        <div className="c-meganav-account-panel" id="account-panel">
          <p className="c-meganav-overline mt-24 mx-16">Your account</p>
          <ul className="mb-16 mx-16">
            {links.map((item) => (
              <li key={item.href}>
                <a className="block px-8 py-8 hover:bg-light-grey hover:text-active-orange rounded relative -left-8 text-menu3 w-extend-8" href={item.href}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          <p className="c-meganav-overline mx-16">{preferredEmailTruncated}</p>
          <ul className="mb-8 mx-16">
            <li>
              <a
                href={sessionState.mySettings.href}
                className="block px-8 py-8 hover:bg-light-grey hover:text-active-orange rounded relative -left-8 text-menu3 w-extend-8"
              >
                {sessionState.mySettings.text}
              </a>
            </li>
          </ul>

          <hr className="c-meganav-hr mb-16" />

          {sessionState.logOut && (
            <div className="mb-16 px-16">
              <LogOutLink {...sessionState.logOut}>
                {({ text, href, onClick }) => (
                  <a
                    onClick={onClick}
                    href={href}
                    className="block px-8 py-8 hover:bg-light-grey hover:text-active-orange rounded relative -left-8 text-menu3 w-extend-8"
                  >
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
          <a href={sessionState.account.links.dashboard.href} className="c-btn-secondary">
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
};

const SignedOutNavItems = () => (
  <ul className="hidden lg:flex items-center">
    <li>
      <a href="/contact" className="c-meganav-nav-item">
        Contact us
      </a>
    </li>
    <li>
      <a href="/login" className="c-meganav-nav-item">
        Login
      </a>
    </li>
    <li className="ml-16">
      <a href="/sign-up" className="c-btn">
        Sign up free
      </a>
    </li>
  </ul>
);

const MobileNavItems = ({ paths, sessionState }) => (
  <ul className="flex lg:hidden">
    <li>
      {sessionState.signedIn && sessionState.logOut ? (
        <LogOutLink {...sessionState.logOut}>
          {({ text, href, onClick }) => (
            <a onClick={onClick} href={href} className="c-meganav-nav-item">
              {text}
            </a>
          )}
        </LogOutLink>
      ) : (
        <a href="/login" className="c-meganav-nav-item">
          Login
        </a>
      )}
    </li>

    <li className="c-meganav-item">
      <MobileMenuControl iconSpritesPath={paths.iconSprites} ariaControls="mobile-dropdown" />

      <div className="c-meganav-mobile-dropdown" id="mobile-dropdown">
        <div className="py-16 px-24 md:px-32 lg:px-64 bg-white">
          <ul className="mb-16">
            {panels.map((panel) => {
              return (
                <li className="c-meganav-mobile-item" key={`${panel.id}-mobile`}>
                  <PanelOpenControl iconSpritesPath={paths.iconSprites} ariaControls={`${panel.id}-mobile`}>
                    {panel.label}
                  </PanelOpenControl>

                  <div className="c-meganav-mobile-panel" id={`${panel.id}-mobile`}>
                    <PanelCloseControl iconSpritesPath={paths.iconSprites} ariaControls={`${panel.id}-mobile`} />
                    <panel.component paths={paths} />
                  </div>
                </li>
              );
            })}
            <li>
              <a href="/pricing" className="c-meganav-mobile-link">
                Pricing
              </a>
            </li>
          </ul>

          <hr className="c-meganav-hr mb-20" />

          <div className="flex justify-between items-center mb-16">
            <a href="/contact" className="c-meganav-nav-item ml-0 py-0">
              Contact us
            </a>
            {sessionState.signedIn && sessionState.account ? (
              <a href={sessionState.account.links.dashboard.href} className="c-btn-secondary">
                Dashboard
              </a>
            ) : (
              <a href="/sign-up" className="c-btn">
                Sign up free
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  </ul>
);

MobileNavItems.propTypes = {
  paths: PathsT,
};

const SignIn = ({ sessionState, paths }) => (sessionState.signedIn ? <SignedInNavItems sessionState={sessionState} paths={paths} /> : <SignedOutNavItems />);

const SignInPlaceholder = () => <div />;

export default function Meganav({ paths }) {
  const [sessionState, setSessionState] = useState(null);

  useEffect(() => {
    fetchSessionData(setSessionState);
  }, []);

  useEffect(() => {
    const teardown = MeganavScripts();
    return () => teardown();
  }, [sessionState?.signedIn]);

  return (
    <div className="c-meganav-wrapper" data-id="meganav">
      <div aria-label="Main Navigation" className="c-meganav">
        <Logo logoPath={paths.logo} />
        <DesktopNavItems paths={paths} />
        {sessionState ? <SignIn sessionState={sessionState} paths={paths} /> : <SignInPlaceholder />}
        <MobileNavItems sessionState={sessionState || {}} paths={paths} />
      </div>
    </div>
  );
}

Meganav.propTypes = {
  paths: PathsT,
};
