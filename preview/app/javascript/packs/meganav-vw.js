import Meganav from "@ably/ui/core/Meganav/component";
import Notice from "@ably/ui/core/Notice/component";
import MeganavBlogPostsList from "@ably/ui/core/MeganavBlogPostsList/component";

document.addEventListener("DOMContentLoaded", () => {
  const queryString = window.location.search;

  const params = new URLSearchParams(queryString);
  const addSearchApiKey = document.body.dataset.addSearchApiKey;

  Meganav({
    addSearchApiKey,
  });

  Notice({
    bannerContainer: document.querySelector('[data-id="ui-notice"]'),
    cookieId: "1",
    noticeId: "A",
    options: {
      collapse: params.has("notice-collapse"),
    },
  });

  MeganavBlogPostsList();
});
