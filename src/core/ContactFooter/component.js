import { queryId } from "../dom-query";

function hubspotWidget() {
  const { HubSpotConversations = null } = window;
  return HubSpotConversations //
    ? HubSpotConversations.widget
    : null;
}

function disabled(el) {
  const unavailable = "Live chat unavailable";

  el.setAttribute("disabled", true);
  el.innerHTML = unavailable;
  el.onclick = null;
}

export default function toggleChatWidget() {
  const scope = queryId("contact-footer");
  const triggers = scope.querySelectorAll("[data-id='open-chat-widget']");
  const widget = hubspotWidget();

  triggers.forEach((el) => {
    if (!widget) return disabled(el);

    el.onclick = (e) => {
      e.preventDefault();
      widget.open();
    };
  });

  return function teardown() {
    triggers.forEach(disabled);
  };
}
