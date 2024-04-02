import React, { ReactNode, useEffect, useState } from "react";

import { connectState } from "../remote-data-store.js";
import { selectSessionData } from "../remote-session-data.js";

import Logo from "../Logo/component.tsx";
import "./component.css";

import MeganavScripts from "./component.js";
import MeganavItemsDesktop from "../MeganavItemsDesktop/component.tsx";
import MeganavItemsSignedIn from "../MeganavItemsSignedIn/component.tsx";
import MeganavItemsMobile from "../MeganavItemsMobile/component.tsx";
import Notice from "../Notice/component.tsx";
import MeganavData from "./component.json";
import _absUrl from "../url-base.js";

import MeganavContentProducts from "../MeganavContentProducts/component.tsx";
import MeganavContentUseCases from "../MeganavContentUseCases/component.tsx";
import MeganavContentCompany from "../MeganavContentCompany/component.tsx";
import MeganavContentDevelopers from "../MeganavContentDevelopers/component.tsx";
import MeganavSearch from "../MeganavSearch/component.tsx";

export type MeganavTheme = {
  backgroundColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  mobileMenuColor?: string;
  logoTextColor?: string;
  barShadow?: string;
};

export type AbsUrl = (path: string) => string;

export type MeganavPanels = {
  [index: string]: ({ paths, absUrl }) => ReactNode;
};

export type MeganavSessionState = {
  signedIn: boolean;
  logOut: {
    token: string;
    href: string;
    text: string;
  };
  accountName: string;
  preferredEmail: string;
  account: {
    links: {
      dashboard: {
        href: string;
      };
    };
  };
  mySettings: {
    text: string;
    href: string;
  };
  myAccessTokens: {
    text: string;
    href: string;
  };
};

type SignInProps = {
  sessionState: MeganavSessionState;
  theme: MeganavTheme;
  loginLink: string;
  absUrl: AbsUrl;
};

type MeganavProps = {
  paths?: {
    logo: string;
    iconSprites: string;
    ablyStack: string;
    blogThumb1: string;
    blogThumb2: string;
    blogThumb3: string;
  };

  themeName: "white" | "black" | "transparentToWhite";
  notice?: {
    props: {
      title: string;
      bodyText: string;
      buttonLink: string;
      buttonLabel: string;
      closeBtn: boolean;
    };
    config: {
      cookieId: string;
      noticeId: string;
      collapse: boolean;
    };
  };
  loginLink?: string;
  urlBase?: string;
  addSearchApiKey: string;
};

const SignIn = ({ sessionState, theme, loginLink, absUrl }: SignInProps) => {
  return sessionState.signedIn ? (
    <MeganavItemsSignedIn
      absUrl={absUrl}
      sessionState={sessionState}
      theme={theme}
    />
  ) : (
    <ul className="hidden md:flex items-center">
      <li className="ui-meganav-item">
        <a
          href={absUrl("/contact")}
          className={`ui-meganav-link ${theme.textColor}`}
          data-id="meganav-link"
        >
          Contact us
        </a>
      </li>
      <li className="ui-meganav-item">
        <a
          href={absUrl(loginLink)}
          className={`ui-meganav-link mr-0 ${theme.textColor}`}
          data-id="meganav-link"
        >
          Login
        </a>
      </li>
      <li className="ui-meganav-item">
        <MeganavSearch absUrl={absUrl} />
      </li>
      <li className="ui-meganav-item">
        <a
          href={absUrl("/sign-up")}
          data-id="meganav-sign-up-btn"
          className={`ui-btn p-btn-small ${theme.buttonBackgroundColor} ${theme.buttonTextColor}`}
        >
          Sign up free
        </a>
      </li>
    </ul>
  );
};

const SignInPlaceholder = () => <div />;

const panels = {
  MeganavContentProducts,
  MeganavContentUseCases,
  MeganavContentCompany,
  MeganavContentDevelopers,
};

const Meganav = ({
  paths,
  themeName = "white",
  notice,
  loginLink = "/login",
  urlBase,
  addSearchApiKey,
}: MeganavProps) => {
  const [sessionState, setSessionState] = useState<MeganavSessionState>();

  useEffect(() => {
    // Note if state is never updated, sessionState stays null and never removes the placeholder.
    // This makes SSR consistent (ie. we always show the placeholder)
    connectState(selectSessionData, setSessionState);
  }, []);

  useEffect(() => {
    const teardown = MeganavScripts({ themeName, addSearchApiKey });
    // TODO(jamiehenson): update this when JS assets are converted to TS
    // @ts-expect-error: teardown parsed as Element from JS file, cannot be coerced into Function form
    return () => teardown();
  }, [sessionState]);

  const theme = MeganavData.themes[themeName];
  const absUrl = (path) => _absUrl(path, urlBase);

  return (
    <nav
      className={`ui-meganav-wrapper ${theme.backgroundColor} ${theme.barShadow}`}
      data-id="meganav"
      aria-label="Main"
    >
      {notice && <Notice {...notice.props} config={notice.config} />}
      <div className="ui-meganav ui-grid-px">
        <div className="mr-24">
          <Logo
            dataId="meganav-logo"
            href={urlBase}
            logoUrl={paths?.logo ?? ""}
          />
        </div>

        <MeganavItemsDesktop
          panels={panels}
          paths={paths}
          theme={theme}
          absUrl={absUrl}
        />

        {/* Because we load the session state through fetch, we display a placeholder until fetch returns */}
        {sessionState ? (
          <SignIn
            sessionState={sessionState}
            theme={theme}
            loginLink={loginLink}
            absUrl={absUrl}
          />
        ) : (
          <SignInPlaceholder />
        )}

        <MeganavItemsMobile
          panels={panels}
          sessionState={sessionState}
          paths={paths}
          theme={theme}
          loginLink={loginLink}
          absUrl={absUrl}
        />
      </div>
    </nav>
  );
};

export default Meganav;
