import "../styles/application.css";

import Meganav from "@ably/ably-ui/core/Meganav";
import { reactRenderer, loadSprites } from "@ably/ably-ui/core/scripts";

import sprites from "@ably/ably-ui/core/sprites.svg";
loadSprites(sprites);

document.addEventListener("DOMContentLoaded", () => {
  reactRenderer({ Meganav });
});
