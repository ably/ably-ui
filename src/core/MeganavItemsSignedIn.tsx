import React from "react";
import MeganavSearch from "./MeganavSearch";
import { AbsUrl, MeganavSessionState, MeganavTheme } from "./Meganav";

type MeganavItemsSignedIn = {
  sessionState: MeganavSessionState;
  theme: MeganavTheme;
  absUrl: AbsUrl;
  searchDataId?: string;
};

const truncate = (string: string, length: number) => {
  return string?.length && string.length > length
    ? `${string.slice(0, length - 1)}…`
    : string;
};

const MeganavItemsSignedIn = ({
  sessionState,
  absUrl,
  searchDataId,
}: MeganavItemsSignedIn) => {
  const accountName = truncate(sessionState.accountName, 20);

  return (
    <ul className="hidden md:flex items-center">
      <li className="ui-meganav-item relative">
        <span className="ui-meganav-link h-64 hover:text-cool-black mr-0">
          {accountName}
        </span>
      </li>

      <li>
        <MeganavSearch absUrl={absUrl} dataId={searchDataId} />
      </li>

      {sessionState.account && (
        <li>
          <a
            href={absUrl(sessionState.account.links.dashboard.href)}
            className="ui-btn-secondary p-btn-small"
          >
            Dashboard
          </a>
        </li>
      )}
    </ul>
  );
};

export default MeganavItemsSignedIn;
