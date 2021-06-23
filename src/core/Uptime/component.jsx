import React, { useState, useEffect } from "react";
import T from "prop-types";

import FeaturedLink from "../FeaturedLink/component.jsx";

export const themes = {
  light: {
    text: "text-cool-black",
    iconColor: "ui-icon-cool-black",
  },
  dark: {
    text: "text-white",
    iconColor: "ui-icon-white",
  },
};

export const ThemeContext = React.createContext();

function StatusLegend({ metadata, textColor }) {
  const items = Object.entries(metadata[0]).map((e) => {
    const [id, text] = e;
    const classname = `ui-uptime-key ui-uptime-${id} ${textColor}`;
    return (
      <span key={id} className={classname}>
        {text}
      </span>
    );
  });
  return <div className="ui-uptime-legend">{items}</div>;
}

function UptimeGraph({ collection }) {
  // add 30 day split deliminators
  collection.splice(29, 0, null);
  collection.splice(60, 0, null);

  const items = collection.map((row, i) => {
    if (!row) return <li key={i} className="ui-uptime-seperator"></li>;

    const classname = `ui-uptime-day ui-uptime-${row.class}`;
    return <li key={i} className={classname} data-label={row.label}></li>;
  });

  return (
    <div className="ui-uptime-graph">
      <ul className="ui-uptime-list">{items}</ul>
    </div>
  );
}

function SvgIcon({ id }) {
  return (
    <svg className="w-12 h-12 ml-4 transform -rotate-90">
      <use xlinkHref={"#sprite-" + id}></use>
    </svg>
  );
}

function StatusCtaLink({ href, text }) {
  return (
    <div className="ui-uptime-link-back">
      <ThemeContext.Consumer>
        {({ iconColor }) => (
          <FeaturedLink url={href} iconColor={iconColor}>
            {text}
          </FeaturedLink>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

function StatusFooter({ metadata, href, text }) {
  return (
    <div className="ui-uptime-footer">
      <ThemeContext.Consumer>{({ text }) => <StatusLegend {...{ metadata }} textColor={text} />}</ThemeContext.Consumer>
      <StatusCtaLink {...{ href, text }} />
    </div>
  );
}

function handleError(err) {
  // output a message and normalise schema
  console.warn("Uptime Error", err);
  const { message } = err || {};
  return { error: true, message };
}

export default function Uptime({ serverUrl, linkTo = null, theme = "light" }) {
  if (!serverUrl) throw new Error("Server endpoint URL required");

  const [data, setData] = useState(null);
  const { collection, metadata } = data || {};
  const showFooterRow = linkTo?.href && linkTo?.text;

  useEffect(() => {
    const fetchEndpointJson = async () => {
      let payload = null;
      try {
        payload = await fetch(serverUrl);
        payload = await payload.json();
        const { chart_data: collection, chart_legend: metadata } = payload;
        payload = { collection, metadata };
      } catch (err) {
        payload = handleError(err);
      }

      setData(payload);
    };

    fetchEndpointJson();
  }, []);

  if (data && data.error) {
    return (
      <div
        className={`flex uptime-md:flex-row justify-center items-center p-24 border rounded font-sans font-light text-p2 ${themes[theme].text}`}
        data-id="uptime-error"
      >
        Sorry, we can’t retrieve uptime data right now.
      </div>
    );
  }

  return (
    data && (
      <ThemeContext.Provider value={themes[theme]}>
        <div className="ui-uptime-widget" data-id="uptime">
          <UptimeGraph {...{ collection }} />
          {showFooterRow && <StatusFooter {...{ metadata, ...linkTo }} />}
        </div>
      </ThemeContext.Provider>
    )
  );
}
UptimeGraph.propTypes = {
  collection: T.array,
};

StatusLegend.propTypes = {
  metadata: T.array,
  textColor: T.string,
};

SvgIcon.propTypes = {
  id: T.string,
};

StatusFooter.propTypes = {
  metadata: T.array,
  href: T.string,
  text: T.string,
};

StatusCtaLink.propTypes = {
  href: T.string,
  text: T.string,
};

Uptime.propTypes = {
  serverUrl: T.string,
  linkTo: T.object,
  theme: T.oneOf(["light", "dark"]),
};
