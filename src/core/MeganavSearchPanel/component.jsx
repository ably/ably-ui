import React from "react";
import T from "prop-types";

import Icon from "../Icon/component.jsx";
import MeganavSearchSuggestions from "../MeganavSearchSuggestions/component.jsx";
import MeganavSearchAutocomplete from "../MeganavSearchAutocomplete/component.jsx";

const MeganavSearchPanel = ({ absUrl }) => {
  return (
    <section className="ui-meganav-content grid-cols-12">
      <div className="col-span-8">
        <div className="mb-32">
          <form className="flex items-start" action={absUrl("/search")} method="get">
            <div className="relative w-full">
              <Icon name="icon-gui-search" color="text-cool-black" size="1.5rem" additionalCSS="absolute top-12 left-16" />
              <input type="search" name="q" className="ui-input pl-48 h-48" placeholder="Search" data-id="meganav-search-input" />

              <MeganavSearchAutocomplete />
            </div>

            <button type="submit" className="ui-btn-secondary ml-8 sm:ml-16 md:ml-24 xl:ml-32">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="col-span-12">
        <MeganavSearchSuggestions displaySupportLink={true} absUrl={absUrl} />
      </div>
    </section>
  );
};

MeganavSearchPanel.propTypes = {
  absUrl: T.func,
};

export default MeganavSearchPanel;
