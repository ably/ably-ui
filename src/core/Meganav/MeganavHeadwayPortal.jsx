import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import HeadwayWidget from "../HeadwayWidget/HeadwayWidget.jsx";

export default function MeganavHeadwayPortal() {
  const [headwayPortalNodes, setHeadwayPortalNodes] = useState([]);

  useEffect(() => {
    // Query all the elements with the .headwayPortal class
    setHeadwayPortalNodes(Array.from(document.querySelectorAll(".headwayPortal")));
  }, []);

  return (
    <>
      {headwayPortalNodes.map((node, index) => {
        return createPortal(<HeadwayWidget account={"yZ1rmJ"} badgePosition={"center-right"} id={`widget-${index}`} />, node, `headway-${index}`);
      })}
    </>
  );
}
