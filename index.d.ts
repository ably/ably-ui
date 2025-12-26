/* eslint-disable @typescript-eslint/no-explicit-any */

declare module '@ably/ui/core/Accordion/types' {
import { ReactNode } from "react";
import { IconName, IconSize } from ".@ably/ui/core/Icon/types";
import { ColorThemeSet } from ".@ably/ui/core/styles/colors/types";
/**
 * Represents the data structure for an Accordion component.
 */
export type AccordionData = {
    /**
     * The name of the accordion item.
     */
    name: string;
    /**
     * The optional icon name to be displayed alongside the accordion item.
     */
    icon?: IconName | AccordionIcon;
    /**
     * The content to be displayed when the accordion item is expanded.
     */
    content: ReactNode;
    /**
     * Optional click handler function that is called when the accordion item is clicked.
     * @param index - The index of the clicked accordion item.
     */
    onClick?: (index: number) => void;
    /**
     * Indicates whether the accordion item is interactive.
     * When false, the item cannot be expanded or collapsed by user interaction.
     * @default true
     */
    interactive?: boolean;
};
export type AccordionIcon = {
    name: IconName;
    css?: string;
};
export type AccordionIcons = {
    closed: AccordionIcon;
    open: AccordionIcon;
};
export const accordionThemes: readonly ["default", "transparent", "static"];
export type AccordionTheme = (typeof accordionThemes)[number];
/**
 * Represents the theme colors for an accordion component.
 */
export type AccordionThemeColors = {
    /**
     * Background color class for the accordion.
     */
    bg: ColorThemeSet;
    /**
     * Background color when the accordion item is hovered.
     */
    hoverBg: ColorThemeSet;
    /**
     * Text color class for the accordion.
     */
    text: ColorThemeSet;
    /**
     * Color class for the toggle icon of the accordion.
     */
    toggleIconColor: ColorThemeSet;
    /**
     * Optional background color class for selectable accordion items.
     */
    selectableBg?: ColorThemeSet;
    /**
     * Optional text color class for selectable accordion items.
     */
    selectableText?: ColorThemeSet;
    /**
     * Optional border color for the accordion.
     */
    border?: string;
};
/**
 * Options for configuring the Accordion component.
 */
export type AccordionOptions = {
    /**
     * If true, only one accordion item can be open at a time.
     * @default false
     */
    autoClose?: boolean;
    /**
     * If true, accordion items can be selected.
     * @default false
     */
    selectable?: boolean;
    /**
     * If true, the accordion header will stick to the top when scrolling.
     * @default false
     */
    sticky?: boolean;
    /**
     * An array of indexes indicating which accordion items should be open by default.
     * @default []
     */
    defaultOpenIndexes?: number[];
    /**
     * If true, all accordion items will be fully open.
     * @default false
     */
    fullyOpen?: boolean;
    /**
     * Custom CSS class to apply to the accordion header.
     * @default ""
     */
    headerCSS?: string;
    /**
     * If true, borders between accordion items will be hidden.
     * @default false
     */
    hideBorders?: boolean;
    /**
     * Size of the row icon.
     * @default "32px"
     */
    rowIconSize?: IconSize;
    /**
     * Size of the accordion icon.
     * @default "16px"
     */
    iconSize?: IconSize;
    /**
     * Custom CSS classes to apply to the selected accordion header.
     * @default ""
     */
    selectedHeaderCSS?: string;
    /**
     * Custom CSS classes to apply to the accordion content.
     * @default ""
     */
    contentCSS?: string;
};
//# sourceMappingURL=types.d.ts.map
}

declare module '@ably/ui/core/Accordion/utils' {
import { AccordionTheme, AccordionThemeColors } from "@ably/ui/core/types";
export const themeClasses: Record<AccordionTheme, AccordionThemeColors>;
export const isNonTransparentTheme: (theme: AccordionTheme) => theme is "default" | "static";
export const isStaticTheme: (theme: AccordionTheme) => theme is "static";
//# sourceMappingURL=utils.d.ts.map
}

