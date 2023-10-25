// This imitates the way the React component is initialized if it looks a bit strange...
const initHeadway = () => {
  // See https://docs.headwayapp.co/widget for more configuration options.
  const hwConfig = {
    selector: ".headwayPortal div",
    account: "yZ1rmJ",
    __component: true,
    badgePosition: "center-right",
    widgetPosition: "bottom-right",
  };

  const widget = window.Headway.getNewWidget();
  widget.init(hwConfig);
};

export default () => {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://cdn.headwayapp.co/widget.js";
  script.type = "text/javascript";
  script.onload = () => {
    initHeadway();
  };
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(script);
};
