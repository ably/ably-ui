import { queryId } from "../dom-query";

function enableBtn(el) {
  el.disabled = false;
  el.innerText = "Start a live chat";
}

function disableBtn(el) {
  el.disabled = true;
  el.innerText = "Live chat unavailable";
}

const WAIT_BETWEEN_RETRIES_MS = 300;

export default function toggleChatWidget() {
  const container = queryId("contact-footer");
  const trigger = queryId("open-chat-widget", container);

  let retries = 10;
  let clickHandler;

  const waitForScript = () => {
    const widget = window?.HubSpotConversations?.widget;

    clickHandler = (e) => {
      e.preventDefault();
      widget.open();
    };

    if (widget) {
      trigger.addEventListener("click", clickHandler);
      enableBtn(trigger);
    } else if (retries > 0) {
      retries -= 1;
      setTimeout(waitForScript, WAIT_BETWEEN_RETRIES_MS);
    }
  };

  waitForScript();

  return () => {
    disableBtn(trigger);
    trigger.removeEventListener("click", clickHandler);
  };
}
