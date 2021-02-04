import React, { useEffect, useState } from "react";
import T from "prop-types";

import { connectState } from "../remote-data-store";
import { selectSessionData } from "../remote-session-data";

import Logo from "../Logo/component.jsx";

import MeganavScripts from "./component.js";
import MeganavItemsDesktop from "../MeganavItemsDesktop/component.jsx";
import MeganavItemsSignedIn from "../MeganavItemsSignedIn/component.jsx";
import MeganavItemsMobile from "../MeganavItemsMobile/component.jsx";
import MeganavData from "./component.json";

import MeganavContentPlatform from "../MeganavContentPlatform/component.jsx";
import MeganavContentUseCases from "../MeganavContentUseCases/component.jsx";
import MeganavContentWhyAbly from "../MeganavContentWhyAbly/component.jsx";
import MeganavContentDevelopers from "../MeganavContentDevelopers/component.jsx";

const SignIn = ({ sessionState, paths, theme }) =>
  sessionState.signedIn ? (
    <MeganavItemsSignedIn sessionState={sessionState} paths={paths} theme={theme} />
  ) : (
    <ul className="hidden md:flex items-center">
      <li>
        <a href="/contact" className={`ui-meganav-link ${theme.textColor}`} data-id="meganav-link">
          Contact us
        </a>
      </li>
      <li>
        <a href="/login" className={`ui-meganav-link ${theme.textColor}`} data-id="meganav-link">
          Login
        </a>
      </li>
      <li className="ml-16">
        <a href="/sign-up" data-id="meganav-sign-up-btn" className={`ui-btn p-btn-small ${theme.buttonBackgroundColor} ${theme.buttonTextColor}`}>
          Sign up free
        </a>
      </li>
    </ul>
  );

SignIn.propTypes = {
  sessionState: T.object,
  paths: T.object,
  theme: T.object,
};

const SignInPlaceholder = () => <div />;

const panels = {
  MeganavContentPlatform: MeganavContentPlatform,
  MeganavContentUseCases: MeganavContentUseCases,
  MeganavContentWhyAbly: MeganavContentWhyAbly,
  MeganavContentDevelopers: MeganavContentDevelopers,
};

export default function Meganav({ paths, themeName = "white" }) {
  const [sessionState, setSessionState] = useState(null);

  useEffect(() => connectState(selectSessionData, setSessionState), []);

  useEffect(() => {
    const teardown = MeganavScripts({ themeName });
    return () => teardown();
  }, [sessionState]);

  const theme = MeganavData.themes[themeName];

  return (
    <nav className={`ui-meganav-wrapper ${theme.backgroundColor} ${theme.barShadow}`} data-id="meganav" aria-label="Main">
      <div className="ui-meganav ui-grid-px">
        <Logo theme={theme} dataId="meganav-logo" />
        <MeganavItemsDesktop panels={panels} paths={paths} theme={theme} />

        {/* Because we load the session state through fetch, we display a placeholder until fetch returns */}
        {sessionState ? <SignIn sessionState={sessionState} paths={paths} theme={theme} /> : <SignInPlaceholder />}

        <MeganavItemsMobile panels={panels} sessionState={sessionState || {}} paths={paths} theme={theme} />
      </div>
    </nav>
  );
}

Meganav.propTypes = {
  paths: T.object,
  themeName: T.oneOf(["white", "black", "transparentToWhite"]),
};
