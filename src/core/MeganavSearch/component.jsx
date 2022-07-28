import React from "react";
import T from "prop-types";

import Icon from "../Icon/component.jsx";
import MeganavSearchPanel from "../MeganavSearchPanel/component.jsx";

const MeganavSearch = ({ absUrl }) => {
  return (
    <>
      <button
        type="button"
        data-id="meganav-control"
        className="h-64 w-24 px-24 pr-48 py-20"
        aria-expanded="false"
        aria-controls="panel-search"
        aria-label={`Show Search Panel`}
      >
        <Icon name="icon-gui-search" color="text-cool-black" size="1.5rem" additionalCSS="" />
      </button>

      <div className="ui-meganav-panel invisible" id="panel-search" data-id="meganav-panel">
        <MeganavSearchPanel absUrl={absUrl} />
      </div>
    </>
  );
};

MeganavSearch.propTypes = {
  absUrl: T.func,
};

export default MeganavSearch;
