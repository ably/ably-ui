import React from "react";

import Icon from "../Icon/component.tsx";
import MeganavSearchPanel from "../MeganavSearchPanel/component.tsx";
import { AbsUrl } from "../Meganav/component.tsx";

const MeganavSearch = ({ absUrl }: { absUrl: AbsUrl }) => (
  <>
    <button
      type="button"
      data-id="meganav-control"
      data-control="search"
      className="h-64 w-24 px-24 pr-48 py-20 group focus:outline-none"
      aria-expanded="false"
      aria-controls="panel-search"
      aria-label={`Show Search Panel`}
    >
      <Icon
        name="icon-gui-search"
        color="text-cool-black"
        size="1.5rem"
        additionalCSS="group-hover:text-gui-hover group-focus:text-gui-focus"
      />
    </button>

    <div
      className="ui-meganav-panel invisible"
      id="panel-search"
      data-id="meganav-panel"
    >
      <MeganavSearchPanel absUrl={absUrl} />
    </div>
  </>
);

export default MeganavSearch;
