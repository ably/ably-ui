import React from "react";

const MeganavSearchAutocomplete = () => (
  <div
    className="absolute w-full mt-8 z-10 hidden shadow-container rounded-lg bg-white border border-mid-grey"
    data-id="meganav-search-autocomplete-container"
  >
    <ol className="m-16" data-id="meganav-search-autocomplete-list"></ol>
  </div>
);

export default MeganavSearchAutocomplete;
