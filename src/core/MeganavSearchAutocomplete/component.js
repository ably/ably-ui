import { queryId } from "../dom-query";
import AddSearchClient from "addsearch-js-client";

const init = ({ input, container, listContainer, clear, client }) => {
  client.setAnalyticsTag("Meganav autocomplete");
  client.setThrottleTime(400);

  const clearResults = () => {
    container.classList.add("hidden");
    listContainer.innerHTML = "";
  };

  const toggleClearBtn = (query) => {
    if ((query || "").length > 0 && clear) {
      clear.classList.remove("invisible");
    } else if (clear) {
      clear.classList.add("invisible");
    }
  };

  const markQueryInSuggestion = (suggestionValue, query) => {
    return suggestionValue.replace(
      query.toLowerCase(),
      `<span class="font-light">${query}</span>`,
    );
  };

  const navigateToUrl = (q) => (window.location = `/search?q=${q}`);

  const focusNext = (index) => {
    const nextSuggestion = listContainer.querySelector(
      `[data-suggestion-index="${index + 1}"]`,
    );
    if (!nextSuggestion) return;
    nextSuggestion.focus();
  };

  const focusPrevious = (index) => {
    const previousIndex = index - 1;

    const previousSuggestion = listContainer.querySelector(
      `[data-suggestion-index="${previousIndex}"]`,
    );
    if (!previousSuggestion) return;
    previousSuggestion.focus();
  };

  const renderResults =
    (query) =>
    (results = {}) => {
      toggleClearBtn(query);

      // Prevent invalid access error when key is invalid
      if (!Array.isArray(results.suggestions)) {
        clearResults();
        return;
      }

      // Prevent key error from invalid key
      if (results.suggestions.length === 0) {
        clearResults();
        return;
      }

      const items = results.suggestions.map((suggestion, index) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.type = "button";

        button.classList.add(
          "ui-text-menu2",
          "font-medium",
          "p-8",
          "w-full",
          "text-left",
          "rounded",
          "hover:text-gui-hover",
          "focus:outline-gui-focus",
          "hover:bg-light-grey",
        );

        button.innerHTML = markQueryInSuggestion(suggestion.value, query);

        button.dataset.suggestionIndex = index;

        button.addEventListener("click", () => {
          navigateToUrl(suggestion.value);
        });

        button.addEventListener("keydown", (e) => {
          const key = e.key;

          if (key === "ArrowDown") {
            focusNext(index);
          } else if (key === "ArrowUp" && index - 1 < 0) {
            input.focus();
          } else if (key === "ArrowUp" && index - 1 >= 0) {
            focusPrevious(index);
          } else if (key === "Enter" || key === "Space") {
            navigateToUrl(suggestion.value);
          }
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
    const key = e.key;

    if (key === "ArrowDown") {
      focusNext(0);
      return;
    }

    if (!query) {
      clearResults();
    } else {
      client.suggestions(query, renderResults(query));
    }
  };

  let clearHandler;
  if (clear) {
    clearHandler = () => {
      input.value = "";
      clear.classList.add("invisible");
      clearResults();
    };
    clear.addEventListener("click", clearHandler);
  }

  input.addEventListener("keyup", keyupHandler);

  return {
    teardown: () => {
      input.removeEventListener("keyup", keyupHandler);
      if (clear) clear.removeEventListener("click", clearHandler);
    },
    clear: () => {
      input.value = "";
      clearResults();
    },
  };
};

export default (apiKey) => {
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
        parent,
      );
      const listContainer = queryId("meganav-search-autocomplete-list", parent);
      const clear = queryId("meganav-search-input-clear", parent);

      return init({ input, container, listContainer, client, clear });
    });
};
