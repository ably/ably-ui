import T from "prop-types";
import React, { useEffect, useState } from "react";

import { connectState } from "../remote-data-store";
import { selectSessionData } from "../remote-session-data";

import Logo from "../Logo/component.jsx";

import MeganavItemsDesktop from "../MeganavItemsDesktop/component.jsx";
import MeganavItemsMobile from "../MeganavItemsMobile/component.jsx";
import MeganavItemsSignedIn from "../MeganavItemsSignedIn/component.jsx";
import Notice from "../Notice/component.jsx";
import _absUrl from "../url-base";
import MeganavScripts from "./component.js";
import MeganavData from "./component.json";

import MeganavContentCompany from "../MeganavContentCompany/component.jsx";
import MeganavContentDevelopers from "../MeganavContentDevelopers/component.jsx";
import MeganavContentProducts from "../MeganavContentProducts/component.jsx";
import MeganavContentUseCases from "../MeganavContentUseCases/component.jsx";
import MeganavSearch from "../MeganavSearch/component.jsx";

import MeganavHeadwayPortal from "./MeganavHeadwayPortal.jsx";

const SignIn = ({ sessionState, theme, loginLink, absUrl }) => {
  return sessionState.signedIn ? (
    <MeganavItemsSignedIn absUrl={absUrl} sessionState={sessionState} theme={theme} />
  ) : (
    <ul className="items-center hidden md:flex">
      <li className="ui-meganav-item">
        <a href={absUrl("/contact")} className={`ui-meganav-link ${theme.textColor}`} data-id="meganav-link">
          Contact us
        </a>
      </li>
      <li className="ui-meganav-item">
        <a href={absUrl(loginLink)} className={`ui-meganav-link mr-0 ${theme.textColor}`} data-id="meganav-link">
          Login
        </a>
      </li>
      <li className="ui-meganav-item">
        <MeganavSearch absUrl={absUrl} />
      </li>
      <li className="ui-meganav-item">
        <a href={absUrl("/sign-up")} data-id="meganav-sign-up-btn" className={`ui-btn p-btn-small ${theme.buttonBackgroundColor} ${theme.buttonTextColor}`}>
          Sign up free
        </a>
      </li>
    </ul>
  );
};

SignIn.propTypes = {
  sessionState: T.object,
  paths: T.object,
  theme: T.object,
  loginLink: T.string,
  absUrl: T.func,
};

const SignInPlaceholder = () => <div />;

const panels = {
  MeganavContentProducts,
  MeganavContentUseCases,
  MeganavContentCompany,
  MeganavContentDevelopers,
};

export default function Meganav({ paths, themeName = "white", notice, loginLink = "/login", urlBase, addSearchApiKey }) {
  const [sessionState, setSessionState] = useState(null);

  useEffect(() => {
    // Note if state is never updated, sessionState stays null and never removes the placeholder.
    // This makes SSR consistent (ie. we always show the placeholder)
    connectState(selectSessionData, setSessionState);
  }, []);

  useEffect(() => {
    const teardown = MeganavScripts({ themeName, addSearchApiKey });
    return () => teardown();
  }, [sessionState]);

  const theme = MeganavData.themes[themeName];
  const absUrl = (path) => _absUrl(path, urlBase);

  return (
    <nav className={`ui-meganav-wrapper ${theme.backgroundColor} ${theme.barShadow}`} data-id="meganav" aria-label="Main">
      {notice && <Notice {...notice.props} config={notice.config} />}
      <div className="ui-meganav ui-grid-px">
        <div className="mr-24">
          <Logo dataId="meganav-logo" href={urlBase} logoUrl={paths.logo} />
        </div>

        <MeganavItemsDesktop panels={panels} paths={paths} theme={theme} absUrl={absUrl} />

        {/* Because we load the session state through fetch, we display a placeholder until fetch returns */}
        {sessionState ? <SignIn sessionState={sessionState} theme={theme} loginLink={loginLink} absUrl={absUrl} /> : <SignInPlaceholder />}

        <MeganavItemsMobile panels={panels} sessionState={sessionState || {}} paths={paths} theme={theme} loginLink={loginLink} absUrl={absUrl} />

        <MeganavHeadwayPortal />
      </div>
    </nav>
  );
}

Meganav.propTypes = {
  paths: T.object,
  themeName: T.oneOf(["white", "black", "transparentToWhite"]),
  notice: T.shape({
    props: T.shape({
      title: T.string,
      bodyText: T.string,
      buttonLink: T.string,
      buttonLabel: T.string,
      closeBtn: T.bool,
    }),
    config: T.shape({
      cookieId: T.string,
      noticeId: T.string,
      collapse: T.bool,
    }),
  }),
  loginLink: T.string,
  urlBase: T.string,
  addSearchApiKey: T.string,
};
