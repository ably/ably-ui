import React, { memo, useMemo } from "react";
import * as Select from "@radix-ui/react-select";
import Icon from "../Icon";
import { IconName } from "../Icon/types";
import TooltipButton from "./TooltipButton";
import { LanguageInfo } from "./languages";

interface LanguageSelectorProps {
  languages: string[];
  activeLanguage: string | null;
  onLanguageChange: (language: string) => void;
  getLanguageDisplayName: (lang: string) => string;
  getLanguageIcon: (lang: string) => IconName;
  activeLanguageInfo: LanguageInfo | null;
}

const LanguageSelector = memo(
  ({
    languages,
    activeLanguage,
    onLanguageChange,
    getLanguageDisplayName,
    getLanguageIcon,
    activeLanguageInfo,
  }: LanguageSelectorProps) => {
    // Memoize the desktop language elements to avoid recreating on each render
    const desktopLanguageElements = useMemo(
      () =>
        languages.map((lang) => {
          const active = activeLanguage === lang;
          const displayName = getLanguageDisplayName(lang);

          return (
            <TooltipButton
              key={lang}
              tooltip={displayName}
              active={active}
              onClick={() => onLanguageChange(lang)}
              icon={getLanguageIcon(lang)}
              variant="segmented"
              size="sm"
            >
              {displayName}
            </TooltipButton>
          );
        }),
      [
        languages,
        activeLanguage,
        onLanguageChange,
        getLanguageDisplayName,
        getLanguageIcon,
      ],
    );

    // Memoize the mobile language elements
    const mobileLanguageElements = useMemo(
      () =>
        languages.map((lang) => (
          <Select.Item
            key={lang}
            value={lang}
            className="relative flex items-center rounded px-8 py-6 text-14 text-neutral-1300 dark:text-neutral-000 select-none hover:bg-neutral-100 dark:hover:bg-neutral-1200 data-[highlighted]:outline-none data-[highlighted]:bg-neutral-100 dark:data-[highlighted]:bg-neutral-1200 focus-base"
          >
            <Select.ItemText asChild>
              <div className="flex items-center gap-8">
                <Icon name={getLanguageIcon(lang)} size="20px" />
                <span>{getLanguageDisplayName(lang)}</span>
              </div>
            </Select.ItemText>
            <Select.ItemIndicator className="absolute right-8">
              <Icon name="icon-gui-check-outline" size="16px" />
            </Select.ItemIndicator>
          </Select.Item>
        )),
      [languages, getLanguageDisplayName, getLanguageIcon],
    );

    // Memoize the mobile Select.Value content as it's recreated on every render
    const mobileSelectValue = useMemo(
      () =>
        activeLanguage && activeLanguageInfo ? (
          <div className="flex items-center gap-8">
            <Icon name={activeLanguageInfo.icon} size="20px" />
            <span>{activeLanguageInfo.label}</span>
          </div>
        ) : null,
      [activeLanguage, activeLanguageInfo],
    );

    return (
      <div className="p-8 border-b border-neutral-200 dark:border-neutral-1100 overflow-x-auto h-[58px]">
        {/* Desktop language selector - SegmentedControls */}
        <div className="hidden sm:flex gap-8">{desktopLanguageElements}</div>

        {/* Mobile language selector - Select dropdown */}
        <div className="sm:hidden w-full">
          <Select.Root
            value={activeLanguage || undefined}
            onValueChange={onLanguageChange}
          >
            <Select.Trigger
              className="w-full inline-flex items-center justify-between rounded-lg px-12 py-8 text-14 text-neutral-1300 dark:text-neutral-000 bg-neutral-200 dark:bg-neutral-1100 hover:bg-neutral-300 dark:hover:bg-neutral-1000 gap-4 border border-neutral-300 dark:border-neutral-900 focus-base"
              aria-label="Select language"
            >
              <Select.Value asChild>{mobileSelectValue}</Select.Value>
              <Select.Icon>
                <Icon name="icon-gui-chevron-down-outline" size="16px" />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content
                className="overflow-hidden rounded-md bg-neutral-000 dark:bg-neutral-1300 border border-neutral-200 dark:border-neutral-1000 shadow-md z-50 w-[var(--radix-select-trigger-width)]"
                position="popper"
              >
                <Select.ScrollUpButton className="flex items-center justify-center h-24 bg-neutral-000 dark:bg-neutral-1300 text-neutral-1300 dark:text-neutral-000 cursor-default focus-base">
                  <Icon
                    name="icon-gui-chevron-down-outline"
                    size="16px"
                    additionalCSS="rotate-180"
                  />
                </Select.ScrollUpButton>

                <Select.Viewport className="p-4">
                  {mobileLanguageElements}
                </Select.Viewport>

                <Select.ScrollDownButton className="flex items-center justify-center h-24 bg-neutral-000 dark:bg-neutral-1300 text-neutral-1300 dark:text-neutral-000 cursor-default focus-base">
                  <Icon name="icon-gui-chevron-down-outline" size="16px" />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
      </div>
    );
  },
);

// Define a display name to improve debugging
LanguageSelector.displayName = "LanguageSelector";

export default LanguageSelector;
