import MeganavInit from "@ably/ably-ui/core/Meganav/component";
import Meganav from "@ably/ably-ui/core/Meganav";

import { reactRenderer, utilityFunction } from "@ably/ably-ui/core/scripts";

document.addEventListener("DOMContentLoaded", () => {
  reactRenderer({ Meganav });
});

utilityFunction();
MeganavInit();
