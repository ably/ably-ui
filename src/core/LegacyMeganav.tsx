import React, { ReactNode, useEffect, useState } from "react";

import { connectState } from "./remote-data-store.js";
import { selectSessionData } from "./remote-session-data.js";

import Logo from "./Logo";
import MeganavData from "./LegacyMeganav/component.json";
import MeganavScripts from "./LegacyMeganav/component.js";
import MeganavItemsDesktop from "./MeganavItemsDesktop";
import MeganavItemsSignedIn from "./MeganavItemsSignedIn";
import MeganavItemsMobile from "./MeganavItemsMobile";
import Notice from "./Notice";
import _absUrl from "./url-base.js";
import MeganavContentProducts from "./MeganavContentProducts";
import MeganavContentUseCases from "./MeganavContentUseCases";
import MeganavContentCompany from "./MeganavContentCompany";
import MeganavContentDevelopers from "./MeganavContentDevelopers";
import MeganavSearch from "./MeganavSearch";
import { ColorClass } from "./styles/colors/types";

export type MeganavTheme = {
  backgroundColor?: ColorClass;
  textColor?: ColorClass;
  buttonBackgroundColor?: ColorClass;
  buttonTextColor?: ColorClass;
  mobileMenuColor: ColorClass;
  logoTextColor?: ColorClass;
  barShadow?: string;
};

export type AbsUrl = (path: string) => string;

export type MeganavPaths = {
  logo?: string;
  iconSprites: string;
  ablyStack: string;
  blogThumb1: string;
  blogThumb2: string;
  blogThumb3: string;
  awsLogo?: string;
};

export type MeganavPanels = {
  [index: string]: ({
    paths,
    absUrl,
    statusUrl,
  }: {
    paths?: MeganavPaths;
    absUrl: (path: string) => string;
    statusUrl: string;
  }) => ReactNode;
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
  searchDataId?: string;
};

// This type is based on the API response from the notice API and the data
// passed into the Meganav component, which then turns it into something
// the Notice component can use. The type is exported for the benefit of
// Voltaire
export type MeganavNoticeProps = {
  props: {
    title: string;
    bodyText: string;
    buttonLink: string;
    buttonLabel: string;
    closeBtn: boolean;
  };
  config: {
    cookieId: string;
    noticeId: string | number;
    options: {
      collapse: boolean;
    };
  };
};

type MeganavProps = {
  paths?: MeganavPaths;
  themeName: "white" | "black" | "transparentToWhite";
  notice?: MeganavNoticeProps;
  loginLink?: string;
  urlBase?: string;
  addSearchApiKey: string;
  statusUrl: string;
  searchDataId?: string;
};

const SignIn = ({
  sessionState,
  theme,
  loginLink,
  absUrl,
  searchDataId,
}: SignInProps) => {
  return sessionState.signedIn ? (
    <MeganavItemsSignedIn
      absUrl={absUrl}
      sessionState={sessionState}
      theme={theme}
      searchDataId={searchDataId}
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
        <MeganavSearch absUrl={absUrl} dataId={searchDataId} />
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
  statusUrl,
  searchDataId,
}: MeganavProps) => {
  const [sessionState, setSessionState] = useState<MeganavSessionState>();

  useEffect(() => {
    // Note if state is never updated, sessionState stays null and never removes the placeholder.
    // This makes SSR consistent (ie. we always show the placeholder)
    connectState(selectSessionData, setSessionState);
  }, []);

  useEffect(() => {
    const teardown = MeganavScripts({ themeName, addSearchApiKey });
    return () => teardown();
  }, [sessionState]);

  const theme = MeganavData.themes[themeName] as MeganavTheme;
  const absUrl = (path: string) => _absUrl(path, urlBase);

  return (
    <nav
      className={`ui-meganav-wrapper ${theme.backgroundColor} ${theme.barShadow}`}
      data-id="meganav"
      aria-label="Main"
    >
      {notice && <Notice {...notice.props} config={notice.config} />}
      <div className="ui-meganav ui-grid-px">
        <div className="mr-24">
          <Logo dataId="meganav-logo" href={urlBase} logoUrl={paths?.logo} />
        </div>

        <MeganavItemsDesktop
          panels={panels}
          paths={paths}
          theme={theme}
          absUrl={absUrl}
          statusUrl={statusUrl}
        />

        {/* Because we load the session state through fetch, we display a placeholder until fetch returns */}
        {sessionState ? (
          <SignIn
            sessionState={sessionState}
            theme={theme}
            loginLink={loginLink}
            absUrl={absUrl}
            searchDataId={searchDataId}
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
          statusUrl={statusUrl}
          searchDataId={searchDataId}
        />
      </div>
    </nav>
  );
};

export default Meganav;
