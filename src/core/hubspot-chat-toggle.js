import { queryId } from "./dom-query";

/*
    A method to enable/disable a CTA that
    is used to open the HubSpot chat widget

    If the Chat widget is unavailable this script
    will apply a disabled property and change
    the text on the button, to warn the user.

    Params:
    - dataId        the parent container data-id

*/

function enableBtn(el, text) {
  el.disabled = false;
  el.innerText = text;
}

function disableBtn(el, text) {
  el.disabled = true;
  el.innerText = text;
}

const WAIT_BETWEEN_RETRIES_MS = 100;
let MAX_RETRY_COUNT = 30;

export default function toggleChatWidget(params) {
  const { dataId } = params ?? {};
  const container = queryId(dataId);
  const chatButton = queryId("open-chat-widget", container);
  const textEnabled = chatButton.dataset.enabledLabel;
  const textDisabled = chatButton.dataset.disabledLabel;

  if (!dataId || !container) return;
  const trigger = queryId("open-chat-widget", container);

  let clickHandler;

  const waitForScript = (delay) => {
    const widget = window?.HubSpotConversations?.widget;

    // If the chat is set to be hidden out of hours this will return null
    const iframe = document.querySelector("#hubspot-messages-iframe-container");

    clickHandler = (e) => {
      e.preventDefault();
      widget.open();
    };

    if (widget && iframe) {
      trigger.addEventListener("click", clickHandler);
      enableBtn(trigger, textEnabled);
    } else if (--MAX_RETRY_COUNT) {
      setTimeout(() => waitForScript(WAIT_BETWEEN_RETRIES_MS), delay);
    }
  };

  disableBtn(trigger, textDisabled);
  waitForScript(0);

  return () => {
    disableBtn(trigger, textDisabled);
    trigger.removeEventListener("click", clickHandler);
  };
}
