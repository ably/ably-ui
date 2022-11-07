import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import T from "prop-types";
import Icon from "../Icon/component.jsx";

const DropdownMenuContext = createContext();

const DropdownMenu = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const clickHandler = (e) => {
      if (ref?.current?.contains(e.target)) return;
      setOpen(false);
    };

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <DropdownMenuContext.Provider value={{ isOpen, setOpen }}>
      <div id="dropdown-menu" className="relative" ref={ref}>
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
};

DropdownMenu.propTypes = {
  children: T.node,
};

const Trigger = ({ children, additionalTriggerCSS = "" }) => {
  const { isOpen, setOpen } = useContext(DropdownMenuContext);

  return (
    <button
      id="menu-trigger"
      onClick={() => setOpen(!isOpen)}
      className={`${additionalTriggerCSS} flex items-center p-8 ml-8 group hover:text-gui-hover hover:bg-light-grey active:text-gui-active focus:text-gui-focus focus:outline-none rounded-lg`}
    >
      <span className="leading-normal">{children}</span>
      <Icon
        name="icon-gui-disclosure-arrow"
        color="text-cool-black"
        size="1.25rem"
        additionalCSS="transform rotate-90 group-hover:text-gui-hover group-active:text-gui-active group-focus:text-gui-focus"
      />
    </button>
  );
};

Trigger.propTypes = {
  children: T.node,
  additionalTriggerCSS: T.string,
};

const Content = ({ children, anchorPosition = "right", additionalContentCSS }) => {
  const { isOpen } = useContext(DropdownMenuContext);

  if (!isOpen) {
    return null;
  }

  const anchorPositionClasses = anchorPosition === "right" ? "right-0" : "left-0";

  return (
    <div
      id="menu-content"
      className={`${additionalContentCSS} absolute p-8 z-10 border border-mid-grey bg-white rounded shadow-container ${anchorPositionClasses}`}
      style={{ minWidth: 275, top: 44 }}
    >
      {children}
    </div>
  );
};

Content.propTypes = {
  children: T.node,
  anchorPosition: T.string,
  additionalContentCSS: T.string,
};

const Link = ({ url, title, subtitle, iconName, children }) => {
  return (
    <a href={url} className="menu-link group block p-8 hover:bg-light-grey hover:text-cool-black rounded">
      <p className="mb-4">
        {title}
        {iconName ? <Icon name={iconName} size="1rem" color="text-cool-black" additionalCSS="align-middle ml-8 relative -top-1 -left-4" /> : null}
      </p>
      {subtitle ? <p className="text-p3 mb-16 text-dark-grey">{subtitle}</p> : null}
      {children}
    </a>
  );
};

Link.propTypes = {
  url: T.string,
  title: T.string,
  subtitle: T.string,
  iconName: T.string,
  children: T.node,
};

DropdownMenu.Trigger = Trigger;
DropdownMenu.Content = Content;
DropdownMenu.Link = Link;
export default DropdownMenu;
