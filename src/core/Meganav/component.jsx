import React, { useEffect } from "react";
import T from "prop-types";

import MeganavScripts from "./component.js";

import Logo from "../Logo/component.jsx";
import MeganavItemControl from "../MeganavItemControl/component.jsx";
import MobileMenuControl from "../MobileMenuControl/component.jsx";
import PanelCloseControl from "../PanelCloseControl/component.jsx";
import PanelOpenControl from "../PanelOpenControl/component.jsx";

import PlatformPanel from "../PlatformPanel/component.jsx";
import UseCasesPanel from "../UseCasesPanel/component.jsx";
import WhyAblyPanel from "../WhyAblyPanel/component.jsx";
import DevelopersPanel from "../DevelopersPanel/component.jsx";

const PathsT = T.shape({
  logo: T.string,
  iconSprites: T.string,
  ablyStack: T.string,
  blogThumb1: T.string,
  blogThumb2: T.string,
  blogThumb3: T.string,
});

const panels = [
  { label: "Platform", id: "platform-panel", component: PlatformPanel },
  { label: "Use Cases", id: "use-cases-panel", component: UseCasesPanel },
  { label: "Why Ably", id: "why-ably-panel", component: WhyAblyPanel },
  { label: "Developers", id: "developers-panel", component: DevelopersPanel },
];

const DesktopNavItems = ({ paths }) => (
  <ul className="hidden lg:flex">
    {panels.map((panel) => {
      return (
        <li className="c-meganav-item" key={panel.id}>
          <MeganavItemControl iconSpritesPath={paths.iconSprites} ariaControls={panel.id}>
            {panel.label}
          </MeganavItemControl>

          <div className="c-meganav-dropdown" id={panel.id}>
            <panel.component paths={paths} />
          </div>
        </li>
      );
    })}

    <li className="c-meganav-item">
      <a href="/pricing" className="c-meganav-nav-item">
        Pricing
      </a>
    </li>
  </ul>
);

DesktopNavItems.propTypes = {
  paths: PathsT,
};

const SignedOutNavItems = () => (
  <ul className="hidden lg:flex items-center">
    <li>
      <a href="/contact" className="c-meganav-nav-item">
        Contact us
      </a>
    </li>
    <li>
      <a href="/login" className="c-meganav-nav-item">
        Login
      </a>
    </li>
    <li className="ml-16">
      <a href="/sign-up" className="c-btn-alt">
        Sign up free
      </a>
    </li>
  </ul>
);

const MobileNavItems = ({ paths }) => (
  <ul className="flex lg:hidden">
    <li>
      <a href="/login" className="c-meganav-nav-item">
        Login
      </a>
    </li>
    <li className="c-meganav-item">
      <MobileMenuControl iconSpritesPath={paths.iconSprites} ariaControls="mobile-dropdown" />

      <div className="c-meganav-mobile-dropdown" id="mobile-dropdown">
        <div className="py-16 px-24 md:px-32 lg:px-64 bg-white">
          <ul className="mb-16">
            {panels.map((panel) => {
              return (
                <li className="c-meganav-mobile-item" key={`${panel.id}-mobile`}>
                  <PanelOpenControl iconSpritesPath={paths.iconSprites} ariaControls={`${panel.id}-mobile`}>
                    {panel.label}
                  </PanelOpenControl>

                  <div className="c-meganav-mobile-panel" id={`${panel.id}-mobile`}>
                    <PanelCloseControl iconSpritesPath={paths.iconSprites} ariaControls={`${panel.id}-mobile`} />
                    <panel.component paths={paths} />
                  </div>
                </li>
              );
            })}
            <li>
              <a href="/pricing" className="c-meganav-mobile-link">
                Pricing
              </a>
            </li>
          </ul>
          <hr className="c-meganav-hr mb-20" />
          <div className="flex justify-between items-center mb-16">
            <a href="/contact" className="c-meganav-nav-item ml-0 py-0">
              Contact us
            </a>
            <a href="/sign-up" className="c-btn-alt">
              Sign up free
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
);

MobileNavItems.propTypes = {
  paths: PathsT,
};

export default function Meganav({ paths }) {
  useEffect(() => {
    MeganavScripts();
  }, []);

  useEffect(() => {
    const teardown = MeganavScripts();
    return () => teardown();
  }, []);

  return (
    <div className="c-meganav-wrapper">
      <div aria-label="Main Navigation" className="c-meganav" data-id="meganav">
        <Logo logoPath={paths.logo} />
        <DesktopNavItems paths={paths} />
        <SignedOutNavItems />
        <MobileNavItems paths={paths} />
      </div>
    </div>
  );
}

Meganav.propTypes = {
  paths: PathsT,
};
