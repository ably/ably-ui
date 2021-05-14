import React, { useState, useEffect } from "react";
import T from "prop-types";

function StatusLegend({ metadata }) {
  const items = Object.entries(metadata[0]).map((e) => {
    const [id, text] = e;
    const classname = `ui-uptime-key ui-uptime-${id}`;
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
  const CtaLink = () => <a href={href}>{text}</a>;
  return (
    <div className="ui-uptime-link-back">
      <CtaLink /> <SvgIcon id="disclosure-arrow-path" />
    </div>
  );
}

function StatusFooter({ metadata, href, text }) {
  return (
    <div className="ui-uptime-footer">
      <StatusLegend {...{ metadata }} />
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

export default function Uptime({ serverUrl, linkTo = null }) {
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
      <div className="ui-uptime-error" data-id="uptime">
        <strong>An Error has occured.</strong>
        <em>{data.message}</em>
        <span>{serverUrl}</span>
      </div>
    );
  }

  return (
    data && (
      <div className="ui-uptime-widget" data-id="uptime">
        <UptimeGraph {...{ collection }} />
        {showFooterRow && <StatusFooter {...{ metadata, ...linkTo }} />}
      </div>
    )
  );
}
UptimeGraph.propTypes = {
  collection: T.array,
};

StatusLegend.propTypes = {
  metadata: T.array,
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
};
