import React from "react";
import T from "prop-types";

const Logo = ({ dataId, logoUrl, href = "/", additionalImgAttrs, additionalLinkAttrs }) => {
  return (
    <a href={href} data-id={dataId} className="block" style={{ height: "2.125rem" }} {...additionalLinkAttrs}>
      <img src={logoUrl} width="108px" alt="Ably logo" {...additionalImgAttrs} />
    </a>
  );
};

Logo.propTypes = {
  dataId: T.string,
  href: T.string,
  logoUrl: T.string,
  additionalImgAttrs: T.object,
  additionalLinkAttrs: T.object,
};

export default React.memo(Logo);
