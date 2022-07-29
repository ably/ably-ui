import { queryId } from "../dom-query";
import AddSearchClient from "addsearch-js-client";

const init = ({ input, container, listContainer, client }) => {
  client.setAnalyticsTag("Meganav autocomplete");
  client.setThrottleTime(400);

  const clearResults = () => {
    container.classList.add("hidden");
    listContainer.innerHTML = "";
  };

  const renderResults =
    (query) =>
    (results = { suggestions: [] }) => {
      if (results.suggestions.length === 0) {
        clearResults();
        return;
      }

      const items = results.suggestions.map((suggestion) => {
        const li = document.createElement("li");
        const button = document.createElement("button");

        button.classList.add(
          "ui-text-menu2",
          "font-medium",
          "p-8",
          "w-full",
          "text-left",
          "rounded",
          "hover:text-gui-hover",
          "hover:bg-light-grey"
        );

        button.innerHTML = suggestion.value.replace(
          query,
          `<span class="font-light">${query}</span>`
        );

        button.addEventListener("click", () => {
          window.location = `/search?q=${suggestion}`;
        });

        li.appendChild(button);
        return li;
      });

      listContainer.innerHTML = "";
      items.forEach((item) => listContainer.appendChild(item));
      container.classList.remove("hidden");
    };

  const keyupHandler = (e) => {
    const query = e.target.value;

    if (!query) {
      clearResults();
    } else {
      client.suggestions(query, renderResults(query));
    }
  };

  input.addEventListener("keyup", keyupHandler);

  return {
    teardown: () => input.removeEventListener("keyup", keyupHandler),
    clear: () => clearResults(),
  };
};

export default () => {
  const apiKey = document.body.dataset.addSearchApiKey;
  if (!apiKey) {
    console.log(`No AddSearch API key provided, skipping search suggestions.`);
    return [];
  }
  const client = new AddSearchClient(apiKey);

  return [
    queryId("meganav-search-input"),
    queryId("meganav-mobile-search-input"),
  ]
    .filter((i) => i)
    .map((input) => {
      const parent = input.parentNode;
      const container = queryId(
        "meganav-search-autocomplete-container",
        parent
      );
      const listContainer = queryId("meganav-search-autocomplete-list", parent);

      return init({ input, container, listContainer, client });
    });
};
