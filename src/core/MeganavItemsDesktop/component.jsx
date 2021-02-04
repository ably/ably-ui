import React from "react";
import T from "prop-types";

import MeganavData from "../Meganav/component.json";
import MeganavControl from "../MeganavControl/component.jsx";

const MeganavDesktopItems = ({ panels, paths, theme }) => (
  <ul className="hidden md:flex" data-id="meganav-items-desktop">
    {MeganavData.panels.map((panel) => {
      const PanelComponent = panels[panel.component];

      return (
        <li className="ui-meganav-item" key={panel.id}>
          <MeganavControl theme={theme} ariaControls={panel.id}>
            {panel.label}
          </MeganavControl>

          <div className="ui-meganav-panel invisible" id={panel.id} data-id="meganav-panel">
            <PanelComponent paths={paths} />
          </div>
        </li>
      );
    })}

    <li className="ui-meganav-item">
      <a href="/pricing" data-id="meganav-link" className={`ui-meganav-link h-64 items-center flex ${theme.textColor}`}>
        Pricing
      </a>
    </li>
  </ul>
);

MeganavDesktopItems.propTypes = {
  panels: T.object,
  paths: T.shape({
    logo: T.string,
    iconSprites: T.string,
    ablyStack: T.string,
    blogThumb1: T.string,
    blogThumb2: T.string,
    blogThumb3: T.string,
  }),
  theme: T.object,
};

export default React.memo(MeganavDesktopItems);
