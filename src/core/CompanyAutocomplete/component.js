import "./component.css";

import throttle from "lodash.throttle";

const COMPANY_AUTOCOMPLETE_DROPDOWN = "[data-id=company-autocomplete-dropdown]";

const getContainer = (input) =>
  input.parentNode.querySelector(COMPANY_AUTOCOMPLETE_DROPDOWN);
const getItems = (container) =>
  container ? container.querySelectorAll("li > button") : [];
const getFocusedItemIndex = (items) =>
  Array.from(items).indexOf(document.activeElement);

const clearList = (input) => {
  const container = getContainer(input);

  if (container) {
    container.classList.add("hidden");
    container.querySelector("ol").innerHTML = "";
  }
};

const renderItems = (data) =>
  data.map((element) => {
    const listItem = document.createElement("li");
    listItem.classList.add("ui-company-autocomplete-listitem");

    const btn = document.createElement("button");
    btn.classList.add("ui-company-autocomplete-btn");
    btn.dataset.name = element.name;

    const logo = document.createElement("img");
    logo.alt = `${element.name} logo`;
    logo.src = element.logo;
    logo.classList.add("ui-company-autocomplete-logo");

    const name = document.createElement("p");
    name.textContent = element.name;
    name.classList.add("ui-company-autocomplete-name");

    const domain = document.createElement("p");
    domain.textContent = element.domain;
    domain.classList.add("ui-company-autocomplete-domain");

    btn.append(logo);
    btn.append(name);
    btn.append(domain);
    listItem.append(btn);

    return listItem;
  });

const renderContainer = (input) => {
  let container = getContainer(input);

  if (!container) {
    input.parentNode.style.position = "relative";

    container = document.createElement("div");
    container.dataset.id = "company-autocomplete-dropdown";
    container.classList.add("ui-company-autocomplete-container");

    const list = document.createElement("ol");
    list.classList.add("ui-company-autocomplete-list");

    return { container, list };
  }

  return { container, list: container.querySelector("ol") };
};

const renderDropdown = (input, data) => {
  const parent = input.parentNode;
  const { container, list } = renderContainer(input);
  const items = renderItems(data);

  clearList(input);

  items.forEach((item, index) => {
    list.append(item);
    item.addEventListener("click", (event) => {
      input.value = data[index].name;
      event.preventDefault();
    });
  });

  container.append(list);
  container.classList.remove("hidden");
  parent.append(container);
};

const fetchData = async (url, query) => {
  try {
    if (!query) {
      return [];
    }

    const res = await fetch(`${url}?query=${query}`);
    const payload = await res.json();

    return payload;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return [];
  }
};

const handleDownArrow = (input, event) => {
  const container = getContainer(input);
  const items = getItems(container);
  const focusedItemIndex = getFocusedItemIndex(items);

  if (items.length === 0) {
    return;
  } else if (document.activeElement === input) {
    items[0].focus();
  } else if (focusedItemIndex >= 0 && focusedItemIndex < items.length - 1) {
    items[focusedItemIndex + 1].focus();
  }

  event.preventDefault();
};

const handleUpArrow = (input, event) => {
  const container = getContainer(input);
  const items = getItems(container);
  const focusedItemIndex = getFocusedItemIndex(items);

  if (items.length === 0) {
    return;
  } else if (focusedItemIndex === 0) {
    input.focus();
  } else if (focusedItemIndex > 0) {
    items[focusedItemIndex - 1].focus();
  }

  event.preventDefault();
};

const handleTab = (input, event) => {
  const container = getContainer(input);
  const items = getItems(container);
  const focusedItemIndex = getFocusedItemIndex(items);

  if (document.activeElement === input && event.shiftKey) {
    clearList(input);
  } else if (focusedItemIndex === items.length - 1) {
    clearList(input);
  }
};

const handleEnter = (input, event) => {
  if (event.target.dataset.name) {
    input.value = event.target.dataset.name;
    clearList(input);
    input.focus();
    event.preventDefault();
  }
};

const CompanyAutocomplete = (input, url) => {
  if (!input || !url) return;

  input.setAttribute("autocomplete", "off");

  input.addEventListener(
    "keyup",
    throttle(
      async (event) => {
        if (["Enter", "Space", "Tab", "Escape"].includes(event.code)) return;

        const query = event.target.value;
        const data = await fetchData(url, query);

        if (data && data.length > 0) {
          renderDropdown(input, data);
        }
      },
      100,
      { trailing: true }
    )
  );

  input.parentNode.addEventListener("keydown", (event) => {
    if (event.code === "ArrowDown") {
      handleDownArrow(input, event);
    } else if (event.code === "ArrowUp") {
      handleUpArrow(input, event);
    } else if (event.code === "Enter" || event.code === "Space") {
      handleEnter(input, event);
    } else if (event.code === "Tab") {
      handleTab(input, event);
    } else if (event.code === "Escape") {
      clearList(input);
    }
  });

  document.body.addEventListener("click", () => {
    clearList(input);
  });
};

export default CompanyAutocomplete;
