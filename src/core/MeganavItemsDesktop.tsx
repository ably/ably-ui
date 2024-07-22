import React from "react";

import MeganavData from "./Meganav/component.json";
import MeganavControl from "./MeganavControl";
import { AbsUrl, MeganavPanels, MeganavTheme } from "./Meganav";

type MeganavDesktopItems = {
  panels: MeganavPanels;
  paths?: {
    logo: string;
    iconSprites: string;
    ablyStack: string;
    blogThumb1: string;
    blogThumb2: string;
    blogThumb3: string;
  };
  theme: MeganavTheme;
  absUrl: AbsUrl;
  statusUrl: string;
};

const MeganavDesktopItems = ({
  panels,
  paths,
  theme,
  absUrl,
  statusUrl,
}: MeganavDesktopItems) => (
  <ul className="hidden md:flex" data-id="meganav-items-desktop">
    {MeganavData.panels.map((panel) => {
      const PanelComponent = panels[panel.component];
      const bgCSS = ["products-panel", "use-cases-panel"].includes(panel.id)
        ? "ui-meganav-panel-split-bg"
        : "";

      return (
        <li className="ui-meganav-item" key={panel.id}>
          <MeganavControl
            theme={theme}
            ariaControls={panel.id}
            ariaLabel={panel.label}
          >
            <span className="hidden lg:inline">{panel.label}</span>
            <span className="lg:hidden">{panel.shortLabel}</span>
          </MeganavControl>

          <div
            className={`ui-meganav-panel invisible ${bgCSS}`}
            id={panel.id}
            data-id="meganav-panel"
          >
            <PanelComponent
              paths={paths}
              absUrl={absUrl}
              statusUrl={statusUrl}
            />
          </div>
        </li>
      );
    })}

    <li className="ui-meganav-item">
      <a
        href={absUrl("/pricing")}
        data-id="meganav-link"
        className={`ui-meganav-link h-64 items-center flex ${theme.textColor}`}
      >
        Pricing
      </a>
    </li>
  </ul>
);

export default React.memo(MeganavDesktopItems);