declare module '@ably/ui/core/Accordion' {
import React from "react";
import type { AccordionData, AccordionIcons, AccordionOptions, AccordionTheme } from "@ably/ui/core/Accordion/types";
export type AccordionProps = {
    /**
     * The data for the accordion items.
     */
    data: AccordionData[];
    /**
     * Icons for the accordion toggle.
     */
    icons?: AccordionIcons;
    /**
     * Theme for the accordion.
     */
    theme?: AccordionTheme;
    /**
     * Options for the accordion behavior.
     */
    options?: AccordionOptions;
} & React.HTMLAttributes<HTMLDivElement>;
const Accordion: React.ForwardRefExoticComponent<{
    /**
     * The data for the accordion items.
     */
    data: AccordionData[];
    /**
     * Icons for the accordion toggle.
     */
    icons?: AccordionIcons;
    /**
     * Theme for the accordion.
     */
    theme?: AccordionTheme;
    /**
     * Options for the accordion behavior.
     */
    options?: AccordionOptions;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Accordion;
//# sourceMappingURL=Accordion.d.ts.map
}

declare module '@ably/ui/core/Badge' {
import React, { PropsWithChildren } from "react";
import { IconName, IconSize } from "@ably/ui/core/Icon/types";
import { ColorClassColorGroups } from "@ably/ui/core/styles/colors/types";
/**
 * Props for the Badge component.
 */
export interface BadgeProps {
    /**
     * The size of the badge. Can be one of "xs", "sm", "md", or "lg".
     */
    size?: "xs" | "sm" | "md" | "lg";
    /**
     * The color of the badge. Can be a value from ColorClassColorGroups or "red".
     */
    color?: ColorClassColorGroups | "red";
    /**
     * The name of the icon to be displayed before the children in the badge.
     */
    iconBefore?: IconName;
    /**
     * The name of the icon to be displayed after the children in the badge.
     */
    iconAfter?: IconName;
    /**
     * Additional CSS class names to apply to the badge.
     */
    className?: string;
    /**
     * Whether the badge is disabled. Defaults to false.
     */
    disabled?: boolean;
    /**
     * Whether the badge is focusable. Defaults to false.
     */
    focusable?: boolean;
    /**
     * Whether the badge is hoverable. Defaults to false.
     */
    hoverable?: boolean;
    /**
     * The size of the icons in the badge. If not provided, it will be derived from the badge size.
     */
    iconSize?: IconSize;
    /**
     * Accessible label for the badge when interactive
     */
    ariaLabel?: string;
    /**
     * Additional CSS class names to apply to the children of the badge.
     */
    childClassName?: string;
}
const Badge: React.FC<PropsWithChildren<BadgeProps>>;
export default Badge;
//# sourceMappingURL=Badge.d.ts.map
}

declare module '@ably/ui/core/Button' {
import React, { PropsWithChildren } from "react";
import { IconName } from "@ably/ui/core/Icon/types";
import { ColorClass, ColorThemeSet } from "@ably/ui/core/styles/colors/types";
export type ButtonType = "priority" | "primary" | "secondary";
type ButtonSize = "lg" | "md" | "sm" | "xs";
export type ButtonPropsBase = {
    /**
     * The type of button: priority, primary, or secondary.
     */
    variant?: ButtonType;
    /**
     * The button size: lg, sm, or xs. Leave empty for md.
     */
    size?: ButtonSize;
    /**
     * An icon to render on the left side of the button label.
     */
    leftIcon?: IconName;
    /**
     * An icon to render on the right side of the button label.
     */
    rightIcon?: IconName;
    /**
     * Optional classes to add to the button element.
     */
    className?: string;
    /**
     * Optional color to apply to the icon on either left and/or right side of the button.
     */
    iconColor?: ColorClass | ColorThemeSet;
};
type ButtonProps = ButtonPropsBase & React.ButtonHTMLAttributes<HTMLButtonElement>;
export const iconModifierClasses: Record<ButtonSize, {
    left: string;
    right: string;
}>;
export const commonButtonProps: (props: ButtonPropsBase) => {
    className: string;
};
export const commonButtonInterior: (props: PropsWithChildren<ButtonPropsBase>) => import("react/jsx-runtime").JSX.Element;
const Button: React.FC<PropsWithChildren<ButtonProps>>;
export default Button;
//# sourceMappingURL=Button.d.ts.map
}

declare module '@ably/ui/core/Code/component' {
export default highlightEl;
function highlightEl(el: any): void;
//# sourceMappingURL=component.d.ts.map
}

declare module '@ably/ui/core/Code' {
type CodeProps = {
    language: string;
    snippet: string;
    textSize?: string;
    padding?: string;
    additionalCSS?: string;
    showLines?: boolean;
    lineCSS?: string;
    wrap?: boolean;
};
const Code: ({ language, snippet, textSize, padding, additionalCSS, showLines, lineCSS, wrap, }: CodeProps) => import("react/jsx-runtime").JSX.Element;
export default Code;
//# sourceMappingURL=Code.d.ts.map
}

declare module '@ably/ui/core/CodeSnippet/ApiKeySelector' {
import type { ApiKeysItem } from ".@ably/ui/core/CodeSnippet";
type ApiKeySelectorProps = {
    apiKeys?: ApiKeysItem[];
    selectedApiKey: string;
    onApiKeyChange: (apiKey: string) => void;
};
const ApiKeySelector: ({ apiKeys, selectedApiKey, onApiKeyChange, }: ApiKeySelectorProps) => import("react/jsx-runtime").JSX.Element;
export default ApiKeySelector;
//# sourceMappingURL=ApiKeySelector.d.ts.map
}

declare module '@ably/ui/core/CodeSnippet/CopyButton' {
type CopyButtonProps = {
    onCopy: () => void;
    tooltip?: string;
};
const CopyButton: ({ onCopy, tooltip }: CopyButtonProps) => import("react/jsx-runtime").JSX.Element;
export default CopyButton;
//# sourceMappingURL=CopyButton.d.ts.map
}

declare module '@ably/ui/core/CodeSnippet/LanguageSelector' {
type LanguageSelectorProps = {
    languages: string[];
    activeLanguage: string;
    onLanguageChange: (language: string) => void;
};
const LanguageSelector: ({ languages, activeLanguage, onLanguageChange, }: LanguageSelectorProps) => import("react/jsx-runtime").JSX.Element;
export default LanguageSelector;
//# sourceMappingURL=LanguageSelector.d.ts.map
}

declare module '@ably/ui/core/CodeSnippet/PlainCodeView' {
import React from "react";
import { IconName } from ".@ably/ui/core/Icon/types";
type PlainCodeViewProps = {
    content: string;
    language: string;
    icon: IconName | null;
    className?: string;
};
const PlainCodeView: React.FC<PlainCodeViewProps>;
export default PlainCodeView;
//# sourceMappingURL=PlainCodeView.d.ts.map
}

declare module '@ably/ui/core/CodeSnippet/TooltipButton' {
import React from "react";
import { SegmentedControlSize } from ".@ably/ui/core/SegmentedControl";
import { IconName } from ".@ably/ui/core/Icon/types";
import type { TooltipProps } from "@radix-ui/react-tooltip";
type TooltipButtonProps = {
    tooltip: string | React.ReactNode;
    active?: boolean;
    onClick: () => void;
    icon?: IconName;
    className?: string;
    children?: React.ReactNode;
    variant?: "segmented" | "icon-button";
    size?: SegmentedControlSize;
    alwaysShowLabel?: boolean;
    tooltipRootProps?: TooltipProps;
};
const TooltipButton: ({ tooltip, active, onClick, icon, className, children, variant, size, alwaysShowLabel, tooltipRootProps, }: TooltipButtonProps) => import("react/jsx-runtime").JSX.Element;
export default TooltipButton;
//# sourceMappingURL=TooltipButton.d.ts.map
}

declare module '@ably/ui/core/CodeSnippet/languages' {
import { IconName } from ".@ably/ui/core/Icon/types";
export interface LanguageInfo {
    label: string;
    icon: IconName;
    syntaxHighlighterKey?: string;
}
export type LanguageMap = Record<string, LanguageInfo>;
const languages: LanguageMap;
export const stripSdkType: (lang: string) => string;
export const getLanguageInfo: (langKey: string) => LanguageInfo;
export default languages;
//# sourceMappingURL=languages.d.ts.map
}

declare module '@ably/ui/core/CodeSnippet' {
import React from "react";
export type SDKType = "realtime" | "rest" | null;
export type ApiKeysItem = {
    app: string;
    keys: {
        name: string;
        key: string;
    }[];
};
export type CodeSnippetProps = {
    /**
     * If true, hides the language selector row completely
     */
    fixed?: boolean;
    /**
     * If true, renders a macOS-style window header with buttons and title
     */
    headerRow?: boolean;
    /**
     * Title to display in the header row (when headerRow is true)
     */
    title?: string;
    /**
     * Children elements with lang attribute
     */
    children: React.ReactNode;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Default language to display. If not found in available languages, first available is used.
     * If found in languages but no matching snippet exists, a message is displayed.
     */
    lang: string | null;
    /**
     * Callback fired when the active language changes
     */
    onChange?: (language: string, sdk?: SDKType) => void;
    /**
     * List of API keys to display in a dropdown
     */
    apiKeys?: ApiKeysItem[];
    /**
     * Default SDK type to use for the code snippet
     */
    sdk?: SDKType;
    /**
     * Whether to show line numbers in code snippets
     */
    showCodeLines?: boolean;
    /**
     * Defines the order in which languages should be displayed.
     * Languages not in this array will be shown after those that are included.
     */
    languageOrdering?: string[];
    /**
     * Whether to wrap code content instead of scrolling
     */
    wrapCode?: boolean;
};
/**
 * CodeSnippet component that displays code with language switching capability
 */
const CodeSnippet: React.FC<CodeSnippetProps>;
export default CodeSnippet;
//# sourceMappingURL=CodeSnippet.d.ts.map
}

declare module '@ably/ui/core/ConnectStateWrapper' {
const ConnectStateWrapper: (Component: any, selectors: any) => (props: any) => import("react/jsx-runtime").JSX.Element;
export default ConnectStateWrapper;
//# sourceMappingURL=ConnectStateWrapper.d.ts.map
}

declare module '@ably/ui/core/ContentTile' {
import React from "react";
import { type BadgeProps } from "@ably/ui/core/Badge";
import type { IconName } from "@ably/ui/core/Icon/types";
type ContentTileProps = {
    /** The title text to display */
    title?: string;
    /** Additional CSS classes for the root container */
    className?: string;
    /** The description content to display (text or React elements) */
    description?: string | React.ReactNode;
    /**
     * Call-to-action configuration.
     * - text: The CTA button or link text.
     * - url: The destination URL for the CTA.
     * - implicit: If true, no explicit CTA button is shown.
     */
    cta?: {
        text: string;
        url: string;
        implicit?: boolean;
    };
    /** Content to display in the feature area (image or icon) */
    feature?: React.ReactNode | string;
    /** Type of feature to render - either 'image' or 'icon' */
    featureType?: "image" | "icon";
    /** Array of icon names to display as overlays on the feature */
    featureIcons?: IconName[];
    /** Whether to vertically center the feature content */
    centerFeature?: boolean;
    /** Array of badges to display */
    badges?: (BadgeProps & {
        label: string;
    })[];
    /** Custom click handler, receives the CTA URL if present */
    onClick?: (url?: string) => void;
    /** Additional CSS classes for the feature element */
    featureClassName?: string;
    /** Additional CSS classes for the title element */
    titleClassName?: string;
    /** Additional CSS classes for the description element */
    descriptionClassName?: string;
    /** Additional CSS classes for the CTA element */
    ctaClassName?: string;
    /** Whether to add padding-top to the feature content (default: true) */
    featurePadding?: boolean;
    /** Whether to encapsulate the content tile in an outer container (default: true) */
    encapsulated?: boolean;
};
const ContentTile: React.FC<ContentTileProps>;
export default ContentTile;
//# sourceMappingURL=ContentTile.d.ts.map
}

declare module '@ably/ui/core/CookieMessage' {
type CookieMessageProps = {
    cookieId: string;
    urlBase: string;
};
const CookieMessage: ({ cookieId, urlBase }: CookieMessageProps) => import("react/jsx-runtime").JSX.Element | null;
export default CookieMessage;
//# sourceMappingURL=CookieMessage.d.ts.map
}

declare module '@ably/ui/core/CustomerLogos' {
type CompanyEntity = {
    label: string;
    logo: string;
};
type CustomerLogosProps = {
    companies: CompanyEntity[];
    additionalCss?: string;
};
const CustomerLogos: ({ companies, additionalCss, }: CustomerLogosProps) => import("react/jsx-runtime").JSX.Element;
export default CustomerLogos;
//# sourceMappingURL=CustomerLogos.d.ts.map
}

declare module '@ably/ui/core/DropdownMenu' {
import { ReactNode } from "react";
import { IconName } from "@ably/ui/core/Icon/types";
type DropdownMenuProps = {
    /**
     * The content to be displayed within the dropdown menu.
     */
    children: ReactNode;
};
type TriggerProps = {
    /**
     * The content to be displayed within the trigger element.
     */
    children: ReactNode;
    /**
     * Additional class names to apply to the trigger element.
     */
    triggerClassNames?: string;
    /**
     * A description for the trigger element, used for accessibility purposes.
     */
    description?: string;
};
type ContentProps = {
    /**
     * The content to be displayed within the dropdown menu.
     */
    children: ReactNode;
    /**
     * The position of the dropdown menu relative to the trigger element.
     * Defaults to "right".
     */
    anchorPosition?: string;
    /**
     * Additional class names to apply to the content container.
     */
    contentClassNames?: string;
};
type LinkProps = {
    url: string;
    title: string;
    subtitle?: string;
    iconName?: IconName;
    children?: ReactNode;
};
const DropdownMenu: {
    ({ children }: DropdownMenuProps): import("react/jsx-runtime").JSX.Element;
    Trigger: ({ children, triggerClassNames, description, }: TriggerProps) => import("react/jsx-runtime").JSX.Element;
    Content: ({ children, anchorPosition, contentClassNames, }: ContentProps) => import("react/jsx-runtime").JSX.Element | null;
    Link: ({ url, title, subtitle, iconName, children }: LinkProps) => import("react/jsx-runtime").JSX.Element;
};
export default DropdownMenu;
//# sourceMappingURL=DropdownMenu.d.ts.map
}

declare module '@ably/ui/core/Expander' {
import { PropsWithChildren, ReactNode } from "react";
type ExpanderProps = {
    heightThreshold?: number;
    className?: string;
    fadeClassName?: string;
    controlsClassName?: string;
    controlsOpenedLabel?: string | ReactNode;
    controlsClosedLabel?: string | ReactNode;
};
const Expander: ({ heightThreshold, className, fadeClassName, controlsClassName, controlsOpenedLabel, controlsClosedLabel, children, }: PropsWithChildren<ExpanderProps>) => import("react/jsx-runtime").JSX.Element;
export default Expander;
//# sourceMappingURL=Expander.d.ts.map
}

declare module '@ably/ui/core/FeaturedLink' {
import { ReactNode } from "react";
import { ColorClass, ColorThemeSet } from "@ably/ui/core/styles/colors/types";
type FeaturedLinkProps = {
    url: string;
    children: ReactNode;
    textSize?: string;
    iconColor?: ColorClass | ColorThemeSet;
    flush?: boolean;
    reverse?: boolean;
    additionalCSS?: string;
    newWindow?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    /**
     * Optional class name for the icon.
     */
    iconClassName?: string;
};
const FeaturedLink: ({ url, textSize, iconColor, flush, reverse, additionalCSS, newWindow, onClick, children, disabled, iconClassName, }: FeaturedLinkProps) => import("react/jsx-runtime").JSX.Element;
export default FeaturedLink;
//# sourceMappingURL=FeaturedLink.d.ts.map
}

declare module '@ably/ui/core/Flash' {
type FlashPropsType = "error" | "success" | "notice" | "info" | "alert";
type FlashProps = {
    id: string;
    removed: boolean;
    type: FlashPropsType;
    content: string;
    removeFlash: (id: string) => void;
};
type FlashesProps = {
    flashes: {
        items: Pick<FlashProps, "type" | "content">[];
    };
};
type BackendFlashesProps = {
    flashes: string[][];
};
const FLASH_DATA_ID = "ui-flashes";
const reducerFlashes: {
    flashes: (state: {
        items: FlashProps[];
    } | undefined, action: {
        type: string;
        payload: FlashProps | FlashProps[];
    }) => {
        items: FlashProps[];
    };
};
const Flashes: ({ flashes }: FlashesProps) => import("react/jsx-runtime").JSX.Element;
const BackendFlashes: ({ flashes }: BackendFlashesProps) => import("react/jsx-runtime").JSX.Element;
export { reducerFlashes, FLASH_DATA_ID, Flashes };
export default BackendFlashes;
//# sourceMappingURL=Flash.d.ts.map
}

declare module '@ably/ui/core/Flyout' {
import React from "react";
/**
 * Props for the Flyout component.
 */
type FlyoutProps = {
    /**
     * Array of menu items to be displayed in the flyout.
     */
    menuItems: {
        /**
         * Name for the menu item.
         */
        name: string;
        /**
         * Optional content to be displayed in the flyout panel.
         */
        content?: React.ReactNode;
        /**
         * Optional link for the menu item.
         */
        link?: string;
        /**
         * Optional styling for the flyout panel.
         */
        panelClassName?: string;
    }[];
    /**
     * Optional class name for the flyout container.
     */
    className?: string;
    /**
     * Optional class name for the flyout element.
     */
    flyOutClassName?: string;
    /**
     * Optional class name for the menu link.
     */
    menuLinkClassName?: string;
    /**
     * Optional class name for the viewport.
     */
    viewPortClassName?: string;
};
const Flyout: ({ menuItems, className, flyOutClassName, menuLinkClassName, viewPortClassName, }: FlyoutProps) => import("react/jsx-runtime").JSX.Element;
export default Flyout;
//# sourceMappingURL=Flyout.d.ts.map
}

declare module '@ably/ui/core/Footer/data' {
import { IconName } from ".@ably/ui/core/Icon/types";
type FooterLinksProps = {
    title: string;
    links: {
        label: string;
        link: string;
        badge?: string;
    }[];
};
export const footerLinks: FooterLinksProps[];
export const bottomFooterLinks: {
    label: string;
    link: string;
}[];
export const socialLinks: {
    key: string;
    colorIcon: IconName;
    monoIcon: IconName;
    link: string;
}[];
export const ablyAwardsFooter: {
    image: string;
    desc: string;
}[];
export {};
//# sourceMappingURL=data.d.ts.map
}

declare module '@ably/ui/core/Footer' {
const Footer: () => import("react/jsx-runtime").JSX.Element;
export default Footer;
//# sourceMappingURL=Footer.d.ts.map
}

declare module '@ably/ui/core/Header/HeaderLinks' {
import React from "react";
import { HeaderProps } from ".@ably/ui/core/Header";
export const HeaderLinks: React.FC<Pick<HeaderProps, "sessionState" | "headerLinks" | "searchButtonVisibility" | "searchButton" | "className">>;
//# sourceMappingURL=HeaderLinks.d.ts.map
}

declare module '@ably/ui/core/Header' {
import React, { ReactNode } from "react";
export type ThemedScrollpoint = {
    id: string;
    className: string;
};
/**
 * Represents the state of the user session in the header.
 */
export type HeaderSessionState = {
    /**
     * Indicates if the user is signed in.
     */
    signedIn: boolean;
    /**
     * Information required to log out the user.
     */
    logOut: {
        /**
         * Token used for logging out.
         */
        token: string;
        /**
         * URL to log out the user.
         */
        href: string;
    };
    /**
     * Name of the user's account.
     */
    accountName: string;
};
/**
 * Props for the Header component.
 */
export type HeaderProps = {
    /**
     * Optional classnames to add to the header
     */
    className?: string;
    /**
     * Indicates if the notice banner is enabled.
     */
    isNoticeBannerEnabled?: boolean;
    /**
     * Height of the notice banner in pixels.
     */
    noticeHeight?: number;
    /**
     * Optional search bar element.
     */
    searchBar?: ReactNode;
    /**
     * Optional search button element.
     */
    searchButton?: ReactNode;
    /**
     * URL for the logo link.
     */
    logoHref?: string;
    /**
     * Array of header links.
     */
    headerLinks?: {
        /**
         * URL for the link.
         */
        href: string;
        /**
         * Label for the link.
         */
        label: string;
        /**
         * Indicates if the link should open in a new tab.
         */
        external?: boolean;
    }[];
    /**
     * Optional classname for styling the header links container.
     */
    headerLinksClassName?: string;
    /**
     * Optional classname for styling the header center container.
     */
    headerCenterClassName?: string;
    /**
     * Optional desktop navigation element.
     */
    nav?: ReactNode;
    /**
     * Optional mobile navigation element.
     */
    mobileNav?: ReactNode;
    /**
     * State of the user session.
     */
    sessionState?: HeaderSessionState;
    /**
     * Array of themed scrollpoints. The header will change its appearance based on the scrollpoint in view.
     */
    themedScrollpoints?: ThemedScrollpoint[];
    /**
     * Visibility setting for the search button.
     * - "all": Visible on all devices.
     * - "desktop": Visible only on desktop devices.
     * - "mobile": Visible only on mobile devices.
     */
    searchButtonVisibility?: "all" | "desktop" | "mobile";
    /**
     * Optional location object to detect location changes.
     */
    location?: Location;
    /**
     * Optional badge text to display on the logo.
     */
    logoBadge?: string;
};
const Header: React.FC<HeaderProps>;
export default Header;
//# sourceMappingURL=Header.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-48hrs' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-48hrs.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-ably-channels' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-ably-channels.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-about-ably-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-about-ably-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-api-keys' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-api-keys.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-api' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-api.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-architectural-guidance' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-architectural-guidance.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-asset-tracking-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-asset-tracking-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-authentication' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-authentication.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-avatar-stack' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-avatar-stack.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-browser' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-browser.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-calendar' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-calendar.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-call-mobile' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-call-mobile.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-careers-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-careers-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-case-studies-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-case-studies-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-chat-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-chat-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-chat-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-chat-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-chat-stack-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-chat-stack-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-chat-stack' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-chat-stack.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-cloud-servers' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-cloud-servers.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-compare-tech-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-compare-tech-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-connection-state-recovery' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-connection-state-recovery.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-consumer-groups' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-consumer-groups.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-custom-cname' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-custom-cname.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-custom' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-custom.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-customers-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-customers-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-data-broadcast-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-data-broadcast-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-data-broadcast-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-data-broadcast-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-data-synchronization-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-data-synchronization-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-dedicated-cluster' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-dedicated-cluster.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-deltas' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-deltas.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-docs-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-docs-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-documentation' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-documentation.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-dynamic-channel-groups' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-dynamic-channel-groups.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-edge-network' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-edge-network.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-elasticity' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-elasticity.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-equalisers-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-equalisers-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-events-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-events-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-exactly-once-delivery' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-exactly-once-delivery.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-examples-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-examples-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-fan-out' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-fan-out.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-firehose' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-firehose.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-gdpr' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-gdpr.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-general-comms' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-general-comms.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-granular-permissions' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-granular-permissions.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-hipaa-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-hipaa-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-hipaa' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-hipaa.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-history' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-history.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-integrations-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-integrations-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-integrations' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-integrations.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-it-support-access' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-it-support-access.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-it-support-helpdesk' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-it-support-helpdesk.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-kafka-at-the-edge-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-kafka-at-the-edge-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-laptop' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-laptop.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-last-seen' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-last-seen.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-lightbulb-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-lightbulb-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-live-chat' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-live-chat.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-live-updates-results-metrics-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-live-updates-results-metrics-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-map-pin' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-map-pin.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-message-batching' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-message-batching.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-message-persistence' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-message-persistence.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-message-queues' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-message-queues.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-message' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-message.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-multi-user-spaces-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-multi-user-spaces-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-observe-analytics' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-observe-analytics.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-padlock-closed' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-padlock-closed.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-platform' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-platform.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-play' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-play.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-premium-support' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-premium-support.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-privacy-shield-framework' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-privacy-shield-framework.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-private-link' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-private-link.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-push-notifications-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-push-notifications-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-push-notifications-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-push-notifications-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-push-notifications' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-push-notifications.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-quickstart-guides-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-quickstart-guides-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-reactions' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-reactions.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-read-receipts' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-read-receipts.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-resources-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-resources-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-rewind' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-rewind.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-sdks-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-sdks-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-send-received-messages' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-send-received-messages.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-servers' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-servers.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-shopping-cart' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-shopping-cart.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-sla' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-sla.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-soc2-type2-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-soc2-type2-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-soc2-type2' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-soc2-type2.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-something-else-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-something-else-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-something-else' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-something-else.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-subscription-filters' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-subscription-filters.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-support-chat-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-support-chat-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-system-metadata' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-system-metadata.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-tech-account-comms' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-tech-account-comms.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-tutorials-demos-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-tutorials-demos-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-ui-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-ui-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-ui' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-ui.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-virtual-events-col' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-virtual-events-col.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-display-virtual-events' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-display-virtual-events.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-ably-badge' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-ably-badge.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-check-circled-fill' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-check-circled-fill.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-check-lotus-circled' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-check-lotus-circled.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-checklist-checked' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-checklist-checked.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-code-doc' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-code-doc.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-cursor' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-cursor.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-expand' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-expand.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-filter-flow-step-0' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-filter-flow-step-0.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-filter-flow-step-1' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-filter-flow-step-1.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-filter-flow-step-2' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-filter-flow-step-2.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-filter-flow-step-3' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-filter-flow-step-3.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-flower-growth' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-flower-growth.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-further-reading' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-further-reading.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-glasses' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-glasses.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-heartbeat-outline' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-heartbeat-outline.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-heartbeat-solid' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-heartbeat-solid.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-history' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-history.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-live-chat' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-live-chat.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-mouse' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-mouse.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-partial' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-partial.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-pitfall' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-pitfall.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-prod-ai-transport-outline' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-prod-ai-transport-outline.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-prod-ai-transport-solid' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-prod-ai-transport-solid.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-prod-asset-tracking-outline' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-prod-asset-tracking-outline.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-prod-asset-tracking-solid' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-prod-asset-tracking-solid.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-prod-chat-outline' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-prod-chat-outline.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-prod-chat-solid' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-prod-chat-solid.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-prod-liveobjects-outline' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-prod-liveobjects-outline.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-prod-liveobjects-solid' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-prod-liveobjects-solid.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-prod-livesync-outline' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-prod-livesync-outline.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-prod-livesync-solid' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-prod-livesync-solid.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-prod-pubsub-outline' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-prod-pubsub-outline.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-prod-pubsub-solid' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-prod-pubsub-solid.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-prod-spaces-outline' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-prod-spaces-outline.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-prod-spaces-solid' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-prod-spaces-solid.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-quote-marks-fill' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-quote-marks-fill.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-refresh' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-refresh.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-resources' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-resources.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-spinner-dark' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-spinner-dark.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-gui-spinner-light' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-gui-spinner-light.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-product-ai-transport-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-product-ai-transport-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-product-ai-transport' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-product-ai-transport.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-product-asset-tracking-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-product-asset-tracking-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-product-asset-tracking' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-product-asset-tracking.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-product-chat-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-product-chat-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-product-chat' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-product-chat.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-product-liveobjects-dark' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-product-liveobjects-dark.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-product-liveobjects-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-product-liveobjects-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-product-liveobjects' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-product-liveobjects.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-product-livesync-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-product-livesync-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-product-livesync' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-product-livesync.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-product-platform-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-product-platform-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-product-platform' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-product-platform.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-product-pubsub-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-product-pubsub-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-product-pubsub' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-product-pubsub.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-product-spaces-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-product-spaces-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-product-spaces' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-product-spaces.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-discord-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-discord-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-discord' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-discord.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-facebook-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-facebook-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-facebook' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-facebook.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-github-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-github-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-github' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-github.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-glassdoor-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-glassdoor-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-glassdoor' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-glassdoor.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-google-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-google-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-google' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-google.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-linkedin-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-linkedin-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-linkedin' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-linkedin.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-slack-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-slack-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-slack' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-slack.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-stackoverflow-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-stackoverflow-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-stackoverflow' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-stackoverflow.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-twitter-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-twitter-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-twitter' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-twitter.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-x-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-x-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-x' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-x.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-youtube-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-youtube-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-social-youtube' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-social-youtube.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-ably-api-streamer' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-ably-api-streamer.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-ably-firehose' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-ably-firehose.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-ably-native' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-ably-native.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-ably' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-ably.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-activemq' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-activemq.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-activitypub' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-activitypub.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-aerospike' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-aerospike.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-akka' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-akka.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-amazon-ec2' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-amazon-ec2.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-amazon-event-bridge' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-amazon-event-bridge.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-amqp091' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-amqp091.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-amqp10' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-amqp10.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-android-full' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-android-full.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-android-head' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-android-head.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-angular' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-angular.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-anycable' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-anycable.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-apache-cassandra' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-apache-cassandra.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-apache-cordova' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-apache-cordova.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-apache-kafka' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-apache-kafka.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-apache-spark' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-apache-spark.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-apachepulsar' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-apachepulsar.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-apachestorm' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-apachestorm.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-apns' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-apns.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-assemblyai' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-assemblyai.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-atmosphere' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-atmosphere.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-aws-app-sync' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-aws-app-sync.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-aws-aurora' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-aws-aurora.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-aws-gateway-websockets' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-aws-gateway-websockets.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-aws-sns' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-aws-sns.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-aws-sqs' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-aws-sqs.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-aws' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-aws.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-awsiot' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-awsiot.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-awskinesis' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-awskinesis.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-awslambda' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-awslambda.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-awssqs' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-awssqs.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-azure-api' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-azure-api.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-azure-archive-api' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-azure-archive-api.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-azure-bus' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-azure-bus.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-azure-cosmos' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-azure-cosmos.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-azure-event-hub' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-azure-event-hub.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-azure-functions' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-azure-functions.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-azure-search' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-azure-search.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-azure-static-web-app' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-azure-static-web-app.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-azure-static-web-apps' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-azure-static-web-apps.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-azure-storage' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-azure-storage.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-azure-web-pubsub' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-azure-web-pubsub.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-azurefunctions' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-azurefunctions.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-azureservicebus' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-azureservicebus.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-azuresignalR' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-azuresignalR.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-bayeux' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-bayeux.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-c' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-c.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-centrifugo' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-centrifugo.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-claude-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-claude-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-claude' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-claude.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-client-side-frameworks' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-client-side-frameworks.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-clojure' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-clojure.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-cloudflare-durable-objects' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-cloudflare-durable-objects.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-cloudflareworkers' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-cloudflareworkers.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-cocoa' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-cocoa.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-confluent' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-confluent.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-cord' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-cord.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-csharp' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-csharp.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-curl' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-curl.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-customwebhooks' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-customwebhooks.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-datadog' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-datadog.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-design-patterns' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-design-patterns.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-devplatforms' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-devplatforms.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-diffusion-data' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-diffusion-data.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-django' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-django.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-engineio' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-engineio.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-event-driven-servers' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-event-driven-servers.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-fanout-io' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-fanout-io.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-fast-api' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-fast-api.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-fauna' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-fauna.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-featherjs' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-featherjs.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-firebase-cloud-messaging' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-firebase-cloud-messaging.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-firebase' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-firebase.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-flutter' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-flutter.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-gcloudbigquery' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-gcloudbigquery.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-gclouddataflow' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-gclouddataflow.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-gcloudfunctions' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-gcloudfunctions.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-gcloudpubsub' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-gcloudpubsub.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-go' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-go.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-grpc' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-grpc.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-hivemq' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-hivemq.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-http2' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-http2.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-http3' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-http3.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-httprest' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-httprest.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-idempotency' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-idempotency.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-ifttt' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-ifttt.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-integrations' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-integrations.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-ios-generic' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-ios-generic.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-ios' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-ios.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-ipados' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-ipados.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-ipfs' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-ipfs.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-ironmq' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-ironmq.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-java' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-java.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-javascript' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-javascript.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-jms' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-jms.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-json-web-tokens' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-json-web-tokens.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-json' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-json.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-kaazing' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-kaazing.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-kotlin' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-kotlin.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-ksql-db' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-ksql-db.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-kubernetes' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-kubernetes.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-laravel-broadcast' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-laravel-broadcast.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-laravel-echo' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-laravel-echo.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-lightstreamer' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-lightstreamer.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-liveblocks' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-liveblocks.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-longpolling' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-longpolling.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-macos' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-macos.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-matrix' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-matrix.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-meteor' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-meteor.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-mongo-db' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-mongo-db.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-mono' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-mono.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-mqtt' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-mqtt.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-mysql' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-mysql.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-native-script' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-native-script.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-net' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-net.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-netlify' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-netlify.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-nextjs' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-nextjs.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-nkn' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-nkn.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-nodejs' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-nodejs.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-objectivec' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-objectivec.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-openai' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-openai.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-parse-server' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-parse-server.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-php' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-php.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-planetscale' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-planetscale.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-postgres' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-postgres.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-prisma' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-prisma.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-programminglanguages' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-programminglanguages.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-protcol-adaptors' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-protcol-adaptors.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-protocols' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-protocols.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-pub-sub' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-pub-sub.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-pubnub' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-pubnub.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-push-technology' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-push-technology.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-pusher' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-pusher.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-python' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-python.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-quic' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-quic.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-rabbitMQ' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-rabbitMQ.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-railsactioncable' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-railsactioncable.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-react-app' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-react-app.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-react' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-react.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-reactnative' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-reactnative.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-redis' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-redis.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-redpanda' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-redpanda.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-replicache' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-replicache.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-rethinkdb' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-rethinkdb.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-rocketmq' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-rocketmq.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-ruby' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-ruby.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-scala' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-scala.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-scaledrone' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-scaledrone.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-serversentevents' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-serversentevents.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-serversideframeworks' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-serversideframeworks.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-signalR' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-signalR.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-snowflake' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-snowflake.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-socketio' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-socketio.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-sockjs' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-sockjs.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-solace' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-solace.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-spring' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-spring.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-stomp' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-stomp.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-streamdata-io' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-streamdata-io.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-streamr' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-streamr.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-swift' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-swift.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-symfony-mercure' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-symfony-mercure.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-symfony' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-symfony.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-tcp-ip' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-tcp-ip.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-tenefit' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-tenefit.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-terraform-outline' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-terraform-outline.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-terraform' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-terraform.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-tvos' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-tvos.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-twilio' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-twilio.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-typescript' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-typescript.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-udp-protocol' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-udp-protocol.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-unity' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-unity.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-vercel' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-vercel.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-vscode' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-vscode.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-vuejs' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-vuejs.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-wamp' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-wamp.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-watchos' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-watchos.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-web-push' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-web-push.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-web' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-web.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-webhooks' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-webhooks.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-webrtc' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-webrtc.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-websockets' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-websockets.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-websub' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-websub.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-xamarin' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-xamarin.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-xhr-streaming' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-xhr-streaming.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-xmpp' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-xmpp.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-zapier' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-zapier.d.ts.map
}

declare module '@ably/ui/core/Icon/components/icon-tech-zeromq' {
import * as React from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const ForwardRef: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & SVGRProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRef;
//# sourceMappingURL=icon-tech-zeromq.d.ts.map
}

declare module '@ably/ui/core/Icon/components' {
import IconDisplay48hrs from "@ably/ui/core/icon-display-48hrs";
import IconDisplayAblyChannels from "@ably/ui/core/icon-display-ably-channels";
import IconDisplayAboutAblyCol from "@ably/ui/core/icon-display-about-ably-col";
import IconDisplayApiKeys from "@ably/ui/core/icon-display-api-keys";
import IconDisplayApi from "@ably/ui/core/icon-display-api";
import IconDisplayArchitecturalGuidance from "@ably/ui/core/icon-display-architectural-guidance";
import IconDisplayAssetTrackingCol from "@ably/ui/core/icon-display-asset-tracking-col";
import IconDisplayAuthentication from "@ably/ui/core/icon-display-authentication";
import IconDisplayAvatarStack from "@ably/ui/core/icon-display-avatar-stack";
import IconDisplayBrowser from "@ably/ui/core/icon-display-browser";
import IconDisplayCalendar from "@ably/ui/core/icon-display-calendar";
import IconDisplayCallMobile from "@ably/ui/core/icon-display-call-mobile";
import IconDisplayCareersCol from "@ably/ui/core/icon-display-careers-col";
import IconDisplayCaseStudiesCol from "@ably/ui/core/icon-display-case-studies-col";
import IconDisplayChatCol from "@ably/ui/core/icon-display-chat-col";
import IconDisplayChatMono from "@ably/ui/core/icon-display-chat-mono";
import IconDisplayChatStackCol from "@ably/ui/core/icon-display-chat-stack-col";
import IconDisplayChatStack from "@ably/ui/core/icon-display-chat-stack";
import IconDisplayCloudServers from "@ably/ui/core/icon-display-cloud-servers";
import IconDisplayCompareTechCol from "@ably/ui/core/icon-display-compare-tech-col";
import IconDisplayConnectionStateRecovery from "@ably/ui/core/icon-display-connection-state-recovery";
import IconDisplayConsumerGroups from "@ably/ui/core/icon-display-consumer-groups";
import IconDisplayCustomCname from "@ably/ui/core/icon-display-custom-cname";
import IconDisplayCustom from "@ably/ui/core/icon-display-custom";
import IconDisplayCustomersCol from "@ably/ui/core/icon-display-customers-col";
import IconDisplayDataBroadcastCol from "@ably/ui/core/icon-display-data-broadcast-col";
import IconDisplayDataBroadcastMono from "@ably/ui/core/icon-display-data-broadcast-mono";
import IconDisplayDataSynchronizationCol from "@ably/ui/core/icon-display-data-synchronization-col";
import IconDisplayDedicatedCluster from "@ably/ui/core/icon-display-dedicated-cluster";
import IconDisplayDeltas from "@ably/ui/core/icon-display-deltas";
import IconDisplayDocsCol from "@ably/ui/core/icon-display-docs-col";
import IconDisplayDocumentation from "@ably/ui/core/icon-display-documentation";
import IconDisplayDynamicChannelGroups from "@ably/ui/core/icon-display-dynamic-channel-groups";
import IconDisplayEdgeNetwork from "@ably/ui/core/icon-display-edge-network";
import IconDisplayElasticity from "@ably/ui/core/icon-display-elasticity";
import IconDisplayEqualisersMono from "@ably/ui/core/icon-display-equalisers-mono";
import IconDisplayEventsCol from "@ably/ui/core/icon-display-events-col";
import IconDisplayExactlyOnceDelivery from "@ably/ui/core/icon-display-exactly-once-delivery";
import IconDisplayExamplesCol from "@ably/ui/core/icon-display-examples-col";
import IconDisplayFanOut from "@ably/ui/core/icon-display-fan-out";
import IconDisplayFirehose from "@ably/ui/core/icon-display-firehose";
import IconDisplayGdpr from "@ably/ui/core/icon-display-gdpr";
import IconDisplayGeneralComms from "@ably/ui/core/icon-display-general-comms";
import IconDisplayGranularPermissions from "@ably/ui/core/icon-display-granular-permissions";
import IconDisplayHipaaMono from "@ably/ui/core/icon-display-hipaa-mono";
import IconDisplayHipaa from "@ably/ui/core/icon-display-hipaa";
import IconDisplayHistory from "@ably/ui/core/icon-display-history";
import IconDisplayIntegrationsCol from "@ably/ui/core/icon-display-integrations-col";
import IconDisplayIntegrations from "@ably/ui/core/icon-display-integrations";
import IconDisplayItSupportAccess from "@ably/ui/core/icon-display-it-support-access";
import IconDisplayItSupportHelpdesk from "@ably/ui/core/icon-display-it-support-helpdesk";
import IconDisplayKafkaAtTheEdgeCol from "@ably/ui/core/icon-display-kafka-at-the-edge-col";
import IconDisplayLaptop from "@ably/ui/core/icon-display-laptop";
import IconDisplayLastSeen from "@ably/ui/core/icon-display-last-seen";
import IconDisplayLightbulbCol from "@ably/ui/core/icon-display-lightbulb-col";
import IconDisplayLiveChat from "@ably/ui/core/icon-display-live-chat";
import IconDisplayLiveUpdatesResultsMetricsCol from "@ably/ui/core/icon-display-live-updates-results-metrics-col";
import IconDisplayMapPin from "@ably/ui/core/icon-display-map-pin";
import IconDisplayMessageBatching from "@ably/ui/core/icon-display-message-batching";
import IconDisplayMessagePersistence from "@ably/ui/core/icon-display-message-persistence";
import IconDisplayMessageQueues from "@ably/ui/core/icon-display-message-queues";
import IconDisplayMessage from "@ably/ui/core/icon-display-message";
import IconDisplayMultiUserSpacesCol from "@ably/ui/core/icon-display-multi-user-spaces-col";
import IconDisplayObserveAnalytics from "@ably/ui/core/icon-display-observe-analytics";
import IconDisplayPadlockClosed from "@ably/ui/core/icon-display-padlock-closed";
import IconDisplayPlatform from "@ably/ui/core/icon-display-platform";
import IconDisplayPlay from "@ably/ui/core/icon-display-play";
import IconDisplayPremiumSupport from "@ably/ui/core/icon-display-premium-support";
import IconDisplayPrivacyShieldFramework from "@ably/ui/core/icon-display-privacy-shield-framework";
import IconDisplayPrivateLink from "@ably/ui/core/icon-display-private-link";
import IconDisplayPushNotificationsCol from "@ably/ui/core/icon-display-push-notifications-col";
import IconDisplayPushNotificationsMono from "@ably/ui/core/icon-display-push-notifications-mono";
import IconDisplayPushNotifications from "@ably/ui/core/icon-display-push-notifications";
import IconDisplayQuickstartGuidesCol from "@ably/ui/core/icon-display-quickstart-guides-col";
import IconDisplayReactions from "@ably/ui/core/icon-display-reactions";
import IconDisplayReadReceipts from "@ably/ui/core/icon-display-read-receipts";
import IconDisplayResourcesCol from "@ably/ui/core/icon-display-resources-col";
import IconDisplayRewind from "@ably/ui/core/icon-display-rewind";
import IconDisplaySdksCol from "@ably/ui/core/icon-display-sdks-col";
import IconDisplaySendReceivedMessages from "@ably/ui/core/icon-display-send-received-messages";
import IconDisplayServers from "@ably/ui/core/icon-display-servers";
import IconDisplayShoppingCart from "@ably/ui/core/icon-display-shopping-cart";
import IconDisplaySla from "@ably/ui/core/icon-display-sla";
import IconDisplaySoc2Type2Mono from "@ably/ui/core/icon-display-soc2-type2-mono";
import IconDisplaySoc2Type2 from "@ably/ui/core/icon-display-soc2-type2";
import IconDisplaySomethingElseMono from "@ably/ui/core/icon-display-something-else-mono";
import IconDisplaySomethingElse from "@ably/ui/core/icon-display-something-else";
import IconDisplaySubscriptionFilters from "@ably/ui/core/icon-display-subscription-filters";
import IconDisplaySupportChatMono from "@ably/ui/core/icon-display-support-chat-mono";
import IconDisplaySystemMetadata from "@ably/ui/core/icon-display-system-metadata";
import IconDisplayTechAccountComms from "@ably/ui/core/icon-display-tech-account-comms";
import IconDisplayTutorialsDemosCol from "@ably/ui/core/icon-display-tutorials-demos-col";
import IconDisplayUiMono from "@ably/ui/core/icon-display-ui-mono";
import IconDisplayUi from "@ably/ui/core/icon-display-ui";
import IconDisplayVirtualEventsCol from "@ably/ui/core/icon-display-virtual-events-col";
import IconDisplayVirtualEvents from "@ably/ui/core/icon-display-virtual-events";
export { IconDisplay48hrs, IconDisplayAblyChannels, IconDisplayAboutAblyCol, IconDisplayApiKeys, IconDisplayApi, IconDisplayArchitecturalGuidance, IconDisplayAssetTrackingCol, IconDisplayAuthentication, IconDisplayAvatarStack, IconDisplayBrowser, IconDisplayCalendar, IconDisplayCallMobile, IconDisplayCareersCol, IconDisplayCaseStudiesCol, IconDisplayChatCol, IconDisplayChatMono, IconDisplayChatStackCol, IconDisplayChatStack, IconDisplayCloudServers, IconDisplayCompareTechCol, IconDisplayConnectionStateRecovery, IconDisplayConsumerGroups, IconDisplayCustomCname, IconDisplayCustom, IconDisplayCustomersCol, IconDisplayDataBroadcastCol, IconDisplayDataBroadcastMono, IconDisplayDataSynchronizationCol, IconDisplayDedicatedCluster, IconDisplayDeltas, IconDisplayDocsCol, IconDisplayDocumentation, IconDisplayDynamicChannelGroups, IconDisplayEdgeNetwork, IconDisplayElasticity, IconDisplayEqualisersMono, IconDisplayEventsCol, IconDisplayExactlyOnceDelivery, IconDisplayExamplesCol, IconDisplayFanOut, IconDisplayFirehose, IconDisplayGdpr, IconDisplayGeneralComms, IconDisplayGranularPermissions, IconDisplayHipaaMono, IconDisplayHipaa, IconDisplayHistory, IconDisplayIntegrationsCol, IconDisplayIntegrations, IconDisplayItSupportAccess, IconDisplayItSupportHelpdesk, IconDisplayKafkaAtTheEdgeCol, IconDisplayLaptop, IconDisplayLastSeen, IconDisplayLightbulbCol, IconDisplayLiveChat, IconDisplayLiveUpdatesResultsMetricsCol, IconDisplayMapPin, IconDisplayMessageBatching, IconDisplayMessagePersistence, IconDisplayMessageQueues, IconDisplayMessage, IconDisplayMultiUserSpacesCol, IconDisplayObserveAnalytics, IconDisplayPadlockClosed, IconDisplayPlatform, IconDisplayPlay, IconDisplayPremiumSupport, IconDisplayPrivacyShieldFramework, IconDisplayPrivateLink, IconDisplayPushNotificationsCol, IconDisplayPushNotificationsMono, IconDisplayPushNotifications, IconDisplayQuickstartGuidesCol, IconDisplayReactions, IconDisplayReadReceipts, IconDisplayResourcesCol, IconDisplayRewind, IconDisplaySdksCol, IconDisplaySendReceivedMessages, IconDisplayServers, IconDisplayShoppingCart, IconDisplaySla, IconDisplaySoc2Type2Mono, IconDisplaySoc2Type2, IconDisplaySomethingElseMono, IconDisplaySomethingElse, IconDisplaySubscriptionFilters, IconDisplaySupportChatMono, IconDisplaySystemMetadata, IconDisplayTechAccountComms, IconDisplayTutorialsDemosCol, IconDisplayUiMono, IconDisplayUi, IconDisplayVirtualEventsCol, IconDisplayVirtualEvents, };
import IconGuiAblyBadge from "@ably/ui/core/icon-gui-ably-badge";
import IconGuiCheckCircledFill from "@ably/ui/core/icon-gui-check-circled-fill";
import IconGuiCheckLotusCircled from "@ably/ui/core/icon-gui-check-lotus-circled";
import IconGuiChecklistChecked from "@ably/ui/core/icon-gui-checklist-checked";
import IconGuiCodeDoc from "@ably/ui/core/icon-gui-code-doc";
import IconGuiCursor from "@ably/ui/core/icon-gui-cursor";
import IconGuiExpand from "@ably/ui/core/icon-gui-expand";
import IconGuiFilterFlowStep0 from "@ably/ui/core/icon-gui-filter-flow-step-0";
import IconGuiFilterFlowStep1 from "@ably/ui/core/icon-gui-filter-flow-step-1";
import IconGuiFilterFlowStep2 from "@ably/ui/core/icon-gui-filter-flow-step-2";
import IconGuiFilterFlowStep3 from "@ably/ui/core/icon-gui-filter-flow-step-3";
import IconGuiFlowerGrowth from "@ably/ui/core/icon-gui-flower-growth";
import IconGuiFurtherReading from "@ably/ui/core/icon-gui-further-reading";
import IconGuiGlasses from "@ably/ui/core/icon-gui-glasses";
import IconGuiHeartbeatOutline from "@ably/ui/core/icon-gui-heartbeat-outline";
import IconGuiHeartbeatSolid from "@ably/ui/core/icon-gui-heartbeat-solid";
import IconGuiHistory from "@ably/ui/core/icon-gui-history";
import IconGuiLiveChat from "@ably/ui/core/icon-gui-live-chat";
import IconGuiMouse from "@ably/ui/core/icon-gui-mouse";
import IconGuiPartial from "@ably/ui/core/icon-gui-partial";
import IconGuiPitfall from "@ably/ui/core/icon-gui-pitfall";
import IconGuiProdAiTransportOutline from "@ably/ui/core/icon-gui-prod-ai-transport-outline";
import IconGuiProdAiTransportSolid from "@ably/ui/core/icon-gui-prod-ai-transport-solid";
import IconGuiProdAssetTrackingOutline from "@ably/ui/core/icon-gui-prod-asset-tracking-outline";
import IconGuiProdAssetTrackingSolid from "@ably/ui/core/icon-gui-prod-asset-tracking-solid";
import IconGuiProdChatOutline from "@ably/ui/core/icon-gui-prod-chat-outline";
import IconGuiProdChatSolid from "@ably/ui/core/icon-gui-prod-chat-solid";
import IconGuiProdLiveobjectsOutline from "@ably/ui/core/icon-gui-prod-liveobjects-outline";
import IconGuiProdLiveobjectsSolid from "@ably/ui/core/icon-gui-prod-liveobjects-solid";
import IconGuiProdLivesyncOutline from "@ably/ui/core/icon-gui-prod-livesync-outline";
import IconGuiProdLivesyncSolid from "@ably/ui/core/icon-gui-prod-livesync-solid";
import IconGuiProdPubsubOutline from "@ably/ui/core/icon-gui-prod-pubsub-outline";
import IconGuiProdPubsubSolid from "@ably/ui/core/icon-gui-prod-pubsub-solid";
import IconGuiProdSpacesOutline from "@ably/ui/core/icon-gui-prod-spaces-outline";
import IconGuiProdSpacesSolid from "@ably/ui/core/icon-gui-prod-spaces-solid";
import IconGuiQuoteMarksFill from "@ably/ui/core/icon-gui-quote-marks-fill";
import IconGuiRefresh from "@ably/ui/core/icon-gui-refresh";
import IconGuiResources from "@ably/ui/core/icon-gui-resources";
import IconGuiSpinnerDark from "@ably/ui/core/icon-gui-spinner-dark";
import IconGuiSpinnerLight from "@ably/ui/core/icon-gui-spinner-light";
export { IconGuiAblyBadge, IconGuiCheckCircledFill, IconGuiCheckLotusCircled, IconGuiChecklistChecked, IconGuiCodeDoc, IconGuiCursor, IconGuiExpand, IconGuiFilterFlowStep0, IconGuiFilterFlowStep1, IconGuiFilterFlowStep2, IconGuiFilterFlowStep3, IconGuiFlowerGrowth, IconGuiFurtherReading, IconGuiGlasses, IconGuiHeartbeatOutline, IconGuiHeartbeatSolid, IconGuiHistory, IconGuiLiveChat, IconGuiMouse, IconGuiPartial, IconGuiPitfall, IconGuiProdAiTransportOutline, IconGuiProdAiTransportSolid, IconGuiProdAssetTrackingOutline, IconGuiProdAssetTrackingSolid, IconGuiProdChatOutline, IconGuiProdChatSolid, IconGuiProdLiveobjectsOutline, IconGuiProdLiveobjectsSolid, IconGuiProdLivesyncOutline, IconGuiProdLivesyncSolid, IconGuiProdPubsubOutline, IconGuiProdPubsubSolid, IconGuiProdSpacesOutline, IconGuiProdSpacesSolid, IconGuiQuoteMarksFill, IconGuiRefresh, IconGuiResources, IconGuiSpinnerDark, IconGuiSpinnerLight, };
import IconProductAiTransportMono from "@ably/ui/core/icon-product-ai-transport-mono";
import IconProductAiTransport from "@ably/ui/core/icon-product-ai-transport";
import IconProductAssetTrackingMono from "@ably/ui/core/icon-product-asset-tracking-mono";
import IconProductAssetTracking from "@ably/ui/core/icon-product-asset-tracking";
import IconProductChatMono from "@ably/ui/core/icon-product-chat-mono";
import IconProductChat from "@ably/ui/core/icon-product-chat";
import IconProductLiveobjectsDark from "@ably/ui/core/icon-product-liveobjects-dark";
import IconProductLiveobjectsMono from "@ably/ui/core/icon-product-liveobjects-mono";
import IconProductLiveobjects from "@ably/ui/core/icon-product-liveobjects";
import IconProductLivesyncMono from "@ably/ui/core/icon-product-livesync-mono";
import IconProductLivesync from "@ably/ui/core/icon-product-livesync";
import IconProductPlatformMono from "@ably/ui/core/icon-product-platform-mono";
import IconProductPlatform from "@ably/ui/core/icon-product-platform";
import IconProductPubsubMono from "@ably/ui/core/icon-product-pubsub-mono";
import IconProductPubsub from "@ably/ui/core/icon-product-pubsub";
import IconProductSpacesMono from "@ably/ui/core/icon-product-spaces-mono";
import IconProductSpaces from "@ably/ui/core/icon-product-spaces";
export { IconProductAiTransportMono, IconProductAiTransport, IconProductAssetTrackingMono, IconProductAssetTracking, IconProductChatMono, IconProductChat, IconProductLiveobjectsDark, IconProductLiveobjectsMono, IconProductLiveobjects, IconProductLivesyncMono, IconProductLivesync, IconProductPlatformMono, IconProductPlatform, IconProductPubsubMono, IconProductPubsub, IconProductSpacesMono, IconProductSpaces, };
import IconSocialDiscordMono from "@ably/ui/core/icon-social-discord-mono";
import IconSocialDiscord from "@ably/ui/core/icon-social-discord";
import IconSocialFacebookMono from "@ably/ui/core/icon-social-facebook-mono";
import IconSocialFacebook from "@ably/ui/core/icon-social-facebook";
import IconSocialGithubMono from "@ably/ui/core/icon-social-github-mono";
import IconSocialGithub from "@ably/ui/core/icon-social-github";
import IconSocialGlassdoorMono from "@ably/ui/core/icon-social-glassdoor-mono";
import IconSocialGlassdoor from "@ably/ui/core/icon-social-glassdoor";
import IconSocialGoogleMono from "@ably/ui/core/icon-social-google-mono";
import IconSocialGoogle from "@ably/ui/core/icon-social-google";
import IconSocialLinkedinMono from "@ably/ui/core/icon-social-linkedin-mono";
import IconSocialLinkedin from "@ably/ui/core/icon-social-linkedin";
import IconSocialSlackMono from "@ably/ui/core/icon-social-slack-mono";
import IconSocialSlack from "@ably/ui/core/icon-social-slack";
import IconSocialStackoverflowMono from "@ably/ui/core/icon-social-stackoverflow-mono";
import IconSocialStackoverflow from "@ably/ui/core/icon-social-stackoverflow";
import IconSocialTwitterMono from "@ably/ui/core/icon-social-twitter-mono";
import IconSocialTwitter from "@ably/ui/core/icon-social-twitter";
import IconSocialXMono from "@ably/ui/core/icon-social-x-mono";
import IconSocialX from "@ably/ui/core/icon-social-x";
import IconSocialYoutubeMono from "@ably/ui/core/icon-social-youtube-mono";
import IconSocialYoutube from "@ably/ui/core/icon-social-youtube";
export { IconSocialDiscordMono, IconSocialDiscord, IconSocialFacebookMono, IconSocialFacebook, IconSocialGithubMono, IconSocialGithub, IconSocialGlassdoorMono, IconSocialGlassdoor, IconSocialGoogleMono, IconSocialGoogle, IconSocialLinkedinMono, IconSocialLinkedin, IconSocialSlackMono, IconSocialSlack, IconSocialStackoverflowMono, IconSocialStackoverflow, IconSocialTwitterMono, IconSocialTwitter, IconSocialXMono, IconSocialX, IconSocialYoutubeMono, IconSocialYoutube, };
import IconTechAblyApiStreamer from "@ably/ui/core/icon-tech-ably-api-streamer";
import IconTechAblyFirehose from "@ably/ui/core/icon-tech-ably-firehose";
import IconTechAblyNative from "@ably/ui/core/icon-tech-ably-native";
import IconTechAbly from "@ably/ui/core/icon-tech-ably";
import IconTechActivemq from "@ably/ui/core/icon-tech-activemq";
import IconTechActivitypub from "@ably/ui/core/icon-tech-activitypub";
import IconTechAerospike from "@ably/ui/core/icon-tech-aerospike";
import IconTechAkka from "@ably/ui/core/icon-tech-akka";
import IconTechAmazonEc2 from "@ably/ui/core/icon-tech-amazon-ec2";
import IconTechAmazonEventBridge from "@ably/ui/core/icon-tech-amazon-event-bridge";
import IconTechAmqp091 from "@ably/ui/core/icon-tech-amqp091";
import IconTechAmqp10 from "@ably/ui/core/icon-tech-amqp10";
import IconTechAndroidFull from "@ably/ui/core/icon-tech-android-full";
import IconTechAndroidHead from "@ably/ui/core/icon-tech-android-head";
import IconTechAngular from "@ably/ui/core/icon-tech-angular";
import IconTechAnycable from "@ably/ui/core/icon-tech-anycable";
import IconTechApacheCassandra from "@ably/ui/core/icon-tech-apache-cassandra";
import IconTechApacheCordova from "@ably/ui/core/icon-tech-apache-cordova";
import IconTechApacheKafka from "@ably/ui/core/icon-tech-apache-kafka";
import IconTechApacheSpark from "@ably/ui/core/icon-tech-apache-spark";
import IconTechApachepulsar from "@ably/ui/core/icon-tech-apachepulsar";
import IconTechApachestorm from "@ably/ui/core/icon-tech-apachestorm";
import IconTechApns from "@ably/ui/core/icon-tech-apns";
import IconTechAssemblyai from "@ably/ui/core/icon-tech-assemblyai";
import IconTechAtmosphere from "@ably/ui/core/icon-tech-atmosphere";
import IconTechAwsAppSync from "@ably/ui/core/icon-tech-aws-app-sync";
import IconTechAwsAurora from "@ably/ui/core/icon-tech-aws-aurora";
import IconTechAwsGatewayWebsockets from "@ably/ui/core/icon-tech-aws-gateway-websockets";
import IconTechAwsSns from "@ably/ui/core/icon-tech-aws-sns";
import IconTechAwsSqs from "@ably/ui/core/icon-tech-aws-sqs";
import IconTechAws from "@ably/ui/core/icon-tech-aws";
import IconTechAwsiot from "@ably/ui/core/icon-tech-awsiot";
import IconTechAwskinesis from "@ably/ui/core/icon-tech-awskinesis";
import IconTechAwslambda from "@ably/ui/core/icon-tech-awslambda";
import IconTechAwssqs from "@ably/ui/core/icon-tech-awssqs";
import IconTechAzureApi from "@ably/ui/core/icon-tech-azure-api";
import IconTechAzureArchiveApi from "@ably/ui/core/icon-tech-azure-archive-api";
import IconTechAzureBus from "@ably/ui/core/icon-tech-azure-bus";
import IconTechAzureCosmos from "@ably/ui/core/icon-tech-azure-cosmos";
import IconTechAzureEventHub from "@ably/ui/core/icon-tech-azure-event-hub";
import IconTechAzureFunctions from "@ably/ui/core/icon-tech-azure-functions";
import IconTechAzureSearch from "@ably/ui/core/icon-tech-azure-search";
import IconTechAzureStaticWebApp from "@ably/ui/core/icon-tech-azure-static-web-app";
import IconTechAzureStaticWebApps from "@ably/ui/core/icon-tech-azure-static-web-apps";
import IconTechAzureStorage from "@ably/ui/core/icon-tech-azure-storage";
import IconTechAzureWebPubsub from "@ably/ui/core/icon-tech-azure-web-pubsub";
import IconTechAzurefunctions from "@ably/ui/core/icon-tech-azurefunctions";
import IconTechAzureservicebus from "@ably/ui/core/icon-tech-azureservicebus";
import IconTechAzuresignalR from "@ably/ui/core/icon-tech-azuresignalR";
import IconTechBayeux from "@ably/ui/core/icon-tech-bayeux";
import IconTechC from "@ably/ui/core/icon-tech-c";
import IconTechCentrifugo from "@ably/ui/core/icon-tech-centrifugo";
import IconTechClaudeMono from "@ably/ui/core/icon-tech-claude-mono";
import IconTechClaude from "@ably/ui/core/icon-tech-claude";
import IconTechClientSideFrameworks from "@ably/ui/core/icon-tech-client-side-frameworks";
import IconTechClojure from "@ably/ui/core/icon-tech-clojure";
import IconTechCloudflareDurableObjects from "@ably/ui/core/icon-tech-cloudflare-durable-objects";
import IconTechCloudflareworkers from "@ably/ui/core/icon-tech-cloudflareworkers";
import IconTechCocoa from "@ably/ui/core/icon-tech-cocoa";
import IconTechConfluent from "@ably/ui/core/icon-tech-confluent";
import IconTechCord from "@ably/ui/core/icon-tech-cord";
import IconTechCsharp from "@ably/ui/core/icon-tech-csharp";
import IconTechCurl from "@ably/ui/core/icon-tech-curl";
import IconTechCustomwebhooks from "@ably/ui/core/icon-tech-customwebhooks";
import IconTechDatadog from "@ably/ui/core/icon-tech-datadog";
import IconTechDesignPatterns from "@ably/ui/core/icon-tech-design-patterns";
import IconTechDevplatforms from "@ably/ui/core/icon-tech-devplatforms";
import IconTechDiffusionData from "@ably/ui/core/icon-tech-diffusion-data";
import IconTechDjango from "@ably/ui/core/icon-tech-django";
import IconTechEngineio from "@ably/ui/core/icon-tech-engineio";
import IconTechEventDrivenServers from "@ably/ui/core/icon-tech-event-driven-servers";
import IconTechFanoutIo from "@ably/ui/core/icon-tech-fanout-io";
import IconTechFastApi from "@ably/ui/core/icon-tech-fast-api";
import IconTechFauna from "@ably/ui/core/icon-tech-fauna";
import IconTechFeatherjs from "@ably/ui/core/icon-tech-featherjs";
import IconTechFirebaseCloudMessaging from "@ably/ui/core/icon-tech-firebase-cloud-messaging";
import IconTechFirebase from "@ably/ui/core/icon-tech-firebase";
import IconTechFlutter from "@ably/ui/core/icon-tech-flutter";
import IconTechGcloudbigquery from "@ably/ui/core/icon-tech-gcloudbigquery";
import IconTechGclouddataflow from "@ably/ui/core/icon-tech-gclouddataflow";
import IconTechGcloudfunctions from "@ably/ui/core/icon-tech-gcloudfunctions";
import IconTechGcloudpubsub from "@ably/ui/core/icon-tech-gcloudpubsub";
import IconTechGo from "@ably/ui/core/icon-tech-go";
import IconTechGrpc from "@ably/ui/core/icon-tech-grpc";
import IconTechHivemq from "@ably/ui/core/icon-tech-hivemq";
import IconTechHttp2 from "@ably/ui/core/icon-tech-http2";
import IconTechHttp3 from "@ably/ui/core/icon-tech-http3";
import IconTechHttprest from "@ably/ui/core/icon-tech-httprest";
import IconTechIdempotency from "@ably/ui/core/icon-tech-idempotency";
import IconTechIfttt from "@ably/ui/core/icon-tech-ifttt";
import IconTechIntegrations from "@ably/ui/core/icon-tech-integrations";
import IconTechIosGeneric from "@ably/ui/core/icon-tech-ios-generic";
import IconTechIos from "@ably/ui/core/icon-tech-ios";
import IconTechIpados from "@ably/ui/core/icon-tech-ipados";
import IconTechIpfs from "@ably/ui/core/icon-tech-ipfs";
import IconTechIronmq from "@ably/ui/core/icon-tech-ironmq";
import IconTechJava from "@ably/ui/core/icon-tech-java";
import IconTechJavascript from "@ably/ui/core/icon-tech-javascript";
import IconTechJms from "@ably/ui/core/icon-tech-jms";
import IconTechJsonWebTokens from "@ably/ui/core/icon-tech-json-web-tokens";
import IconTechJson from "@ably/ui/core/icon-tech-json";
import IconTechKaazing from "@ably/ui/core/icon-tech-kaazing";
import IconTechKotlin from "@ably/ui/core/icon-tech-kotlin";
import IconTechKsqlDb from "@ably/ui/core/icon-tech-ksql-db";
import IconTechKubernetes from "@ably/ui/core/icon-tech-kubernetes";
import IconTechLaravelBroadcast from "@ably/ui/core/icon-tech-laravel-broadcast";
import IconTechLaravelEcho from "@ably/ui/core/icon-tech-laravel-echo";
import IconTechLightstreamer from "@ably/ui/core/icon-tech-lightstreamer";
import IconTechLiveblocks from "@ably/ui/core/icon-tech-liveblocks";
import IconTechLongpolling from "@ably/ui/core/icon-tech-longpolling";
import IconTechMacos from "@ably/ui/core/icon-tech-macos";
import IconTechMatrix from "@ably/ui/core/icon-tech-matrix";
import IconTechMeteor from "@ably/ui/core/icon-tech-meteor";
import IconTechMongoDb from "@ably/ui/core/icon-tech-mongo-db";
import IconTechMono from "@ably/ui/core/icon-tech-mono";
import IconTechMqtt from "@ably/ui/core/icon-tech-mqtt";
import IconTechMysql from "@ably/ui/core/icon-tech-mysql";
import IconTechNativeScript from "@ably/ui/core/icon-tech-native-script";
import IconTechNet from "@ably/ui/core/icon-tech-net";
import IconTechNetlify from "@ably/ui/core/icon-tech-netlify";
import IconTechNextjs from "@ably/ui/core/icon-tech-nextjs";
import IconTechNkn from "@ably/ui/core/icon-tech-nkn";
import IconTechNodejs from "@ably/ui/core/icon-tech-nodejs";
import IconTechObjectivec from "@ably/ui/core/icon-tech-objectivec";
import IconTechOpenai from "@ably/ui/core/icon-tech-openai";
import IconTechParseServer from "@ably/ui/core/icon-tech-parse-server";
import IconTechPhp from "@ably/ui/core/icon-tech-php";
import IconTechPlanetscale from "@ably/ui/core/icon-tech-planetscale";
import IconTechPostgres from "@ably/ui/core/icon-tech-postgres";
import IconTechPrisma from "@ably/ui/core/icon-tech-prisma";
import IconTechProgramminglanguages from "@ably/ui/core/icon-tech-programminglanguages";
import IconTechProtcolAdaptors from "@ably/ui/core/icon-tech-protcol-adaptors";
import IconTechProtocols from "@ably/ui/core/icon-tech-protocols";
import IconTechPubSub from "@ably/ui/core/icon-tech-pub-sub";
import IconTechPubnub from "@ably/ui/core/icon-tech-pubnub";
import IconTechPushTechnology from "@ably/ui/core/icon-tech-push-technology";
import IconTechPusher from "@ably/ui/core/icon-tech-pusher";
import IconTechPython from "@ably/ui/core/icon-tech-python";
import IconTechQuic from "@ably/ui/core/icon-tech-quic";
import IconTechRabbitMQ from "@ably/ui/core/icon-tech-rabbitMQ";
import IconTechRailsactioncable from "@ably/ui/core/icon-tech-railsactioncable";
import IconTechReactApp from "@ably/ui/core/icon-tech-react-app";
import IconTechReact from "@ably/ui/core/icon-tech-react";
import IconTechReactnative from "@ably/ui/core/icon-tech-reactnative";
import IconTechRedis from "@ably/ui/core/icon-tech-redis";
import IconTechRedpanda from "@ably/ui/core/icon-tech-redpanda";
import IconTechReplicache from "@ably/ui/core/icon-tech-replicache";
import IconTechRethinkdb from "@ably/ui/core/icon-tech-rethinkdb";
import IconTechRocketmq from "@ably/ui/core/icon-tech-rocketmq";
import IconTechRuby from "@ably/ui/core/icon-tech-ruby";
import IconTechScala from "@ably/ui/core/icon-tech-scala";
import IconTechScaledrone from "@ably/ui/core/icon-tech-scaledrone";
import IconTechServersentevents from "@ably/ui/core/icon-tech-serversentevents";
import IconTechServersideframeworks from "@ably/ui/core/icon-tech-serversideframeworks";
import IconTechSignalR from "@ably/ui/core/icon-tech-signalR";
import IconTechSnowflake from "@ably/ui/core/icon-tech-snowflake";
import IconTechSocketio from "@ably/ui/core/icon-tech-socketio";
import IconTechSockjs from "@ably/ui/core/icon-tech-sockjs";
import IconTechSolace from "@ably/ui/core/icon-tech-solace";
import IconTechSpring from "@ably/ui/core/icon-tech-spring";
import IconTechStomp from "@ably/ui/core/icon-tech-stomp";
import IconTechStreamdataIo from "@ably/ui/core/icon-tech-streamdata-io";
import IconTechStreamr from "@ably/ui/core/icon-tech-streamr";
import IconTechSwift from "@ably/ui/core/icon-tech-swift";
import IconTechSymfonyMercure from "@ably/ui/core/icon-tech-symfony-mercure";
import IconTechSymfony from "@ably/ui/core/icon-tech-symfony";
import IconTechTcpIp from "@ably/ui/core/icon-tech-tcp-ip";
import IconTechTenefit from "@ably/ui/core/icon-tech-tenefit";
import IconTechTerraformOutline from "@ably/ui/core/icon-tech-terraform-outline";
import IconTechTerraform from "@ably/ui/core/icon-tech-terraform";
import IconTechTvos from "@ably/ui/core/icon-tech-tvos";
import IconTechTwilio from "@ably/ui/core/icon-tech-twilio";
import IconTechTypescript from "@ably/ui/core/icon-tech-typescript";
import IconTechUdpProtocol from "@ably/ui/core/icon-tech-udp-protocol";
import IconTechUnity from "@ably/ui/core/icon-tech-unity";
import IconTechVercel from "@ably/ui/core/icon-tech-vercel";
import IconTechVscode from "@ably/ui/core/icon-tech-vscode";
import IconTechVuejs from "@ably/ui/core/icon-tech-vuejs";
import IconTechWamp from "@ably/ui/core/icon-tech-wamp";
import IconTechWatchos from "@ably/ui/core/icon-tech-watchos";
import IconTechWebPush from "@ably/ui/core/icon-tech-web-push";
import IconTechWeb from "@ably/ui/core/icon-tech-web";
import IconTechWebhooks from "@ably/ui/core/icon-tech-webhooks";
import IconTechWebrtc from "@ably/ui/core/icon-tech-webrtc";
import IconTechWebsockets from "@ably/ui/core/icon-tech-websockets";
import IconTechWebsub from "@ably/ui/core/icon-tech-websub";
import IconTechXamarin from "@ably/ui/core/icon-tech-xamarin";
import IconTechXhrStreaming from "@ably/ui/core/icon-tech-xhr-streaming";
import IconTechXmpp from "@ably/ui/core/icon-tech-xmpp";
import IconTechZapier from "@ably/ui/core/icon-tech-zapier";
import IconTechZeromq from "@ably/ui/core/icon-tech-zeromq";
export { IconTechAblyApiStreamer, IconTechAblyFirehose, IconTechAblyNative, IconTechAbly, IconTechActivemq, IconTechActivitypub, IconTechAerospike, IconTechAkka, IconTechAmazonEc2, IconTechAmazonEventBridge, IconTechAmqp091, IconTechAmqp10, IconTechAndroidFull, IconTechAndroidHead, IconTechAngular, IconTechAnycable, IconTechApacheCassandra, IconTechApacheCordova, IconTechApacheKafka, IconTechApacheSpark, IconTechApachepulsar, IconTechApachestorm, IconTechApns, IconTechAssemblyai, IconTechAtmosphere, IconTechAwsAppSync, IconTechAwsAurora, IconTechAwsGatewayWebsockets, IconTechAwsSns, IconTechAwsSqs, IconTechAws, IconTechAwsiot, IconTechAwskinesis, IconTechAwslambda, IconTechAwssqs, IconTechAzureApi, IconTechAzureArchiveApi, IconTechAzureBus, IconTechAzureCosmos, IconTechAzureEventHub, IconTechAzureFunctions, IconTechAzureSearch, IconTechAzureStaticWebApp, IconTechAzureStaticWebApps, IconTechAzureStorage, IconTechAzureWebPubsub, IconTechAzurefunctions, IconTechAzureservicebus, IconTechAzuresignalR, IconTechBayeux, IconTechC, IconTechCentrifugo, IconTechClaudeMono, IconTechClaude, IconTechClientSideFrameworks, IconTechClojure, IconTechCloudflareDurableObjects, IconTechCloudflareworkers, IconTechCocoa, IconTechConfluent, IconTechCord, IconTechCsharp, IconTechCurl, IconTechCustomwebhooks, IconTechDatadog, IconTechDesignPatterns, IconTechDevplatforms, IconTechDiffusionData, IconTechDjango, IconTechEngineio, IconTechEventDrivenServers, IconTechFanoutIo, IconTechFastApi, IconTechFauna, IconTechFeatherjs, IconTechFirebaseCloudMessaging, IconTechFirebase, IconTechFlutter, IconTechGcloudbigquery, IconTechGclouddataflow, IconTechGcloudfunctions, IconTechGcloudpubsub, IconTechGo, IconTechGrpc, IconTechHivemq, IconTechHttp2, IconTechHttp3, IconTechHttprest, IconTechIdempotency, IconTechIfttt, IconTechIntegrations, IconTechIosGeneric, IconTechIos, IconTechIpados, IconTechIpfs, IconTechIronmq, IconTechJava, IconTechJavascript, IconTechJms, IconTechJsonWebTokens, IconTechJson, IconTechKaazing, IconTechKotlin, IconTechKsqlDb, IconTechKubernetes, IconTechLaravelBroadcast, IconTechLaravelEcho, IconTechLightstreamer, IconTechLiveblocks, IconTechLongpolling, IconTechMacos, IconTechMatrix, IconTechMeteor, IconTechMongoDb, IconTechMono, IconTechMqtt, IconTechMysql, IconTechNativeScript, IconTechNet, IconTechNetlify, IconTechNextjs, IconTechNkn, IconTechNodejs, IconTechObjectivec, IconTechOpenai, IconTechParseServer, IconTechPhp, IconTechPlanetscale, IconTechPostgres, IconTechPrisma, IconTechProgramminglanguages, IconTechProtcolAdaptors, IconTechProtocols, IconTechPubSub, IconTechPubnub, IconTechPushTechnology, IconTechPusher, IconTechPython, IconTechQuic, IconTechRabbitMQ, IconTechRailsactioncable, IconTechReactApp, IconTechReact, IconTechReactnative, IconTechRedis, IconTechRedpanda, IconTechReplicache, IconTechRethinkdb, IconTechRocketmq, IconTechRuby, IconTechScala, IconTechScaledrone, IconTechServersentevents, IconTechServersideframeworks, IconTechSignalR, IconTechSnowflake, IconTechSocketio, IconTechSockjs, IconTechSolace, IconTechSpring, IconTechStomp, IconTechStreamdataIo, IconTechStreamr, IconTechSwift, IconTechSymfonyMercure, IconTechSymfony, IconTechTcpIp, IconTechTenefit, IconTechTerraformOutline, IconTechTerraform, IconTechTvos, IconTechTwilio, IconTechTypescript, IconTechUdpProtocol, IconTechUnity, IconTechVercel, IconTechVscode, IconTechVuejs, IconTechWamp, IconTechWatchos, IconTechWebPush, IconTechWeb, IconTechWebhooks, IconTechWebrtc, IconTechWebsockets, IconTechWebsub, IconTechXamarin, IconTechXhrStreaming, IconTechXmpp, IconTechZapier, IconTechZeromq, };
//# sourceMappingURL=index.d.ts.map
}

declare module '@ably/ui/core/Icon/computed-icons/display-icons' {
export const displayIcons: readonly ["icon-display-48hrs", "icon-display-ably-channels", "icon-display-about-ably-col", "icon-display-api", "icon-display-api-keys", "icon-display-architectural-guidance", "icon-display-asset-tracking-col", "icon-display-authentication", "icon-display-avatar-stack", "icon-display-browser", "icon-display-calendar", "icon-display-call-mobile", "icon-display-careers-col", "icon-display-case-studies-col", "icon-display-chat-col", "icon-display-chat-mono", "icon-display-chat-stack", "icon-display-chat-stack-col", "icon-display-cloud-servers", "icon-display-compare-tech-col", "icon-display-connection-state-recovery", "icon-display-consumer-groups", "icon-display-custom", "icon-display-custom-cname", "icon-display-customers-col", "icon-display-data-broadcast-col", "icon-display-data-broadcast-mono", "icon-display-data-synchronization-col", "icon-display-dedicated-cluster", "icon-display-deltas", "icon-display-docs-col", "icon-display-documentation", "icon-display-dynamic-channel-groups", "icon-display-edge-network", "icon-display-elasticity", "icon-display-equalisers-mono", "icon-display-events-col", "icon-display-exactly-once-delivery", "icon-display-examples-col", "icon-display-fan-out", "icon-display-firehose", "icon-display-gdpr", "icon-display-general-comms", "icon-display-granular-permissions", "icon-display-hipaa", "icon-display-hipaa-mono", "icon-display-history", "icon-display-integrations", "icon-display-integrations-col", "icon-display-it-support-access", "icon-display-it-support-helpdesk", "icon-display-kafka-at-the-edge-col", "icon-display-laptop", "icon-display-last-seen", "icon-display-lightbulb-col", "icon-display-live-chat", "icon-display-live-updates-results-metrics-col", "icon-display-map-pin", "icon-display-message", "icon-display-message-batching", "icon-display-message-persistence", "icon-display-message-queues", "icon-display-multi-user-spaces-col", "icon-display-observe-analytics", "icon-display-padlock-closed", "icon-display-platform", "icon-display-play", "icon-display-premium-support", "icon-display-privacy-shield-framework", "icon-display-private-link", "icon-display-push-notifications", "icon-display-push-notifications-col", "icon-display-push-notifications-mono", "icon-display-quickstart-guides-col", "icon-display-reactions", "icon-display-read-receipts", "icon-display-resources-col", "icon-display-rewind", "icon-display-sdks-col", "icon-display-send-received-messages", "icon-display-servers", "icon-display-shopping-cart", "icon-display-sla", "icon-display-soc2-type2", "icon-display-soc2-type2-mono", "icon-display-something-else", "icon-display-something-else-mono", "icon-display-subscription-filters", "icon-display-support-chat-mono", "icon-display-system-metadata", "icon-display-tech-account-comms", "icon-display-tutorials-demos-col", "icon-display-ui", "icon-display-ui-mono", "icon-display-virtual-events", "icon-display-virtual-events-col"];
//# sourceMappingURL=display-icons.d.ts.map
}

declare module '@ably/ui/core/Icon/computed-icons/gui-icons' {
export const guiIcons: readonly ["icon-gui-ably-badge", "icon-gui-check-circled-fill", "icon-gui-check-lotus-circled", "icon-gui-checklist-checked", "icon-gui-code-doc", "icon-gui-cursor", "icon-gui-expand", "icon-gui-filter-flow-step-0", "icon-gui-filter-flow-step-1", "icon-gui-filter-flow-step-2", "icon-gui-filter-flow-step-3", "icon-gui-flower-growth", "icon-gui-further-reading", "icon-gui-glasses", "icon-gui-heartbeat-outline", "icon-gui-heartbeat-solid", "icon-gui-history", "icon-gui-live-chat", "icon-gui-mouse", "icon-gui-partial", "icon-gui-pitfall", "icon-gui-prod-ai-transport-outline", "icon-gui-prod-ai-transport-solid", "icon-gui-prod-asset-tracking-outline", "icon-gui-prod-asset-tracking-solid", "icon-gui-prod-chat-outline", "icon-gui-prod-chat-solid", "icon-gui-prod-liveobjects-outline", "icon-gui-prod-liveobjects-solid", "icon-gui-prod-livesync-outline", "icon-gui-prod-livesync-solid", "icon-gui-prod-pubsub-outline", "icon-gui-prod-pubsub-solid", "icon-gui-prod-spaces-outline", "icon-gui-prod-spaces-solid", "icon-gui-quote-marks-fill", "icon-gui-refresh", "icon-gui-resources", "icon-gui-spinner-dark", "icon-gui-spinner-light"];
//# sourceMappingURL=gui-icons.d.ts.map
}

declare module '@ably/ui/core/Icon/computed-icons/product-icons' {
export const productIcons: readonly ["icon-product-ai-transport", "icon-product-ai-transport-mono", "icon-product-asset-tracking", "icon-product-asset-tracking-mono", "icon-product-chat", "icon-product-chat-mono", "icon-product-liveobjects", "icon-product-liveobjects-dark", "icon-product-liveobjects-mono", "icon-product-livesync", "icon-product-livesync-mono", "icon-product-platform", "icon-product-platform-mono", "icon-product-pubsub", "icon-product-pubsub-mono", "icon-product-spaces", "icon-product-spaces-mono"];
//# sourceMappingURL=product-icons.d.ts.map
}

declare module '@ably/ui/core/Icon/computed-icons/social-icons' {
export const socialIcons: readonly ["icon-social-discord", "icon-social-discord-mono", "icon-social-facebook", "icon-social-facebook-mono", "icon-social-github", "icon-social-github-mono", "icon-social-glassdoor", "icon-social-glassdoor-mono", "icon-social-google", "icon-social-google-mono", "icon-social-linkedin", "icon-social-linkedin-mono", "icon-social-slack", "icon-social-slack-mono", "icon-social-stackoverflow", "icon-social-stackoverflow-mono", "icon-social-twitter", "icon-social-twitter-mono", "icon-social-x", "icon-social-x-mono", "icon-social-youtube", "icon-social-youtube-mono"];
//# sourceMappingURL=social-icons.d.ts.map
}

declare module '@ably/ui/core/Icon/computed-icons/tech-icons' {
export const techIcons: readonly ["icon-tech-ably", "icon-tech-ably-api-streamer", "icon-tech-ably-firehose", "icon-tech-ably-native", "icon-tech-activemq", "icon-tech-activitypub", "icon-tech-aerospike", "icon-tech-akka", "icon-tech-amazon-ec2", "icon-tech-amazon-event-bridge", "icon-tech-amqp091", "icon-tech-amqp10", "icon-tech-android-full", "icon-tech-android-head", "icon-tech-angular", "icon-tech-anycable", "icon-tech-apache-cassandra", "icon-tech-apache-cordova", "icon-tech-apache-kafka", "icon-tech-apache-spark", "icon-tech-apachepulsar", "icon-tech-apachestorm", "icon-tech-apns", "icon-tech-assemblyai", "icon-tech-atmosphere", "icon-tech-aws", "icon-tech-aws-app-sync", "icon-tech-aws-aurora", "icon-tech-aws-gateway-websockets", "icon-tech-aws-sns", "icon-tech-aws-sqs", "icon-tech-awsiot", "icon-tech-awskinesis", "icon-tech-awslambda", "icon-tech-awssqs", "icon-tech-azure-api", "icon-tech-azure-archive-api", "icon-tech-azure-bus", "icon-tech-azure-cosmos", "icon-tech-azure-event-hub", "icon-tech-azure-functions", "icon-tech-azure-search", "icon-tech-azure-static-web-app", "icon-tech-azure-static-web-apps", "icon-tech-azure-storage", "icon-tech-azure-web-pubsub", "icon-tech-azurefunctions", "icon-tech-azureservicebus", "icon-tech-azuresignalR", "icon-tech-bayeux", "icon-tech-c++", "icon-tech-centrifugo", "icon-tech-claude", "icon-tech-claude-mono", "icon-tech-client-side-frameworks", "icon-tech-clojure", "icon-tech-cloudflare-durable-objects", "icon-tech-cloudflareworkers", "icon-tech-cocoa", "icon-tech-confluent", "icon-tech-cord", "icon-tech-csharp", "icon-tech-curl", "icon-tech-customwebhooks", "icon-tech-datadog", "icon-tech-design-patterns", "icon-tech-devplatforms", "icon-tech-diffusion-data", "icon-tech-django", "icon-tech-engineio", "icon-tech-event-driven-servers", "icon-tech-fanout-io", "icon-tech-fast-api", "icon-tech-fauna", "icon-tech-featherjs", "icon-tech-firebase", "icon-tech-firebase-cloud-messaging", "icon-tech-flutter", "icon-tech-gcloudbigquery", "icon-tech-gclouddataflow", "icon-tech-gcloudfunctions", "icon-tech-gcloudpubsub", "icon-tech-go", "icon-tech-grpc", "icon-tech-hivemq", "icon-tech-http2", "icon-tech-http3", "icon-tech-httprest", "icon-tech-idempotency", "icon-tech-ifttt", "icon-tech-integrations", "icon-tech-ios", "icon-tech-ios-generic", "icon-tech-ipados", "icon-tech-ipfs", "icon-tech-ironmq", "icon-tech-java", "icon-tech-javascript", "icon-tech-jms", "icon-tech-json", "icon-tech-json-web-tokens", "icon-tech-kaazing", "icon-tech-kotlin", "icon-tech-ksql-db", "icon-tech-kubernetes", "icon-tech-laravel-broadcast", "icon-tech-laravel-echo", "icon-tech-lightstreamer", "icon-tech-liveblocks", "icon-tech-longpolling", "icon-tech-macos", "icon-tech-matrix", "icon-tech-meteor", "icon-tech-mongo-db", "icon-tech-mono", "icon-tech-mqtt", "icon-tech-mysql", "icon-tech-native-script", "icon-tech-net", "icon-tech-netlify", "icon-tech-nextjs", "icon-tech-nkn", "icon-tech-nodejs", "icon-tech-objectivec", "icon-tech-openai", "icon-tech-parse-server", "icon-tech-php", "icon-tech-planetscale", "icon-tech-postgres", "icon-tech-prisma", "icon-tech-programminglanguages", "icon-tech-protcol-adaptors", "icon-tech-protocols", "icon-tech-pub-sub", "icon-tech-pubnub", "icon-tech-push-technology", "icon-tech-pusher", "icon-tech-python", "icon-tech-quic", "icon-tech-rabbitMQ", "icon-tech-railsactioncable", "icon-tech-react", "icon-tech-react-app", "icon-tech-reactnative", "icon-tech-redis", "icon-tech-redpanda", "icon-tech-replicache", "icon-tech-rethinkdb", "icon-tech-rocketmq", "icon-tech-ruby", "icon-tech-scala", "icon-tech-scaledrone", "icon-tech-serversentevents", "icon-tech-serversideframeworks", "icon-tech-signalR", "icon-tech-snowflake", "icon-tech-socketio", "icon-tech-sockjs", "icon-tech-solace", "icon-tech-spring", "icon-tech-stomp", "icon-tech-streamdata-io", "icon-tech-streamr", "icon-tech-swift", "icon-tech-symfony", "icon-tech-symfony-mercure", "icon-tech-tcp-ip", "icon-tech-tenefit", "icon-tech-terraform", "icon-tech-terraform-outline", "icon-tech-tvos", "icon-tech-twilio", "icon-tech-typescript", "icon-tech-udp-protocol", "icon-tech-unity", "icon-tech-vercel", "icon-tech-vscode", "icon-tech-vuejs", "icon-tech-wamp", "icon-tech-watchos", "icon-tech-web", "icon-tech-web-push", "icon-tech-webhooks", "icon-tech-webrtc", "icon-tech-websockets", "icon-tech-websub", "icon-tech-xamarin", "icon-tech-xhr-streaming", "icon-tech-xmpp", "icon-tech-zapier", "icon-tech-zeromq"];
//# sourceMappingURL=tech-icons.d.ts.map
}

declare module '@ably/ui/core/Icon/types' {
export const iconNames: {
    gui: readonly ["icon-gui-ably-badge", "icon-gui-check-circled-fill", "icon-gui-check-lotus-circled", "icon-gui-checklist-checked", "icon-gui-code-doc", "icon-gui-cursor", "icon-gui-expand", "icon-gui-filter-flow-step-0", "icon-gui-filter-flow-step-1", "icon-gui-filter-flow-step-2", "icon-gui-filter-flow-step-3", "icon-gui-flower-growth", "icon-gui-further-reading", "icon-gui-glasses", "icon-gui-heartbeat-outline", "icon-gui-heartbeat-solid", "icon-gui-history", "icon-gui-live-chat", "icon-gui-mouse", "icon-gui-partial", "icon-gui-pitfall", "icon-gui-prod-ai-transport-outline", "icon-gui-prod-ai-transport-solid", "icon-gui-prod-asset-tracking-outline", "icon-gui-prod-asset-tracking-solid", "icon-gui-prod-chat-outline", "icon-gui-prod-chat-solid", "icon-gui-prod-liveobjects-outline", "icon-gui-prod-liveobjects-solid", "icon-gui-prod-livesync-outline", "icon-gui-prod-livesync-solid", "icon-gui-prod-pubsub-outline", "icon-gui-prod-pubsub-solid", "icon-gui-prod-spaces-outline", "icon-gui-prod-spaces-solid", "icon-gui-quote-marks-fill", "icon-gui-refresh", "icon-gui-resources", "icon-gui-spinner-dark", "icon-gui-spinner-light"];
    display: readonly ["icon-display-48hrs", "icon-display-ably-channels", "icon-display-about-ably-col", "icon-display-api", "icon-display-api-keys", "icon-display-architectural-guidance", "icon-display-asset-tracking-col", "icon-display-authentication", "icon-display-avatar-stack", "icon-display-browser", "icon-display-calendar", "icon-display-call-mobile", "icon-display-careers-col", "icon-display-case-studies-col", "icon-display-chat-col", "icon-display-chat-mono", "icon-display-chat-stack", "icon-display-chat-stack-col", "icon-display-cloud-servers", "icon-display-compare-tech-col", "icon-display-connection-state-recovery", "icon-display-consumer-groups", "icon-display-custom", "icon-display-custom-cname", "icon-display-customers-col", "icon-display-data-broadcast-col", "icon-display-data-broadcast-mono", "icon-display-data-synchronization-col", "icon-display-dedicated-cluster", "icon-display-deltas", "icon-display-docs-col", "icon-display-documentation", "icon-display-dynamic-channel-groups", "icon-display-edge-network", "icon-display-elasticity", "icon-display-equalisers-mono", "icon-display-events-col", "icon-display-exactly-once-delivery", "icon-display-examples-col", "icon-display-fan-out", "icon-display-firehose", "icon-display-gdpr", "icon-display-general-comms", "icon-display-granular-permissions", "icon-display-hipaa", "icon-display-hipaa-mono", "icon-display-history", "icon-display-integrations", "icon-display-integrations-col", "icon-display-it-support-access", "icon-display-it-support-helpdesk", "icon-display-kafka-at-the-edge-col", "icon-display-laptop", "icon-display-last-seen", "icon-display-lightbulb-col", "icon-display-live-chat", "icon-display-live-updates-results-metrics-col", "icon-display-map-pin", "icon-display-message", "icon-display-message-batching", "icon-display-message-persistence", "icon-display-message-queues", "icon-display-multi-user-spaces-col", "icon-display-observe-analytics", "icon-display-padlock-closed", "icon-display-platform", "icon-display-play", "icon-display-premium-support", "icon-display-privacy-shield-framework", "icon-display-private-link", "icon-display-push-notifications", "icon-display-push-notifications-col", "icon-display-push-notifications-mono", "icon-display-quickstart-guides-col", "icon-display-reactions", "icon-display-read-receipts", "icon-display-resources-col", "icon-display-rewind", "icon-display-sdks-col", "icon-display-send-received-messages", "icon-display-servers", "icon-display-shopping-cart", "icon-display-sla", "icon-display-soc2-type2", "icon-display-soc2-type2-mono", "icon-display-something-else", "icon-display-something-else-mono", "icon-display-subscription-filters", "icon-display-support-chat-mono", "icon-display-system-metadata", "icon-display-tech-account-comms", "icon-display-tutorials-demos-col", "icon-display-ui", "icon-display-ui-mono", "icon-display-virtual-events", "icon-display-virtual-events-col"];
    social: readonly ["icon-social-discord", "icon-social-discord-mono", "icon-social-facebook", "icon-social-facebook-mono", "icon-social-github", "icon-social-github-mono", "icon-social-glassdoor", "icon-social-glassdoor-mono", "icon-social-google", "icon-social-google-mono", "icon-social-linkedin", "icon-social-linkedin-mono", "icon-social-slack", "icon-social-slack-mono", "icon-social-stackoverflow", "icon-social-stackoverflow-mono", "icon-social-twitter", "icon-social-twitter-mono", "icon-social-x", "icon-social-x-mono", "icon-social-youtube", "icon-social-youtube-mono"];
    tech: readonly ["icon-tech-ably", "icon-tech-ably-api-streamer", "icon-tech-ably-firehose", "icon-tech-ably-native", "icon-tech-activemq", "icon-tech-activitypub", "icon-tech-aerospike", "icon-tech-akka", "icon-tech-amazon-ec2", "icon-tech-amazon-event-bridge", "icon-tech-amqp091", "icon-tech-amqp10", "icon-tech-android-full", "icon-tech-android-head", "icon-tech-angular", "icon-tech-anycable", "icon-tech-apache-cassandra", "icon-tech-apache-cordova", "icon-tech-apache-kafka", "icon-tech-apache-spark", "icon-tech-apachepulsar", "icon-tech-apachestorm", "icon-tech-apns", "icon-tech-assemblyai", "icon-tech-atmosphere", "icon-tech-aws", "icon-tech-aws-app-sync", "icon-tech-aws-aurora", "icon-tech-aws-gateway-websockets", "icon-tech-aws-sns", "icon-tech-aws-sqs", "icon-tech-awsiot", "icon-tech-awskinesis", "icon-tech-awslambda", "icon-tech-awssqs", "icon-tech-azure-api", "icon-tech-azure-archive-api", "icon-tech-azure-bus", "icon-tech-azure-cosmos", "icon-tech-azure-event-hub", "icon-tech-azure-functions", "icon-tech-azure-search", "icon-tech-azure-static-web-app", "icon-tech-azure-static-web-apps", "icon-tech-azure-storage", "icon-tech-azure-web-pubsub", "icon-tech-azurefunctions", "icon-tech-azureservicebus", "icon-tech-azuresignalR", "icon-tech-bayeux", "icon-tech-c++", "icon-tech-centrifugo", "icon-tech-claude", "icon-tech-claude-mono", "icon-tech-client-side-frameworks", "icon-tech-clojure", "icon-tech-cloudflare-durable-objects", "icon-tech-cloudflareworkers", "icon-tech-cocoa", "icon-tech-confluent", "icon-tech-cord", "icon-tech-csharp", "icon-tech-curl", "icon-tech-customwebhooks", "icon-tech-datadog", "icon-tech-design-patterns", "icon-tech-devplatforms", "icon-tech-diffusion-data", "icon-tech-django", "icon-tech-engineio", "icon-tech-event-driven-servers", "icon-tech-fanout-io", "icon-tech-fast-api", "icon-tech-fauna", "icon-tech-featherjs", "icon-tech-firebase", "icon-tech-firebase-cloud-messaging", "icon-tech-flutter", "icon-tech-gcloudbigquery", "icon-tech-gclouddataflow", "icon-tech-gcloudfunctions", "icon-tech-gcloudpubsub", "icon-tech-go", "icon-tech-grpc", "icon-tech-hivemq", "icon-tech-http2", "icon-tech-http3", "icon-tech-httprest", "icon-tech-idempotency", "icon-tech-ifttt", "icon-tech-integrations", "icon-tech-ios", "icon-tech-ios-generic", "icon-tech-ipados", "icon-tech-ipfs", "icon-tech-ironmq", "icon-tech-java", "icon-tech-javascript", "icon-tech-jms", "icon-tech-json", "icon-tech-json-web-tokens", "icon-tech-kaazing", "icon-tech-kotlin", "icon-tech-ksql-db", "icon-tech-kubernetes", "icon-tech-laravel-broadcast", "icon-tech-laravel-echo", "icon-tech-lightstreamer", "icon-tech-liveblocks", "icon-tech-longpolling", "icon-tech-macos", "icon-tech-matrix", "icon-tech-meteor", "icon-tech-mongo-db", "icon-tech-mono", "icon-tech-mqtt", "icon-tech-mysql", "icon-tech-native-script", "icon-tech-net", "icon-tech-netlify", "icon-tech-nextjs", "icon-tech-nkn", "icon-tech-nodejs", "icon-tech-objectivec", "icon-tech-openai", "icon-tech-parse-server", "icon-tech-php", "icon-tech-planetscale", "icon-tech-postgres", "icon-tech-prisma", "icon-tech-programminglanguages", "icon-tech-protcol-adaptors", "icon-tech-protocols", "icon-tech-pub-sub", "icon-tech-pubnub", "icon-tech-push-technology", "icon-tech-pusher", "icon-tech-python", "icon-tech-quic", "icon-tech-rabbitMQ", "icon-tech-railsactioncable", "icon-tech-react", "icon-tech-react-app", "icon-tech-reactnative", "icon-tech-redis", "icon-tech-redpanda", "icon-tech-replicache", "icon-tech-rethinkdb", "icon-tech-rocketmq", "icon-tech-ruby", "icon-tech-scala", "icon-tech-scaledrone", "icon-tech-serversentevents", "icon-tech-serversideframeworks", "icon-tech-signalR", "icon-tech-snowflake", "icon-tech-socketio", "icon-tech-sockjs", "icon-tech-solace", "icon-tech-spring", "icon-tech-stomp", "icon-tech-streamdata-io", "icon-tech-streamr", "icon-tech-swift", "icon-tech-symfony", "icon-tech-symfony-mercure", "icon-tech-tcp-ip", "icon-tech-tenefit", "icon-tech-terraform", "icon-tech-terraform-outline", "icon-tech-tvos", "icon-tech-twilio", "icon-tech-typescript", "icon-tech-udp-protocol", "icon-tech-unity", "icon-tech-vercel", "icon-tech-vscode", "icon-tech-vuejs", "icon-tech-wamp", "icon-tech-watchos", "icon-tech-web", "icon-tech-web-push", "icon-tech-webhooks", "icon-tech-webrtc", "icon-tech-websockets", "icon-tech-websub", "icon-tech-xamarin", "icon-tech-xhr-streaming", "icon-tech-xmpp", "icon-tech-zapier", "icon-tech-zeromq"];
    product: readonly ["icon-product-ai-transport", "icon-product-ai-transport-mono", "icon-product-asset-tracking", "icon-product-asset-tracking-mono", "icon-product-chat", "icon-product-chat-mono", "icon-product-liveobjects", "icon-product-liveobjects-dark", "icon-product-liveobjects-mono", "icon-product-livesync", "icon-product-livesync-mono", "icon-product-platform", "icon-product-platform-mono", "icon-product-pubsub", "icon-product-pubsub-mono", "icon-product-spaces", "icon-product-spaces-mono"];
};
type HeroiconVariant = "outline" | "solid" | "mini" | "micro";
type HeroiconName = `icon-gui-${string}-${HeroiconVariant}`;
export type IconName = (typeof iconNames.gui)[number] | (typeof iconNames.display)[number] | (typeof iconNames.social)[number] | (typeof iconNames.tech)[number] | (typeof iconNames.product)[number] | HeroiconName;
export type IconSize = `${number}px` | `${number}em` | `${number}rem` | `calc(${string})`;
export {};
//# sourceMappingURL=types.d.ts.map
}

declare module '@ably/ui/core/Icon/utils' {
import { IconName } from "@ably/ui/core/types";
type HeroiconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;
export const defaultIconSecondaryColor: (name: IconName) => "text-neutral-000" | "text-neutral-100" | "text-neutral-200" | "text-neutral-300" | "text-neutral-400" | "text-neutral-500" | "text-neutral-600" | "text-neutral-700" | "text-neutral-800" | "text-neutral-900" | "text-neutral-1000" | "text-neutral-1100" | "text-neutral-1200" | "text-neutral-1300" | "text-orange-100" | "text-orange-200" | "text-orange-300" | "text-orange-400" | "text-orange-500" | "text-orange-600" | "text-orange-700" | "text-orange-800" | "text-orange-900" | "text-orange-1000" | "text-orange-1100" | "text-yellow-100" | "text-yellow-200" | "text-yellow-300" | "text-yellow-400" | "text-yellow-500" | "text-yellow-600" | "text-yellow-700" | "text-yellow-800" | "text-yellow-900" | "text-green-100" | "text-green-200" | "text-green-300" | "text-green-400" | "text-green-500" | "text-green-600" | "text-green-700" | "text-green-800" | "text-green-900" | "text-blue-100" | "text-blue-200" | "text-blue-300" | "text-blue-400" | "text-blue-500" | "text-blue-600" | "text-blue-700" | "text-blue-800" | "text-blue-900" | "text-violet-100" | "text-violet-200" | "text-violet-300" | "text-violet-400" | "text-violet-500" | "text-violet-600" | "text-violet-700" | "text-violet-800" | "text-violet-900" | "text-pink-100" | "text-pink-200" | "text-pink-300" | "text-pink-400" | "text-pink-500" | "text-pink-600" | "text-pink-700" | "text-pink-800" | "text-pink-900" | "text-gui-blue-default-light" | "text-gui-blue-hover-light" | "text-gui-blue-active-light" | "text-gui-blue-default-dark" | "text-gui-blue-hover-dark" | "text-gui-blue-active-dark" | "text-gui-blue-focus" | "text-gui-unavailable" | "text-gui-success-green" | "text-gui-error-red" | "text-gui-focus" | "text-gui-focus-outline" | "text-gui-visited" | "text-white" | "text-extra-light-grey" | "text-light-grey" | "text-mid-grey" | "text-dark-grey" | "text-charcoal-grey" | "text-cool-black" | "text-active-orange" | "text-bright-red" | "text-red-orange" | "text-electric-cyan" | "text-zingy-green" | "text-jazzy-pink" | "text-gui-default" | "text-gui-hover" | "text-gui-active" | "text-gui-error" | "text-gui-success" | "text-gui-default-dark" | "text-gui-hover-dark" | "text-gui-active-dark" | "text-transparent" | "bg-neutral-000" | "bg-neutral-100" | "bg-neutral-200" | "bg-neutral-300" | "bg-neutral-400" | "bg-neutral-500" | "bg-neutral-600" | "bg-neutral-700" | "bg-neutral-800" | "bg-neutral-900" | "bg-neutral-1000" | "bg-neutral-1100" | "bg-neutral-1200" | "bg-neutral-1300" | "bg-orange-100" | "bg-orange-200" | "bg-orange-300" | "bg-orange-400" | "bg-orange-500" | "bg-orange-600" | "bg-orange-700" | "bg-orange-800" | "bg-orange-900" | "bg-orange-1000" | "bg-orange-1100" | "bg-yellow-100" | "bg-yellow-200" | "bg-yellow-300" | "bg-yellow-400" | "bg-yellow-500" | "bg-yellow-600" | "bg-yellow-700" | "bg-yellow-800" | "bg-yellow-900" | "bg-green-100" | "bg-green-200" | "bg-green-300" | "bg-green-400" | "bg-green-500" | "bg-green-600" | "bg-green-700" | "bg-green-800" | "bg-green-900" | "bg-blue-100" | "bg-blue-200" | "bg-blue-300" | "bg-blue-400" | "bg-blue-500" | "bg-blue-600" | "bg-blue-700" | "bg-blue-800" | "bg-blue-900" | "bg-violet-100" | "bg-violet-200" | "bg-violet-300" | "bg-violet-400" | "bg-violet-500" | "bg-violet-600" | "bg-violet-700" | "bg-violet-800" | "bg-violet-900" | "bg-pink-100" | "bg-pink-200" | "bg-pink-300" | "bg-pink-400" | "bg-pink-500" | "bg-pink-600" | "bg-pink-700" | "bg-pink-800" | "bg-pink-900" | "bg-gui-blue-default-light" | "bg-gui-blue-hover-light" | "bg-gui-blue-active-light" | "bg-gui-blue-default-dark" | "bg-gui-blue-hover-dark" | "bg-gui-blue-active-dark" | "bg-gui-blue-focus" | "bg-gui-unavailable" | "bg-gui-success-green" | "bg-gui-error-red" | "bg-gui-focus" | "bg-gui-focus-outline" | "bg-gui-visited" | "bg-white" | "bg-extra-light-grey" | "bg-light-grey" | "bg-mid-grey" | "bg-dark-grey" | "bg-charcoal-grey" | "bg-cool-black" | "bg-active-orange" | "bg-bright-red" | "bg-red-orange" | "bg-electric-cyan" | "bg-zingy-green" | "bg-jazzy-pink" | "bg-gui-default" | "bg-gui-hover" | "bg-gui-active" | "bg-gui-error" | "bg-gui-success" | "bg-gui-default-dark" | "bg-gui-hover-dark" | "bg-gui-active-dark" | "bg-transparent" | "from-neutral-000" | "from-neutral-100" | "from-neutral-200" | "from-neutral-300" | "from-neutral-400" | "from-neutral-500" | "from-neutral-600" | "from-neutral-700" | "from-neutral-800" | "from-neutral-900" | "from-neutral-1000" | "from-neutral-1100" | "from-neutral-1200" | "from-neutral-1300" | "from-orange-100" | "from-orange-200" | "from-orange-300" | "from-orange-400" | "from-orange-500" | "from-orange-600" | "from-orange-700" | "from-orange-800" | "from-orange-900" | "from-orange-1000" | "from-orange-1100" | "from-yellow-100" | "from-yellow-200" | "from-yellow-300" | "from-yellow-400" | "from-yellow-500" | "from-yellow-600" | "from-yellow-700" | "from-yellow-800" | "from-yellow-900" | "from-green-100" | "from-green-200" | "from-green-300" | "from-green-400" | "from-green-500" | "from-green-600" | "from-green-700" | "from-green-800" | "from-green-900" | "from-blue-100" | "from-blue-200" | "from-blue-300" | "from-blue-400" | "from-blue-500" | "from-blue-600" | "from-blue-700" | "from-blue-800" | "from-blue-900" | "from-violet-100" | "from-violet-200" | "from-violet-300" | "from-violet-400" | "from-violet-500" | "from-violet-600" | "from-violet-700" | "from-violet-800" | "from-violet-900" | "from-pink-100" | "from-pink-200" | "from-pink-300" | "from-pink-400" | "from-pink-500" | "from-pink-600" | "from-pink-700" | "from-pink-800" | "from-pink-900" | "from-gui-blue-default-light" | "from-gui-blue-hover-light" | "from-gui-blue-active-light" | "from-gui-blue-default-dark" | "from-gui-blue-hover-dark" | "from-gui-blue-active-dark" | "from-gui-blue-focus" | "from-gui-unavailable" | "from-gui-success-green" | "from-gui-error-red" | "from-gui-focus" | "from-gui-focus-outline" | "from-gui-visited" | "from-white" | "from-extra-light-grey" | "from-light-grey" | "from-mid-grey" | "from-dark-grey" | "from-charcoal-grey" | "from-cool-black" | "from-active-orange" | "from-bright-red" | "from-red-orange" | "from-electric-cyan" | "from-zingy-green" | "from-jazzy-pink" | "from-gui-default" | "from-gui-hover" | "from-gui-active" | "from-gui-error" | "from-gui-success" | "from-gui-default-dark" | "from-gui-hover-dark" | "from-gui-active-dark" | "from-transparent" | "to-neutral-000" | "to-neutral-100" | "to-neutral-200" | "to-neutral-300" | "to-neutral-400" | "to-neutral-500" | "to-neutral-600" | "to-neutral-700" | "to-neutral-800" | "to-neutral-900" | "to-neutral-1000" | "to-neutral-1100" | "to-neutral-1200" | "to-neutral-1300" | "to-orange-100" | "to-orange-200" | "to-orange-300" | "to-orange-400" | "to-orange-500" | "to-orange-600" | "to-orange-700" | "to-orange-800" | "to-orange-900" | "to-orange-1000" | "to-orange-1100" | "to-yellow-100" | "to-yellow-200" | "to-yellow-300" | "to-yellow-400" | "to-yellow-500" | "to-yellow-600" | "to-yellow-700" | "to-yellow-800" | "to-yellow-900" | "to-green-100" | "to-green-200" | "to-green-300" | "to-green-400" | "to-green-500" | "to-green-600" | "to-green-700" | "to-green-800" | "to-green-900" | "to-blue-100" | "to-blue-200" | "to-blue-300" | "to-blue-400" | "to-blue-500" | "to-blue-600" | "to-blue-700" | "to-blue-800" | "to-blue-900" | "to-violet-100" | "to-violet-200" | "to-violet-300" | "to-violet-400" | "to-violet-500" | "to-violet-600" | "to-violet-700" | "to-violet-800" | "to-violet-900" | "to-pink-100" | "to-pink-200" | "to-pink-300" | "to-pink-400" | "to-pink-500" | "to-pink-600" | "to-pink-700" | "to-pink-800" | "to-pink-900" | "to-gui-blue-default-light" | "to-gui-blue-hover-light" | "to-gui-blue-active-light" | "to-gui-blue-default-dark" | "to-gui-blue-hover-dark" | "to-gui-blue-active-dark" | "to-gui-blue-focus" | "to-gui-unavailable" | "to-gui-success-green" | "to-gui-error-red" | "to-gui-focus" | "to-gui-focus-outline" | "to-gui-visited" | "to-white" | "to-extra-light-grey" | "to-light-grey" | "to-mid-grey" | "to-dark-grey" | "to-charcoal-grey" | "to-cool-black" | "to-active-orange" | "to-bright-red" | "to-red-orange" | "to-electric-cyan" | "to-zingy-green" | "to-jazzy-pink" | "to-gui-default" | "to-gui-hover" | "to-gui-active" | "to-gui-error" | "to-gui-success" | "to-gui-default-dark" | "to-gui-hover-dark" | "to-gui-active-dark" | "to-transparent" | "border-neutral-000" | "border-neutral-100" | "border-neutral-200" | "border-neutral-300" | "border-neutral-400" | "border-neutral-500" | "border-neutral-600" | "border-neutral-700" | "border-neutral-800" | "border-neutral-900" | "border-neutral-1000" | "border-neutral-1100" | "border-neutral-1200" | "border-neutral-1300" | "border-orange-100" | "border-orange-200" | "border-orange-300" | "border-orange-400" | "border-orange-500" | "border-orange-600" | "border-orange-700" | "border-orange-800" | "border-orange-900" | "border-orange-1000" | "border-orange-1100" | "border-yellow-100" | "border-yellow-200" | "border-yellow-300" | "border-yellow-400" | "border-yellow-500" | "border-yellow-600" | "border-yellow-700" | "border-yellow-800" | "border-yellow-900" | "border-green-100" | "border-green-200" | "border-green-300" | "border-green-400" | "border-green-500" | "border-green-600" | "border-green-700" | "border-green-800" | "border-green-900" | "border-blue-100" | "border-blue-200" | "border-blue-300" | "border-blue-400" | "border-blue-500" | "border-blue-600" | "border-blue-700" | "border-blue-800" | "border-blue-900" | "border-violet-100" | "border-violet-200" | "border-violet-300" | "border-violet-400" | "border-violet-500" | "border-violet-600" | "border-violet-700" | "border-violet-800" | "border-violet-900" | "border-pink-100" | "border-pink-200" | "border-pink-300" | "border-pink-400" | "border-pink-500" | "border-pink-600" | "border-pink-700" | "border-pink-800" | "border-pink-900" | "border-gui-blue-default-light" | "border-gui-blue-hover-light" | "border-gui-blue-active-light" | "border-gui-blue-default-dark" | "border-gui-blue-hover-dark" | "border-gui-blue-active-dark" | "border-gui-blue-focus" | "border-gui-unavailable" | "border-gui-success-green" | "border-gui-error-red" | "border-gui-focus" | "border-gui-focus-outline" | "border-gui-visited" | "border-white" | "border-extra-light-grey" | "border-light-grey" | "border-mid-grey" | "border-dark-grey" | "border-charcoal-grey" | "border-cool-black" | "border-active-orange" | "border-bright-red" | "border-red-orange" | "border-electric-cyan" | "border-zingy-green" | "border-jazzy-pink" | "border-gui-default" | "border-gui-hover" | "border-gui-active" | "border-gui-error" | "border-gui-success" | "border-gui-default-dark" | "border-gui-hover-dark" | "border-gui-active-dark" | "border-transparent" | "dark:text-neutral-000" | "dark:text-neutral-100" | "dark:text-neutral-200" | "dark:text-neutral-300" | "dark:text-neutral-400" | "dark:text-neutral-500" | "dark:text-neutral-600" | "dark:text-neutral-700" | "dark:text-neutral-800" | "dark:text-neutral-900" | "dark:text-neutral-1000" | "dark:text-neutral-1100" | "dark:text-neutral-1200" | "dark:text-neutral-1300" | "dark:text-orange-100" | "dark:text-orange-200" | "dark:text-orange-300" | "dark:text-orange-400" | "dark:text-orange-500" | "dark:text-orange-600" | "dark:text-orange-700" | "dark:text-orange-800" | "dark:text-orange-900" | "dark:text-orange-1000" | "dark:text-orange-1100" | "dark:text-yellow-100" | "dark:text-yellow-200" | "dark:text-yellow-300" | "dark:text-yellow-400" | "dark:text-yellow-500" | "dark:text-yellow-600" | "dark:text-yellow-700" | "dark:text-yellow-800" | "dark:text-yellow-900" | "dark:text-green-100" | "dark:text-green-200" | "dark:text-green-300" | "dark:text-green-400" | "dark:text-green-500" | "dark:text-green-600" | "dark:text-green-700" | "dark:text-green-800" | "dark:text-green-900" | "dark:text-blue-100" | "dark:text-blue-200" | "dark:text-blue-300" | "dark:text-blue-400" | "dark:text-blue-500" | "dark:text-blue-600" | "dark:text-blue-700" | "dark:text-blue-800" | "dark:text-blue-900" | "dark:text-violet-100" | "dark:text-violet-200" | "dark:text-violet-300" | "dark:text-violet-400" | "dark:text-violet-500" | "dark:text-violet-600" | "dark:text-violet-700" | "dark:text-violet-800" | "dark:text-violet-900" | "dark:text-pink-100" | "dark:text-pink-200" | "dark:text-pink-300" | "dark:text-pink-400" | "dark:text-pink-500" | "dark:text-pink-600" | "dark:text-pink-700" | "dark:text-pink-800" | "dark:text-pink-900" | "dark:text-gui-blue-default-light" | "dark:text-gui-blue-hover-light" | "dark:text-gui-blue-active-light" | "dark:text-gui-blue-default-dark" | "dark:text-gui-blue-hover-dark" | "dark:text-gui-blue-active-dark" | "dark:text-gui-blue-focus" | "dark:text-gui-unavailable" | "dark:text-gui-success-green" | "dark:text-gui-error-red" | "dark:text-gui-focus" | "dark:text-gui-focus-outline" | "dark:text-gui-visited" | "dark:text-white" | "dark:text-extra-light-grey" | "dark:text-light-grey" | "dark:text-mid-grey" | "dark:text-dark-grey" | "dark:text-charcoal-grey" | "dark:text-cool-black" | "dark:text-active-orange" | "dark:text-bright-red" | "dark:text-red-orange" | "dark:text-electric-cyan" | "dark:text-zingy-green" | "dark:text-jazzy-pink" | "dark:text-gui-default" | "dark:text-gui-hover" | "dark:text-gui-active" | "dark:text-gui-error" | "dark:text-gui-success" | "dark:text-gui-default-dark" | "dark:text-gui-hover-dark" | "dark:text-gui-active-dark" | "dark:text-transparent" | "dark:bg-neutral-000" | "dark:bg-neutral-100" | "dark:bg-neutral-200" | "dark:bg-neutral-300" | "dark:bg-neutral-400" | "dark:bg-neutral-500" | "dark:bg-neutral-600" | "dark:bg-neutral-700" | "dark:bg-neutral-800" | "dark:bg-neutral-900" | "dark:bg-neutral-1000" | "dark:bg-neutral-1100" | "dark:bg-neutral-1200" | "dark:bg-neutral-1300" | "dark:bg-orange-100" | "dark:bg-orange-200" | "dark:bg-orange-300" | "dark:bg-orange-400" | "dark:bg-orange-500" | "dark:bg-orange-600" | "dark:bg-orange-700" | "dark:bg-orange-800" | "dark:bg-orange-900" | "dark:bg-orange-1000" | "dark:bg-orange-1100" | "dark:bg-yellow-100" | "dark:bg-yellow-200" | "dark:bg-yellow-300" | "dark:bg-yellow-400" | "dark:bg-yellow-500" | "dark:bg-yellow-600" | "dark:bg-yellow-700" | "dark:bg-yellow-800" | "dark:bg-yellow-900" | "dark:bg-green-100" | "dark:bg-green-200" | "dark:bg-green-300" | "dark:bg-green-400" | "dark:bg-green-500" | "dark:bg-green-600" | "dark:bg-green-700" | "dark:bg-green-800" | "dark:bg-green-900" | "dark:bg-blue-100" | "dark:bg-blue-200" | "dark:bg-blue-300" | "dark:bg-blue-400" | "dark:bg-blue-500" | "dark:bg-blue-600" | "dark:bg-blue-700" | "dark:bg-blue-800" | "dark:bg-blue-900" | "dark:bg-violet-100" | "dark:bg-violet-200" | "dark:bg-violet-300" | "dark:bg-violet-400" | "dark:bg-violet-500" | "dark:bg-violet-600" | "dark:bg-violet-700" | "dark:bg-violet-800" | "dark:bg-violet-900" | "dark:bg-pink-100" | "dark:bg-pink-200" | "dark:bg-pink-300" | "dark:bg-pink-400" | "dark:bg-pink-500" | "dark:bg-pink-600" | "dark:bg-pink-700" | "dark:bg-pink-800" | "dark:bg-pink-900" | "dark:bg-gui-blue-default-light" | "dark:bg-gui-blue-hover-light" | "dark:bg-gui-blue-active-light" | "dark:bg-gui-blue-default-dark" | "dark:bg-gui-blue-hover-dark" | "dark:bg-gui-blue-active-dark" | "dark:bg-gui-blue-focus" | "dark:bg-gui-unavailable" | "dark:bg-gui-success-green" | "dark:bg-gui-error-red" | "dark:bg-gui-focus" | "dark:bg-gui-focus-outline" | "dark:bg-gui-visited" | "dark:bg-white" | "dark:bg-extra-light-grey" | "dark:bg-light-grey" | "dark:bg-mid-grey" | "dark:bg-dark-grey" | "dark:bg-charcoal-grey" | "dark:bg-cool-black" | "dark:bg-active-orange" | "dark:bg-bright-red" | "dark:bg-red-orange" | "dark:bg-electric-cyan" | "dark:bg-zingy-green" | "dark:bg-jazzy-pink" | "dark:bg-gui-default" | "dark:bg-gui-hover" | "dark:bg-gui-active" | "dark:bg-gui-error" | "dark:bg-gui-success" | "dark:bg-gui-default-dark" | "dark:bg-gui-hover-dark" | "dark:bg-gui-active-dark" | "dark:bg-transparent" | "dark:from-neutral-000" | "dark:from-neutral-100" | "dark:from-neutral-200" | "dark:from-neutral-300" | "dark:from-neutral-400" | "dark:from-neutral-500" | "dark:from-neutral-600" | "dark:from-neutral-700" | "dark:from-neutral-800" | "dark:from-neutral-900" | "dark:from-neutral-1000" | "dark:from-neutral-1100" | "dark:from-neutral-1200" | "dark:from-neutral-1300" | "dark:from-orange-100" | "dark:from-orange-200" | "dark:from-orange-300" | "dark:from-orange-400" | "dark:from-orange-500" | "dark:from-orange-600" | "dark:from-orange-700" | "dark:from-orange-800" | "dark:from-orange-900" | "dark:from-orange-1000" | "dark:from-orange-1100" | "dark:from-yellow-100" | "dark:from-yellow-200" | "dark:from-yellow-300" | "dark:from-yellow-400" | "dark:from-yellow-500" | "dark:from-yellow-600" | "dark:from-yellow-700" | "dark:from-yellow-800" | "dark:from-yellow-900" | "dark:from-green-100" | "dark:from-green-200" | "dark:from-green-300" | "dark:from-green-400" | "dark:from-green-500" | "dark:from-green-600" | "dark:from-green-700" | "dark:from-green-800" | "dark:from-green-900" | "dark:from-blue-100" | "dark:from-blue-200" | "dark:from-blue-300" | "dark:from-blue-400" | "dark:from-blue-500" | "dark:from-blue-600" | "dark:from-blue-700" | "dark:from-blue-800" | "dark:from-blue-900" | "dark:from-violet-100" | "dark:from-violet-200" | "dark:from-violet-300" | "dark:from-violet-400" | "dark:from-violet-500" | "dark:from-violet-600" | "dark:from-violet-700" | "dark:from-violet-800" | "dark:from-violet-900" | "dark:from-pink-100" | "dark:from-pink-200" | "dark:from-pink-300" | "dark:from-pink-400" | "dark:from-pink-500" | "dark:from-pink-600" | "dark:from-pink-700" | "dark:from-pink-800" | "dark:from-pink-900" | "dark:from-gui-blue-default-light" | "dark:from-gui-blue-hover-light" | "dark:from-gui-blue-active-light" | "dark:from-gui-blue-default-dark" | "dark:from-gui-blue-hover-dark" | "dark:from-gui-blue-active-dark" | "dark:from-gui-blue-focus" | "dark:from-gui-unavailable" | "dark:from-gui-success-green" | "dark:from-gui-error-red" | "dark:from-gui-focus" | "dark:from-gui-focus-outline" | "dark:from-gui-visited" | "dark:from-white" | "dark:from-extra-light-grey" | "dark:from-light-grey" | "dark:from-mid-grey" | "dark:from-dark-grey" | "dark:from-charcoal-grey" | "dark:from-cool-black" | "dark:from-active-orange" | "dark:from-bright-red" | "dark:from-red-orange" | "dark:from-electric-cyan" | "dark:from-zingy-green" | "dark:from-jazzy-pink" | "dark:from-gui-default" | "dark:from-gui-hover" | "dark:from-gui-active" | "dark:from-gui-error" | "dark:from-gui-success" | "dark:from-gui-default-dark" | "dark:from-gui-hover-dark" | "dark:from-gui-active-dark" | "dark:from-transparent" | "dark:to-neutral-000" | "dark:to-neutral-100" | "dark:to-neutral-200" | "dark:to-neutral-300" | "dark:to-neutral-400" | "dark:to-neutral-500" | "dark:to-neutral-600" | "dark:to-neutral-700" | "dark:to-neutral-800" | "dark:to-neutral-900" | "dark:to-neutral-1000" | "dark:to-neutral-1100" | "dark:to-neutral-1200" | "dark:to-neutral-1300" | "dark:to-orange-100" | "dark:to-orange-200" | "dark:to-orange-300" | "dark:to-orange-400" | "dark:to-orange-500" | "dark:to-orange-600" | "dark:to-orange-700" | "dark:to-orange-800" | "dark:to-orange-900" | "dark:to-orange-1000" | "dark:to-orange-1100" | "dark:to-yellow-100" | "dark:to-yellow-200" | "dark:to-yellow-300" | "dark:to-yellow-400" | "dark:to-yellow-500" | "dark:to-yellow-600" | "dark:to-yellow-700" | "dark:to-yellow-800" | "dark:to-yellow-900" | "dark:to-green-100" | "dark:to-green-200" | "dark:to-green-300" | "dark:to-green-400" | "dark:to-green-500" | "dark:to-green-600" | "dark:to-green-700" | "dark:to-green-800" | "dark:to-green-900" | "dark:to-blue-100" | "dark:to-blue-200" | "dark:to-blue-300" | "dark:to-blue-400" | "dark:to-blue-500" | "dark:to-blue-600" | "dark:to-blue-700" | "dark:to-blue-800" | "dark:to-blue-900" | "dark:to-violet-100" | "dark:to-violet-200" | "dark:to-violet-300" | "dark:to-violet-400" | "dark:to-violet-500" | "dark:to-violet-600" | "dark:to-violet-700" | "dark:to-violet-800" | "dark:to-violet-900" | "dark:to-pink-100" | "dark:to-pink-200" | "dark:to-pink-300" | "dark:to-pink-400" | "dark:to-pink-500" | "dark:to-pink-600" | "dark:to-pink-700" | "dark:to-pink-800" | "dark:to-pink-900" | "dark:to-gui-blue-default-light" | "dark:to-gui-blue-hover-light" | "dark:to-gui-blue-active-light" | "dark:to-gui-blue-default-dark" | "dark:to-gui-blue-hover-dark" | "dark:to-gui-blue-active-dark" | "dark:to-gui-blue-focus" | "dark:to-gui-unavailable" | "dark:to-gui-success-green" | "dark:to-gui-error-red" | "dark:to-gui-focus" | "dark:to-gui-focus-outline" | "dark:to-gui-visited" | "dark:to-white" | "dark:to-extra-light-grey" | "dark:to-light-grey" | "dark:to-mid-grey" | "dark:to-dark-grey" | "dark:to-charcoal-grey" | "dark:to-cool-black" | "dark:to-active-orange" | "dark:to-bright-red" | "dark:to-red-orange" | "dark:to-electric-cyan" | "dark:to-zingy-green" | "dark:to-jazzy-pink" | "dark:to-gui-default" | "dark:to-gui-hover" | "dark:to-gui-active" | "dark:to-gui-error" | "dark:to-gui-success" | "dark:to-gui-default-dark" | "dark:to-gui-hover-dark" | "dark:to-gui-active-dark" | "dark:to-transparent" | "dark:border-neutral-000" | "dark:border-neutral-100" | "dark:border-neutral-200" | "dark:border-neutral-300" | "dark:border-neutral-400" | "dark:border-neutral-500" | "dark:border-neutral-600" | "dark:border-neutral-700" | "dark:border-neutral-800" | "dark:border-neutral-900" | "dark:border-neutral-1000" | "dark:border-neutral-1100" | "dark:border-neutral-1200" | "dark:border-neutral-1300" | "dark:border-orange-100" | "dark:border-orange-200" | "dark:border-orange-300" | "dark:border-orange-400" | "dark:border-orange-500" | "dark:border-orange-600" | "dark:border-orange-700" | "dark:border-orange-800" | "dark:border-orange-900" | "dark:border-orange-1000" | "dark:border-orange-1100" | "dark:border-yellow-100" | "dark:border-yellow-200" | "dark:border-yellow-300" | "dark:border-yellow-400" | "dark:border-yellow-500" | "dark:border-yellow-600" | "dark:border-yellow-700" | "dark:border-yellow-800" | "dark:border-yellow-900" | "dark:border-green-100" | "dark:border-green-200" | "dark:border-green-300" | "dark:border-green-400" | "dark:border-green-500" | "dark:border-green-600" | "dark:border-green-700" | "dark:border-green-800" | "dark:border-green-900" | "dark:border-blue-100" | "dark:border-blue-200" | "dark:border-blue-300" | "dark:border-blue-400" | "dark:border-blue-500" | "dark:border-blue-600" | "dark:border-blue-700" | "dark:border-blue-800" | "dark:border-blue-900" | "dark:border-violet-100" | "dark:border-violet-200" | "dark:border-violet-300" | "dark:border-violet-400" | "dark:border-violet-500" | "dark:border-violet-600" | "dark:border-violet-700" | "dark:border-violet-800" | "dark:border-violet-900" | "dark:border-pink-100" | "dark:border-pink-200" | "dark:border-pink-300" | "dark:border-pink-400" | "dark:border-pink-500" | "dark:border-pink-600" | "dark:border-pink-700" | "dark:border-pink-800" | "dark:border-pink-900" | "dark:border-gui-blue-default-light" | "dark:border-gui-blue-hover-light" | "dark:border-gui-blue-active-light" | "dark:border-gui-blue-default-dark" | "dark:border-gui-blue-hover-dark" | "dark:border-gui-blue-active-dark" | "dark:border-gui-blue-focus" | "dark:border-gui-unavailable" | "dark:border-gui-success-green" | "dark:border-gui-error-red" | "dark:border-gui-focus" | "dark:border-gui-focus-outline" | "dark:border-gui-visited" | "dark:border-white" | "dark:border-extra-light-grey" | "dark:border-light-grey" | "dark:border-mid-grey" | "dark:border-dark-grey" | "dark:border-charcoal-grey" | "dark:border-cool-black" | "dark:border-active-orange" | "dark:border-bright-red" | "dark:border-red-orange" | "dark:border-electric-cyan" | "dark:border-zingy-green" | "dark:border-jazzy-pink" | "dark:border-gui-default" | "dark:border-gui-hover" | "dark:border-gui-active" | "dark:border-gui-error" | "dark:border-gui-success" | "dark:border-gui-default-dark" | "dark:border-gui-hover-dark" | "dark:border-gui-active-dark" | "dark:border-transparent";
export const toPascalCase: (str: string) => string;
export const getHeroicon: (iconName: string, variant: string) => HeroiconComponent | null;
export const setUniqueIds: (el: SVGSVGElement | null, uniqueId: string) => void;
export {};
//# sourceMappingURL=utils.d.ts.map
}

declare module '@ably/ui/core/Icon' {
import { IconName, IconSize } from "@ably/ui/core/Icon/types";
import { ColorClass, ColorThemeSet } from "@ably/ui/core/styles/colors/types";
export type IconProps = {
    name: IconName;
    size?: IconSize;
    color?: ColorClass | ColorThemeSet;
    secondaryColor?: ColorClass | ColorThemeSet;
    additionalCSS?: string;
    variant?: "outline" | "solid" | "micro" | "mini";
};
const Icon: ({ name, size, color, secondaryColor, additionalCSS, variant, ...additionalAttributes }: IconProps) => import("react/jsx-runtime").JSX.Element | undefined;
export default Icon;
//# sourceMappingURL=Icon.d.ts.map
}

declare module '@ably/ui/core/LinkButton' {
import React from "react";
import { ButtonPropsBase } from "@ably/ui/core/Button";
import { ColorClass, ColorThemeSet } from "@ably/ui/core/styles/colors/types";
export type LinkButtonProps = ButtonPropsBase & {
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    iconColor?: ColorClass | ColorThemeSet;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
const LinkButton: React.FC<LinkButtonProps>;
export default LinkButton;
//# sourceMappingURL=LinkButton.d.ts.map
}

declare module '@ably/ui/core/Loader' {
type LoaderProps = {
    size?: string;
    ringColor?: string;
    additionalCSS?: string;
};
const Loader: ({ ringColor, size, additionalCSS, }: LoaderProps) => import("react/jsx-runtime").JSX.Element;
export default Loader;
//# sourceMappingURL=Loader.d.ts.map
}

declare module '@ably/ui/core/Logo' {
import React, { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";
type LogoProps = {
    dataId?: string;
    logoUrl?: string;
    logoAlt?: string;
    href?: string;
    additionalImgAttrs?: ImgHTMLAttributes<HTMLImageElement>;
    additionalLinkAttrs?: AnchorHTMLAttributes<HTMLAnchorElement>;
    theme?: "light" | "dark";
    variant?: "default" | "mono";
    orientation?: "default" | "stacked";
    badge?: string;
};
const _default: React.MemoExoticComponent<({ dataId, href, additionalImgAttrs, additionalLinkAttrs, theme, variant, orientation, logoUrl, logoAlt, badge, }: LogoProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
//# sourceMappingURL=Logo.d.ts.map
}

declare module '@ably/ui/core/Meganav/MeganavBlog' {
import { IconName } from ".@ably/ui/core/Icon/types";
export type BlogPost = {
    title: string;
    link: string;
    categories: string[];
    pubDate: string;
};
export type MeganavBlogProps = {
    title: string;
    link: string;
    icon?: IconName;
    posts: BlogPost[];
};
const MeganavBlog: ({ title, link, icon, posts }: MeganavBlogProps) => import("react/jsx-runtime").JSX.Element;
export default MeganavBlog;
//# sourceMappingURL=MeganavBlog.d.ts.map
}

declare module '@ably/ui/core/Meganav/MeganavCustomerStories' {
import { IconName } from ".@ably/ui/core/Icon/types";
export type CustomerStoryHighlight = {
    companyName: string;
    companyDesc: string;
    companyLink: string;
    companyLogo: string;
    companyLogoDark?: string;
};
const MeganavCustomerStories: ({ customerStoriesHighlight, title, link, icon, }: {
    customerStoriesHighlight: CustomerStoryHighlight;
    title: string;
    link: string;
    icon?: IconName;
}) => import("react/jsx-runtime").JSX.Element;
export default MeganavCustomerStories;
//# sourceMappingURL=MeganavCustomerStories.d.ts.map
}

declare module '@ably/ui/core/Meganav/MeganavMobile' {
import { AccordionData } from ".@ably/ui/core/Accordion/types";
export const MeganavMobile: ({ navItems }: {
    navItems: AccordionData[];
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=MeganavMobile.d.ts.map
}

declare module '@ably/ui/core/Meganav/MeganavPanel' {
import React from "react";
import { FlyoutPanelList } from "@ably/ui/core/data";
import { MeganavPanelItemLink } from "@ably/ui/core/MeganavPanelItemLinks";
type MeganavPanelProps = {
    displayProductTile?: boolean;
    panelLeft?: React.ReactNode;
    panelMiddleItems?: React.ReactNode;
    panelRightItems?: MeganavPanelItemLink[];
    panelRightBottom?: React.ReactNode;
    panelRightBottomClassName?: string;
};
export const MeganavPanel: ({ displayProductTile, panelLeft, panelMiddleItems, panelRightItems, panelRightBottom, panelRightBottomClassName, }: MeganavPanelProps) => import("react/jsx-runtime").JSX.Element;
export const MeganavPanelFullwidth: ({ panelItems, }: {
    panelItems: FlyoutPanelList[];
}) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MeganavPanel.d.ts.map
}

declare module '@ably/ui/core/Meganav/MeganavPanelItemLinks' {
import { IconName } from ".@ably/ui/core/Icon/types";
import { FlyoutPanelList } from "@ably/ui/core/data";
export type MeganavPanelItemLink = {
    label?: string;
    listItems: FlyoutPanelList[];
    icon?: IconName;
    link?: {
        label: string;
        link: string;
    };
    displayTitleInMobile?: boolean;
};
const MeganavPanelItemLinks: ({ label, listItems, link, displayTitleInMobile, }: MeganavPanelItemLink) => import("react/jsx-runtime").JSX.Element;
export default MeganavPanelItemLinks;
//# sourceMappingURL=MeganavPanelItemLinks.d.ts.map
}

declare module '@ably/ui/core/Meganav/MeganavTile' {
import { ProductName } from ".@ably/ui/core/ProductTile/data";
import { IconName } from ".@ably/ui/core/Icon/types";
export type MeganavTileProps = {
    link: string;
    productName?: ProductName;
    navLabel?: string;
    navIcon?: IconName;
    navDescription?: string;
    animateIcons?: boolean;
    showAblyText?: boolean;
};
const MeganavTile: ({ productName, navLabel, navIcon, navDescription, link, animateIcons, showAblyText, }: MeganavTileProps) => import("react/jsx-runtime").JSX.Element;
export default MeganavTile;
//# sourceMappingURL=MeganavTile.d.ts.map
}

declare module '@ably/ui/core/Meganav/PanelTitle' {
export const PanelTitle: ({ title, link, displayTitleInMobile, }: {
    title: string;
    link?: string;
    displayTitleInMobile?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PanelTitle.d.ts.map
}

declare module '@ably/ui/core/Meganav/data' {
import React from "react";
import { IconName } from ".@ably/ui/core/Icon/types";
import { CustomerStoryHighlight } from "@ably/ui/core/MeganavCustomerStories";
import { BlogPost } from "@ably/ui/core/MeganavBlog";
export type FlyoutPanelList = {
    label: string;
    icon?: IconName;
    link: string;
    isMobile?: boolean;
    description?: string;
    badge?: string;
};
export type MenuItem = {
    name: string;
    link?: string;
    isHiddenMobile?: boolean;
    content?: React.ReactNode;
    panelClassName?: string;
};
export const productsMenu: FlyoutPanelList[];
export const compareMenu: FlyoutPanelList[];
export const solutionsMenu: FlyoutPanelList[];
export const customerStoriesHighlight: CustomerStoryHighlight;
export const companyMenu: FlyoutPanelList[];
export const ablyAwards: {
    image: string;
    desc: string;
}[];
export const menuItemLinks: {
    name: string;
    link: string;
    isHiddenMobile: boolean;
}[];
export const defaultBlogPosts: BlogPost[];
export const productsForNav: {
    pubsub: {
        link: string;
        label: string;
        description: string;
        icon?: IconName;
        hoverIcon?: IconName;
        unavailable?: boolean;
    };
    liveSync: {
        link: string;
        label: string;
        description: string;
        icon?: IconName;
        hoverIcon?: IconName;
        unavailable?: boolean;
    };
    chat: {
        link: string;
        label: string;
        description: string;
        icon?: IconName;
        hoverIcon?: IconName;
        unavailable?: boolean;
    };
    spaces: {
        link: string;
        label: string;
        description: string;
        icon?: IconName;
        hoverIcon?: IconName;
        unavailable?: boolean;
    };
    aiTransport: {
        link: string;
        label: string;
        description: string;
        icon?: IconName;
        hoverIcon?: IconName;
        unavailable?: boolean;
    };
    liveObjects: {
        link: string;
        label: string;
        description: string;
        icon?: IconName;
        hoverIcon?: IconName;
        unavailable?: boolean;
    };
};
//# sourceMappingURL=data.d.ts.map
}

declare module '@ably/ui/core/Meganav/utils/getMenuItemsForHeader' {
import { BlogPost } from ".@ably/ui/core/MeganavBlog";
import { MenuItem } from ".@ably/ui/core/data";
export const getMenuItemsForHeader: (blogPosts: BlogPost[]) => MenuItem[];
//# sourceMappingURL=getMenuItemsForHeader.d.ts.map
}

declare module '@ably/ui/core/Meganav' {
import { HeaderSessionState, ThemedScrollpoint } from "@ably/ui/core/Header";
import { BlogPost } from "@ably/ui/core/Meganav/MeganavBlog";
export type MeganavNoticeBannerProps = {
    props: {
        title: string;
        bodyText: string;
        buttonLink: string;
        buttonLabel: string;
        closeBtn: boolean;
    };
    config: {
        cookieId: string;
        noticeId: string | number;
        options: {
            collapse: boolean;
        };
    };
};
export type MeganavProps = {
    sessionState: HeaderSessionState;
    blogPosts: BlogPost[];
    notice?: MeganavNoticeBannerProps;
    theme?: string;
    themedScrollpoints?: ThemedScrollpoint[];
    onNoticeClose?: () => void;
};
const Meganav: ({ sessionState, notice, theme, themedScrollpoints, onNoticeClose, blogPosts, }: MeganavProps) => import("react/jsx-runtime").JSX.Element;
export default Meganav;
//# sourceMappingURL=Meganav.d.ts.map
}

declare module '@ably/ui/core/Notice/component' {
export const COLLAPSE_TRIGGER_DISTANCE: 5;
export default Notice;
function Notice({ bannerContainer, cookieId, noticeId, options }: {
    bannerContainer: any;
    cookieId: any;
    noticeId: any;
    options: any;
}): () => void;
//# sourceMappingURL=component.d.ts.map
}

declare module '@ably/ui/core/Notice' {
import { ColorClass, ColorThemeSet } from "@ably/ui/core/styles/colors/types";
export type NoticeProps = {
    buttonLink?: string;
    buttonLabel?: string;
    bodyText?: string;
    title?: string;
    closeBtn?: boolean;
    config?: {
        options: {
            collapse: boolean;
        };
        noticeId: string | number;
        cookieId: string;
    };
    bgColor?: string;
    textColor?: ColorClass | ColorThemeSet;
    onClose?: () => void;
    bannerContainer?: Element | null;
    cookieId?: string;
    noticeId?: string;
    options?: {
        collapse: boolean;
    };
};
const Notice: ({ buttonLink, buttonLabel, bodyText, title, config, closeBtn, bgColor, textColor, onClose, }: NoticeProps) => import("react/jsx-runtime").JSX.Element;
export default Notice;
//# sourceMappingURL=Notice.d.ts.map
}

declare module '@ably/ui/core/Pricing/PricingCards' {
import type { PricingDataFeature } from "@ably/ui/core/types";
import { IconName } from ".@ably/ui/core/Icon/types";
export type PricingCardsProps = {
    data: PricingDataFeature[];
    delimiter?: IconName | "blank";
};
const PricingCards: ({ data, delimiter }: PricingCardsProps) => import("react/jsx-runtime").JSX.Element;
export default PricingCards;
//# sourceMappingURL=PricingCards.d.ts.map
}

declare module '@ably/ui/core/Pricing/data' {
import { PricingDataFeature } from "@ably/ui/core/types";
export const planData: PricingDataFeature[];
export const consumptionData: PricingDataFeature[];
//# sourceMappingURL=data.d.ts.map
}

declare module '@ably/ui/core/Pricing/types' {
import { ReactNode } from "react";
import { ColorClass, ColorThemeSet } from ".@ably/ui/core/styles/colors/types";
type PricingDataHeader = {
    content: string;
    className?: string;
    color?: ColorClass | ColorThemeSet;
    tooltip?: string | ReactNode;
};
type PricingDataFeatureCta = {
    text: string;
    url: string;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    iconColor?: ColorClass | ColorThemeSet;
    isPriority?: boolean;
};
export type PricingDataFeatureSection = {
    title: string;
    items: string[] | string[][];
    listItemColors?: {
        foreground: ColorThemeSet;
        background: ColorThemeSet;
    };
};
export type PricingDataFeatureBorder = {
    text: string;
    style: "border-solid" | "border-dashed" | "border-dotted";
    color: "neutral" | "blue" | "orange";
};
export type PricingDataFeature = {
    title: PricingDataHeader;
    description: PricingDataHeader;
    price: {
        amount: string;
        content?: ReactNode;
    };
    cta?: PricingDataFeatureCta;
    sections: PricingDataFeatureSection[];
    border?: PricingDataFeatureBorder;
    subtext?: string;
    bottomCta?: PricingDataFeatureCta;
};
export {};
//# sourceMappingURL=types.d.ts.map
}

declare module '@ably/ui/core/ProductTile/ProductDescription' {
type ProductDescriptionProps = {
    description: string;
    selected?: boolean;
    unavailable: boolean;
    showDescription?: boolean;
    className?: string;
};
const ProductDescription: ({ description, selected, unavailable, showDescription, className, }: ProductDescriptionProps) => import("react/jsx-runtime").JSX.Element | null;
export default ProductDescription;
//# sourceMappingURL=ProductDescription.d.ts.map
}

declare module '@ably/ui/core/ProductTile/ProductIcon' {
import { IconName } from ".@ably/ui/core/Icon/types";
type ProductIconProps = {
    name?: IconName;
    hoverName?: IconName;
    selected?: boolean;
    size: number;
    unavailable: boolean;
};
const ProductIcon: ({ name, hoverName, selected, size, unavailable, }: ProductIconProps) => import("react/jsx-runtime").JSX.Element | null;
export default ProductIcon;
//# sourceMappingURL=ProductIcon.d.ts.map
}

declare module '@ably/ui/core/ProductTile/ProductLabel' {
type ProductLabelProps = {
    label: string;
    unavailable: boolean;
    selected?: boolean;
    numericalSize: number;
    showLabel?: boolean;
    showAblyText?: boolean;
    className?: string;
};
const ProductLabel: ({ label, unavailable, selected, numericalSize, showLabel, showAblyText, className, }: ProductLabelProps) => import("react/jsx-runtime").JSX.Element | null;
export default ProductLabel;
//# sourceMappingURL=ProductLabel.d.ts.map
}

declare module '@ably/ui/core/ProductTile/data' {
import { IconName } from ".@ably/ui/core/Icon/types";
export const productNames: readonly ["pubsub", "chat", "aiTransport", "liveObjects", "spaces", "liveSync"];
export type ProductName = (typeof productNames)[number];
type Products = Record<ProductName, {
    label: string;
    description: string;
    link?: string;
    icon?: IconName;
    hoverIcon?: IconName;
    unavailable?: boolean;
}>;
export const products: Products;
export {};
//# sourceMappingURL=data.d.ts.map
}

declare module '@ably/ui/core/ProductTile' {
import { IconSize } from "@ably/ui/core/Icon/types";
import { ProductName } from "@ably/ui/core/ProductTile/data";
/**
 * Props for the ProductTile component.
 */
export type ProductTileProps = {
    /**
     * The name of the product.
     */
    name: ProductName;
    /**
     * Indicates if the product tile is selected. If `undefined`, the product tile is not selectable.
     * @default false
     */
    selected?: boolean;
    /**
     * Indicates if the product tile is on the "current" page. Changes CTA copy.
     * @default false
     */
    currentPage?: boolean;
    /**
     * Additional CSS class names to apply to the product tile outer container.
     */
    className?: string;
    /**
     * Additional CSS class names to apply to the product description container.
     */
    descriptionClassName?: string;
    /**
     * Additional CSS class names to apply to the product name / label container.
     */
    labelClassName?: string;
    /**
     * Callback function to handle click events on the product tile.
     */
    onClick?: () => void;
    /**
     * Indicates if the product description should be shown.
     * @default true
     */
    showDescription?: boolean;
    /**
     * Indicates if the product label should be shown.
     * @default true
     */
    showLabel?: boolean;
    /**
     * The size of the product icon.
     * @default "40px"
     */
    size?: IconSize;
    /**
     * Indicates if the product icons should be animated.
     * @default false
     */
    animateIcons?: boolean;
};
const ProductTile: ({ name, selected, currentPage, className, onClick, showDescription, showLabel, size, animateIcons, descriptionClassName, labelClassName, }: ProductTileProps) => import("react/jsx-runtime").JSX.Element;
export default ProductTile;
//# sourceMappingURL=ProductTile.d.ts.map
}

declare module '@ably/ui/core/SegmentedControl' {
import React, { PropsWithChildren } from "react";
import type { IconName } from "@ably/ui/core/Icon/types";
export type SegmentedControlSize = "md" | "sm" | "xs";
export type SegmentedControlProps = {
    className?: string;
    rounded?: boolean;
    leftIcon?: IconName;
    rightIcon?: IconName;
    active?: boolean;
    variant?: "default" | "subtle" | "strong";
    size?: SegmentedControlSize;
    onClick?: () => void;
    disabled?: boolean;
};
const SegmentedControl: React.FC<PropsWithChildren<SegmentedControlProps>>;
export default SegmentedControl;
//# sourceMappingURL=SegmentedControl.d.ts.map
}

declare module '@ably/ui/core/Slider/component' {
export default Slider;
function Slider({ container, mqEnableThreshold }: {
    container: any;
    mqEnableThreshold: any;
}): void;
//# sourceMappingURL=component.d.ts.map
}

declare module '@ably/ui/core/Slider' {
import { ReactNode } from "react";
interface SliderProps {
    children: ReactNode[];
    options?: {
        interval?: number;
        controlPosition?: "inline" | "floating";
        intervalIndicator?: boolean;
    };
}
const Slider: ({ children, options }: SliderProps) => import("react/jsx-runtime").JSX.Element;
export default Slider;
//# sourceMappingURL=Slider.d.ts.map
}

declare module '@ably/ui/core/Status' {
type StatusProps = {
    statusUrl: string;
    additionalCSS?: string;
    refreshInterval?: number;
    showDescription?: boolean;
};
export const statusTypes: readonly ["none", "operational", "minor", "major", "critical", "unknown"];
export type StatusType = (typeof statusTypes)[number];
export const StatusUrl = "https://ntqy1wz94gjv.statuspage.io/api/v2/status.json";
export const StatusIcon: ({ statusUrl, refreshInterval, }: StatusProps) => import("react/jsx-runtime").JSX.Element;
const Status: ({ statusUrl, additionalCSS, refreshInterval, showDescription, }: StatusProps) => import("react/jsx-runtime").JSX.Element;
export default Status;
//# sourceMappingURL=Status.d.ts.map
}

declare module '@ably/ui/core/TabMenu' {
import React, { ReactNode } from "react";
type TabTriggerContent = string | {
    label: string;
    disabled?: boolean;
} | ReactNode;
/**
 * Props for the TabMenu component.
 */
export type TabMenuProps = {
    /**
     * An array of tabs, which can be either a string or an object with a label and an optional disabled state.
     */
    tabs: TabTriggerContent[];
    /**
     * An optional array of React nodes representing the content for each tab.
     */
    contents?: ReactNode[];
    /**
     * An optional callback function that is called when a tab is clicked, receiving the index of the clicked tab.
     */
    tabOnClick?: (index: number) => void;
    /**
     * An optional class name to apply to each tab.
     */
    tabClassName?: string;
    /**
     * An optional class name to apply to the Tabs.Root element.
     */
    rootClassName?: string;
    /**
     * An optional class name to apply to the Tabs.Content element.
     */
    contentClassName?: string;
    /**
     * Optional configuration options for the TabMenu.
     */
    options?: {
        /**
         * The index of the tab that should be selected by default.
         */
        defaultTabIndex?: number;
        /**
         * Whether to show an underline below the selected tab.
         */
        underline?: boolean;
        /**
         * Whether to animate the transition between tabs.
         */
        animated?: boolean;
        /**
         * Whether the tab width should be flexible.
         */
        flexibleTabWidth?: boolean;
        /**
         * Whether the tab height should be flexible.
         */
        flexibleTabHeight?: boolean;
    };
};
const TabMenu: React.FC<TabMenuProps>;
export default TabMenu;
//# sourceMappingURL=TabMenu.d.ts.map
}

declare module '@ably/ui/core/Table/Table' {
import { PropsWithChildren, TableHTMLAttributes } from "react";
type TableProps = {
    id?: string;
};
export const Table: ({ id, children, ...rest }: PropsWithChildren<TableProps & TableHTMLAttributes<HTMLTableElement>>) => import("react/jsx-runtime").JSX.Element;
export const TableBody: ({ children, ...rest }: PropsWithChildren<TableHTMLAttributes<HTMLTableSectionElement>>) => import("react/jsx-runtime").JSX.Element;
export const TableHeader: ({ children, ...rest }: PropsWithChildren<TableHTMLAttributes<HTMLTableSectionElement>>) => import("react/jsx-runtime").JSX.Element;
export const TableRowHeader: ({ children, ...rest }: PropsWithChildren<TableHTMLAttributes<HTMLTableRowElement>>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Table.d.ts.map
}

declare module '@ably/ui/core/Table/TableCell' {
import React, { PropsWithChildren } from "react";
type TableCellProps = {
    isRowHeader?: boolean;
} & React.TdHTMLAttributes<HTMLTableCellElement>;
const LabelCell: ({ children, ...rest }: PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>>) => import("react/jsx-runtime").JSX.Element;
const TableCell: ({ children, isRowHeader, ...rest }: PropsWithChildren<TableCellProps>) => import("react/jsx-runtime").JSX.Element;
const HeaderCell: ({ children, ...rest }: PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>>) => import("react/jsx-runtime").JSX.Element;
const CtaCell: ({ children, ...rest }: PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>>) => import("react/jsx-runtime").JSX.Element;
export { TableCell, LabelCell, HeaderCell, CtaCell };
//# sourceMappingURL=TableCell.d.ts.map
}

declare module '@ably/ui/core/Table/TableRow' {
import React, { PropsWithChildren } from "react";
const CtaRow: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
type RowProps = {
    isHeader?: boolean;
} & React.HTMLAttributes<HTMLTableRowElement>;
const TableRow: ({ children, isHeader, ...rest }: PropsWithChildren<RowProps>) => import("react/jsx-runtime").JSX.Element;
export { TableRow, CtaRow };
//# sourceMappingURL=TableRow.d.ts.map
}

declare module '@ably/ui/core/Table/data' {
export const PricingPageTable: () => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=data.d.ts.map
}

declare module '@ably/ui/core/Table' {
const _default: {
    Root: ({ id, children, ...rest }: import("react").PropsWithChildren<{
        id?: string;
    } & import("react").TableHTMLAttributes<HTMLTableElement>>) => import("react/jsx-runtime").JSX.Element;
    Row: ({ children, isHeader, ...rest }: import("react").PropsWithChildren<{
        isHeader?: boolean;
    } & import("react").HTMLAttributes<HTMLTableRowElement>>) => import("react/jsx-runtime").JSX.Element;
    Cell: ({ children, isRowHeader, ...rest }: import("react").PropsWithChildren<{
        isRowHeader?: boolean;
    } & import("react").TdHTMLAttributes<HTMLTableCellElement>>) => import("react/jsx-runtime").JSX.Element;
    LabelCell: ({ children, ...rest }: import("react").PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>>) => import("react/jsx-runtime").JSX.Element;
    HeaderCell: ({ children, ...rest }: import("react").PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>>) => import("react/jsx-runtime").JSX.Element;
    CtaCell: ({ children, ...rest }: import("react").PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>>) => import("react/jsx-runtime").JSX.Element;
    RowHeader: ({ children, ...rest }: import("react").PropsWithChildren<import("react").TableHTMLAttributes<HTMLTableRowElement>>) => import("react/jsx-runtime").JSX.Element;
    Body: ({ children, ...rest }: import("react").PropsWithChildren<import("react").TableHTMLAttributes<HTMLTableSectionElement>>) => import("react/jsx-runtime").JSX.Element;
    Header: ({ children, ...rest }: import("react").PropsWithChildren<import("react").TableHTMLAttributes<HTMLTableSectionElement>>) => import("react/jsx-runtime").JSX.Element;
};
export default _default;
//# sourceMappingURL=Table.d.ts.map
}

declare module '@ably/ui/core/Toggle' {
import React from "react";
type ToggleProps = {
    id: string;
    size?: "sm" | "lg";
    label?: string;
    className?: string;
    onCheckedChange?: (checked: boolean) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Toggle: React.FC<ToggleProps>;
export default Toggle;
//# sourceMappingURL=Toggle.d.ts.map
}

declare module '@ably/ui/core/Tooltip' {
import { ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren, ReactNode } from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { IconSize } from "@ably/ui/core/Icon/types";
type TooltipProps = {
    triggerElement?: ReactNode;
    triggerProps?: ButtonHTMLAttributes<HTMLButtonElement>;
    contentProps?: RadixTooltip.TooltipContentProps & HTMLAttributes<HTMLDivElement>;
    rootProps?: RadixTooltip.TooltipProps;
    interactive?: boolean;
    iconSize?: IconSize;
} & HTMLAttributes<HTMLDivElement>;
const Tooltip: ({ children, triggerElement, triggerProps, contentProps, rootProps, interactive, iconSize, ...rest }: PropsWithChildren<TooltipProps>) => import("react/jsx-runtime").JSX.Element;
export default Tooltip;
//# sourceMappingURL=Tooltip.d.ts.map
}

declare module '@ably/ui/core/css' {
export function remsToPixelValue(remString: any): number;
//# sourceMappingURL=css.d.ts.map
}

declare module '@ably/ui/core/dom-query' {
export const queryId: (val: string, root?: ParentNode) => Element | null;
export const queryIdAll: (val: string, root?: ParentNode) => NodeListOf<Element>;
//# sourceMappingURL=dom-query.d.ts.map
}

declare module '@ably/ui/core/hooks/use-rails-ujs-hooks' {
import { RefObject } from "react";
const useRailsUjsLinks: (containerRef: RefObject<HTMLElement>) => void;
export default useRailsUjsLinks;
//# sourceMappingURL=use-rails-ujs-hooks.d.ts.map
}

declare module '@ably/ui/core/insights/command-queue' {
import { AnalyticsService, InsightsConfig, InsightsIdentity, TrackPageViewOptions } from "@ably/ui/core/types";
export class InsightsCommandQueue implements AnalyticsService {
    private isInitialized;
    private queue;
    private debugMode;
    private realImplementation;
    constructor();
    private executeInitInsights;
    private processQueue;
    initInsights(_config: InsightsConfig): void;
    enableDebugMode(): void;
    disableDebugMode(): void;
    identify(_identity: InsightsIdentity): void;
    trackPageView(_options?: TrackPageViewOptions): void;
    track(_event: string, _properties?: Record<string, unknown>): void;
    startSessionRecording(): void;
    stopSessionRecording(): void;
    setupObserver(): () => void;
}
//# sourceMappingURL=command-queue.d.ts.map
}

declare module '@ably/ui/core/insights/datalayer' {
global {
    interface Window {
        dataLayer: unknown[];
    }
}
export const track: (event: string, properties?: Record<string, unknown>) => void;
export const trackPageView: (properties?: Record<string, unknown>) => void;
//# sourceMappingURL=datalayer.d.ts.map
}

declare module '@ably/ui/core/insights' {
import { InsightsConfig, InsightsIdentity, TrackPageViewOptions } from "@ably/ui/core/types";
export type { InsightsConfig };
export const initInsights: (config: InsightsConfig) => void;
export const enableDebugMode: () => void;
export const disableDebugMode: () => void;
export const identify: (identity: InsightsIdentity) => void;
export const trackPageView: (options?: TrackPageViewOptions) => void;
export const track: (event: string, properties?: Record<string, unknown>) => void;
export const startSessionRecording: () => void;
export const stopSessionRecording: () => void;
export const setupObserver: () => () => void;
//# sourceMappingURL=index.d.ts.map
}

declare module '@ably/ui/core/insights/index.test' {
/**
 * @vitest-environment jsdom
 */
export {};
//# sourceMappingURL=index.test.d.ts.map
}

declare module '@ably/ui/core/insights/logger' {
export const debug: (...args: unknown[]) => void;
export const info: (...args: unknown[]) => void;
export const warn: (...args: unknown[]) => void;
export const error: (...args: unknown[]) => void;
//# sourceMappingURL=logger.d.ts.map
}

declare module '@ably/ui/core/insights/mixpanel' {
import { InsightsIdentity, TrackPageViewOptions } from "@ably/ui/core/types";
export const initMixpanel: (token: string, autoCapture?: boolean, debug?: boolean, recordSessionsPercent?: number) => void;
export const enableDebugMode: () => void;
export const disableDebugMode: () => void;
export const identify: ({ userId, accountId, organisationId, email, name, ...properties }: InsightsIdentity) => void;
export const trackPageView: (properties?: TrackPageViewOptions) => void;
export const track: (event: string, properties?: Record<string, unknown>) => void;
export const startSessionRecording: () => void;
export const stopSessionRecording: () => void;
//# sourceMappingURL=mixpanel.d.ts.map
}

declare module '@ably/ui/core/insights/posthog' {
import { InsightsIdentity } from "@ably/ui/core/types";
export const initPosthog: (apiKey: string, apiHost: string) => void;
export const enableDebugMode: () => void;
export const disableDebugMode: () => void;
export const identify: ({ userId, accountId, organisationId, email, name, ...properties }: InsightsIdentity) => void;
export const trackPageView: (properties?: Record<string, unknown>) => void;
export const track: (event: string, properties?: Record<string, unknown>) => void;
export const startSessionRecording: () => void;
export const stopSessionRecording: () => void;
//# sourceMappingURL=posthog.d.ts.map
}

declare module '@ably/ui/core/insights/service' {
import type { AnalyticsService, InsightsConfig, InsightsIdentity, TrackPageViewOptions } from "@ably/ui/core/types";
export class InsightsService implements AnalyticsService {
    private debugMode;
    initInsights({ mixpanelToken, mixpanelAutoCapture, mixpanelRecordSessionsPercent, posthogApiKey, posthogApiHost, debug, }: InsightsConfig): void;
    enableDebugMode(): void;
    disableDebugMode(): void;
    identify(identity: InsightsIdentity): void;
    trackPageView(options?: TrackPageViewOptions): void;
    track(event: string, properties?: Record<string, unknown>): void;
    startSessionRecording(): void;
    stopSessionRecording(): void;
    setupObserver(): () => void;
}
//# sourceMappingURL=service.d.ts.map
}

declare module '@ably/ui/core/insights/types' {
export type InsightsConfig = {
    debug: boolean;
    mixpanelToken: string;
    mixpanelAutoCapture: boolean;
    mixpanelRecordSessionsPercent: number;
    posthogApiKey: string;
    posthogApiHost: string;
};
export interface AnalyticsService {
    initInsights: (config: InsightsConfig) => void;
    enableDebugMode: () => void;
    disableDebugMode: () => void;
    identify: (identity: InsightsIdentity) => void;
    trackPageView: (options?: TrackPageViewOptions) => void;
    track: (event: string, properties?: Record<string, unknown>) => void;
    startSessionRecording: () => void;
    stopSessionRecording: () => void;
    setupObserver: () => () => void;
}
export type Command = {
    methodName: keyof AnalyticsService;
    args: unknown[];
};
export type InsightsIdentity = {
    userId: string;
    accountId: string;
    organisationId?: string;
    email?: string;
    name?: string;
} & Record<string, unknown>;
export type TrackPageViewOptions = {
    includeDataLayer?: boolean;
    excludeIds?: string[];
} & Record<string, unknown>;
//# sourceMappingURL=types.d.ts.map
}

declare module '@ably/ui/core/load-sprites' {
function _default(spritesUrls: any): void;
export default _default;
//# sourceMappingURL=load-sprites.d.ts.map
}

declare module '@ably/ui/core/react-renderer' {
import React from "react";
const renderComponent: (Component: React.FC, props: React.ComponentProps<React.FC>, node: HTMLElement) => void;
export { renderComponent };
export default function reactRenderer(components: Record<string, React.FC>): void;
//# sourceMappingURL=react-renderer.d.ts.map
}

declare module '@ably/ui/core/remote-blogs-posts' {
export function fetchBlogPosts(store: any, blogUrl: any): Promise<void>;
export namespace reducerBlogPosts {
    function blogPosts(state: {
        recent: null;
    } | undefined, action: any): {
        recent: any;
    };
}
export function selectRecentBlogPosts(store: any): any;
//# sourceMappingURL=remote-blogs-posts.d.ts.map
}

declare module '@ably/ui/core/remote-data-store' {
export function attachStoreToWindow(store: any): void;
export function getRemoteDataStore(): any;
export function connectState(selector: any, setState: any): void;
export function createRemoteDataStore(reducers: any): any;
//# sourceMappingURL=remote-data-store.d.ts.map
}

declare module '@ably/ui/core/remote-data-util' {
export function isJsonResponse(contentType: any): any;
//# sourceMappingURL=remote-data-util.d.ts.map
}

declare module '@ably/ui/core/remote-session-data' {
export function fetchSessionData(store: any, sessionUrl: any): Promise<void>;
export namespace reducerSessionData {
    function session(state: {
        data: null;
    } | undefined, action: any): {
        data: any;
    };
}
export function selectSessionData(store: any): any;
//# sourceMappingURL=remote-session-data.d.ts.map
}

declare module '@ably/ui/core/scripts' {
export { default as loadSprites } from "@ably/ui/core/load-sprites";
export * from "@ably/ui/core/remote-data-store";
export * from "@ably/ui/core/remote-blogs-posts";
export * from "@ably/ui/core/remote-session-data";
export * from "@ably/ui/core/dom-query";
export { default as reactRenderer, renderComponent } from "@ably/ui/core/react-renderer";
//# sourceMappingURL=scripts.d.ts.map
}

declare module '@ably/ui/core/styles/colors/types' {
export type ColorName = (typeof neutralColors)[number] | (typeof orangeColors)[number] | (typeof secondaryColors)[number] | (typeof guiColors)[number] | (typeof aliasedColors)[number];
export const variants: readonly ["", "dark:"];
type ColorClassVariants = (typeof variants)[number];
export const prefixes: readonly ["text", "bg", "from", "to", "border"];
type ColorClassPrefixes = (typeof prefixes)[number];
export const colors: readonly ["neutral", "orange", "blue", "yellow", "green", "violet", "pink"];
export type ColorClassColorGroups = (typeof colors)[number];
export type Theme = "light" | "dark";
export type ColorClass = `${ColorClassVariants}${ColorClassPrefixes}-${ColorName}`;
export type ColorThemeSet = `${string} dark:${string}`;
export const neutralColors: readonly ["neutral-000", "neutral-100", "neutral-200", "neutral-300", "neutral-400", "neutral-500", "neutral-600", "neutral-700", "neutral-800", "neutral-900", "neutral-1000", "neutral-1100", "neutral-1200", "neutral-1300"];
export const orangeColors: readonly ["orange-100", "orange-200", "orange-300", "orange-400", "orange-500", "orange-600", "orange-700", "orange-800", "orange-900", "orange-1000", "orange-1100"];
export const yellowColors: readonly ["yellow-100", "yellow-200", "yellow-300", "yellow-400", "yellow-500", "yellow-600", "yellow-700", "yellow-800", "yellow-900"];
export const greenColors: readonly ["green-100", "green-200", "green-300", "green-400", "green-500", "green-600", "green-700", "green-800", "green-900"];
export const blueColors: readonly ["blue-100", "blue-200", "blue-300", "blue-400", "blue-500", "blue-600", "blue-700", "blue-800", "blue-900"];
export const violetColors: readonly ["violet-100", "violet-200", "violet-300", "violet-400", "violet-500", "violet-600", "violet-700", "violet-800", "violet-900"];
export const pinkColors: readonly ["pink-100", "pink-200", "pink-300", "pink-400", "pink-500", "pink-600", "pink-700", "pink-800", "pink-900"];
export const secondaryColors: readonly ["yellow-100", "yellow-200", "yellow-300", "yellow-400", "yellow-500", "yellow-600", "yellow-700", "yellow-800", "yellow-900", "green-100", "green-200", "green-300", "green-400", "green-500", "green-600", "green-700", "green-800", "green-900", "blue-100", "blue-200", "blue-300", "blue-400", "blue-500", "blue-600", "blue-700", "blue-800", "blue-900", "violet-100", "violet-200", "violet-300", "violet-400", "violet-500", "violet-600", "violet-700", "violet-800", "violet-900", "pink-100", "pink-200", "pink-300", "pink-400", "pink-500", "pink-600", "pink-700", "pink-800", "pink-900"];
export const guiColors: readonly ["gui-blue-default-light", "gui-blue-hover-light", "gui-blue-active-light", "gui-blue-default-dark", "gui-blue-hover-dark", "gui-blue-active-dark", "gui-blue-focus", "gui-unavailable", "gui-success-green", "gui-error-red", "gui-focus", "gui-focus-outline", "gui-visited"];
export const aliasedColors: readonly ["white", "extra-light-grey", "light-grey", "mid-grey", "dark-grey", "charcoal-grey", "cool-black", "active-orange", "bright-red", "red-orange", "electric-cyan", "zingy-green", "jazzy-pink", "gui-default", "gui-hover", "gui-active", "gui-error", "gui-success", "gui-default-dark", "gui-hover-dark", "gui-active-dark", "transparent"];
export const colorRoles: {
    neutral: readonly ["neutral-000", "neutral-100", "neutral-200", "neutral-300", "neutral-400", "neutral-500", "neutral-600", "neutral-700", "neutral-800", "neutral-900", "neutral-1000", "neutral-1100", "neutral-1200", "neutral-1300"];
    orange: readonly ["orange-100", "orange-200", "orange-300", "orange-400", "orange-500", "orange-600", "orange-700", "orange-800", "orange-900", "orange-1000", "orange-1100"];
    secondary: readonly ["yellow-100", "yellow-200", "yellow-300", "yellow-400", "yellow-500", "yellow-600", "yellow-700", "yellow-800", "yellow-900", "green-100", "green-200", "green-300", "green-400", "green-500", "green-600", "green-700", "green-800", "green-900", "blue-100", "blue-200", "blue-300", "blue-400", "blue-500", "blue-600", "blue-700", "blue-800", "blue-900", "violet-100", "violet-200", "violet-300", "violet-400", "violet-500", "violet-600", "violet-700", "violet-800", "violet-900", "pink-100", "pink-200", "pink-300", "pink-400", "pink-500", "pink-600", "pink-700", "pink-800", "pink-900"];
    gui: readonly ["gui-blue-default-light", "gui-blue-hover-light", "gui-blue-active-light", "gui-blue-default-dark", "gui-blue-hover-dark", "gui-blue-active-dark", "gui-blue-focus", "gui-unavailable", "gui-success-green", "gui-error-red", "gui-focus", "gui-focus-outline", "gui-visited"];
};
export const colorGroupLengths: {
    neutral: 14;
    orange: 11;
    blue: 9;
    yellow: 9;
    green: 9;
    violet: 9;
    pink: 9;
};
export {};
//# sourceMappingURL=types.d.ts.map
}

declare module '@ably/ui/core/styles/colors/utils' {
import { ColorClass } from "@ably/ui/core/types";
export const convertTailwindClassToVar: (className: string) => string;
export const invertTailwindClassVariant: (className: string) => ColorClass;
//# sourceMappingURL=utils.d.ts.map
}

declare module '@ably/ui/core/styles/forms/story-components' {
type FormElementProps = {
    index: number;
    disabled?: boolean;
};
export const Checkbox: ({ index, disabled }: FormElementProps) => import("react/jsx-runtime").JSX.Element;
export const RadioButton: ({ index, disabled }: FormElementProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=story-components.d.ts.map
}

declare module '@ably/ui/core/url-base' {
export default absUrl;
function absUrl(path: any, urlBase?: string): string;
//# sourceMappingURL=url-base.d.ts.map
}

declare module '@ably/ui/core/utils/cn' {
import { ClassValue } from "clsx";
const cn: (...inputs: ClassValue[]) => string;
export default cn;
//# sourceMappingURL=cn.d.ts.map
}

declare module '@ably/ui/core/utils/heights' {
export const HEADER_HEIGHT = 64;
export const HEADER_BOTTOM_MARGIN = 24;
/**
 * Calculates the maximum height for a component by subtracting the total of given heights from 100dvh.
 *
 * @param {...number} heights - An array of heights in pixels.
 * @returns {string} The CSS calc expression for the maximum height.
 */
export const componentMaxHeight: (...heights: number[]) => string;
//# sourceMappingURL=heights.d.ts.map
}

declare module '@ably/ui/core/utils/syntax-highlighter-registry' {
export default registry;
const registry: {
    label: string;
    key: string;
    module: any;
}[];
//# sourceMappingURL=syntax-highlighter-registry.d.ts.map
}

declare module '@ably/ui/core/utils/syntax-highlighter' {
export function highlightSnippet(languageKeyword: any, snippet: any): string | undefined;
export function languageToHighlightKey(lang: any): any;
export function registerDefaultLanguages(register: any): void;
//# sourceMappingURL=syntax-highlighter.d.ts.map
}

declare module '@ably/ui/reset/scripts' {
export {};
//# sourceMappingURL=scripts.d.ts.map
}

declare module '@ably/ui/core/scripts';

