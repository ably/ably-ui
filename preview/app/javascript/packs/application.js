import "../styles/application.css";

import Meganav from "@ably/ably-ui/core/Meganav";
import { reactRenderer } from "@ably/ably-ui/core/scripts";

document.addEventListener("DOMContentLoaded", () => {
  reactRenderer({ Meganav });
});
