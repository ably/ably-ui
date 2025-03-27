import React from "react";
import cn from "./utils/cn";
import Icon from "./Icon";
import Status, { StatusUrl } from "./Status";
import { Theme } from "./styles/colors/types";
import Logo from "./Logo";
import Badge from "./Badge";
import { bottomFooterLinks, footerLinks, socialLinks } from "./Footer/data";
import { ablyAwards } from "./Meganav/data";

const Footer = () => {
  const textColorClassnames =
    "ui-text-menu3 font-medium transition-colors text-neutral-1000 dark:text-neutral-300 hover:text-neutral-1300 hover:dark:text-neutral-000 active:text-neutral-800 active:dark:text-neutral-400 focus:outline focus:outline-gui-focus";

  return (
    <footer
      className="w-full bg-neutral-100 dark:bg-neutral-1200 border-t border-neutral-300 dark:border-neutral-1000"
      data-id="footer"
    >
      <div className="max-w-screen-xl mx-auto ui-grid-px pt-40 sm:pt-48 md:pt-64 pb-40">
        <div className="flex flex-col sm:flex-row gap-x-24 gap-y-48 mb-64 justify-between">
          <div className="flex-1 flex flex-col gap-24">
            {(["light", "dark"] as Theme[]).map((theme) => (
              <Logo
                key={theme}
                href="/"
                theme={theme}
                additionalLinkAttrs={{
                  className: cn("focus-base rounded w-[102px]", {
                    "flex dark:hidden": theme === "light",
                    "hidden dark:flex": theme === "dark",
                  }),
                }}
              />
            ))}

            <Status statusUrl={StatusUrl} showDescription />

            <div className="flex gap-x-24">
              {socialLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Visit Ably on ${link.key}`}
                  className="w-20 h-20 group/social-icon"
                >
                  <Icon
                    name={link.monoIcon}
                    size="20px"
                    additionalCSS="text-neutral-1000 dark:text-neutral-300 group-hover/social-icon:hidden"
                  />
                  <Icon
                    name={link.colorIcon}
                    size="20px"
                    additionalCSS="hidden group-hover/social-icon:flex"
                  />
                </a>
              ))}
            </div>
            <div className="flex gap-8 mt-16">
              {ablyAwards.map((award) => (
                <img
                  key={award.desc}
                  src={award.image}
                  alt={award.desc}
                  width="57"
                  height="64"
                />
              ))}
            </div>
          </div>
          <div className="flex-1 md:flex-[2] flex flex-row flex-wrap gap-x-24 gap-y-48">
            {footerLinks.map(({ title, links }) => (
              <div key={title} className="flex-1 basis-1/3 md:basis-1">
                <h3 className="ui-text-overline2 text-neutral-700 dark:text-neutral-600 mb-16">
                  {title}
                </h3>
                <ul className="flex flex-col gap-y-12">
                  {links.map(({ label, link, badge }) => (
                    <li key={label} className="flex gap-x-8">
                      <a
                        href={link}
                        className={textColorClassnames}
                        aria-label={`Visit ${label}`}
                      >
                        {label}
                      </a>
                      {badge && (
                        <Badge size="xs" className="ui-text-p4 font-[10px]">
                          {badge}
                        </Badge>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-24 border-t border-neutral-300 dark:border-neutral-1000">
          <div className="flex gap-24">
            {bottomFooterLinks.map((link) => (
              <a
                key={link.label}
                href={link.link}
                className={textColorClassnames}
                aria-label={`Visit ${link.label}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
