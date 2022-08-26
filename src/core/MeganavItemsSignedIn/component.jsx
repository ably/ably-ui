import React from "react";
import T from "prop-types";

import MeganavControl from "../MeganavControl/component.jsx";
import SignOutLink from "../SignOutLink/component.jsx";
import MeganavSearch from "../MeganavSearch/component.jsx";

const truncate = (string, length) => {
  return string?.length && string.length > length ? `${string.slice(0, length - 1)}…` : string;
};

const MeganavItemsSignedIn = ({ sessionState, theme, absUrl }) => {
  const links = sessionState.account ? Object.keys(sessionState.account.links).map((key) => sessionState.account.links[key]) : [];
  const accountName = truncate(sessionState.accountName, 20);
  const preferredEmail = truncate(sessionState.preferredEmail, 20);

  return (
    <ul className="hidden md:flex items-center">
      <li className="ui-meganav-item relative">
        <MeganavControl ariaControls="account-panel" ariaLabel="Account" theme={theme} additionalCSS="mr-0">
          {accountName}
        </MeganavControl>

        <div className="ui-meganav-panel-account invisible" id="account-panel" data-id="meganav-panel">
          {/* Users exist without accounts in which case there is no links here */}
          {sessionState.account && (
            <>
              <p className="ui-meganav-overline mt-16 mx-16">Your account</p>
              <ul className="mb-16 mx-16">
                {links.map((item) => (
                  <li key={item.href}>
                    <a className="ui-meganav-account-link" href={absUrl(item.href)}>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}

          <p className="ui-meganav-overline mx-16">{preferredEmail}</p>
          <ul className="mb-8 mx-16">
            <li>
              <a href={absUrl(sessionState.mySettings.href)} className="ui-meganav-account-link">
                {sessionState.mySettings.text}
              </a>
            </li>
            {sessionState.myAccessTokens && (
              <li>
                <a href={absUrl(sessionState.myAccessTokens.href)} className="ui-meganav-account-link">
                  {sessionState.myAccessTokens.text}
                  <span className="ui-version-tag">preview</span>
                </a>
              </li>
            )}
          </ul>

          <hr className="ui-meganav-hr mb-16" />

          {sessionState.logOut && (
            <div className="mb-16 px-16">
              <SignOutLink absUrl={absUrl} {...sessionState.logOut}>
                {({ text, href, onClick }) => (
                  <a onClick={onClick} href={absUrl(href)} className="ui-meganav-account-link">
                    {text}
                  </a>
                )}
              </SignOutLink>
            </div>
          )}
        </div>
      </li>

      <li>
        <MeganavSearch absUrl={absUrl} />
      </li>

      {sessionState.account && (
        <li>
          <a href={absUrl(sessionState.account.links.dashboard.href)} className="ui-btn-secondary p-btn-small">
            Dashboard
          </a>
        </li>
      )}
    </ul>
  );
};

MeganavItemsSignedIn.propTypes = {
  sessionState: T.object,
  paths: T.shape({
    iconSprites: T.string,
  }),
  theme: T.object,
  absUrl: T.func,
};

export default MeganavItemsSignedIn;
